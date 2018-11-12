import React, { Component } from "react";

class Lahiru extends Component {
  render() {
    //console.log(this.props);
    const { name, age } = this.props;
    return (
      <div className="lahiru">
        {/* <div>Name: {this.props.name}</div>
        <div>Age: {this.props.age}</div> */}
        <div>Name: {name}</div>
        <div>Age: {age}</div>
      </div>
    );
  }
}

export default Lahiru;
