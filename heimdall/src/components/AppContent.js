import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import CharactersList from './character/CharactersList'
import Home from './Home'
import Footer from './Footer'

import Main from './styles/Main'
import Div from './styles/Div'
import Loading from './styles/Loading'
import Container from './styles/Container'

const AppContent = ({ handleLogoClick, characters, handleSearch, isLoading, hasSearch, handlePagination, activePage, total }) => (

  <Div root>
    <Container justify='center' style={{ minHeight: '100vh', margin: '0' }}>
      <Header handleSearch={handleSearch} handleLogoClick={handleLogoClick} />
      <Main>
        {isLoading
          ? <Container justify='center' >
            <Loading role='alertdialog' aria-busy='true'>Loading...</Loading>
          </Container>
          : hasSearch
            ? <CharactersList
              characters={characters}
              handlePagination={handlePagination}
              activePage={activePage}
              total={total} />
            : <Home />
        }
      </Main>
      <Footer />
    </Container>
  </Div>
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
