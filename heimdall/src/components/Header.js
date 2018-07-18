import React from 'react'
import Search from './Search'
import logo from '../heimdall-eye-logo.svg'

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  position: 'fixed',
  top: '0px',
  width: '100%',
  padding: '10px 20px',
  boxSizing: 'border-box',
  background: '#212121',
  boxShadow: '0 2px 0px rgba(209, 83, 13, 0.5)',
}

const logoStyle = {
  height:'50px',
  width: '50px',
}

const Header = ({ handleLogoClick, handleSearch }) => (
  <header style={headerStyle}>
      <img style={logoStyle} src={logo} alt='Logo, stylized Heimdall yellow eyes' onClick={handleLogoClick}/>
      <Search handleSearch={handleSearch}/>
  </header>
)

export default Header
