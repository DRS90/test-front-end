import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import CharactersList from './CharactersList'
import Footer from './Footer'

const AppContent = ({ characters, handleSearch, isLoading, hasSearch }) => (
  <div className="app">
    <Header handleSearch={handleSearch} />
    <main>
      {isLoading
        ? <span role='alertdialog' aria-busy='true'>Loading...</span>
        : hasSearch
          ? <CharactersList characters={characters}/>
          : ''
      }
    </main>
    <Footer />
  </div>
)

AppContent.propTypes = {
  hasSearch: PropTypes.bool
}

export default AppContent