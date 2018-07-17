import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import CharactersList from './character/CharactersList'
import Footer from './Footer'

const AppContent = ({ handleLogoClick, characters, handleSearch, isLoading, hasSearch, handlePagination, activePage, total }) => (
  <div className="app">
    <Header handleSearch={handleSearch} handleLogoClick={handleLogoClick}/>
    <main>
      {isLoading
        ? <span role='alertdialog' aria-busy='true'>Loading...</span>
        : hasSearch
          ? <CharactersList
            characters={characters}
            handlePagination={handlePagination}
            activePage={activePage}
            total={total} />
          : ''
      }
    </main>
    <Footer />
  </div>
)

AppContent.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      thumbnail: PropTypes.shape({
        path: PropTypes.string,
        extension: PropTypes.string,
      }),
      urls: PropTypes.array
    })
  ),
  handleSearch: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
  hasSearch: PropTypes.bool.isRequired,
  handlePagination: PropTypes.func,
  activePage: PropTypes.number,
  total: PropTypes.number,
}

export default AppContent
