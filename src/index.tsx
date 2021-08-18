import ReactDOM from 'react-dom'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './themes/theme'
import GlobalStyle from './global'

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </BrowserRouter>,

  document.getElementById('root')
)
