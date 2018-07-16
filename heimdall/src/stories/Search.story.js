import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Search from '../components/Search';

storiesOf('Search', module)
  .add('No action', () => <Search />)
  .add('Key up handler', () => <Search handleSearch={action('Typing')} />);