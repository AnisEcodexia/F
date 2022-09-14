import React from "react";
import {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const VideoConfiguration = () => {
  const [imageData, setImageData] = useState([]);
  let { videoname } = useParams();

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

  return (
    <div class="container">
      <div class="rendered-form">
        <h1>Video Configuration</h1>
        <img
        align="center"
        width="800px"
        height="450px"
        id="a"
      ></img>
        <div class="formbuilder-text form-group field-text-1656204884948">
          <label for="text-1656204884948" class="formbuilder-text-label">label
                </label>
          <input
            type="text"
            class="form-control" value={ imageData.label }
          />
        </div>
        <div class="formbuilder-textarea form-group field-textarea-1656204886384">
          <label
            for="textarea-1656204886384"
            class="formbuilder-textarea-label"
          >
            Description
          </label>
          <textarea
          value={ imageData.description }
            type="textarea"
            class="form-control"
          ></textarea>
        </div>
        <div class="formbuilder-text form-group field-text-1656204887335">
          <label for="text-1656204887335" class="formbuilder-text-label">
            Floor{" "}
          </label>
          <input
          value={ imageData.floor }
            type="text"
            class="form-control"
          />
        </div>
        <div class="formbuilder-text form-group field-text-1656204887543">
          <label for="text-1656204887543" class="formbuilder-text-label">
            Section
          </label>
          <input
          value={ imageData.section }
            type="text"
            class="form-control"
          />
        </div>
        <div class="formbuilder-button form-group field-button-1656206925352">
          <button
            type="button"
            class="btn-default btn"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoConfiguration;
