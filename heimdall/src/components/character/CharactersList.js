import React from 'react'
import PropTypes from 'prop-types'
import PageNavigation from '../pagination/PageNavigation'
import Character from './Character'

import Section from '../styles/Section'
import Container from '../styles/Container'
import Header from '../styles/Header'

const CharactersList = ({ characters, handlePagination, activePage, total }) => (
  <Section>
    {!characters.length
      ?
      <Container justify='center' >
        <h1>It is not in this universe...</h1>
      </Container>
      :
      <Container justify='center' >
        <Header role='banner' section>
          <h1>Characters List</h1>
        </Header>
        <Container justify='center' >
          {characters.map(character => (
            <Character key={character.id} {...character} />
          ))}
        </Container>
        <Container justify='center' >
          <PageNavigation
            total={total}
            activePage={activePage}
            handlePagination={handlePagination}
          /></Container>
      </Container>}
  </Section>
)

CharactersList.defaultProps = {
  characters: []
}

CharactersList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object)
}

export default CharactersList