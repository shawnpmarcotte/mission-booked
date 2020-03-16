import React, { useState, useEffect } from 'react'

const ActiveFilterButton_Category = props => {
  console.log(props.filters)

  const handleResetFilter = () => {
    props.setFilters({ category: '' })
  }

  return (
    <button onClick={handleResetFilter} class="active_filter_button">
      {props.filters.category}
      <i class="remove glyphicon glyphicon-remove-sign glyphicon-white"></i>
    </button>
  )
}

export default ActiveFilterButton_Category
