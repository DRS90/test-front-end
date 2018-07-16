import React from 'react'
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

export default Character