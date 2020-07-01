import React from 'react'
import { connect } from 'react-redux'

import Photo from '../Photo/Photo'
import FullSizePhoto from '../FullSizePhoto/FullSizePhoto'
import Title from '../Title/Title'

import { getFullSizePhoto } from '../../store/actions/photos'

const Favorites = ({ favouritePhotos, onGetFullSizePhoto, clickedPhoto }) => {
    return (
        <>
            {
                clickedPhoto && <FullSizePhoto config={clickedPhoto} />
            }
            {
                favouritePhotos.length !== 0 ?
                    <div
                        style={{
                            marginTop: 'calc(10vh + 2.5rem)'
                        }}
                        className='photos'
                    >
                        {favouritePhotos.map((photo, index) => (
                            <div
                                key={index}
                                onClick={() => onGetFullSizePhoto(photo.id)}
                                className='photos__wrapper'
                            >
                                <Photo config={photo} />
                            </div>
                        ))}
                    </div> :
                    <Title
                        label="You don't have any favourites"
                        icon='💔'
                        ariaLabel='broken heart'
                    />
            }
        </>)
}

const mapStateToProps = state => ({
    favouritePhotos: state.photosReducer.favourites,
    clickedPhoto: state.photosReducer.clickedPhoto,
})

const mapDispatchToProps = dispatch => ({
    onGetFullSizePhoto: (id) => dispatch(getFullSizePhoto(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)