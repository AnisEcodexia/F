import React from "react";
import { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { Button } from "react-bootstrap";
const SingleVideo = () => {
  var tot = 0;
  const [imageData, setImageData] = useState([]);
  const [intersections, setIntersections] = useState([]);
  const [detections, setDetections] = useState([]);
  let { videoname } = useParams();

  const [showForm, setShowForm] = useState(false);

  const zone = (e) => {
    var image = document.getElementById("a");
    var img = new Image();
    img.src = image.src;
    console.log(image.src);
    var c = document.getElementById("canvas3");
    var ctx = c.getContext("2d");
    setShowForm(true);
    ctx.drawImage(img, 0, 0, image.width, image.height);
    {
      imageData.zone.map((zone, e) => {
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.rect(zone.x, zone.y, zone.width, zone.height);
        ctx.stroke();
      });
    }
  };

  useEffect(() => {
    const fethIntersection = async () => {
      await fetch(`http://38.17.52.145:8010/api/intersection/${videoname}`)
        .then((response) => response.json())
        .then((item) => {
          console.log(item.zones);
          setIntersections(item.zones);
          console.log(intersections);
         
        });
    };
    fethIntersection();
  }, [intersections]);

  useEffect(() => {
    const fetchDetection = async () => {
      await fetch(`http://38.17.52.145:8010/api/detection/${videoname}`)
        .then((response) => response.json())
        .then((item) => {
          console.log(item);
          setDetections(item.detection);
          console.log(item);
          $("table").DataTable();
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchDetection();
  }, [detections]);

  useEffect(() => {
    const fetchImage = async () => {
      await fetch(`http://38.17.52.145:8010/api/user/aniss/${videoname}`)
        .then((response) => response.json())
        .then((item) => {
          console.log(item);
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

  const detectionsTable = intersections.map((vid, i) => {
    return (
      <div>
        <table class="table-hover table-striped table A">
          <thead>
            <tr>
              <th>Person Id</th>
              <th>First appearance</th>
              <th>Last appearance</th>
            </tr>
          </thead>
          <tbody>
            {detections.map((detection, i) => (
              <tr>
                <td> {detection.person_id}</td>
                <td> {(detection.detail[0].frame / 30).toFixed(2)}</td>
                <td>
                  {" "}
                  {(
                    detection.detail[detection.detail.length - 1].frame / 30
                  ).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  });

  const intersectionsTable2 = intersections.map((zone, i) => {
    return (
      <div>
        <table class="table-hover table-striped table B" >
          <thead>
            <tr>
              <th>Person Id</th>
              <th>Entry time</th>
              <th>Exit time</th>
              <th>Time spent</th>
              <th>Zone</th>
            </tr>
          </thead>
          <tbody>
            {zone.intersection.map((inter, subindex) => (
              <tr>
                <td key={subindex}> {inter.person_id}</td>
                <td>{inter.entry_time}</td>
                <td>{inter.exit_time}</td>
                <td>{inter.time_spent.toFixed(2)}</td>
                <td>{zone.zone_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  });

  const intersectionsTable1 = intersections.map((vid, i) => {
    return (
      <div>
        <table class="table-hover table-striped table B">
          <thead>
            <tr>
              <th>zone_id</th>
              <th>zone image</th>
              <th>People now</th>
              <th>Total people</th>
              <th>Average time</th>
            </tr>
          </thead>
          <tbody>
            {intersections.map(function (zone, i) {
              tot = 0;
              return (
                <tr>
                  <td>{zone.zone_id}</td>
                  <td align="center">
                    <img
                      width="100px"
                      height="100px"
                      src={zone.zone_image}
                    ></img>
                  </td>
                  <td>{zone.people_now}</td>
                  <td>{zone.total_people}</td>
                  {zone.intersection.map((inter, index) => {
                    tot += inter.time_spent;
                  })}
                  <td>{tot / zone.intersection.length}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  });

  return (
    <div class="container-md">
      <img
        align="center"
        hidden
        width="640px"
        height="360px"
        id="a"
        onLoad={zone}
      ></img>
      <canvas width="640px" height="360px" id="canvas3"></canvas>
      {showForm === true && (
        <div className="rowC">
          {imageData.zone.map((cord, e) => (
            <div>
              <div class="container" style={{ width: "20%" }}>
                <div class="card-body">
                  <p>zone:{e + 1}</p>
                  <p>name:{cord.zone_name}</p>
                  <img src={cord.zone_image}></img>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div>
        {intersectionsTable2}
        {intersectionsTable1}
          {detectionsTable}
      </div>
    </div>
  );
};

export default SingleVideo;
