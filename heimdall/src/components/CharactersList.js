import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import PageNavigation from './PageNavigation'
import Character from './Character'

const CharactersList = ({ characters, handleClickNextPage, handleClickPrevPage, actualPage, totalPages }) => (
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
          handleClickNextPage={handleClickNextPage}
          handleClickPrevPage={handleClickPrevPage}
          actualPage={actualPage}
          totalPages={totalPages} />
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