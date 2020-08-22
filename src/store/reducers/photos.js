import actionTypes from '../actions/actionTypes'

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
    case actionTypes.FETCH_START:
      return {
        ...state,
        error: null,
        loading: true,
      }
    case actionTypes.FETCH_SUCCESS:
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
    case actionTypes.FETCH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    case actionTypes.GET_FULLSIZE_PHOTO:
      return {
        ...state,
        clickedPhoto: state.photos.filter(photo => photo.id === action.id)
      }
    case actionTypes.DELETE_CLICKED_PHOTO:
      return {
        ...state,
        clickedPhoto: null
      }
    case actionTypes.ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: [...state.favourites, ...state.photos.filter(photo => photo.id === action.id)]
      }
    default:
      return state
  }
}