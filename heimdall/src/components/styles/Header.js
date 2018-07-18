import style from 'styled-components'

const styles = {
  section: `
    flex: 1;
  `,
  top: `
  display: flex;
    align-items: center;
    position: fixed;
    top: 0px;
    width: 100%;
    padding: 10px 20px;
    box-sizing: border-box;
    background: #291a14;
    box-shadow: '0 2px 0px rgba(209, 83, 13, 0.5)';
  `
}

const Header = style.header`
  ${({props}) => styles.section}
`

export default Header