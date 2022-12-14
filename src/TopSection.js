import React from "react";
import "./App.css";

function TopSection() {
  return (
    <>
      <div className="top-section">
        <div className="header_div">
          <img id="profile__img" src={require("./profile__img.png")}></img>
          <div className="overlay">
            <img id="ig-icon" src={require("./Icon.png")} />
          </div>
        </div>
        <img id="share-icon" src={require("./share-icon.png")} />
        <div id="mobile_menu">
          <img id="mobile-btn" src={require("./mobile-btn.png")} />
        </div>

        <p id="twitter">@BeLikeMarv</p>
        <p id="slack">Marvellous Adesanya</p>
      </div>
    </>
  );
}

export default TopSection;
