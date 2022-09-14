import React from "react";

const VideosDashboard = () => {
  return (
    <div>
      <h1>Camera List</h1>
      <h2>Configured Cameras</h2>
      <div class="row">
        <div class="card col-sm-3" style={{ width: `400px`, margin: "20px" }}>
          <div class="card-header center">Floor 1 Camera 1</div>
          <img
            class="card-img-top"
            src={require("assets/img/1.png").default}
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="card-footer text-muted">Uploaded 14/05/2022</div>
        </div>
        <div class="card col-sm-3" style={{ width: `400px`, margin: "20px" }}>
          <div class="card-header center">Floor 1 Camera 2</div>
          <img
            class="card-img-top"
            src={require("assets/img/1.png").default}
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="card-footer text-muted">Uploaded 15/05/2022</div>
        </div>
        <div class="card col-sm-3" style={{ width: `400px`, margin: "20px" }}>
          <div class="card-header center">Floor 1 Camera 3</div>
          <img
            class="card-img-top"
            src={require("assets/img/1.png").default}
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="card-footer text-muted">Uploaded 16/05/2022</div>
        </div>
      </div>
      <div class="row">
        <div class="card col-sm-3" style={{ width: `400px`, margin: "20px" }}>
          <div class="card-header center">Floor 2 Camera 1</div>
          <img
            class="card-img-top"
            src={require("assets/img/1.png").default}
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="card-footer text-muted">Uploaded 16/05/2022</div>
        </div>
        <div class="card col-sm-3" style={{ width: `400px`, margin: "20px" }}>
          <div class="card-header center">Floor 2 Camera 2</div>
          <img
            class="card-img-top"
            src={require("assets/img/1.png").default}
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="card-footer text-muted">Uploaded 20/05/2022</div>
        </div>
        <div class="card col-sm-3" style={{ width: `400px`, margin: "20px" }}>
          <div class="card-header center">Floor 3 Camera 1</div>
          <img
            class="card-img-top"
            src={require("assets/img/1.png").default}
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="card-footer text-muted">Uploaded 21/05/2022</div>
        </div>
      </div>
      <h2> Non Configured Cameras</h2>
      <div class="row">
        <div class="card col-sm-3" style={{ width: `400px`, margin: "20px" }}>
          <div class="card-header center">Undefined</div>
          <img
            class="card-img-top"
            src={require("assets/img/1.png").default}
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="card-footer text-muted">Uploaded 23/06/2022</div>
        </div>
        <div class="card col-sm-3" style={{ width: `400px`, margin: "20px" }}>
          <div class="card-header center">Undefined</div>
          <img
            class="card-img-top"
            src={require("assets/img/1.png").default}
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="card-footer text-muted">Uploaded 24/06/2022</div>
        </div>
        <div class="card col-sm-3" style={{ width: `400px`, margin: "20px" }}>
          <div class="card-header center">Undefined</div>
          <img
            class="card-img-top"
            src={require("assets/img/1.png").default}
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="card-footer text-muted">Uploaded 24/06/2022</div>
        </div>
      </div>
      <div class="row">
        <div class="card col-sm-3" style={{ width: `400px`, margin: "20px" }}>
          <div class="card-header center">Undefined</div>
          <img
            class="card-img-top"
            src={require("assets/img/1.png").default}
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">Write a short description</p>
          </div>
          <div class="card-footer text-muted">Uploaded 25/06/2022</div>
        </div>
        <div class="card col-sm-3" style={{ width: `400px`, margin: "20px" }}>
          <div class="card-header center">Undefined</div>
          <img
            class="card-img-top"
            src={require("assets/img/1.png").default}
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="card-footer text-muted">Uploaded 26/06/2022</div>
        </div>
        <div class="card col-sm-3" style={{ width: `400px`, margin: "20px" }}>
          <div class="card-header center">Undefined</div>
          <img
            class="card-img-top"
            src={require("assets/img/1.png").default}
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="card-footer text-muted">Uploaded 26/06/2022</div>
        </div>
      </div>
    </div>
  );
};

export default VideosDashboard;
