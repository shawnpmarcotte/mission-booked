import React, {useState, useEffect } from "react";
import axios from "axios";

const Events = () => {
const [results, setResults]=useState([])

useEffect(() => {
  fetchEventData()
}, []) //the empty brakets are dependency arrays, used to break the infinite loop, and only make axios run one

const fetchEventData = () => {
  axios
    .get("/events.json")
    .then(response => {
      setResults(response.data)
    })
    .catch(error => {
      console.log(error.response);
    });
  };
  return(
    <div>
      {
        results.map((result) => (
          <div key={result.id}>
          <p>{result.name}</p>
          <p>{result.date}</p>
          <p>{result.about}</p>
          <p>{result.city_state}</p>
          </div>
        ))
      }
    </div>
  ) 
};
export default Events;
