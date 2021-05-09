import React, { useState } from 'react'

export const SearchBar = ({setVideoLink}) => {

    const [searchInput, setSearchInput] = useState('')

    const onSubmitInput = (e) => {
        e.preventDefault()
        setVideoLink(searchInput)
        setSearchInput('')
    }

    return (
        <div>
            <form onSubmit={onSubmitInput} className='searchBar'>
                <input placeholder='Ingresa el link de una instrumental' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
                <button>Buscar</button>
            </form>
        </div>
    )
}
