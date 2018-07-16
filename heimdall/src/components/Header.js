import React from 'react'
import Search from './Search'
import logo from './heimdall-eye-logo.svg'

const Header = ({ handleSearch }) => (
  <header>
    <img style={{maxHeight:'50px',maxWidth: '50px'}} src={logo} alt='Logo, stylized Heimdall yellow eyes' />
    <Search handleSearch={handleSearch}/>
  </header>
)

export default Header