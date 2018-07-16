import React, { Fragment } from 'react'

const Search = ({ handleSearch }) => (
  <Fragment>
    <label htmlFor='character-search'>Search</label>
    <input type='search' id='character-search' onKeyUp={ handleSearch }/>
  </Fragment>
)

export default Search