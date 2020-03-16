import React, { useState, useEffect } from 'react'

const ActiveFilterButton_Date = props => {
  console.log(props.filters)

  const handleResetFilter = () => {
    props.setFilters({ date: '' })
  }

  return (
    <button onClick={handleResetFilter} class="active_filter_button">
      {props.filters.date}
      <i class="remove glyphicon glyphicon-remove-sign glyphicon-white"></i>
    </button>
  )
}

export default ActiveFilterButton_Date
