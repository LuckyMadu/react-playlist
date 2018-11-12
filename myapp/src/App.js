import React, { Component } from "react";
import Lahiru from "./Lahiru";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My react App</h1>
        <Lahiru name="Madu" age="40" />
        <Lahiru name="Amara" age="25" />
      </div>
    );
  }
}

export default App;
