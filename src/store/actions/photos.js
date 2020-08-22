import axios from 'axios'
import actionTypes from './actionTypes'

export const fetchStart = () => ({
  type: actionTypes.FETCH_START
})

export const fetchSuccess = (photos, query, pageNumber) => ({
  type: actionTypes.FETCH_SUCCESS,
  photos,
  query,
  pageNumber
})

export const fetchFail = (error) => ({
  type: actionTypes.FETCH_FAIL,
  error
})

export const fetchPhotos = (url, query = null, pageNumber) => dispatch => {
  dispatch(fetchStart())
  axios({
    method: 'GET',
    url,
    params: { q: query, page: pageNumber }
  })
    .then(res => dispatch(fetchSuccess(res.data.hits, query, pageNumber)))
    .catch(err => dispatch(fetchFail(err))
    )
}

export const getFullSizePhoto = (id) => ({
  type: actionTypes.GET_FULLSIZE_PHOTO,
  id
})

export const deleteClickedPhoto = () => ({
  type: actionTypes.DELETE_CLICKED_PHOTO
})

export const addToFavourites = (id) => ({
  type: actionTypes.ADD_TO_FAVOURITES,
  id
})