import React from 'react'

import { connect } from 'react-redux'

import Title from '../Title/Title'

import './searchHistory.scss'

const SearchHistory = ({ searchHistory }) => {
    console.log(searchHistory)
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
                        {searchHistory.map(query => (
                            <li
                                key={query}
                                className="searchHistory__query"
                            >
                                {query.length !== 0 && query}
                            </li>
                        ))}
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