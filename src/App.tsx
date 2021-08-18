import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import { NotFound } from './pages/NotFound'

export const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  )
}
