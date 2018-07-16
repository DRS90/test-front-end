import React, { Component } from 'react';
import * as api from './api'

import AppContent from './components/AppContent'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      charactersResult: [],
      isLoading: false,
      actualPage: 1,
      totalPages: 0,
      search: '',
    }
  }

  handleSearch = e => {
    const value = e.target.value
    const enterKeyCode = e.keyCode === 13
    if (enterKeyCode && value) {
      this.setCharactersFromApiResult(value)
      e.target.value = ''
    }
    if (enterKeyCode && !value) {
      console.log('Empty Field')
    }
  }

  setCharactersFromApiResult = async search => {
    this.setState({
      isLoading: true,
      search
    })
    const response = await api.getCaracters(search)(this.state.actualPage)
    this.setData(response.data.data)
  }

  setData = data => {
    setTimeout(() => this.setState({
      charactersResult: data.results,
      isLoading: false,
      hasSearch: true,
      totalPages: Math.ceil(data.total / 6),
    }), 1500)
  }

  handleClickNextPage = async () => {
    const { actualPage, totalPages, search } = this.state
    if (actualPage + 1 <= totalPages) {
      await this.setState({
        actualPage: actualPage + 1
      })
      this.setCharactersFromApiResult(search)
    }
  }

  handleClickPrevPage = async () => {
    const { actualPage, search } = this.state
    if (actualPage - 1 >= 1) {
      await this.setState ({
        actualPage: actualPage - 1
      })
      this.setCharactersFromApiResult(search)
    }
  }

  render() {
    return (
      <AppContent
        handleSearch={this.handleSearch}
        characters={this.state.charactersResult}
        isLoading={this.state.isLoading}
        hasSearch={this.state.hasSearch}
        handleClickNextPage={this.handleClickNextPage}
        handleClickPrevPage={this.handleClickPrevPage}
        actualPage={this.state.actualPage}
        totalPages={this.state.totalPages}
      />
    );
  }
}

export default App;
