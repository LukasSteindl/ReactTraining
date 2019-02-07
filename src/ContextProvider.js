import React, { Component } from "react";
export const MyContext = React.createContext();

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


export default MyProvider