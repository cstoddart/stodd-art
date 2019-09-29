import React, { Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

import { appContext } from './context';
import { isMobileDevice } from './utilities';
import { GlobalStyles } from './globalStyles';
import { Animation1 } from './components/animation1';
import { Animation2 } from './components/animation2';
import { Animation3 } from './components/animation3';
import { Animation4 } from './components/animation4';

export class App extends Component {
  state = {
    isMobileDevice: false,
    updateContext: this.setState,
  };

  componentDidMount() {
    this.setState({ isMobileDevice: isMobileDevice() });
  }

  render() {
    return (
      <appContext.Provider value={this.state}>
        <GlobalStyles />
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
                    <Route path='/4' component={Animation4} />
                  </Switch>
                </AnimatePresence>
              )}
            />
          </BrowserRouter>
        </div>
      </appContext.Provider>
    );
  }
}
