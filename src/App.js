import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import Nav from './components/Nav';
import Project from './components/Project';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route to="/" exact component={Home} />
        <Route to="/project/:id" exact component={Project} />

      </Switch>
    </Router>
  );
}

export default App;
