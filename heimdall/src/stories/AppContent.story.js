import React from 'react';
import { storiesOf } from '@storybook/react';
import AppContent from '../components/AppContent';
import { mockCharacter as character } from './index'

storiesOf('<AppContent>', module)
  .add('without props', () => <AppContent />)
  .add('loading', () => <AppContent isLoading={true}/>)
  .add('with no results from search', () => <AppContent characters={[]} hasSearch={true}/>)
  .add('with mocked results from search', () =>(
    <AppContent characters={Array.from({ length: 3 }, _ => character)} hasSearch={true}/>
  ))
