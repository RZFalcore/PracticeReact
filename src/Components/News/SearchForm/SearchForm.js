import React from "react";

const SearchForm = ({ query, onChange }) => (
  <input
    type="text"
    name="query"
    id="query"
    value={query}
    onChange={onChange}
  />
);

export default SearchForm;
