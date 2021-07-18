import {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import Nav from './components/Nav';
import "./styles/Styles.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(true)
  return (
    <Router>
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Switch>
        <Route path="/" exact>
          <Home menuOpen={menuOpen} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
