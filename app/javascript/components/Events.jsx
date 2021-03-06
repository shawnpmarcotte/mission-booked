import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filters from './Filters'
import EventModal from './EventModal'
import EventCalendar from './EventCalendar'
import volunteer_placeholder from '../../assets/images/volunteer_placeholder'

const Events = () => {
  const initalQueryParams = new URLSearchParams(location.search)
  const [initialLocation, initialCategory] = [initalQueryParams.get('location'), initalQueryParams.get('category')]

  const [results, setResults] = useState([]) // order matters in arrays
  const [user, setUser] = useState({})
  const [filters, setFilters] = useState({
    ...(initialLocation && {
      city_state: { label: initialLocation, value: initialLocation }
    }),
    ...(initialCategory && {
      category: { label: initialCategory, value: initialCategory }
    })
  }) //Object BC it holds a lot of keys and orders don't matter
  const [calendarView, setCalendarView] = useState(false)
  const [modalInfo, setModalInfo] = useState({})

  const openModalToggle = result => {
    setModalInfo(result)
  }
  const closeModalToggle = () => {
    setModalInfo({})
  }
  const getQueryParams = filters =>
    Object.keys(filters).reduce(
      (acc, param) => {
        const paramValue = filters[param]
        if (!paramValue) return acc;

        const queryParams = `${param}=${paramValue.value}`
        return acc
          ? `${acc}&${queryParams}`
          : `${queryParams}`
      },
      ''
    )

  const fetchEvents = filterParams => axios
    .get(`/events.json?${filterParams}`)
    .then(response => {
      console.log('fetched events', { filterParams, response })
      setResults(response.data.all_data.events)
      setUser(response.data.all_data.user)
    })
    .catch(error => {
      console.log(error.response)
    })
  
  // partial applycation = type of function
  // curried = partial application + the other partial application aka double rockets

  const handleFilterSelect = filterType => selectedFilter => {
    console.log('selected filter', selectedFilter);
    const updatedFilter = { ...filters, [filterType]: selectedFilter }
    if (!selectedFilter) delete updatedFilter[filterType]
    setFilters(updatedFilter)
    const queryParams = getQueryParams(updatedFilter)
    fetchEvents(queryParams)
  }

  const handleThumbnailView = () => {
    setCalendarView(false)
  }

  const handleCalendarView = () => {
    setCalendarView(true)
  }

  const handleViewMore = event => Turbolinks.visit(`/events/${event.id}`)

  useEffect(() => {
    const filterParams = getQueryParams(filters)
    fetchEvents(filterParams)
  }, []) //the empty brakets are dependency arrays, used to break the infinite loop, and only make axios run one
  // spread opperator to map through the filters and maintain them
  //"" [filterType]: "" this is known as a dynamic property, you can pass a string or number
  // and it will assign that property on the object aka first argument on the rocket train
  // and the value of that property would be whatever we selected on the select tag.

  return (
    <>
      {calendarView === false ? (
        <>
          <div className="hero_image">
            <div className="filters_bar">
              {/* {' '} */}
              <>
                <Filters
                  handleFilterSelect={handleFilterSelect}
                  filters={filters}
                  setFilters={setFilters}
                />
              </>
              {/* {' '} */}
              <div className="viewTypes">
                <button id="thumbnailView_select" onClick={handleThumbnailView}>
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
                      <div className="event-card-photo">
                        <img src={result.mainphoto} class="resized-photo" />
                      </div>
                      <div className="card_text">
                        <div className="card_event_date">
                          {result.displaydate}
                        </div>
                        <div className="card_event_name">{result.name}</div>
                        <div className="card_footer">
                          <div className="card_event_city">
                            {result.city_state}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flip-card-back">
                      <div className="card-back-text">
                        <p className="card_event_about">{result.about} </p>
                        <div className="card_back_footer">Read More</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <EventModal
              name={modalInfo.name}
              about={modalInfo.about}
              id={modalInfo.id}
              mainphoto={modalInfo.mainphoto}
              displaydate={modalInfo.displaydate}
              location={modalInfo.location}
              moreinfo={modalInfo.moreinfo}
              instagram={modalInfo.instagram}
              facebook={modalInfo.facebook}
              photo1={modalInfo.photo1}
              photo2={modalInfo.photo2}
              photo3={modalInfo.photo3}
              user_id={user.id}
              handleViewMore={() => handleViewMore(modalInfo)}
              closeModalToggle={closeModalToggle}
            />
          </div>
        </>
      ) : (
        <>
          <div className="hero_image">
            <div className="filters_bar">
              {' '}
              <>
                <Filters
                  handleFilterSelect={handleFilterSelect}
                  filters={filters}
                  setFilters={setFilters}
                />
              </>{' '}
              <div className="viewTypes">
                <button id="thumbnailView" onClick={handleThumbnailView}>
                  <h2 className="view_button">Thumbnail View</h2>
                </button>
                <button onClick={handleCalendarView} id="calendarView_select">
                  <h2 className="view_button">Calendar View </h2>
                </button>
              </div>
            </div>
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <EventCalendar modal={modalInfo} />
          </div>
        </>
      )}
    </>
  )
}
export default Events
