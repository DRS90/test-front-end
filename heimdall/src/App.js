import React, { Component } from 'react';
import * as api from './api'

import AppContent from './components/AppContent'



const character = {
  id: '1009610',
  name: 'Spider-Man',
  thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg',
  comicsCollectionURI: 'http://gateway.marvel.com/v1/public/characters/1009610/comics',
  urls: {
    detail: 'http://marvel.com/characters/1011054/spider-man_1602/featured?utm_campaign=apiRef&utm_source=46d62d9814422bd0f62fe6c34f1d6c25',
    wiki: 'http://marvel.com/universe/Parquagh,_Peter_(Earth-311)?utm_campaign=apiRef&utm_source=46d62d9814422bd0f62fe6c34f1d6c25'
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      charactersResult: []
    }
  }

  handleSearch = e => {
    const value = e.target.value
    console.log(value)
    const enterKeyCode = 13
    if (e.keyCode === enterKeyCode) {
      console.log('enter')
      this.setCharactersFromApiResult(value)
    }
  }
  setCharactersFromApiResult = async search => {
    const response = await api.getCaracters(search)
    this.setState({
      charactersResult: response.data.data.results
    })
  }

  render() {
    return (
      <AppContent
        character={character}
        handleSearch={this.handleSearch}
        result={this.state.charactersResult}
      />
    );
  }
}

export default App;
