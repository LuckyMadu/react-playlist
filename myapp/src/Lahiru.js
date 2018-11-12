import React from "react";

const Lahiru = ({ lahiru }) => {
  //const { lahiru } = props};
  /* const lahiruList = lahiru.map(lahiru => {
    if (lahiru.age > 30) {
      return (
        <div className="lahiru" key={lahiru.id}>
          <div>Name: {lahiru.name}</div>
          <div>Age: {lahiru.age}</div>
        </div>
      );
    } else {
      return null; 
    }
  }); */
  /* const lahiruList = lahiru.map(lahiru => {
    return lahiru.age > 20 ? (
      <div className="lahiru" key={lahiru.id}>
        <div>Name: {lahiru.name}</div>
        <div>Age: {lahiru.age}</div>
      </div>
    ) : null;
  }); */
  return (
    <div className="lahiru-list">
      {/* {lahiruList} */}

      {lahiru.map(lahiru => {
        return lahiru.age > 20 ? (
          <div className="lahiru" key={lahiru.id}>
            <div>Name: {lahiru.name}</div>
            <div>Age: {lahiru.age}</div>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Lahiru;
