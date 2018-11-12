import React, { Component } from "react";

class Lahiru extends Component {
  render() {
    //console.log(this.props);
    //const { name, age } = this.props;
    const { lahiru } = this.props;
    const lahiruList = lahiru.map(lahiru => {
      return (
        <div className="lahiru" key={lahiru.id}>
          {/* <div>Name: {this.props.name}</div>
        <div>Age: {this.props.age}</div> */}
          <div>Name: {lahiru.name}</div>
          <div>Age: {lahiru.age}</div>
        </div>
      );
    });
    return <div className="lahiru-list">{lahiruList}</div>;
  }
}

export default Lahiru;
