import React from 'react';
import './Categories.css';

const Categories = () => (
  <div className="">
    <div className="header-title">
      <h1 className="d-flex justify-content-center">Latest Models</h1>
      <h2 className="d-flex justify-content-center text-secondary">Please Select Vespa model</h2>
    </div>
    <div className="container">
      <ul className="grid-container list-unstyled">
        <li className="item1">
          <div className="model-img div-height">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGGB5tZA3Ez35yJARjulu11ixynubSLQyG-CQ4X0LBqlayHjbvq02bA-t9N4IspQ5jmpM&usqp=CAU" alt="model logo" />
          </div>
          <div className="model-details">
            <h3>Vespa C20</h3>
            <div className="border-top1 my-3 d-flex justify-content-center" />
            <p className="text-secondary">
              Model details
            </p>
            <div className="social-media">
              <div>
                <a href="https://www.facebook.com/">
                  <img
                    className="soc-img"
                    src="https://t3.ftcdn.net/jpg/03/21/87/72/360_F_321877261_22BLEJLx609sAdV9VFphDxHxSl5JNfNG.jpg"
                    alt="linkedin"
                  />
                </a>
                <a href="https://www.twitter.com/">
                  <img
                    className="soc-img"
                    src="https://www.witness.org/wp-content/uploads/2018/11/5a2fe479cc45e43754640849.png"
                    alt="Twitter"
                  />
                </a>
                <a href="https://www.instagram.com/">
                  <img
                    className="soc-img"
                    src="https://hippocketwifi.com/wp-content/uploads/2016/11/instagram.png"
                    alt="instagram"
                  />
                </a>
              </div>
            </div>
          </div>
        </li>
        <li className="item2">
          <div className="model-img div-height">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQalZgzcznV0uOVYZcZ6QJpiTSp_6qx5quao0q1uNj0eqvM765U6q3j2fTzf2tpEF00n_g&usqp=CAU" alt="model logo" />
          </div>
          <div className="model-details">
            <h3>Vespa 946</h3>
            <div className="border-top1 my-3 d-flex justify-content-center" />
            <p className="text-secondary">
              Model details
            </p>
            <div className="social-media">
              <div>
                <a href="https://www.facebook.com/">
                  <img
                    className="soc-img"
                    src="https://t3.ftcdn.net/jpg/03/21/87/72/360_F_321877261_22BLEJLx609sAdV9VFphDxHxSl5JNfNG.jpg"
                    alt="linkedin"
                  />
                </a>
                <a href="https://www.twitter.com/">
                  <img
                    className="soc-img"
                    src="https://www.witness.org/wp-content/uploads/2018/11/5a2fe479cc45e43754640849.png"
                    alt="Twitter"
                  />
                </a>
                <a href="https://www.instagram.com/">
                  <img
                    className="soc-img"
                    src="https://hippocketwifi.com/wp-content/uploads/2016/11/instagram.png"
                    alt="instagram"
                  />
                </a>
              </div>
            </div>
          </div>
        </li>
        <li className="item3">
          <div className="model-img div-height">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn76hiKCFum-n4D_GybKtOxxWdWz9cAtB9YpCp8rDUFUXHiYzL8boUfRQ9cFDWizV-ULc&usqp=CAU" alt="model logo" />
          </div>
          <div className="model-details">
            <h3>Vespa 820</h3>
            <div className="border-top1 my-3 d-flex justify-content-center" />
            <p className="text-secondary">
              Model details
            </p>
            <div className="social-media">
              <div>
                <a href="https://www.facebook.com/">
                  <img
                    className="soc-img"
                    src="https://t3.ftcdn.net/jpg/03/21/87/72/360_F_321877261_22BLEJLx609sAdV9VFphDxHxSl5JNfNG.jpg"
                    alt="linkedin"
                  />
                </a>
                <a href="https://www.twitter.com/">
                  <img
                    className="soc-img"
                    src="https://www.witness.org/wp-content/uploads/2018/11/5a2fe479cc45e43754640849.png"
                    alt="Twitter"
                  />
                </a>
                <a href="https://www.instagram.com/">
                  <img
                    className="soc-img"
                    src="https://hippocketwifi.com/wp-content/uploads/2016/11/instagram.png"
                    alt="instagram"
                  />
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default Categories;
