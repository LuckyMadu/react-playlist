import React from "react";

const Lahiru = ({lahiru}) => {
  //const { lahiru } = props};
  const lahiruList = lahiru.map(lahiru => {
    return (
      <div className="lahiru" key={lahiru.id}>
        <div>Name: {lahiru.name}</div>
        <div>Age: {lahiru.age}</div>
      </div>
    );
  });
  return <div className="lahiru-list">{lahiruList}</div>;
};

export default Lahiru;
