import React, { Component } from 'react';

export class SearchBar extends Component {
  state = {
    value: '',
  };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" value={value} onChange={this.onChange} />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;
