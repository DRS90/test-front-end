import React from 'react'
import PropTypes from 'prop-types'
import CharacterLinks from './CharacterLinks'

const Character = ({ character }) => (
  <article className='character'
    style={{ width: '304px', height: '360px', border: '2px solid' }}
  >
    <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name + ' thumbnail'}
      style={{ maxWidth: '120px', maxHeight: '120px' }}
    />
    <div>
      <h2>{character.name}</h2>
    </div>
    <CharacterLinks urls={character.urls} />
  </article>
)

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.object.isRequired,
    urls: PropTypes.array.isRequired
  }).isRequired
}

export default Character