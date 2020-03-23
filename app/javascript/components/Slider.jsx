import React from "react";
import img1 from "../../assets/images/pollutionslider.jpg";
import img2 from "../../assets/images/pollutionslider_after.jpg";
import ReactCompareImage from "react-compare-image";

const Slider = () => {
  return (
    <div style={{ marginLeft: "25rem", padding: "20px" }}>
      <div style={{ maxWidth: "60rem" }}>
        <ReactCompareImage leftImage={img1} rightImage={img2} hover />
      </div>
    </div>
  );
};

export default Slider;
