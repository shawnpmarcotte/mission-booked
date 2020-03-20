import React, { useState } from "react";
import SmartSearch from "./SmartSearch";

class Search extends React.Component {
  //const [location, setLocation] = useState(null);
  //const [category, setCategory] = useState(null);

  constructor(props) {
    super(props);
    localStorage.setItem("userId", props.userId);

    this.state = {
      location: "",
      category: ""
    };
  }

  setLocation = location => {
    this.setState({ location: location });
  };

  setCategory = category => {
    this.setState({ category: category });
  };

  handleSearch = () => {
    const queryParams = [
      ["location", this.state.location && this.state.location.value],
      ["category", this.state.category && this.state.category.value]
    ].reduce((acc, [paramName, paramValue]) => {
      if (!paramValue) return acc;
      const param = `${paramName}=${paramValue}`;
      return acc ? `${acc}&${param}` : `?${param}`;
    }, "");

    Turbolinks.visit(`/events${queryParams}`);
  };

  render() {
    console.log(localStorage.getItem("userId"));
    return (
      <div>
        <SmartSearch
          placeholder="City"
          value={this.state.location}
          className="search_form_cty"
          onChange={this.setLocation}
          options={[
            { value: "Miami", label: "Miami" },
            { value: "Doral", label: "Doral" },
            { value: "Key Biscayne", label: "Key Biscayne" }
          ]}
          value={this.state.location}
        />
        <SmartSearch
          placeholder="Type of Event"
          className="search_form"
          options={[
            { value: "Animals", label: "Animals" },
            { value: "Environment", label: "Environment" },
            { value: "Youth", label: "Youth" }
          ]}
          onChange={this.setCategory}
          value={this.state.category}
        />
        <input
          onClick={this.handleSearch}
          type="submit"
          value="Find Events"
          className="search_submit"
        />
      </div>
    );
  }
}

export default Search;
