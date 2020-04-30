import React, { Component } from "react";
import Transactions from "./components/Transactions";

class App extends Component {
  state = {
    transactions: []
  };

  componentDidMount() {
    fetch("http://localhost:8080/api/transactions")
      .then(res => res.json())
      .then(data => {
        this.setState({ transactions: data });
      })
      .catch(console.log);
  }

  render() {
    return <Transactions transactions={this.state.transactions} />;
  }
}

export default App;
