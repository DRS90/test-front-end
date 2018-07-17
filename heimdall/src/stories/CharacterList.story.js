import React from 'react';
import { storiesOf } from '@storybook/react';
import CharactersList from '../components/character/CharactersList';
import {mockCharacter as character} from './index'

storiesOf('<CharactersList>', module)
  .add('without props', () => <CharactersList />)
  .add('with list of mock characters', () => (
    <CharactersList
    characters={Array.from({ length: 3 }, _ => character)}
    activePage={1}
    total={4}
    />
  ))
  