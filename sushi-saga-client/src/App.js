import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sushis: [],
      plateCounter: 5,
      budget: 100,
      resliced: 0
    };
  }
  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(sushis =>
        this.setState({
          sushis: sushis
        })
      );
  }

  addSushi = () => {
    this.setState({
      resliced: this.state.resliced + 4
    });
  };

  render() {
    console.log("sushis", this.state.sushis);
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.sushis.slice(
            this.state.resliced,
            this.state.resliced + 4
          )}
          addSushi={this.addSushi}
        />
        <Table
          budget={this.state.budget}
          plateCounter={this.state.plateCounter}
        />
      </div>
    );
  }
}

export default App;
