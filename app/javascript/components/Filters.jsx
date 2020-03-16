import React from 'react'
import ActiveFilterButton_Date from './ActiveFilterButton_Date'
import ActiveFilterButton_Category from './ActiveFilterButton_Category'
import ActiveFilterButton_Location from './ActiveFilterButton_Location'

const Filters = props => {
  //we came here to type props after we typed line 35 in Events
  console.log('this is the props', props)
  console.log(props.filters.date)
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div>
        {props.filters.date ? (
          <ActiveFilterButton_Date
            filters={props.filters}
            setFilters={props.setFilters}
          />
        ) : (
          <>
            <label>Date</label>

            <select onChange={props.handleFilterSelect('date')}>
              <option>Date</option>
              <option value="Today">Today</option>
              <option value="This Week">This Week</option>
              <option value="This Month">This Month</option>
            </select>
          </>
        )}
      </div>

      <div>
        {props.filters.category ? (
          <ActiveFilterButton_Category
            filters={props.filters}
            setFilters={props.setFilters}
          />
        ) : (
          <>
            <label>Category</label>
            <select
              onChange={props.handleFilterSelect('category')}
              class="filter_select"
            >
              <option>Select</option>
              <option value="Animals">Animals</option>
              <option value="Environment">Environment</option>
              <option value="Homelessness">Homelessness</option>
              <option value="Rebuilding">Rebuilding</option>
              <option value="Youth">Youth</option>
            </select>
          </>
        )}
      </div>
      <div>
        {props.filters.city_state ? (
          <ActiveFilterButton_Location
            filters={props.filters}
            setFilters={props.setFilters}
          />
        ) : (
          <>
            <label>Locations</label>
            <select
              onChange={props.handleFilterSelect('city_state')}
              class="filter_select"
            >
              <option>Select</option>
              <option value="Miami">Miami</option>
              <option value="Doral">Doral</option>
              <option value="Ft. Lauderdale">Ft. Lauderdale</option>
              <option value="Key Bisayne">Key Bisayne</option>
            </select>
          </>
        )}
      </div>
    </div>
  )
}

export default Filters
