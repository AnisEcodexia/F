import React from "react";

import { Button, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MultiCrops from "react-multi-crops";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { Card } from "react-bootstrap";
const VideoZoning = () => {
  var tot = 0;
  const [cords, setCords] = useState([]);
  const [imgHeight, setImgHeight] = useState();
  const [imgWidth, setImgWidth] = useState();
  const [imageData, setImageData] = useState([]);
  let { videoname } = useParams();
  const [coordinates, setCoordinates] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      await fetch(`http://38.17.52.145:8010/api/user/aniss/${videoname}`)
        .then((response) => response.json())
        .then((item) => {
          console.log(item);
          setCords(item.zone)
          var img = document.getElementById("a");
          img.src = item.image;
          setImageData(item);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchImage();
  }, []);

  const changeCoordinate = (coordinate, index, coordinates) => {
    if (
      coordinate.x + coordinate.width > imgWidth ||
      coordinate.y + coordinate.height > imgHeight ||
      coordinate.y < 0 ||
      coordinate.x < 0
    ) {
      return;
    } else {
      setCoordinates(coordinates);
      
    }
  };

  const deleteCoordinate = (coordinate, index, coordinates) => {
    setCoordinates(coordinates);
  };
  const setImgDimensions = (e) => {
    setImgWidth(e.currentTarget.width);
    setImgHeight(e.currentTarget.height);
    setCoordinates(cords);
    setShowForm(true)
  };
  const zone = (e) => {
    var image = document.getElementById("a");
    var img = new Image();
    img.src = image.src;
    console.log(image.src);
    
    {
      cords.map((zone, e) => {
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.rect(zone.x, zone.y, zone.width, zone.height);
        ctx.stroke();
      });
    }
  };

  return (
    <div>
      <div className="container">
        <img
          hidden
          align="center"
          width="640px"
          height="360px"
          id="a"
        ></img>
        
        <MultiCrops
          width="640px"
          height="360px"
          id="multi"
          name="imgg"
          src={imageData.image}
          coordinates={coordinates}
          onChange={changeCoordinate}
          onDelete={deleteCoordinate}
          onLoad={(e) => setImgDimensions(e)}
        />
        {showForm === true && (
          <Row>
            {cords.map((cord, e) => (
              <Card style={{ margin: "20px" }}>
                <div class="card-body">
                  <p>Id:{e + 1}</p>
                  <p>name:{cord.zone_name}</p>
                  <img src={cord.zone_image}></img>
                  <p>x:{cord.x}</p>
                  <p>y:{cord.y}</p>
                  <p>width:{cord.width}</p>
                  <p>height:{cord.height}</p>
                </div>
              </Card>
            ))}
          </Row>
        )}
      </div>
      
      <div align="center">
        <Button style={{ margin: "10px" }}>Save new zones</Button>{" "}
      </div>
    </div>
  );
};

export default VideoZoning;
