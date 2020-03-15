import React, { useState, useEffect } from 'react'

const ActiveFilterButton = props => {
  console.log(props.filters)

  const handleResetFilter = () => {
    props.setFilters({ date: '' })
  }

  return (
    <span class="tag label label-info">
      <a>
        <button onClick={handleResetFilter}>Rest</button>
        <span>{props.filters.date}</span>
        <i class="remove glyphicon glyphicon-remove-sign glyphicon-white"></i>
      </a>
    </span>
  )
}

export default ActiveFilterButton
