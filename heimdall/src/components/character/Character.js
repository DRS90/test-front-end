import React from 'react'
import PropTypes from 'prop-types'
import CharacterLinks from './CharacterLinks'

import Article from '../styles/Article'

const Character = ({ name, thumbnail, urls }) => (
  (name === 'Unnamed' && thumbnail.path === 'no-thumbnail')
    ? null
    : <Article className='character'>
      <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={thumbnail.path ? name + ' thumbnail' : 'No thumbnail'}
        style={{ 
          minWidth: '120px',
          maxWidth: '120px',
          minHeight: '120px',
          maxHeight: '120px',
          borderRadius: '50%' }}
      />
      <div>
        <h2 style={{height: '54px'}}>{name}</h2>
      </div>
      <CharacterLinks urls={urls} />
    </Article>
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