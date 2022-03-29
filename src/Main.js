import React from "react";
import Button from "./components/ui-components/Button";

const Main = () => {
  return (
    <main className="counter-container">
      <div className="circle-container">
        <div className="circle">
          <span className="total">42</span>
        </div>
      </div>

      <div className="btn-container">
        <button className="add-five" onClick={handleBtnClick}>
          Add 5
        </button>
        <button className="add-one" onClick={handleBtnClick}>
          Add 1
        </button>
        <button className="reset" onClick={handleBtnClick}>
          Reset
        </button>
        <button className="subtract-one" onClick={handleBtnClick}>
          Subtract 1
        </button>
        <button className="subtract-five" onClick={handleBtnClick}>
          Subtract 5
        </button>
      </div>
    </main>
  );
};

const handleBtnClick = () => {
  console.log("Button clicked!");
};

export default Main;
