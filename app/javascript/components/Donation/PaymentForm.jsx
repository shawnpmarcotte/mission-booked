import React, { useState } from "react";
import "react-credit-cards/es/styles-compiled.css";
import Cards from "react-credit-cards";

const PaymentForm = () => {
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

  const validators = formData => {
    let errors = {};
    if (!formData.number) {
      errors.number = "Card Number is required";
    } else if (formData.number.length < 15 || formData.number.length > 16) {
      errors.number = "Card Number is invalid";
    }
    if (!formData.name) {
      errors.name = "Name must not be empty";
    }
    if (!formData.cvc) {
      errors.cvc = "CVC must not be empty";
    } else if (formData.cvc < 3 && formData.cvc > 3) {
      errors.cvc = "CVC is invalid";
    }

    if (!formData.expiry) {
      errors.expiry = "expiration date must not be empty";
    } else if (
      !/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(formData.expiry)
    ) {
      errors.expiry = "Invalid Expiration Date";
    }
    if (!formData.firstName) {
      errors.firstName = "First name must not be empty";
    }
    if (!formData.lastName) {
      errors.lastName = "Last name must not be empty";
    }
    if (!formData.donation) {
      errors.donation = "Donation Amount must not be empty";
    }
    return errors;
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PaymentForm;
