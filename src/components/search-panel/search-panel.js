import React, { Component } from "react";
import "./search-panel.css";

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
    this.onUpdateChange = this.onUpdateChange.bind(this);
  }
  onUpdateChange(e) {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateChange(term);
  }
  render() {
    return (
      <input
        className="form-control search-input"
        placeholder="Поиск по записям"
        type="text"
        onChange={this.onUpdateChange}
      />
    );
  }
}
