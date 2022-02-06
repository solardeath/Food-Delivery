import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3027/3027212.png"
        alt="fast-food"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="fi fi-rr-marker absolute-center location-icon"></i>
              <div>Bangalore</div>
            </div>
            <i className="fi fi-rr-caret-down absolute-center "></i>
          </div>
          <div className="location-search-seperator"></div>
          <div className="header-searchBar">
            <i className="fi fi-rr-search absolute-center search-icon"></i>
            <input
              placeholder="Search for restaurant, cuisine or a dish"
              className="search-input"
            />
          </div>
          </div>
          <div className="profile-wrapper">
            <img
              src="https://img.icons8.com/office/344/person-male.png"
              alt="Profile"
              className="header-profile-image"
            />
            <span className="header-username">Pronnoy</span>
            <i className="fi fi-rr-angle-small-down absolute-center profile-options-icon"></i>
          </div>
      </div>
    </div>
  );
};

export default Header;
