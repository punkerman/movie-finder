import { Action, createReducer, on } from '@ngrx/store';
import { clear, update, decreasePage, increasePage, updateSelectedMovie, setPage } from '../actions/movies.actions';

import { State } from '../../interfaces/interfaces';

export const initialState: State =  {search: "",
selectedMovie: null,
currentPage: 1};

const _moviesReducer = createReducer(initialState,
    on(update, (state, { search } ) => ( {
        ...state,
        search: search,
        
    })),
    on(clear, (state, action) => (initialState)),
    on(increasePage, (state, action) => ( {
        ...state,
        currentPage: state.currentPage + 1
    })),
    on(decreasePage, (state, action) => ( {
        ...state,
        currentPage: state.currentPage - 1
    })),
    on(setPage, (state, { page }) => ( {
        ...state,
        currentPage: page
    })),
    on(updateSelectedMovie, (state, {movieId}) => ( {
       ...state,
        selectedMovie: movieId
    }))
);

export function moviesReducer(state: State | undefined, action: Action) {
    return _moviesReducer(state, action);
  }