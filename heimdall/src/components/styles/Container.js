import style from 'styled-components'

const Container = style.div`
  display: flex;
  margin: 10px;
  flex-wrap: wrap;
  justify-content: ${({justify}) => justify};
`

export default Container
