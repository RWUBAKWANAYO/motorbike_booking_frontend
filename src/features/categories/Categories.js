import React from 'react';
import './Categories.css';

const Categories = () => (
  <div className="">
    <h1>Latest Models</h1>
    <h2>Please Select Vespa model</h2>
    <div className="" />
    <div className="container">
      <ul className="grid-container list-unstyled">
        <li className="item1">
          <div className="model-img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGGB5tZA3Ez35yJARjulu11ixynubSLQyG-CQ4X0LBqlayHjbvq02bA-t9N4IspQ5jmpM&usqp=CAU" alt="model logo" />
          </div>
          <div className="model-details">
            <h3>Vespa C20</h3>
            <p>
              Model details
            </p>
            <div className="social-media">
              Social media links
            </div>
          </div>
        </li>
        <li className="item2">
          <div className="model-img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQalZgzcznV0uOVYZcZ6QJpiTSp_6qx5quao0q1uNj0eqvM765U6q3j2fTzf2tpEF00n_g&usqp=CAU" alt="model logo" />
          </div>
          <div className="model-details">
            <h3>Vespa 946</h3>
            <p>
              Model details
            </p>
            <div className="social-media">
              Social media links
            </div>
          </div>
        </li>
        <li className="item3">
          <div className="model-img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn76hiKCFum-n4D_GybKtOxxWdWz9cAtB9YpCp8rDUFUXHiYzL8boUfRQ9cFDWizV-ULc&usqp=CAU" alt="model logo" />
          </div>
          <div className="model-details">
            <h3>Vespa 820</h3>
            <p>
              Model details
            </p>
            <div className="social-media">
              Social media links
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default Categories;
