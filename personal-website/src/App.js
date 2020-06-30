import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';
import Projects from './Components/Pages/Projects/Projects';
import Contact from './Components/Pages/Contact/Contact';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Switch>
            <Route path="/"> <Home /> </Route>
            <Route path="/projects"> <Projects /> </Route>
            <Route path="/contact"> <Contact /> </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
