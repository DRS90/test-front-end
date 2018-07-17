import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PageNavigation from '../components/pagination/PageNavigation';

storiesOf('<PageNavigation>', module)
  .add('without props', () => <PageNavigation />)
  .add('with total and activePage', () => (
    <PageNavigation total={20} activePage={10} />
  ))
  .add('with callback', () => (
    <PageNavigation total={20} activePage={10}
    handlePagination={page => {
        action(`go to page: ${page}`)
      }} />
  ))
