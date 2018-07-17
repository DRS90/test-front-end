import { storiesOf } from '@storybook/react';
import React from 'react';
import Character from '../components/character/Character';
import { mockCharacter as character } from './index'

storiesOf('<Character>', module)
  .add('without props', () => <Character />)
  .add('mock character', () => {
    const { name, thumbnail, urls } = character
    const namesless = { thumbnail, urls }
    const withoutThumbnail = { name, urls }
    const withoutUrls = { name, thumbnail }

    return (
      <div>
        <p>With all properties</p>
        <Character {...character} />
        <p>Without name</p>
        <Character {...namesless} />
        <p>Without thumbnail</p>
        <Character {...withoutThumbnail} />
        <p> Without urls</p>
        <Character {...withoutUrls} />
      </div>
    )
  })
