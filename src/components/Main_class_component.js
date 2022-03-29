import React, { Component } from "react";
import Button from "./ui-components/Button";
import classes from "./ui-components/Button.module.css";

class Main extends Component {
  state = {
    counter: 2022,
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
    if (this.state.counter > 0) {
      console.log("subtracted 1");
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  };

  subtractFiveHandler = () => {
    if (this.state.counter < 5) {
      this.setState({
        counter: 0,
      });
    } else {
      console.log("subtracted 5");
      this.setState({
        counter: this.state.counter - 5,
      });
    }
  };

  // oddOrEven = () => {

  // }

  render() {
    let className = "";

    if (this.state.counter % 2 === 0) {
      className = classes.even;
    } else {
      className = classes.odd;
    }

    return (
      <main className="counter-container">
        <div className="circle-container">
          <div className={`${classes.circle} ${className}`}>
            <span className="total">{this.state.counter}</span>
          </div>
        </div>

        <div className="btn-container">
          <Button click={this.addFiveHandler} value="Add 5" />
          <Button click={this.addOneHandler} value="Add 1" />
          <Button click={this.resetHandler} value="Reset" />
          <Button click={this.subtractOneHandler}>Subtract 1</Button>
          <Button click={this.subtractFiveHandler}>Subtract 5</Button>
        </div>
      </main>
    );
  }
}

// const handleBtnClick = () => {
//   console.log("Button clicked!");
// };

export default Main;
