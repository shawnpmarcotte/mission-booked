import React, { useState } from "react";
import SmartSearch from "./SmartSearch";

const Search = () => {
  const [location, setLocation] = useState(null);
  const [category, setCategory] = useState(null);

  const handleSearch = () => {
    const queryParams = [
      ["location", location && location.value],
      ["category", category && category.value]
    ].reduce((acc, [paramName, paramValue]) => {
      if (!paramValue) return acc;
      const param = `${paramName}=${paramValue}`;
      return acc ? `${acc}&${param}` : `?${param}`;
    }, "");

    Turbolinks.visit(`/events${queryParams}`);
  };

  return (
    <div>
      <SmartSearch
        placeholder="City"
        value={location}
        className="search_form_cty"
        onChange={setLocation}
        options={[
          { value: "Miami", label: "Miami" },
          { value: "Doral", label: "Doral" },
          { value: "Key Biscayne", label: "Key Biscayne" }
        ]}
        value={location}
      />
      <SmartSearch
        placeholder="Type of Event"
        className="search_form"
        options={[
          { value: "Animals", label: "Animals" },
          { value: "Environment", label: "Environment" },
          { value: "Youth", label: "Youth" }
        ]}
        onChange={setCategory}
        value={category}
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
