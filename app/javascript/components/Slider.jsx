import React from "react";
import img1 from "../../assets/images/pollutionslider.jpg";
import img2 from "../../assets/images/pollutionslider_after.jpg";
import ReactCompareImage from "react-compare-image";

const Slider = () => {
  return (
    <div>
      <div style={{ maxWidth: "640px" }}>
        <ReactCompareImage leftImage={img1} rightImage={img2} hover />
      </div>
    </div>
  );
};

export default Slider;
