import React, { useState, useEffect } from "react";
import axios from "axios";
import Filters from "./Filters";

const Events = () => {
  const searchParams = new URLSearchParams(location.search);
  const [results, setResults] = useState([]); // order matters in arrays
  const [filters, setFilters] = useState({
    ...(searchParams.get("category") && {
      category: searchParams.get("category")
    }),
    ...(searchParams.get("location") && {
      city_state: searchParams.get("location")
    })
  }); //Object BC it holds a lot of keys and orders don't matter
  const [calendarView, setCalendarView] = useState(false);

  useEffect(() => {
    fetchEventData();
  }, []); //the empty brakets are dependency arrays, used to break the infinite loop, and only make axios run one

  const fetchEventData = () => {
    const queryParams = Object.keys(filters).reduce(
      (acc, param) =>
        acc
          ? `${acc}&${param}=${filters[param]}`
          : `${param}=${filters[param]}`,
      ""
    );
    axios
      .get(`/events.json?${queryParams}`)
      .then(response => {
        setResults(response.data);
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  // partial applycation = type of function
  // curried = partial application + the other partial application aka double rockets
  const handleFilterSelect = filterType => event => {
    const { value } = event.target;
    const updatedFilter = { ...filters, [filterType]: value };

    if (!value) delete updatedFilter[filterType];

    setFilters(updatedFilter);

    const queryParams = Object.keys(updatedFilter).reduce(
      (acc, param) =>
        acc
          ? `${acc}&${param}=${updatedFilter[param]}`
          : `${param}=${updatedFilter[param]}`,
      ""
    );
    axios.get(`/events.json?${queryParams}`).then(response => {
      console.log("i am grabbing new results with these filters", {
        updatedFilter,
        queryParams,
        response
      });
      setResults(response.data);
    });
  };
  const handleThumbnailView = () => {
    setCalendarView(false);
  };
  const handleCalendarView = () => {
    setCalendarView(true);
  };
  // spread opperator to map through the filters and maintain them
  //"" [filterType]: "" this is known as a dynamic property, you can pass a string or number
  // and it will assign that property on the object aka first argument on the rocket train
  // and the value of that property would be whatever we selected on the select tag.
  return (
    <>
      <h1> Events </h1>
      <div class="viewTypes">
        <button id="thumbnailView" onClick={handleThumbnailView}>
          <h2>Thumbnail View</h2>
        </button>
        <button onClick={handleCalendarView} id="calendarView">
          <h2>Calendar View </h2>
        </button>
      </div>
      {!calendarView ? (
        <>
          <Filters
            handleFilterSelect={handleFilterSelect}
            filters={filters}
            setFilters={setFilters}
          />

          <div class="cards_container">
            {results.map(result => (
              <div class="card" key={result.id}>
                <p>{result.name}</p>
                <p>{result.date}</p>
                <p>{result.city_state}</p>
                <p class="event_about">{result.about}</p>
                <p>
                  <a href="#">View More</a>
                </p>
              </div>
            ))}{" "}
          </div>
        </>
      ) : (
        <>
          <Filters
            handleFilterSelect={handleFilterSelect}
            filters={filters}
            setFilters={setFilters}
          />
          <p>Calendar View</p>
        </>
      )}
    </>
  );
};
export default Events;
