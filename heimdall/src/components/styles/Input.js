import style from 'styled-components'

const getStyle = type => {
  if (type === 'search') {
    return `
    `
  }
}

const Input = style.input`
  ${({ type }) => getStyle(type)};
  flex: 1;
  height: 40px;
  padding: 0 10px;
  opacity: 0.9;
  max-width: 700px;
  border-radius: 0 2px 2px 0;
  border: 0;
`

export default Input