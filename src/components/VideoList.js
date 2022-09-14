import React from "react";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";

const VideoList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchImage = async () => {
      await fetch("http://38.17.52.145:8010/api/user/aniss")
        .then((response) => response.json())
        .then((item) => {
          setData(item);
          console.log(item);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchImage();
  }, []);

  const dispImageZones = data.map((vid, i) => (
    <div class="card col-sm-3" style={{ width: `400px`, margin: "20px" }}>
    <div class="card-header center">Floor {vid.floor} Section {vid.section}</div>
    <a href={`/user/Videos/${vid.video}`}>
    <img
      class="card-img-top"
      src={vid.image}
      alt="Card image cap"
    />
    </a>
    <div class="card-body">
      <p class="card-text">
      {vid.description}
      </p>
    </div>
    <a class="btn btn-primary" href={`/user/VideoConfiguration/${vid.video}`} role="button">Reconfigure Video</a>
    <a class="btn btn-primary" href={`/user/VideoZoning/${vid.video}`} role="button">Rezone Video </a>
    </div>
    
  ));

  return (
    <Row>

        {dispImageZones}
    </Row>
  );
};

export default VideoList;
