import React, { useState } from "react";

const Search = () => {
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = () =>
    Turbolinks.visit(`/events?category=${category}&location=${location}`);

  return (
    <div>
      <input
        placeholder="City"
        value={location}
        className="search_form_city"
        onChange={e => setLocation(e.target.value)}
      />
      <input
        placeholder="Type of Event"
        value={category}
        className="search_form"
        onChange={e => setCategory(e.target.value)}
      />
      <input
        onClick={handleSearch}
        type="submit"
        value="Find Events"
        className="search_submit"
      />
    </div>
  );
};

export default Search;
