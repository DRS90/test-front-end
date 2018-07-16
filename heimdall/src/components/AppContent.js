import React from 'react'
import Header from './Header'
import Character from './Character'
import PageNavigation from './PageNavigation'
import Footer from './Footer'

const AppContent = ({ result, handleSearch }) => (
  <div className="app">
    <Header handleSearch={handleSearch}/>
    <main>
      <section className='characters-list'>
        <header role='banner'>
          <h1>Characters List</h1>
        </header>
        {result.map(item => <Character character={item} />)}
        <PageNavigation />
      </section>
    </main>
    <Footer />
  </div>
)

export default AppContent