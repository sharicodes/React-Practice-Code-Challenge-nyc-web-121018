import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sushis: []
    };
  }
  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(sushis =>
        this.setState({
          sushis: sushis.slice(0, 4),
          budget: 100
        })
      );
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} />
        <Table budget={this.state.budget} />
      </div>
    );
  }
}

export default App;
