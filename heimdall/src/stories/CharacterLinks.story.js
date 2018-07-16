import React from 'react';
import { storiesOf } from '@storybook/react';
import CharacterLinks from '../components/CharacterLinks';

storiesOf('CharacterLinks', module)
  .add('No props', () => <CharacterLinks />)
  .add('Fictional urls', () => {
    const urls = [
      { type: 'wiki', url: '#' },
    ]
    return <CharacterLinks
      urls={urls} />
  })


