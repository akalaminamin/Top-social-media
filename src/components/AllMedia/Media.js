import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Sidebar from "../Sidebar/Sidebar";
import "./Media.css";

function Media() {
  const [data, setData] = useState([]);
  const [media, setMedia] = useState([]);
  useEffect(() => {
    fetch("./FakeData.json")
      .then((resp) => resp.json())
      .then((data) => setData(data));
  }, []);
  // Handle added new media
  const handleAddedMedia = (singleMedia) => {
    let newMediaArray = [...media, singleMedia];
    setMedia(newMediaArray);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-9">
            <div className="row">
              {data.map((singleData) => (
                <Card
                  handleAddedMedia={handleAddedMedia}
                  key={singleData.id}
                  singleData={singleData}
                ></Card>
              ))}
            </div>
          </div>
          <div className="col-md-3 sidebar">
            <Sidebar mediaLength={media.length} media={media}></Sidebar>
          </div>
        </div>
      </div>
    </>
  );
}

export default Media;
