import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Search from './Search.story'
import Character from './Character.story'
import CharacterLinks from './CharacterLinks.story'
import AppContent from './AppContent.story'
import Header from './Header.story'
import Footer from './Footer.story'
import PageNavigation from './PageNavigation.story'
import CharacterList from './CharacterList.story'

export const mockCharacter = {
  name: 'Heimdall Eye',
  thumbnail: {
    path: '/static/media/heimdall-eye-logo.32c8e2a9',
    extension: 'svg'
  },
  urls: [
    { type: 'detail', url: '#' },
    { type: 'wiki', url: '#' },
  ]
}