import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAIL,
    GET_FULLSIZE_PHOTO,
    DELETE_CLICKED_PHOTO,
    ADD_TO_FAVOURITES
} from '../actions/actionTypes'

const initialState = {
    photos: [],
    favourites: [],
    searchHistory: [],
    clickedPhoto: null,
    query: null,
    error: null,
    pageNumber: null,
    loading: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                error: null,
                loading: true,
            }
        case FETCH_SUCCESS:
            if (state.query !== action.query) {
                return {
                    ...state,
                    photos: [...action.photos],
                    query: action.query,
                    searchHistory: [...state.searchHistory, action.query],
                    error: null,
                    pageNumber: action.pageNumber,
                    loading: false,
                }
            } else if (state.query && state.query === action.query) {
                return {
                    ...state,
                    photos: [...state.photos, ...action.photos],
                    query: action.query,
                    searchHistory: [...state.searchHistory, action.query],
                    error: null,
                    pageNumber: action.pageNumber,
                    loading: false,
                }
            } else {
                return {
                    ...state,
                    photos: [...state.photos, ...action.photos],
                    error: null,
                    pageNumber: action.pageNumber,
                    loading: false,
                }
            }
        case FETCH_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false,
            }
        case GET_FULLSIZE_PHOTO:
            return {
                ...state,
                clickedPhoto: state.photos.filter(photo => photo.id === action.id)
            }
        case DELETE_CLICKED_PHOTO:
            return {
                ...state,
                clickedPhoto: null
            }
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites: [...state.favourites, ...state.photos.filter(photo => photo.id === action.id)]
            }
        default:
            return state
    }
}