import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import PageNavigation from './PageNavigation'
import Character from './Character'

const CharactersList = ({ characters }) => (
  <section className='characters-list'>
    {!characters.length
      ? <p>It is not in this universe...</p>
      : <Fragment>
        <header role='banner'>
          <h1>Characters List</h1>
        </header>

        {characters.map(character => (
          <Character key={character.id} character={character} />
        ))}
        <PageNavigation />
      </Fragment>}
  </section>
)

CharactersList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object)
}

export default CharactersList