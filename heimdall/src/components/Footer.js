import React from 'react'

import Container from './styles/Container'

const Footer = props => (
  <Container justify='center' style={{ alignSelf: 'flex-end' }} >
  <footer>
    <a href="http://marvel.com\">
      Data provided by Marvel. © 2018 MARVEL
    </a>
  </footer>
  </Container>
)

export default Footer