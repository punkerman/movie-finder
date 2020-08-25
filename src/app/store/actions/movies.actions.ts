import { createAction, props } from '@ngrx/store';


export const update = createAction('[Search Component] Update', props<{ search: string; }>());
export const clear = createAction('[Search Component] Clear');
export const increasePage = createAction('[Pagination Component] Increase');
export const decreasePage = createAction('[Pagination Component] Decrease');
export const setPage = createAction('[Pagination Component] Page', props<{ page: number; }>());
export const updateSelectedMovie = createAction('[MovieInfo Component] Decrease', props<{ movieId: string; }>());