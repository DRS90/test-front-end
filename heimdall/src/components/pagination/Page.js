import React from 'react'

const Dots = (square) => <span style={{padding: '5px', margin: '2px'}}>...</span>

const Page = ({ page, onClick, activePage }) => {
  const square = {
    padding: '5px 10px',
    margin: '2px',
    background: activePage === page ? 'rgba(209, 83, 13)' : '#FFF',
    borderRadius: '2px'
  }

  const Component = page === '...' ? Dots : 'a'
  const handleClick = !onClick ? null : (e) => {
    e.preventDefault()
    onClick(page)
  }

  return (
    <Component onClick={handleClick} style={square}>
      {page}
    </Component>
  )
}



export default Page
