import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./components/About";
import Topics from "./components/Topics";
import Home from "./components/Home";

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    age: 100
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          growAYearOlder: () =>
            this.setState({
              age: this.state.age + 1
            })
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <MyProvider>
        <MyContext.Consumer>
          {context => (
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
              <p>Age: {context.state.age}</p>
              <button onClick={context.growAYearOlder}>🍰🍥🎂</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </MyProvider>
    );
  }
}

export default App;
