import React, { useState } from "react";

function SearchBar({ onSearch, defaultValue = "" }) {
  const [query, setQuery] = useState(defaultValue);

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(query);
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="search"
        name="query"
        placeholder="Search..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        autoComplete="off"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
