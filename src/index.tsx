import ReactDOM from 'react-dom'
import { App } from './App'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './themes/default'
import GlobalStyle from './styles/global'
import './styles/styles.css'

ReactDOM.render(
  <ThemeProvider theme={lightTheme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,

  document.getElementById('root')
)
