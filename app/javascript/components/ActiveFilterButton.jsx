import React from "react";

const ActiveFilterButton = props => {
  const handleResetFilter = () => {
    props.onClear({ target: { value: "" } });
  };

  return (
    <button onClick={handleResetFilter} class="active_filter_button">
      {props.display}
      <i class="remove glyphicon glyphicon-remove-sign glyphicon-white"></i>
    </button>
  );
};

export default ActiveFilterButton;
