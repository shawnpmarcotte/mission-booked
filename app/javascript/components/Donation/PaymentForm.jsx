import React, { useState } from "react";
import "react-credit-cards/es/styles-compiled.css";
import Cards from "react-credit-cards";
import validators from "./validators";
import ThankYou from "./ThankPage";
import TextField from '@material-ui/core/TextField';
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"


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
}))


const PaymentForm = ({ results, handleChange, term }) => {
  const classes = useStyles()

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
    console.log("worked");

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
      ) : (<><Cards
        cvc={formData.cvc}
        expiry={formData.expiry}
        focus={formData.focus}
        name={formData.name}
        number={formData.number}
      />
      <div className={classes.paper}>
     <Container component='main' maxWidth='xs'>
      <form onSubmit={handleSubmit} className={classes.form}> 
        <TextField id="outlined-basic" label="Card Number" variant="outlined" 
          type="number"
          name="number"
          placeholder="Card Number"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          error={errors.number ? true : false}
          helperText={errors.number}
          fullWidth
          style={{marginBottom: "20px"}}
          
          />
             <TextField id="outlined-basic" label="Full Name" variant="outlined" 
           type="text"
           name="name"
           placeholder="Full Name"
           onChange={handleInputChange}
           onFocus={handleInputFocus}
        
           error={errors.name ? true : false}
           helperText={errors.name}
          fullWidth
          style={{marginBottom: "20px"}}
          
          />
            <TextField id="outlined-basic" label="Expiration Date" variant="outlined" 
               type="text"
               name="expiry"
               placeholder="Valid thru"
               error={errors.expiry ? true : false}
               helperText={errors.expiry}
               onChange={handleInputChange}
               onFocus={handleInputFocus}
          fullWidth
          style={{marginBottom: "20px"}}
          
          />
   

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
        {errors.lastName && <p>{errors.lastName}</p>}
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
            {errors.term && <p>{errors.term}</p>}
          </div>
        </div>
        <button type="submit"  className={classes.submit}>Submit</button>
      </form>
      </Container>
      </div>
      </>)}
      
    </div>
  );
};

export default PaymentForm;
