import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export default connect(
  state => state,
  actionCreators
)(Search);

function Search({ search, onSearchChange }) {
  return (
    <form className="search">
      <input
        id="search"
        name="search"
        type="text"
        value={search}
        onChange={e => onSearchChange(e.target.value)}
      />
      <button className="search-button" type="submit">Search</button>
    </form>
  );
}
