import React, { useState, useEffect } from "react";
import axios from "axios";
import Filters from "./Filters";
import EventModal from "./EventModal";
import EventCalentar from "./EventCalenar";

const Events = () => {
  const initalQueryParams = new URLSearchParams(location.search);
  const [results, setResults] = useState([]); // order matters in arrays
  const [filters, setFilters] = useState({
    ...(initalQueryParams.get("location") && {
      city_state: initalQueryParams.get("location")
    }),
    ...(initalQueryParams.get("category") && {
      category: initalQueryParams.get("category")
    })
  }); //Object BC it holds a lot of keys and orders don't matter
  const [calendarView, setCalendarView] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  useEffect(() => {
    fetchEventData();
  }, []); //the empty brakets are dependency arrays, used to break the infinite loop, and only make axios run one

  const openModalToggle = result => {
    setModalInfo(result);
  };

  const closeModalToggle = () => {
    setModalInfo({});
  };

  const getQueryParams = filters =>
    Object.keys(filters).reduce(
      (acc, param) =>
        acc
          ? `${acc}&${param}=${filters[param]}`
          : `${param}=${filters[param]}`,
      ""
    );

  const fetchEventData = () => {
    const queryParams = getQueryParams(filters);
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
    const updatedFilter = { ...filters, [filterType]: event.target.value };
    setFilters(updatedFilter);

    const queryParams = getQueryParams(updatedFilter);
    axios
      .get(`/events.json?${queryParams}`)
      .then(response => setResults(response.data));
  };
  const handleThumbnailView = () => {
    setCalendarView(false);
  };
  const handleCalendarView = () => {
    setCalendarView(true);
  };

  const handleViewMore = event => Turbolinks.visit(`/events/${event.id}`);
  // spread opperator to map through the filters and maintain them
  //"" [filterType]: "" this is known as a dynamic property, you can pass a string or number
  // and it will assign that property on the object aka first argument on the rocket train
  // and the value of that property would be whatever we selected on the select tag.
  return (
    <>
      <div className="hero_image">
        <div className="filters_bar">
          {" "}
          {!calendarView ? (
            <>
              <Filters
                handleFilterSelect={handleFilterSelect}
                filters={filters}
                setFilters={setFilters}
              />
            </>
          ) : (
            <>
              <Filters
                handleFilterSelect={handleFilterSelect}
                filters={filters}
                setFilters={setFilters}
              />
              <p>Calendar View</p>
              <EventCalentar />
            </>
          )}{" "}
          <div className="viewTypes">
            <button id="thumbnailView" onClick={handleThumbnailView}>
              <h2 className="view_button">Thumbnail View</h2>
            </button>
            <button onClick={handleCalendarView} id="calendarView">
              <h2 className="view_button">Calendar View </h2>
            </button>
          </div>
        </div>
      </div>
      <div className="cards_container">
        {results.map(result => (
          <div
            className="card"
            key={result.id}
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={() => openModalToggle(result)}
          >
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="event-card-photo"></div>
                  <p>{result.name}</p>
                  <p>{result.date}</p>
                  <p>{result.city_state}</p>
                  <p className="event_about">{result.about} </p>
                </div>
                <div className="flip-card-back">
                  <p>back of card</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <EventModal
          name={modalInfo.name}
          about={modalInfo.about}
          id={modalInfo.id}
          handleViewMore={() => handleViewMore(modalInfo)}
          closeModalToggle={closeModalToggle}
        />
      </div>
    </>
  );
};
export default Events;
