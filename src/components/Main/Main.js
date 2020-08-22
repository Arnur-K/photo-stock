import React, { useEffect, useCallback, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { fetchPhotos, getFullSizePhoto } from '../../store/actions/photos'
import Photo from '../Photo/Photo'
import Loader from '../Loader/Loader'
import SerachBar from '../SearchBar/SearchBar'
import FullSizePhoto from '../FullSizePhoto/FullSizePhoto'
import Title from '../Title/Title'
import './Main.scss'

const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_ACCESSKEY}`

const Main = ({
  onFetchPhotos,
  onGetFullSizePhoto,
  photos,
  clickedPhoto,
  query,
  loading,
  error
}) => {
  const [pageNumber, setPageNumber] = useState(1)
  const observer = useRef()

  useEffect(() => {
    if (pageNumber === 1 && photos.length > 0) return // prevent unnecessary requests

    onFetchPhotos(url, query, pageNumber)
  }, [pageNumber])

  const lastPhotoElRef = useCallback((el) => {
    if (loading) return
    if (observer.current) observer.current.disconnect()

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })

    if (el) observer.current.observe(el)
  }, [loading])

  return (
    <>
      <SerachBar />
      {clickedPhoto && <FullSizePhoto config={clickedPhoto} />}
      {!query && photos.length !== 0 &&
        <Title
          label="Enjoy random photos"
          ariaLabel='magnifier'
          margin='0 0 2.5rem 0'
        />}
      <div className='photos'>
        {photos && photos.map((photo, index) => {
          if (photos.length === index + 1) {
            return (
              <div
                onClick={() => onGetFullSizePhoto(photo.id)}
                ref={lastPhotoElRef} key={index}
                className='photos__wrapper'
              >
                <Photo config={photo} />
              </div>
            )
          } else {
            return (
              <div
                onClick={() => onGetFullSizePhoto(photo.id)}
                key={index}
                className='photos__wrapper'
              >
                <Photo config={photo} />
              </div>
            )
          }
        })}
      </div>
      {loading && <Loader />}
      {error && <p>Error</p>}
    </>
  )
}

const mapStateToProps = state => ({
  photos: state.photosReducer.photos,
  query: state.photosReducer.query,
  loading: state.photosReducer.loading,
  error: state.photosReducer.error,
  clickedPhoto: state.photosReducer.clickedPhoto,
  searchHistory: state.photosReducer.searchHistory,
})

const mapDispatchToProps = dispatch => ({
  onFetchPhotos: (url, query, pageNumber) => dispatch(fetchPhotos(url, query, pageNumber)),
  onGetFullSizePhoto: (id) => dispatch(getFullSizePhoto(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)