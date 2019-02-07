
import React from "react";
import MyProvider,{MyContext} from '.././ContextProvider'

const Home = () => (
  <div>
    <h2>Home</h2>
  <MyContext.Consumer>
              {context => (
                <React.Fragment>
              <p>Age: {context.state.age}</p>
              <button onClick={context.growAYearOlder}>getolder</button>
              </React.Fragment>)}
  </MyContext.Consumer>
  </div>
);

export default Home;
