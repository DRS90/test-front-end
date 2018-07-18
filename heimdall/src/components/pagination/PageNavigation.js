import React from 'react'
import PropTypes from 'prop-types'
import pagination from '../../utils/pagination';
import Page from './Page';

import Container from '../styles/Container'

const PageNavigation = ({ total, activePage, handlePagination }) => (
  total !== 1 &&
  <footer role='navigation'>
    <nav>
      <ul style={{ display: 'flex', listStyle: 'none', padding: '0px' }}>
        {pagination({ total, activePage })
          .map((page, index) => (
              <li key={index}>
                <Page page={page} onClick={handlePagination} activePage={activePage} />
              </li>
          ))}
      </ul>
    </nav>
  </footer>
)

PageNavigation.defaultProps = {
  activePage: 1,
  total: 1,
}

PageNavigation.propTypes = {
  total: PropTypes.number,
  activePage: PropTypes.number,
  handlePagination: PropTypes.func.isRequired
}

export default PageNavigation
