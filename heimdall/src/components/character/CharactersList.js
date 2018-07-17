import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import PageNavigation from '../pagination/PageNavigation'
import Character from './Character'

const CharactersList = ({ characters, handlePagination, activePage, total }) => (
  <section className='characters-list'>
    {!characters.length
      ? <p>It is not in this universe...</p>
      : <Fragment>
        <header role='banner'>
          <h1>Characters List</h1>
        </header>

        {characters.map(character => (
          <Character key={character.id} {...character} />
        ))}
        <PageNavigation
          total={total}
          activePage={activePage}
          handlePagination={handlePagination}
        />
      </Fragment>}
  </section>
)

CharactersList.defaultProps = {
  characters: []
}

CharactersList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object)
}

export default CharactersList