import React from "react";
import "./Sidebar.css";

function RightSide({ mediaLength, media }) {
  let totalRevenue = 0;
  for (let singleMedia of media) {
    totalRevenue = totalRevenue + singleMedia.Revenue;
  }
  return (
    <div>
      <div className="sidebar-container mt-3">
        <div>
          <h5>Added Media: {mediaLength}</h5>
          <p>Total Revenue: ${totalRevenue.toFixed(2)} Billion</p>
          <h4 className ="ceo">CEO</h4>
          {media.map((singleMedia) => {
            return (
              <div className="added-content">
                <div className="img">
                  <img
                    className="added-img"
                    src={singleMedia.img}
                    alt="social media"
                  />
                </div>
                <h5>{singleMedia.CEO}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RightSide;
