import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./components/About";
import Topics from "./components/Topics";
import Home from "./components/Home";
import MyProvider,{MyContext} from './ContextProvider'

class App extends Component {
  render() {
    return (
      <MyProvider>
            <React.Fragment>
              <Router>
                <div>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/topics">Topics</Link>
                    </li>
                  </ul>

                  <hr />
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/topics" component={Topics} />
                </div>
              </Router>
              <MyContext.Consumer>
              {context => (
                 <React.Fragment>
              <p>Age: {context.state.age}</p>
              <button onClick={context.growAYearOlder}>🍰🍥🎂</button>
              </React.Fragment>)
              }
              </MyContext.Consumer>
        </React.Fragment>
      </MyProvider>
    );
  }
}

export default App;
