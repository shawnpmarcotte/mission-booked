
import React, { Component } from 'react'

import DztImageGalleryComponent from 'reactjs-image-gallery'

class Gallery extends Component {

  render() {

    var data = [{
      url: 'https://news.miami.edu/rsmas/_assets/images/images-stories/2018/09/ocean-clean-up-940x529.jpg',
      title: 'OCEAN CLEANUP',
      thumbUrl: 'https://news.miami.edu/rsmas/_assets/images/images-stories/2018/09/ocean-clean-up-940x529.jpg',
    },
    {
      url: 'https://balance180.org/wp-content/uploads/2015/04/Volunteer.jpg',
      title: 'Balance 180',
      thumbUrl: 'https://balance180.org/wp-content/uploads/2015/04/Volunteer.jpg'
    },
    {
      url: 'https://cdn.allabout.city/singapore/wp-content/uploads/2019/06/FOREST-CLEANUP-AT-PULAU-UBIN-750x501.jpg',
      title: 'Forest Clean Up',
      thumbUrl: 'https://cdn.allabout.city/singapore/wp-content/uploads/2019/06/FOREST-CLEANUP-AT-PULAU-UBIN-750x501.jpg',
    },
    {
      url: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1190,w_2121,x_0,y_33/f_auto,q_auto,w_1100/v1583164013/shape/mentalfloss/546495-gettyimages-1094085668.jpg',
      title: 'Beach Clean up SoFlo',
      thumbUrl: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1190,w_2121,x_0,y_33/f_auto,q_auto,w_1100/v1583164013/shape/mentalfloss/546495-gettyimages-1094085668.jpg',
    },
    {
      url: 'https://churchhealth.org/wp-content/uploads/2016/09/Perea-Volunteer-for-Kids.png',
      title: 'Read For Miami',
      thumbUrl: 'https://churchhealth.org/wp-content/uploads/2016/09/Perea-Volunteer-for-Kids.png',
    },
    {
      url: 'https://sanfranciscoparksalliance.org/wp-content/uploads/2019/10/gardening-2518377_1920.jpg',
      title: 'Blue river',
      thumbUrl: 'https://sanfranciscoparksalliance.org/wp-content/uploads/2019/10/gardening-2518377_1920.jpg',
    },
    {
      url: 'https://s26643.pcdn.co/wp-content/uploads/2018/07/FTLAUDERDALE07-23-18-3.jpg',
      title: '4Ocean',
      thumbUrl: 'https://s26643.pcdn.co/wp-content/uploads/2018/07/FTLAUDERDALE07-23-18-3.jpg',
    },
    {
      url: 'https://communityfarms.org/images/made/assets/images/photos/CrobMob_June4_2017_960_540_80.jpg',
      title: 'Farmers Meet',
      thumbUrl: 'https://communityfarms.org/images/made/assets/images/photos/CrobMob_June4_2017_960_540_80.jpg'
    },
    {
      url: 'https://amp.thenational.ae/image/policy:1.872053:1560002169/tr08-June-oceans-day.jpg?f=4x3&q=1.0&w=1024&$p$f$q$w=9d70eaa',
      title: 'World Ocean Day',
      thumbUrl: 'https://amp.thenational.ae/image/policy:1.872053:1560002169/tr08-June-oceans-day.jpg?f=4x3&q=1.0&w=1024&$p$f$q$w=9d70eaa',
    },
    {
      url: 'https://2fzh2t3mk3pn2ljy3d47cevj-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/individuals-and-groups-1024x683.jpg',
      title: 'Food Bank Project',
      thumbUrl: 'https://2fzh2t3mk3pn2ljy3d47cevj-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/individuals-and-groups-1024x683.jpg',
    },
    {
      url: 'https://i1.wp.com/seaturtlespacecoast.org/wp-content/uploads/2019/10/IMG_2610.jpg?fit=1024%2C768&ssl=1',
      title: 'Sea Turtle Habitat Restoration',
      thumbUrl: 'https://i1.wp.com/seaturtlespacecoast.org/wp-content/uploads/2019/10/IMG_2610.jpg?fit=1024%2C768&ssl=1',
    },
    {
      url: 'https://www.gannett-cdn.com/-mm-/7505811d7190374f923558841681a3ad23bbdb82/c=340-0-5660-4000/local/-/media/2017/07/13/Naples/Naples/636355484088089003-DSC-2363.JPG?width=540&height=405&fit=crop',
      title: 'Aquatic Therapy',
      thumbUrl: 'https://www.gannett-cdn.com/-mm-/7505811d7190374f923558841681a3ad23bbdb82/c=340-0-5660-4000/local/-/media/2017/07/13/Naples/Naples/636355484088089003-DSC-2363.JPG?width=540&height=405&fit=crop',
    },
    {
      url: 'https://s3.amazonaws.com/njfamily-images/wp-content/uploads/2019/07/NJF_WEB_Kids-volunteer.jpg',
      title: 'Tasty Treats',
      thumbUrl: 'https://s3.amazonaws.com/njfamily-images/wp-content/uploads/2019/07/NJF_WEB_Kids-volunteer.jpg',
    },
    {
      url: 'https://www.caring4others.org/wp-content/uploads/2016/12/Volunteers.jpg',
      title: 'Caring For Others',
      thumbUrl: 'https://www.caring4others.org/wp-content/uploads/2016/12/Volunteers.jpg',
    },
    {
      url: 'https://d17iwsuzrl2kpx.cloudfront.net/2018/05/volunteer-opportunities-abroad-holiday-seniors-retirees-costa-rica-nature-animals-environment-conservation.jpg',
      title: 'Giving Way',
      thumbUrl: 'https://d17iwsuzrl2kpx.cloudfront.net/2018/05/volunteer-opportunities-abroad-holiday-seniors-retirees-costa-rica-nature-animals-environment-conservation.jpg',
    },
    {
      url: 'https://seaturtleexploration.com/wp-content/uploads/2015/09/JessicaMeasure.jpg',
      title: 'Sea Turtle Exploration',
      thumbUrl: 'https://seaturtleexploration.com/wp-content/uploads/2015/09/JessicaMeasure.jpg',
    },
    {
      url: 'https://imgproxy.natucate.com/xX0uLJOoZF-YHNKpw3epSX_B584JB3F_Wfx8eAtBRVU/rs:fill/g:ce/w:1060/h:707/aHR0cHM6Ly93d3cubmF0dWNhdGUuY29tL21lZGlhL3BhZ2VzL3JlaXNlbi83NjViYzNlNC1mNzMxLTRmOWYtOGJkZS0zMTRjNzdmYTNkMWIvMTg0ODQ5Mzg0LTE1NTc5MjA2ODEvZnJlaXdpbGxpZ2VuYXJiZWl0LWZsb3JpZGEtdXNhLXRpZ2VyLW5hdHVjYXRlLmpwZw',
      title: 'Wild Life Rescue',
      thumbUrl: 'https://imgproxy.natucate.com/xX0uLJOoZF-YHNKpw3epSX_B584JB3F_Wfx8eAtBRVU/rs:fill/g:ce/w:1060/h:707/aHR0cHM6Ly93d3cubmF0dWNhdGUuY29tL21lZGlhL3BhZ2VzL3JlaXNlbi83NjViYzNlNC1mNzMxLTRmOWYtOGJkZS0zMTRjNzdmYTNkMWIvMTg0ODQ5Mzg0LTE1NTc5MjA2ODEvZnJlaXdpbGxpZ2VuYXJiZWl0LWZsb3JpZGEtdXNhLXRpZ2VyLW5hdHVjYXRlLmpwZw',
    },
    {
      url: 'https://indonesiaexpat.biz/wp-content/uploads/2019/10/aoc.jpg',
      title: 'OCEAN CLEANUP',
      thumbUrl: 'https://indonesiaexpat.biz/wp-content/uploads/2019/10/aoc.jpg',
    },
    {
      url: 'https://nmssanctuaries.blob.core.windows.net/sanctuaries-prod/media/archive/involved/volunteer-header.jpg',
      title: 'NOAA Volunteer',
      thumbUrl: 'https://nmssanctuaries.blob.core.windows.net/sanctuaries-prod/media/archive/involved/volunteer-header.jpg',
    },

    {
      url: 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Image-2018-06-14_10-35-12-037.jpeg?crop=0,0,4032,2217&wid=4000&hei=2200&scl=1.008',
      title: 'Nature Conservancy',
      thumbUrl: 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Image-2018-06-14_10-35-12-037.jpeg?crop=0,0,4032,2217&wid=4000&hei=2200&scl=1.008',
    }
    ];

    return (
      <div>
        <DztImageGalleryComponent
          images={data} />
      </div>
    )
  }

}
const GalleryWrapper = () => (
  <div id="root">
    <Gallery />
  </div>
);

export default GalleryWrapper;
