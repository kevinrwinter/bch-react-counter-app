import React, { Component } from "react";

class Main extends Component {
  state = {
    counter: 2000,
  };

  addFiveHandler = () => {
    console.log("added 5");
    this.setState({
      counter: this.state.counter + 5,
    });
  };

  addOneHandler = () => {
    console.log("added 1");
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  resetHandler = () => {
    console.log("resetedededed");
    this.setState({
      counter: 0,
    });
  };

  subtractOneHandler = () => {
    console.log("subtracted 1");
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  subtractFiveHandler = () => {
    console.log("subtracted 5");
    this.setState({
      counter: this.state.counter - 5,
    });
  };

  render() {
    return (
      <main className="counter-container">
        <div className="circle-container">
          <div className="circle">
            <span className="total">{this.state.counter}</span>
          </div>

          {/* <Circle counter={this.state.counter} /> */}
        </div>

        <div className="btn-container">
          <button className="add-five" onClick={this.addFiveHandler}>
            Add 5
          </button>
          <button className="add-one" onClick={this.addOneHandler}>
            Add 1
          </button>
          <button className="reset" onClick={this.resetHandler}>
            Reset
          </button>
          <button className="subtract-one" onClick={this.subtractOneHandler}>
            Subtract 1
          </button>
          <button className="subtract-five" onClick={this.subtractFiveHandler}>
            Subtract 5
          </button>
        </div>
      </main>
    );
  }
}

const handleBtnClick = () => {
  console.log("Button clicked!");
};

export default Main;
