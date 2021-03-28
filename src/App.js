import Login from './Login';
import Signup from './Signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className="App">
    
    <div className="mainContent">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/Signup">
          <Signup />

        </Route>
      </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
