import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom-image-crop.css";
import Form from "react-bootstrap/Form";
import { FormControl,Row,Col} from "react-bootstrap";
import MultiCrops from "react-multi-crops";
import axios from "axios";
import { getBase64Image } from "./ResuableUtils";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "react-bootstrap";

const MultiUploadComp = () => {
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [imgHeight, setImgHeight] = useState();
  const [imgWidth, setImgWidth] = useState();
  const [label, setLabel] = useState("");
  const [description, setDescription] = useState("");
  const [floor, setFloor] = useState("");
  const [section, setSection] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [videoFilePath, setVideoFilePath] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const types = ["video/avi", "video/mp4", "image/png"];
  const canvasRef = useRef();
  const videoRef = useRef();

  // IMAGE ZONING SECTION
  const [image, setImage] = useState(null);
  const [coordinates, setCoordinates] = useState([]);
  const [showZone1, setShowZone1] = useState(false);
  const [showZone, setShowZone] = useState(false);
  const [showFrame, setShowFrame] = useState(false);

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
      setShowZone(true);
      setShowZone1(true);
    }
  };

  const deleteCoordinate = (coordinate, index, coordinates) => {
    setCoordinates(coordinates);
  };

  const setImgDimensions = (e) => {
    setImgWidth(e.currentTarget.width);
    setImgHeight(e.currentTarget.height);
  };

  const handleOnChange = (e) => {
    console.log(e.target.files[0]);
    console.log(e.target.id);
    var image = document.getElementsByName("zoneimg")[e.target.id];
    image.src = URL.createObjectURL(e.target.files[0]);
    console.log(image);
    console.log(getBase64Image(image));
  };
  const onImgLoad = (e) => {};

  const saveCords = async (event) => {
    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        console.log(`${loaded}kb of ${total}kb | ${percent}%`);

        if (percent < 100) {
          setUploadPercentage(percent);
        }
      },
    };
    await axios
      .post("http://38.17.52.145:8010/api/video/", {
        video: file.name,
        user: "aniss",
        label: label,
        description: description,
        floor: floor,
        section: section,
        image: image,
        zone: coordinates.map((cord, e) => ({
          zone_id: e + 1,
          zone_name: document.getElementsByName("zone")[e].value,
          zone_image: getBase64Image(document.getElementsByName("zoneimg")[e]),
          x: cord.x,
          y: cord.y,
          width: cord.width,
          height: cord.height,
        })),
        options,
      })
      .then((res) => {
        console.log(res);
        setUploadPercentage(100, () => {
          setTimeout(() => {
            setUploadPercentage(0);
          }, 1000);
        });
      })
      .catch((err) => {
        console.log(err.response.data);
      });

    const data = new FormData();
    data.append("file", file);
    axios
      .post("http://38.17.52.145:8010/api/upload/", data, options)
      .then((res) => {
        console.log(res);
        setUploadPercentage(100, () => {
          setTimeout(() => {
            setUploadPercentage(0);
          }, 1000);
        });
        navigate("../Videos", { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setShowError(true);
      });
  };

  const next = async (e) => {
    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        console.log(`${loaded}kb of ${total}kb | ${percent}%`);
        if (percent < 100) {
          setUploadPercentage(percent);
        }
      },
    };
    await axios
      .post("http://38.17.52.145:8010/api/video/", {
        video: file.name,
        user: "aniss",
        label: label,
        description: description,
        floor: floor,
        section: section,
        image: image,
        zone: coordinates.map((cord, e) => ({
          zone_id: e + 1,
          zone_name: document.getElementsByName("zone")[e].value,
          zone_image: getBase64Image(document.getElementsByName("zoneimg")[e]),
          x: cord.x,
          y: cord.y,
          width: cord.width,
          height: cord.height,
        })),
        options,
      })
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err.response.data);
      });

    const data = new FormData();
    data.append("file", file);
    axios
      .post("http://38.17.52.145:8010/api/upload/", data, options)
      .then((res) => {
        console.log(res);
        navigate(0);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    setShowForm(!showForm);
    if (selected && types.includes(selected.type)) {
      setVideoFilePath(URL.createObjectURL(e.target.files[0]));
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select a video file (.mp4 or .avi)");
    }
  };

  const zone = async (e) => {
    setShowFrame(true);
    canvasRef.current.width = videoRef.current.videoWidth;
    canvasRef.current.height = videoRef.current.videoHeight;
    canvasRef.current
      .getContext("2d")
      .drawImage(
        videoRef.current,
        0,
        0,
        videoRef.current.videoWidth,
        videoRef.current.videoHeight
      );
    const newCanvas = document.getElementById("canvas");
    const newCtx = newCanvas.getContext("2d");
    newCtx.drawImage(
      videoRef.current,
      0,
      0,
      videoRef.current.videoWidth,
      videoRef.current.videoHeight
    );
    setLabel(document.getElementsByName("label")[0].value);
    setSection(document.getElementsByName("section")[0].value);
    setFloor(document.getElementsByName("floor")[0].value);
    await setImage(document.getElementsByName("mainPhoto")[0].toDataURL());
  };

  return (
    <div className="container-md" align="center">
      <h1>Upload your video or videos</h1>
      <form>
        <input id="file" type="file" onChange={changeHandler} />
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div></div>}
        </div>

        {showForm && (
          <div className="rowC">
            <div>
              <div className="player-wrapper">
                <video
                  id="vid"
                  autoPlay
                  loop
                  url={videoFilePath}
                  src={videoFilePath}
                  ref={videoRef}
                  controls
                  style={{ width: "640px", height: "360px" }}
                />
              </div>
              <canvas
                hidden
                name="mainPhoto"
                id="canvas"
                ref={canvasRef}
                style={{ width: "1270px", height: "720px", overflow: "auto" }}
              ></canvas>
            </div>
            <div style={{ marginLeft: `200px` }}>
              <div>
                <Form.Label>Label</Form.Label>
                <FormControl
                  type="text"
                  name="label"
                  Required="true"
                  onChange={(event) => setLabel(event.target.value)}
                  value={label}
                />
              </div>
              <div>
                <label>Description</label>
                <FormControl
                  type="text"
                  name="desc"
                  onChange={(event) => setDescription(event.target.value)}
                  value={description}
                />
              </div>
              <div>
                <label>floor</label>
                <FormControl
                  type="text"
                  name="floor"
                  onChange={(event) => setFloor(event.target.value)}
                  value={floor}
                />
              </div>
              <div>
                <label>Section</label>
                <FormControl
                  type="text"
                  name="section"
                  onChange={(event) => setSection(event.target.value)}
                  value={section}
                />
              </div>
              <br></br>
              <div>
                <Button onClick={zone}> save and start zoning </Button>
              </div>
            </div>
          </div>
        )}
        {showFrame === true && (
          <div>
            <MultiCrops
              width="640px"
              height="360px"
              id="multi"
              name="imgg"
              src={image}
              coordinates={coordinates}
              onChange={changeCoordinate}
              onDelete={deleteCoordinate}
              onLoad={(e) => setImgDimensions(e)}
            />
            {showZone === true && (
              <div className="rowC">
                {coordinates.map((cord, e) => (
                  <div class="card " style={{ margin: "10px" }}>
                    <div class="container">
                      <div>
                        <p>zone:{e + 1}</p>
                        <div>
                          <label>name:</label>
                          <input
                            type="text"
                            class="card-subtitle mb-2 text-muted"
                            name="zone"
                          ></input>
                        </div>
                        <input
                          id={e}
                          accept="image/*"
                          type="file"
                          onChange={handleOnChange}
                        />
                        <div>
                          <img
                            alt="Zone Icon"
                            name="zoneimg"
                            onLoad={onImgLoad}
                          />
                        </div>
                        <Row>
                          <Col>
                        <p class="card-text">x:{cord.x}</p>
                        <p class="card-text">y:{cord.y}</p></Col>
                        <Col>
                        <p class="card-text">width:{cord.width}</p>
                        <p class="card-text">height:{cord.height}</p></Col></Row>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </form>
      {showZone1 === true && (
        <div>
          <button
            class="btn-round btn-fill btn btn-info"
            onClick={next}
            style={{ borderRadius: "50px", margin: "10px" }}
          >
            {" "}
            Upload next video{" "}
          </button>

          <button
            class="btn-round btn-fill btn btn-info"
            onClick={saveCords}
            style={{ borderRadius: "50px", margin: "10px" }}
          >
            {" "}
            Finish uploading{" "}
          </button>
        </div>
      )}
      {uploadPercentage > 0 && (
        <ProgressBar
          now={uploadPercentage}
          active
          label={`${uploadPercentage}%`}
        />
      )}
      {showError === true && <p>Error uploading</p>}
    </div>
  );
};

export default MultiUploadComp;
