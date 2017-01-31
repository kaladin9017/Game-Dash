import React, { Component } from "react";

export default class Main extends Component {

  render() {
    return (
      <div>
        <h3>Header</h3>

        {this.props.children}
      </div>
    );
  }

}
