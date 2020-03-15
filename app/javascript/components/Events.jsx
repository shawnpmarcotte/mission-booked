import React, { useState } from "react";
import axios from "axios";

const Events = () => {
  const [results, setResults] = useState([]);
  const [term, setTerm] = useState("");
  const handleChange = event => {
    const fieldTerm = event.target.value.trim();
    axios
      .get(`/events.json?term=${fieldTerm}`)
      .then(response => {
        setTerm(fieldTerm);
        setResults(response.data);
      })
      .catch(error => {
        console.log(error.response);
      });
  };
  return (
    <div>
      <label htmlFor="term">Search</label>
      <input type="search" name="term" value={term} onChange={handleChange} />
      {results.length > 0 && term.length > 0 && (
        <div>
          <h3>Results</h3>
          {results.map((result, i) => {
            return (
              <p key={i}>
                <a href={result.location}> {result.name}</a>
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Events;
