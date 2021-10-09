import { About, Counter, CounterIncrement } from 'pages'
import { FC } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Routes: FC = () => (
  <Router>
    <Route exact path="/" component={Counter} />
    <Route exact path="/stat" component={CounterIncrement} />
    <Route exact path="/about" component={About} />
  </Router>
)

export default Routes