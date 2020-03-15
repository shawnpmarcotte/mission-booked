import React from "react";

const DonationForm = ({ handleInputChange }) => {
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
      <label>First Name</label>
      <br />
      <input type="text" handleInputChange={handleInputChange("firstName")} />
      <br />
      <label>Last Name</label>
      <br />
      <input type="text" handleInputChange={handleInputChange("lastName")} />
      <br />
      <label>Donation</label>
      <br />
      <input
        type="number"
        handleInputChange={handleInputChange("donation")}
        step="0.01"
      />
    </>
  );
};

export default DonationForm;
