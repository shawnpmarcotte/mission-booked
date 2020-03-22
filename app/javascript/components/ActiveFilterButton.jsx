import React from "react";

const ActiveFilterButton = props => {
  const handleResetFilter = () => {
    props.onClear();
  };

  return (
    <button onClick={handleResetFilter} className="active_filter_button">
      {props.display}
      <i className="remove glyphicon glyphicon-remove-sign glyphicon-white"></i>
    </button>
  );
};

export default ActiveFilterButton;
