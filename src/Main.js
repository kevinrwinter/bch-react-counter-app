import React from "react";

const Main = () => {
  return (
    <div className="counter-container">
      <div className="circle-container">
        <div className="circle">
          <span className="total">42</span>
        </div>
      </div>

      <div className="btn-container">
        <button className="add-five">Add 5</button>
        <button className="add-one">Add 1</button>
        <button className="reset">Reset</button>
        <button className="subtract-one">Subtract 1</button>
        <button className="subtract-five">Subtract 5</button>
      </div>
    </div>
  );
};

export default Main;
