import React, { Component } from "react";
import Lahiru from "./Lahiru";

class App extends Component {
  state = {
    lahiru: [
      {
        name: "Lahiru",
        age: 20,
        id:1
      },
      {
        name: "Madu",
        age: 45,
        id:2
      },
      {
        name: "Amara",
        age: 30,
        id:3
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>My react App</h1>
        {/* <Lahiru name="Madu" age="40" /> */}
        <Lahiru lahiru={this.state.lahiru} />
      </div>
    );
  }
}

export default App;
