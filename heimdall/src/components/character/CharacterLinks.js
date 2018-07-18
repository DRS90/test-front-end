import React from 'react'
import PropTypes from 'prop-types'

const linkStyle = {
  fontSize: '1.2rem',
}

const spanStyle = {
  color: '#98a0a6',
  display: 'block',
  fontSize: '1.2rem',
}

const ulStyle = {
  listStyle: 'none',
  margin: '0',
  padding: '0px',
}

const CharacterLinks = ({ urls }) => {
  const [detail] = urls.filter(url => url.type === 'detail')
  const [wiki] = urls.filter(url => url.type === 'wiki')

  return (
    <nav>
      <ul style={ulStyle}>
        {!!detail ?
          <li style={linkStyle}>
            <a
              href={detail.url}
              target='_blank'
              title='Go to marvel.com for more details'
              style={{ textDecoration: 'none', color: 'rgba(209, 83, 13)' }}
            >Details</a>
          </li>
          : <span style={spanStyle} aria-label='disabled detail link'>Details</span>
        }
        {!!wiki ?
          <li style={linkStyle}>
            <a
            href={wiki.url}
            target='_blank'
            title='Go to wiki page'
            style={{textDecoration: 'none', color: 'rgba(209, 83, 13)'}}
            >Wiki page</a>
          </li>
          : <span style={spanStyle} aria-label='disabled wiki link'>Wiki page</span>
        }
      </ul>
    </nav>
  )
}

CharacterLinks.defaultProps = {
  urls: []
}

CharacterLinks.propTypes = {
  urls: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CharacterLinks