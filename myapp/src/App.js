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
  addLahiru = madu => {
    //console.log(lahiru);
    madu.id = Math.random();
    let lahiru = [...this.state.lahiru, madu];
    this.setState({
      lahiru: lahiru
    });
  };

  deleteLahiru = id => {
    let lahiru = this.state.lahiru.filter(madu => {
      return madu.id !== id;
    });
    this.setState({
      lahiru: lahiru
    });
  };

  componentDidMount() {
    //alert("I am an alert box!");
    console.log("component mounted");
  }

  componentDidUpdate(prevProps, preState) {
    console.log("component updated");
    console.log(prevProps, preState);
  }
  render() {
    return (
      <div className="App">
        <h1>My react App</h1>
        {/* <Lahiru name="Madu" age="40" /> */}
        <Lahiru deleteLahiru={this.deleteLahiru} lahiru={this.state.lahiru} />
        <AddLahiru addLahiru={this.addLahiru} />
      </div>
    );
  }
}

export default App;
