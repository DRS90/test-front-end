import React from 'react';
import { storiesOf } from '@storybook/react';
import Character from '../components/Character';

storiesOf('Character', module)
  .add('No props', () => <Character />)
  .add('Fictional character', () => {
    const character = {
      name: 'Spider-Man',
      urls: [
        { type: 'detail', url: '#' },
        { type: 'wiki', url: '#' },
      ]
    }
    return <Character {...character} />
  })
