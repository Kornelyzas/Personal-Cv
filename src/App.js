import Home from '../src/components/home/Home'
import Header from '../src/components/header/Header'
import Cv from '../src/components/cv/Cv'
import Work from '../src/components/work/Work'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/cv" component={Cv}/>
            <Route path="/work" component={Work}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
