import React from "react";
import ActiveFilterButton from "./ActiveFilterButton";

const Filters = props => {
  //we came here to type props after we typed line 35 in Events

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        {props.filters.date ? (
          <ActiveFilterButton
            display={props.filters.date}
            filters={props.filters}
            onClear={props.handleFilterSelect("date")}
          />
        ) : (
          <>
            <label>Date</label>

            <select onChange={props.handleFilterSelect("date")}>
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
          <ActiveFilterButton
            display={props.filters.category}
            onClear={props.handleFilterSelect("category")}
          />
        ) : (
          <>
            <label>Category</label>
            <select
              onChange={props.handleFilterSelect("category")}
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
          <ActiveFilterButton
            display={props.filters.city_state}
            onClear={props.handleFilterSelect("city_state")}
          />
        ) : (
          <>
            <label>Locations</label>
            <select
              onChange={props.handleFilterSelect("city_state")}
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
  );
};

export default Filters;
