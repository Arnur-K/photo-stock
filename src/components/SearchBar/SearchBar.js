import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { fetchPhotos } from '../../store/actions/photos'
import './SearchBar.scss'

let timeout = null
const pageNumber = 1
const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_ACCESSKEY}`

const SearchBar = ({ onFetchPhotos }) => {
  const inputEl = useRef()

  useEffect(() => {
    inputEl.current.addEventListener('keyup', (event) => {
      timeout && clearTimeout(timeout)
      timeout = setTimeout(() => {
        const query = event.target.value
        onFetchPhotos(url, query, pageNumber)
      }, 500)
    })
  }, [])

  return (
    <form className='search'>
      <div className='search__content-wrapper'>
        <div className='search__input-wrapper'>
          <input
            ref={inputEl}
            id='search'
            type='text'
            placeholder='Type and wait ;)'
            className='search__input'
          />
          <label
            htmlFor='search'
            className='search__label'
          >
            Search Photos
          </label>
        </div>
      </div>
    </form>
  )
}

const mapDispatchToProps = dispatch => ({
  onFetchPhotos:
    (url, query, pageNumber) => dispatch(fetchPhotos(url, query, pageNumber))
})

export default connect(null, mapDispatchToProps)(SearchBar)