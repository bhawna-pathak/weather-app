import React, { Component } from "react";
import Nav from "../component/Nav";

class Weather extends Component {
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Weather:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Weather;
