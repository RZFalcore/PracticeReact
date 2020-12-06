import React from "react";
import PropTypes from 'prop-types'

const SearchForm = ({ query, onChange, onSubmit }) => (
   <form onSubmit={onSubmit}>
    <input
        type="text"
        name="query"
        id="query"
        value={query}
        onChange={onChange}
    />
    <button type="submit">Search</button>
  </form>
);

SearchForm.propTypes = {
  query: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default SearchForm;
