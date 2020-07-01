import axios from 'axios'
import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAIL,
    GET_FULLSIZE_PHOTO,
    DELETE_CLICKED_PHOTO,
    ADD_TO_FAVOURITES
} from './actionTypes'

export const fetchStart = () => ({
    type: FETCH_START
})

export const fetchSuccess = (photos, query, pageNumber) => ({
    type: FETCH_SUCCESS,
    photos,
    query,
    pageNumber
})

export const fetchFail = (error) => ({
    type: FETCH_FAIL,
    error
})

export const fetchPhotos = (url, query = null, pageNumber) => dispatch => {
    dispatch(fetchStart())
    axios({
        method: 'GET',
        url,
        params: { q: query, page: pageNumber }
    })
        .then(res => {
            return dispatch(fetchSuccess(res.data.hits, query, pageNumber))
        })
        .catch(err => {
            console.error(err)
            return dispatch(fetchFail(err))
        })
}

export const getFullSizePhoto = (id) => ({
    type: GET_FULLSIZE_PHOTO,
    id
})

export const deleteClickedPhoto = () => ({
    type: DELETE_CLICKED_PHOTO
})

export const addToFavourites = (id) => ({
    type: ADD_TO_FAVOURITES,
    id
})