import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

import './App.css';
import { Animation1 } from './components/animation1';
import { Animation2 } from './components/animation2';
import { Animation3 } from './components/animation3';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route exact path='/' component={Animation1} />
                <Route path='/1' component={Animation1} />
                <Route path='/2' component={Animation2} />
                <Route path='/3' component={Animation3} />
              </Switch>
            </AnimatePresence>
          )}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
