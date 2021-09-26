import React from "react";
import "./Card.css"

function Card({singleData, handleAddedMedia}) {
    const {img, CEO, mediaName, Age, Founded, Revenue} = singleData;
  return (
    <>
      <div className="col-sm-12 col-md-4 my-3">
        <div className="custom-card text-center">
          <img src={img} className="custom-img" alt="..." />
          <div className="">
              <h4><span className="mb-2 fw-bold">Media:</span> {mediaName}</h4>
              <p><span className="mb-2 fw-bold">CEO:</span> {CEO}</p>
              <p><span className="mb-2 fw-bold">Age:</span> {Age}</p>
              <p><span className="mb-2 fw-bold">Founded:</span> {Founded}</p>
              <p><span className="mb-2 fw-bold">Revenue:</span> ${Revenue} Billion </p>
              <button className="btn custome-btn btn-lg mt-3" onClick={()=> handleAddedMedia(singleData)}><i className="fa fa-money"></i> Add Revenue</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
