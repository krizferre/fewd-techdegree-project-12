import React, { Component } from 'react';
import { 
  Route,
  Switch,
  BrowserRouter,
} from 'react-router-dom';

import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app-container">
          <Header />
          <main className="main-container">
            <Switch>
              <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
              <Route path={process.env.PUBLIC_URL + '/projects'} component={Projects} />
              <Route path={process.env.PUBLIC_URL + '/contact'} component={Contact} />
            </Switch>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
