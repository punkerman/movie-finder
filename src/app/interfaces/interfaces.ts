export interface Movie {
    Poster: string
    Title: string
    Type: string
    Year: string
    imdbID: string
}

export interface SearchRestults 
{
    Response: string
    Search: Movie[]
    totalResults: string
}

export interface State {
    search: string
    selectedMovie: string
    currentPage: number
}

export interface MoviesState {
    moviesReducer: State 
}

export interface FullMovie {
    Actors: string
    Awards?: string
    BoxOffice?: string
    Country?: string
    DVD?: string
    Director: string
    Genre: string
    Language?: string
    Metascore?: string
    Plot: string
    Poster: string
    Production?: string
    Rated: string
    Ratings?: any[]
    Released: string
    Response: string
    Runtime?: string
    Title: string
    Type: string
    Website?: string
    Writer: string
    Year: string
    imdbID: string
    imdbRating: string
    imdbVotes?: string
}

export interface Ratings {
    imdbRating: Rating, 
    metascore:Rating, 
    rated: Rating
}

export interface Rating {
    value: string
    label: string
}