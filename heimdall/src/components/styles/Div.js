import style from 'styled-components'

const Div = style.div`
  ${({ root }) => root
    ? `
      font-family: "Open Sans", sans-serif;
      background: #BDBDBD;
      height: 100%;
      color: #5D4037;
      margin: 0;
      
    `
    : null};
`

export default Div