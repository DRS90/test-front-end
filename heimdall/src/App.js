import React, { Component } from 'react';
import * as api from './api'

api.getCaracters('spider-man')

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
  render() {
    return (
      <div className="app">
        <header>
          <img src='#' alt='Logo, stylized Heimdall yellow eyes' />
          <label htmlFor='character-search'>Search</label>
          <input type='search' id='character-search' />
        </header>
        <main>
        <section className='characters-list'>
        <header role='banner'>
          <h1>Characters List</h1>
        </header>

          <article className='character'
            style={{ width: '304px', height: '360px', border: '2px solid' }}
          >
            <img src={character.thumbnail} alt={character.name + ' thumbnail'}
              style={{ maxWidth: '120px', maxHeight: '120px' }}
            />
            <div>
              <h2>{character.name}</h2>
              <p>{character.description}</p>
            </div>
            <nav>
              <ul style={{listStyle: 'none'}}>
                <li>
                  <a href={character.urls.detail} target='_blank' title='Go to marvel.com for more details'>Details</a>
                </li>
                <li>
                  <a href={character.urls.wiki} target='_blank' title='Go to wiki page'>Wiki page</a>
                </li>
              </ul>
            </nav>
          </article>

            <footer role='navigation'>
              <button>prev</button>
              page 0
              <button>next</button>
            </footer>
        </section>
        </main>
          <footer 
          style={{position: 'fixed', bottom:'0px'}}>
            <a href="http://marvel.com\">
              Data provided by Marvel. © 2018 MARVEL
            </a>
          </footer>
      </div>
    );
  }
}

export default App;
