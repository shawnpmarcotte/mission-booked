import React, { useState } from "react";
import "react-credit-cards/es/styles-compiled.css";
import Cards from "react-credit-cards";
import validators from "./validators";
import ThankYou from "./ThankPage";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  form: {
    textAlign: "center",
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(2),
    position: "relative"
  },
  logo: {
    width: 80,
    margin: "20px auto 20px auto"
  },
  paper: {
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    position: "relative"
  },
  progress: {
    position: "absolute"
  },
  customError: {
    color: "red",
    fontSize: "0.8rem",
    width: "100%",
    position: "absolute"
  }
}));

const PaymentForm = ({ results, handleChange, term }) => {
  const classes = useStyles();

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
  const [valid, setValid] = useState(false);

  const handleInputFocus = field => e => {
    setFormData({ ...formData, [field]: e.target.name });
  };

  const handleInputChange = e => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setErrors(validators(formData, term));
    setValid(true);
  };

  return (
    <div id="PaymentForm">
      {valid === true &&
      !errors.number &&
      !errors.name &&
      !errors.expiry &&
      !errors.cvc &&
      !errors.lastName &&
      !errors.term &&
      !errors.firstName &&
      !errors.donation ? (
        <ThankYou valid={valid} />
      ) : (
        <>
          <Cards
            cvc={formData.cvc}
            expiry={formData.expiry}
            focus={formData.focus}
            name={formData.name}
            number={formData.number}
          />
          <div className={classes.paper}>
            <Container component="main" maxWidth="xs">
              <form onSubmit={handleSubmit} className={classes.form}>
                <TextField
                  id="outlined-basic"
                  label="Card Number"
                  variant="outlined"
                  type="number"
                  name="number"
                  placeholder="xxxx-xxxx-xxxx-4142"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  error={errors.number ? true : false}
                  helperText={errors.number}
                  fullWidth
                  style={{ marginBottom: "20px" }}
                />
                <TextField
                  id="outlined-basic"
                  label="Full Name"
                  variant="outlined"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  error={errors.name ? true : false}
                  helperText={errors.name}
                  fullWidth
                  style={{ marginBottom: "20px" }}
                />
                <TextField
                  id="outlined-basic"
                  label="Expiration Date"
                  variant="outlined"
                  type="text"
                  name="expiry"
                  placeholder="12/22"
                  error={errors.expiry ? true : false}
                  helperText={errors.expiry}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  fullWidth
                  style={{ marginBottom: "20px" }}
                />
                <TextField
                  id="outlined-basic"
                  label="CVC"
                  variant="outlined"
                  type="number"
                  name="cvc"
                  placeholder="123"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  fullWidth
                  style={{ marginBottom: "20px" }}
                />
                {errors.cvc && <p>{errors.cvc}</p>}
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  placeholder="First Name"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  fullWidth
                  style={{ marginBottom: "20px" }}
                />
                {errors.firstName && <p>{errors.firstName}</p>}
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  placeholder="Last Name"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  fullWidth
                  style={{ marginBottom: "20px" }}
                />
                <br />
                {errors.lastName && <p>{errors.lastName}</p>}
                <TextField
                  id="outlined-basic"
                  label="Donation Amount"
                  variant="outlined"
                  type="number"
                  name="donation"
                  placeholder="$ Donation Amount"
                  value={formData.donation}
                  step="0.01"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  fullWidth
                  style={{ marginBottom: "20px" }}
                />
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
                  <button type="submit" className={classes.submit}>
                      Submit
                  </button>
                  <br />
                  <div>
                    {results &&
                      results
                        .filter(result =>
                          result.name.toLowerCase().includes(term.toLowerCase())
                        )
                        .map((result, i) => {
                          return (
                            <div key={i}>
                              <h1 className="orgDonationCards">
                                {result.name}
                              </h1>
                            </div>
                          );
                        })}
                  
                    {errors.term && <p>{errors.term}</p>}
                  </div>
                </div>
              </form>
            </Container>
          </div>
        </>
      )}
    </div>
  );
};

export default PaymentForm;
