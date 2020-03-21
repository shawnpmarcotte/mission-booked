import React, { useState, useEffect } from "react";
import axios from "axios";
import PaymentForm from "./PaymentForm";
import "./Donation.css"

const Organizations = () => {
  const [results, setResults] = useState(null);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = () => {
    axios
      .get(`/donations.json`)
      .then(response => {
        console.log(response);
        setResults(response.data);
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  const handleChange = event => {
    const fieldTerm = event.target.value;
    setTerm(fieldTerm);
  };
  return (
    <div class="content-donation">
      <div>
      <div id="placehoderForImage"></div>
      <h1>Donate</h1>
      <div class="donation-text">
        <p>
          "No time to spare? You can still make a difference!
          <br />
          Donate any amount you are comfortable with to a partner organization
          of your choice.
          <br />
          No gift is too small to make an impact on your community."
        </p>
      </div>
      </div>
      <PaymentForm results={results} handleChange={handleChange} term={term} />
    </div>
  );
};

export default Organizations;
