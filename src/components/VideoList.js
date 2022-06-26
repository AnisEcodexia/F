import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const VideoList = () => {
  const [data, setData] = useState([]);
  let { username } = useParams();
  let { navigate } = useNavigate();
  useEffect(() => {
    const fetchImage = async () => {
      await fetch(`https://cbe7-196-64-150-113.eu.ngrok.io/api/user/aniss`)
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
    <li class="list-group-item">
      <Link to={`/admin/Videos/${vid.video}`}>{vid.video}</Link>
      <br />
    </li>
  ));

  return (
    <div>
      <center>
        <ul class="list-group list-group-flush">{dispImageZones}</ul>
      </center>
    </div>
  );
};

export default VideoList;
