import React, { Component } from "react";
import CardList from "./CardList";
import { taomlar } from "./taomlar";
import Searchbox from "./Searchbox";
export default class App extends Component {
  state = {
    taomlar: taomlar,
    searchField: "",
  };
  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };
  render() {
    const filterdTaomlar = taomlar.filter((taom) => {
      return taom.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    return (
      <div>
        <h2 className="tc ">Meals</h2>
        <Searchbox searchPanel={this.onSearchChange} />
        <CardList taomlar={filterdTaomlar} />
      </div>
    );
  }
}
