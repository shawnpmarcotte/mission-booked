import React from "react";
import PaymentForm from "./PaymentForm";

const DonationForm = () => {
  return (
    <>
      <h1>Donate</h1>
      <div>
        <p>
          "No time to spare? You can still make a difference!
          <br />
          Donate any amount you are comfortable with to a partner organization
          of your choice.
          <br />
          No gift is too small to make an impact on your community."
        </p>
      </div>
      <PaymentForm />
    </>
  );
};

export default DonationForm;
