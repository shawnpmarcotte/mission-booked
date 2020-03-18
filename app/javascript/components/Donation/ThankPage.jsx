import React, { useState } from "react";

const ThankYou = props => {
  console.log(props);
  return (
    <>
      <div>Your donation was successfully submitted!</div>
      <a href="/donations">
        <button>Make another Donation</button>
      </a>
    </>
  );
};

export default ThankYou;
