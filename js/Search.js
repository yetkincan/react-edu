// @flow

import React, { Component } from 'react';
import ShowCard from './ShowCard';
import Header from './Header';

class Search extends Component {
  state = {
    searchTerm: ''
  };
  props: {
    shows: Array<Show>
  };

  handleSearchTermChange = (event: SyntheticKeyboardEvent & { target: HTMLInputElement }) =>
    this.setState({ searchTerm: event.target.value });

  render() {
    return (
      <div className="search">
        <Header searchTerm={this.state.searchTerm} showSearch handleSearchTermChange={this.handleSearchTermChange} />
        <div>
          {this.props.shows
            .filter(
              show =>
                `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;

// componentWillMount => Before rendering, dont use much, mostly used in SSR
// componentDidMount => used for integrating another api
// componentWillReceiveProps => if you get new props from the parent
// shouldComponentUpdate => performance optimization method
// componentWillUnmount => component is about to leave the dom
