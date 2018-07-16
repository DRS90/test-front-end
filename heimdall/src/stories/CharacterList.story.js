import React from 'react';
import { storiesOf } from '@storybook/react';
import CharactersList from '../components/CharactersList';

storiesOf('CharactersList', module)
  .add('No Props', () => <CharactersList />)
  .add('With list of characters', () => (
    <CharactersList characters={[{}, {}, {}, {}]} />
  ))
  