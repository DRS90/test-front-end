import React from 'react'

const CharacterLinks = ({ urls }) => (
  <nav>
    <ul style={{ listStyle: 'none' }}>
      <li>
        <a href={urls.detail} target='_blank' title='Go to marvel.com for more details'>Details</a>
      </li>
      <li>
        <a href={urls.wiki} target='_blank' title='Go to wiki page'>Wiki page</a>
      </li>
    </ul>
  </nav>
)

export default CharacterLinks