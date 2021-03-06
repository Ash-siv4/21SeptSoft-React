import logo from './logo.svg';
// import './App.css';
import First from './Components/Intro/First';
import ClassClock from './Components/Lifecycle/ClassClock';
import Second from './Components/Intro/Second';
import Parent from './Components/Props/Parent';
import Counter from './Components/States/Counter';
import Count from './Components/States/Count';
import TrueFalse from './Components/States/TrueFalse';
import Input from './Components/States/Forms/Input';
import Clock from './Components/Hooks/Clock';
import SearchableList from './Components/LiftingStates/SearchableList';
import Home from './Components/Routing/Home';
import About from './Components/Routing/About';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Routing/Nav';
import Shop from './Components/Routing/Shop';
import NotFound from './Components/Routing/NotFound';
import User from './Components/Routing/User';
import Tesco from './Components/DataRequests/Tesco';
import FilmReq from './Components/DataRequests/FilmReq';

// const App = () => {
function App(){
  const date = new Date();
  return (
    <div>
      {/* <h1>Hi hi</h1>
      <p>{date.toLocaleTimeString()}</p> */}

      {/* <First /> */}
      {/* <Second/> */}
      {/* <Parent/> */}
      {/* <ClassClock/> */}
      {/* <Count/> */}
      {/* <Counter/>8 */}
      {/* <TrueFalse/> */}
      {/* <Input/> */}
      {/* <Clock/> */}
      {/* <a href="/">home</a>
      <a href="/about">About</a>
      <a href="/tesco">Tesco</a> */}

      {/* <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
            <Nav/>
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Nav">
            <Nav />
          </Route>
          <Route path="/Shop">
            <Shop />
          </Route>
          <Route path="/user/:id/:name">
            <User />
          </Route>
          <Route path="/tesco">
            <Tesco />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router> */}

      {/* <SearchableList/> */}
      {/* <FilmReq /> */}
      <Tesco />

      {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </div> */}

    </div>
  );
}

export default App;
