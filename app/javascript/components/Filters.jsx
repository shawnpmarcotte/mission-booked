import React from "react";

const Filters = props => {
  //we came here to type props after we typed line 35 in Events
  console.log("this is the props", props);
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <label>Date</label>
        <select onChange={props.handleFilterSelect("date")}>
          <option>Select</option>
          <option value="Today">Today</option>
          <option value="This Week">This Week</option>
          <option value="This Month">This Month</option>
        </select>
      </div>
      <div>
        <label>Category</label>
        <select onChange={props.handleFilterSelect("category")}>
          <option>Select</option>
          <option value="Animals">Animals</option>
          <option value="Environment">Environment</option>
          <option value="Homelessness">Homelessness</option>
          <option value="Rebuilding">Rebuilding</option>
          <option value="Youth">Youth</option>
        </select>
      </div>
      <div>
        <label>Locations</label>
        <select onChange={props.handleFilterSelect("city_state")}>
          <option>Select</option>
          <option value="Miami">Miami</option>
          <option value="Doral">Doral</option>
          <option value="Ft. Lauderdale">Ft. Lauderdale</option>
          <option value="Key Bisayne">Key Bisayne</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
