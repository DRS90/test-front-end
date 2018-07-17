import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '../components/Header';
import { action } from '@storybook/addon-actions';

storiesOf('<Header>', module)
  .add('without props', () => <Header />)
  .add('logo click handler', () => <Header handleLogoClick={action('click')}/>)
