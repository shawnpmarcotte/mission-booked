import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filters from './Filters'
import EventModal from './EventModal'
import EventCalendar from './EventCalendar'


const Events = () => {
  const initalQueryParams = new URLSearchParams(location.search)
  const [results, setResults] = useState([]) // order matters in arrays
  const [filters, setFilters] = useState({
    ...(initalQueryParams.get('location') && {
      city_state: initalQueryParams.get('location')
    }),
    ...(initalQueryParams.get('category') && {
      category: initalQueryParams.get('category')
    })
  }) //Object BC it holds a lot of keys and orders don't matter
  const [calendarView, setCalendarView] = useState(false)
  const [modalInfo, setModalInfo] = useState({})

  useEffect(() => {
    fetchEventData()
  }, []) //the empty brakets are dependency arrays, used to break the infinite loop, and only make axios run one

  const openModalToggle = result => {
    setModalInfo(result)
  }

  const closeModalToggle = () => {
    setModalInfo({})
  }

  const getQueryParams = filters =>
    Object.keys(filters).reduce(
      (acc, param) =>
        acc
          ? `${acc}&${param}=${filters[param]}`
          : `${param}=${filters[param]}`,
      ''
    )

  const fetchEventData = () => {
    const queryParams = getQueryParams(filters)
    axios
      .get(`/events.json?${queryParams}`)
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

    const queryParams = getQueryParams(updatedFilter)
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

  const handleViewMore = event => Turbolinks.visit(`/events/${event.id}`)
  // spread opperator to map through the filters and maintain them
  //"" [filterType]: "" this is known as a dynamic property, you can pass a string or number
  // and it will assign that property on the object aka first argument on the rocket train
  // and the value of that property would be whatever we selected on the select tag.
  return (
    <>
    {
      calendarView === false ? (
    <>
      <div class="hero_image">
        <div class="filters_bar">
          {/* {' '} */}
            <>
              <Filters
                handleFilterSelect={handleFilterSelect}
                filters={filters}
                setFilters={setFilters}
              />
            </>
          {/* {' '} */}
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
          <div
            class="card"
            key={result.id}
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={() => openModalToggle(result)}
          >
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div class="event-card-photo"></div>
                  <p>{result.name}</p>
                  <p>{result.date}</p>
                  <p>{result.city_state}</p>
                  <p class="event_about">{result.about} </p>
                </div>
                <div class="flip-card-back">
                  <p>back of card</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <EventModal
          name={modalInfo.name}
          about={modalInfo.about}
          id = {modalInfo.id}
          handleViewMore={() => handleViewMore(modalInfo)}
          closeModalToggle={closeModalToggle}
        />
      </div>
      </>
      ) : (
        <>
        <div class="hero_image">
        <div class="filters_bar">
          {' '}
            <>
              <Filters
                handleFilterSelect={handleFilterSelect}
                filters={filters}
                setFilters={setFilters}
              />
            </>
          {' '}
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
      <p>Calendar view</p>
      <EventCalendar/>
      </>
      )}
    </>
  )
}
export default Events

