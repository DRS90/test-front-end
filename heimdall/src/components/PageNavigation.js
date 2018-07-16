import React from 'react'
import PropTypes from 'prop-types'

const PageNavigation = ({ handleClickNextPage, handleClickPrevPage, actualPage, totalPages }) => (
  totalPages !== 1 &&
  <footer role='navigation'>
    <nav>
      {actualPage !== 1 &&
        <button onClick={handleClickPrevPage}>prev</button>}
      Page {actualPage}
      {actualPage !== totalPages &&
        <button onClick={handleClickNextPage}>next</button>}
    </nav>
  </footer>
)

PageNavigation.propTypes = {
  handleClickNextPage: PropTypes.func,
  handleClickPrevPage: PropTypes.func,
  actualPage: PropTypes.number,
  totalPages: PropTypes.number,
}

export default PageNavigation