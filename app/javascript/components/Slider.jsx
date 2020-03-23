import React from 'react'
import img1 from '../../assets/images/pollutionslider.jpg'
import img2 from '../../assets/images/pollutionslider_after.jpg'
import ReactCompareImage from 'react-compare-image'
const Slider = () => {
  return (
    <div
      style={{
        margin: 'auto',
        padding: '20px',
        width: '50%'
      }}
    >
      <div style={{ maxWidth: '60rem' }}>
        <ReactCompareImage leftImage={img1} rightImage={img2} hover />
      </div>
    </div>
  )
}
export default Slider
