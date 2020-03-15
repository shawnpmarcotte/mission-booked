import React, { useState } from "react";
import "react-credit-cards/es/styles-compiled.css";
import Cards from "react-credit-cards";
import validators from "./validators";

const PaymentForm = ({ results, handleChange, term }) => {
  const INITIAL_STATE = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
    firstName: "",
    lastName: "",
    donation: ""
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});

  const handleInputFocus = field => e => {
    setFormData({ ...formData, [field]: e.target.name });
  };

  const handleInputChange = e => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setErrors(validators(formData));
    console.log("worked");
  };

  return (
    <div id="PaymentForm">
      <Cards
        cvc={formData.cvc}
        expiry={formData.expiry}
        focus={formData.focus}
        name={formData.name}
        number={formData.number}
      />
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="number"
          placeholder="Card Number"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        {errors.number ? <p>{errors.number}</p> : ""}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        {errors.name && <p>{errors.name}</p>}
        <input
          type="text"
          name="expiry"
          placeholder="Valid thru"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        {errors && <p>{errors.expiry}</p>}
        <input
          type="number"
          name="cvc"
          placeholder="CVC"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <br />
        {errors.cvc && <p>{errors.cvc}</p>}
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleInputChange}
          value={formData.firstName}
        />
        <br />
        {errors.firstName && <p>{errors.firstName}</p>}
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleInputChange}
          value={formData.lastName}
        />
        <br />
        {errors.firstName && <p>{errors.firstName}</p>}
        <br />
        <input
          type="number"
          name="donation"
          placeholder="$ Donation Amount"
          onChange={handleInputChange}
          value={formData.donation}
          step="0.01"
        />
        <br />
        {errors.donation && <p>{errors.donation}</p>}
        <br />
        <div>
          <label htmlFor="term">Search</label>
          <br />
          <input
            type="search"
            name="term"
            value={term}
            onChange={handleChange}
          />
          <br />
          <div>
            <h3>Results</h3>
            {results &&
              results
                .filter(result =>
                  result.name.toLowerCase().includes(term.toLowerCase())
                )
                .map((result, i) => {
                  return (
                    <p key={i}>
                      <h1>{result.name}</h1>
                    </p>
                  );
                })}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PaymentForm;
