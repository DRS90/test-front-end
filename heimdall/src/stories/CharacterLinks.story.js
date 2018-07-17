import React from 'react';
import { storiesOf } from '@storybook/react';
import CharacterLinks from '../components/character/CharacterLinks';

storiesOf('<CharacterLinks>', module)
  .add('without props', () => <CharacterLinks />)
  .add('mock urls', () => {
    const urls = [
      { type: 'wiki', url: '#' },
    ]
    return <CharacterLinks
      urls={urls} />
  })
