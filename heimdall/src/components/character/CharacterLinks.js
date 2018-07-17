import React from 'react'
import PropTypes from 'prop-types'

const CharacterLinks = ({ urls }) => {
  const [detail] = urls.filter(url => url.type === 'detail')
  const [wiki] = urls.filter(url => url.type === 'wiki')

  return (
    <nav>
      <ul style={{ listStyle: 'none' }}>
        {!!detail ?
          <li>
            <a href={detail.url} target='_blank' title='Go to marvel.com for more details'>Details</a>
          </li> 
          : <p aria-label='disabled detail link'>Details</p>
        }
        {!!wiki ?
          <li>
            <a href={wiki.url} target='_blank' title='Go to wiki page'>Wiki page</a>
          </li>
          : <p aria-label='disabled wiki link'>Wiki page</p>
        }
      </ul>
    </nav>
  )
}

CharacterLinks.defaultProps = {
  urls:[]
}

CharacterLinks.propTypes = {
  urls: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CharacterLinks