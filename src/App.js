import home from './routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/notFound/NotFound'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
