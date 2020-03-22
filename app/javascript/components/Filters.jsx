import React from 'react'
import SmartSearch from './SmartSearch';

const DATES = [
  { value: 'Today', label: 'Today' },
  { value: 'This Week', label: 'This Week' },
  { value: 'This Month', label: 'This Month' },
]

const CATEGORIES = [
  { value: "Animals", label: "Animals" },
  { value: "Environment", label: "Environment" },
  { value: "Youth", label: "Youth" },
  { value: "People", label: "People" },
  { value: "Rebuild", label: "Rebuild" }
]

const LOCATIONS = [
  { value: "Miami", label: "Miami" },
  { value: "Doral", label: "Doral" },
  { value: "Key Biscayne", label: "Key Biscayne" },
  { value: "Boca Raton", label: "Boca Raton" },
  { value: "Miramar", label: "Miramar" },
  { value: "Homestead", label: "Homestead" }
]

const Filters = props =>  (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div className="filter_button"> 
          <SmartSearch
            className='event-select'
            classNamePrefix="event-select"
            placeholder='Date'
            options={DATES}
            value={props.filters.date}
            onChange={props.handleFilterSelect('date')}
          />
      </div>

      <div className="filter_button">
        <SmartSearch
          className='event-select'
          classNamePrefix="event-select"
          placeholder='Category'
          options={CATEGORIES}
          value={props.filters.category}
          onChange={props.handleFilterSelect('category')}
        />
      </div>
      <div className="filter_button">
        <SmartSearch
          className='event-select'
          classNamePrefix="event-select"
          placeholder='Location'
          options={LOCATIONS}
          value={props.filters.city_state}
          onChange={props.handleFilterSelect('city_state')}
        />
      </div>
    </div>
  )

export default Filters
