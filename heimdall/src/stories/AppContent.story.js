import React from 'react';
import { storiesOf } from '@storybook/react';
import AppContent from '../components/AppContent';

storiesOf('AppContent', module)
  .add('No props', () => <AppContent />)
  .add('Loading', () => <AppContent isLoading={true}/>)
  .add('No results from search', () => <AppContent characters={[]} hasSearch={true}/>)
  .add('With results from search', () =>(
    <AppContent characters={[{},{},{}]} hasSearch={true}/>
  ))
