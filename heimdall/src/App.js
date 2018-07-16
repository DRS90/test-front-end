import React, { Component } from 'react';
import * as api from './api'

import AppContent from './components/AppContent'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      charactersResult: [],
      isLoading: false
    }
  }

  handleSearch = e => {
    const value = e.target.value
    const enterKeyCode = 13
    if (e.keyCode === enterKeyCode) {
      this.setCharactersFromApiResult(value)
    }
  }
  setCharactersFromApiResult = async search => {
    this.setState({isLoading: true})
    const response = await api.getCaracters(search)

    this.setState({
      charactersResult: response.data.data.results,
      isLoading: false,
      hasSearch: true
    })
  }

  render() {
    return (
      <AppContent
        handleSearch={this.handleSearch}
        characters={this.state.charactersResult}
        isLoading={this.state.isLoading}
        hasSearch={this.state.hasSearch}
      />
    );
  }
}

export default App;
