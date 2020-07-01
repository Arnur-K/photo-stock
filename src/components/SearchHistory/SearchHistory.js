import React from 'react'

import { connect } from 'react-redux'

import Title from '../Title/Title'

import './searchHistory.scss'

const SearchHistory = ({ searchHistory }) => {
    return (
        <>
            {searchHistory.length !== 0 ?
                <>
                    <Title
                        label="Everything you've searched"
                        icon='🔎'
                        ariaLabel='magnifier'
                    />
                    <ul className='searchHistory'>
                        {searchHistory.map(query => {
                            if (query === '' || query === ' ' || query.length === 0) return null
                            else return (
                                <li
                                    key={query}
                                    className="searchHistory__query"
                                >
                                    {query !== '' && query !== ' ' && query}
                                </li>
                            )
                        })}
                    </ul>
                </>
                :
                <Title
                    label="You haven't searched anything"
                    icon='🔎'
                    ariaLabel='magnifier'
                />


            }
        </>
    )
}

const mapStateToProps = state => ({
    searchHistory: state.photosReducer.searchHistory,
})

export default connect(mapStateToProps, null)(SearchHistory)