import React, {useState, useEffect } from "react";
import axios from "axios";
import Filters from "./Filters";

const Events = () => {
const [results, setResults]=useState([]) // order matters in arrays
const [filters, setFilters]=useState({}) //Object BC it holds a lot of keys and orders don't matter

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
  // partial applycation = type of function
  // curried = partial application + the other partial application aka double rockets
  const handleFilterSelect = (filterType) => (event) => {
    const updatedFilter = { ...filters, [filterType]: event.target.value }
    setFilters(updatedFilter)
    const queryParams = Object.keys(updatedFilter).reduce((acc, param) => acc ? `${acc}&${param}=${updatedFilter[param]}` : `${param}=${updatedFilter[param]}` ,'')
    axios.get(`/events.json?${queryParams}`)
    .then(response => setResults(response.data))

  }
  // spread opperator to map through the filters and maintain them
  //"" [filterType]: "" this is known as a dynamic property, you can pass a string or number
  // and it will assign that property on the object aka first argument on the rocket train
  // and the value of that property would be whatever we selected on the select tag.

  return(
    <div>
      <Filters handleFilterSelect={handleFilterSelect} /> {/* the curlies around handleFilterSelect represent the end of html, and the start of js */}
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
