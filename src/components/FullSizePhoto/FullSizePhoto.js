import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Loader from '../Loader/Loader';
import CloseIcon from '../../icons/close.svg'
import './fullSizePhoto.scss'

import { deleteClickedPhoto, addToFavourites } from '../../store/actions/photos'

const FullSizePhoto = ({ config, onDeleteClickedPhoto, onAddToFavourties, favourites }) => {
    const [imgLoaded, setImgLoaded] = useState(false)
    const [favorite, setFavourite] = useState(false)

    useEffect(() => {
        let isFav = false
        if (favourites.length !== 0) {

            favourites.forEach(fav => {
                if (fav.id === config[0].id) isFav = true
            })
        }
        setFavourite(isFav)
    }, [favourites, config])

    return (
        <div className='fullSizePhoto-box'>
            {config &&
                <div className='fullSizePhoto-box__content-wrapper'>
                    {imgLoaded ?
                        <div className='fullSizePhoto-box__photo-controls'>
                            <button
                                onClick={() => onAddToFavourties(config[0].id)}
                                className={favorite ? 'fullSizePhoto-box__add fullSizePhoto-box__add--fav' : 'fullSizePhoto-box__add '}
                                disabled={favorite === true}
                            >
                                {favorite ? 'In Favourites' : 'Add to Favourites'}
                            </button>
                            <button
                                onClick={() => onDeleteClickedPhoto()}
                                className='fullSizePhoto-box__close'
                            >
                                <img src={CloseIcon} alt='close' />
                            </button>
                        </div>
                        :
                        <Loader />
                    }
                    <div className='fullSizePhoto-box__photo-wrapper'>
                        <img src={config[0].largeImageURL} alt={config[0].tags} onLoad={() => setImgLoaded(true)} />
                    </div>
                </div>
            }
        </div>
    )
}

const napStateToProps = state => ({
    favourites: state.photosReducer.favourites
})

const mapDispatchToProps = dispatch => ({
    onDeleteClickedPhoto: () => dispatch(deleteClickedPhoto()),
    onAddToFavourties: (id) => dispatch(addToFavourites(id))
})

export default connect(napStateToProps, mapDispatchToProps)(FullSizePhoto)