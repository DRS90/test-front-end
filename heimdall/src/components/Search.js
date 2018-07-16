import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Search = ({ handleSearch }) => (
  <Fragment>
    <label htmlFor='character-search'>Search</label>
    <input type='search' id='character-search' onKeyUp={ handleSearch }/>
  </Fragment>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
}

export default Search