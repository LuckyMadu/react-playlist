import React, { Component } from "react";
import Lahiru from "./Lahiru";
import AddLahiru from "./addLahiru";

class App extends Component {
  state = {
    lahiru: [
      {
        name: "Lahiru",
        age: 20,
        id: 1
      },
      {
        name: "Madu",
        age: 45,
        id: 2
      },
      {
        name: "Amara",
        age: 30,
        id: 3
      }
    ]
  };
  addLahiru = Madu => {
    //console.log(lahiru);
    Madu.id = Math.random();
    let lahiru = [...this.state.lahiru, Madu];
    this.setState({
      lahiru: lahiru
    });
  };
  render() {
    return (
      <div className="App">
        <h1>My react App</h1>
        {/* <Lahiru name="Madu" age="40" /> */}
        <Lahiru lahiru={this.state.lahiru} />
        <AddLahiru addLahiru={this.addLahiru} />
      </div>
    );
  }
}

export default App;
