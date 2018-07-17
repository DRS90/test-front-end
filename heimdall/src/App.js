import React, { Component } from 'react';
import * as api from './utils/api'

import AppContent from './components/AppContent'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      charactersResult: [],
      isLoading: false,
      activePage: 1,
      total: 0,
      search: '',
      hasSearch: false,
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    const hasSearch = this.state.hasSearch !== nextState.hasSearch
    const isLoading = this.state.isLoading !== nextState.isLoading
    return (hasSearch || isLoading)
  }

  handleSearch = e => {
    const value = e.target.value
    const enterKeyCode = e.keyCode === 13
    if (enterKeyCode && value) {
      value !== this.state.search && this.setCharactersFromApiResult(value)
      e.target.value = ''
    }
    if (enterKeyCode && !value) {
      console.log('Empty Field')
    }
  }

  setCharactersFromApiResult = async (search = this.state.search) => {
    this.setState({
      isLoading: true,
      search
    })
    const response = await api.getCaracters(search, this.state.activePage)
    this.setData(response.data.data)
  }

  setData = data => this.setState({
    charactersResult: data.results,
    isLoading: false,
    hasSearch: true,
    total: Math.ceil(data.total / 6),
  })

  handlePagination = async page => {
    if (page !== this.state.activePage) {
      await this.setState({
        activePage: page
      })
      this.setCharactersFromApiResult()
    }
  }

  handleClickHome = _ => {
    this.setState({
      charactersResult: [],
      isLoading: false,
      activePage: 1,
      total: 0,
      search: '',
      hasSearch: false,
    })
  }

  render() {
    return (
      <AppContent
        handleLogoClick={this.handleClickHome}
        handleSearch={this.handleSearch}
        characters={this.state.charactersResult}
        isLoading={this.state.isLoading}
        hasSearch={this.state.hasSearch}
        handlePagination={this.handlePagination}
        activePage={this.state.activePage}
        total={this.state.total}
      />
    );
  }
}

export default App;
