import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Search from '../components/Search';

storiesOf('<Search>', module)
  .add('without props', () => <Search />)
  .add('key up handler', () => <Search handleSearch={action('Typing')} />);
  