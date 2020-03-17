import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filters from './Filters'
const Events = () => {
  const [results, setResults] = useState([]) // order matters in arrays
  const [filters, setFilters] = useState({}) //Object BC it holds a lot of keys and orders don't matter
  const [calendarView, setCalendarView] = useState(false)

  useEffect(() => {
    fetchEventData()
  }, []) //the empty brakets are dependency arrays, used to break the infinite loop, and only make axios run one

  const fetchEventData = () => {
    axios
      .get('/events.json')
      .then(response => {
        setResults(response.data)
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  // partial applycation = type of function
  // curried = partial application + the other partial application aka double rockets
  const handleFilterSelect = filterType => event => {
    const updatedFilter = { ...filters, [filterType]: event.target.value }
    setFilters(updatedFilter)

    const queryParams = Object.keys(updatedFilter).reduce(
      (acc, param) =>
        acc
          ? `${acc}&${param}=${updatedFilter[param]}`
          : `${param}=${updatedFilter[param]}`,
      ''
    )
    axios
      .get(`/events.json?${queryParams}`)
      .then(response => setResults(response.data))
  }
  const handleThumbnailView = () => {
    setCalendarView(false)
  }
  const handleCalendarView = () => {
    setCalendarView(true)
  }
  // spread opperator to map through the filters and maintain them
  //"" [filterType]: "" this is known as a dynamic property, you can pass a string or number
  // and it will assign that property on the object aka first argument on the rocket train
  // and the value of that property would be whatever we selected on the select tag.
  return (
    <>
      <div class="hero_image">
        <div class="filters_bar">
          {' '}
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
            </>
          )}{' '}
          <div class="viewTypes">
            <button id="thumbnailView" onClick={handleThumbnailView}>
              <h2 class="view_button">Thumbnail View</h2>
            </button>
            <button onClick={handleCalendarView} id="calendarView">
              <h2 class="view_button">Calendar View </h2>
            </button>
          </div>
        </div>
      </div>
      <div class="cards_container">
        {results.map(result => (
          <div class="card" key={result.id}>
            <p>{result.name}</p>
            <p>{result.date}</p>
            <p>{result.city_state}</p>
            <p class="event_about">{result.about} </p>
            <p>
              <a href="#">View More</a>
            </p>
          </div>
        ))}{' '}
      </div>{' '}
    </>
  )
}
export default Events
