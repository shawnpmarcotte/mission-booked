import React, { useState, useEffect } from 'react'

const ActiveFilterButton_Location = props => {
  console.log(props.filters)

  const handleResetFilter = () => {
    props.setFilters({ city_state: '' })
  }

  return (
    <button onClick={handleResetFilter} class="active_filter_button">
      {props.filters.city_state}
      <i class="remove glyphicon glyphicon-remove-sign glyphicon-white"></i>
    </button>
  )
}

export default ActiveFilterButton_Location
