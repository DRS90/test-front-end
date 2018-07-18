import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import searchIcon from '../google-web-search-40.ico'
import Input from './styles/Input'

const labelStyle = {
  display: 'flex',
  marginLeft: '20px',
  height: '40px',
  width: '40px'
}

const Search = ({ handleSearch }) => (
  <Fragment>
    <div style={{ display: 'flex', flex: '1' }}>
    <label style={labelStyle}htmlFor='character-search'>
      <img src={searchIcon} alt='Search icon' style={{ borderRadius: '2px 0 0 2px' }}/>
    </label>
    <Input
    type='search' id='character-search'
    onKeyUp={ handleSearch }
    placeholder='What do you seek...?'
    />
    </div>
  </Fragment>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
}

export default Search