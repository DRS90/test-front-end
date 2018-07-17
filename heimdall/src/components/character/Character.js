import React from 'react'
import PropTypes from 'prop-types'
import CharacterLinks from './CharacterLinks'

const Character = ({ name, thumbnail, urls }) => (
  (name === 'Unnamed' && thumbnail.path === 'no-thumbnail')
    ? null
    : <article className='character'
      style={{ width: '304px', height: '360px', border: '2px solid' }}
    >
      <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={thumbnail.path ? name + ' thumbnail' : 'No thumbnail'}
        style={{ maxWidth: '120px', maxHeight: '120px' }}
      />
      <div>
        <h2>{name}</h2>
      </div>
      <CharacterLinks urls={urls} />
    </article>
)

Character.defaultProps = {
  name: 'Unnamed',
  thumbnail: {
    path: 'no-thumbnail',
    extension: 'jpg',
  },
  urls: []
};

Character.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    path: PropTypes.string.isRequired,
    extension: PropTypes.string.isRequired,
  }),
  urls: PropTypes.array.isRequired
}

export default Character