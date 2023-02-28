import React from 'react';
import bg1 from '../../assets/images/desktop/bg1.png';
import bg3 from '../../assets/images/desktop/bg3.png';
import bg4 from '../../assets/images/desktop/bg4.png';

const Slide = () => (
  <div className="slide-cont">
    <div className="slide-wrapper">
      <div className="slide-img slide-img1"><img src={bg1} alt="motor advert" /></div>
      <div className="slide-img slide-img3"><img src={bg3} alt="motor advert" /></div>
      <div className="slide-img slide-img4"><img src={bg4} alt="motor advert" /></div>
    </div>
  </div>
);

export default Slide;
