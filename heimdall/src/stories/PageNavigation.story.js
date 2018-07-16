import React from 'react';
import { storiesOf } from '@storybook/react';
import PageNavigation from '../components/PageNavigation';

storiesOf('Page Navigation', module)
  .add('First Page', () => <PageNavigation actualPage={1} totalPages={2}/>)
  .add('Last Page', () => <PageNavigation actualPage={2} totalPages={2}/>)
  .add('Only 1 page', () => <PageNavigation actualPage={1} totalPages={1}/>)
