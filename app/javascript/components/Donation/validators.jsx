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
  } else if (!/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(formData.expiry)) {
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

export default validators;
