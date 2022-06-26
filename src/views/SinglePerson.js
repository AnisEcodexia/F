import React from "react";
import "./custom-css.css";
import Chartist from "chartist";
import ChartistGraph from "react-chartist";
import { Col, Card } from "react-bootstrap";
const SinglePerson = () => {
  return (
    <div>
      <div class="row">
        <figure>
          <img
            class="card-img-top"
            src={require("assets/img/person31.png").default}
            alt="Card image cap"
            style={{ height: "300px", width: "150px", margin: "20px" }}
          ></img>
          <figcaption align="center">Person id:3</figcaption>
        </figure>
        <Col>
          {" "}
          Other pictures
          <img
            class="card-img-top"
            src={require("assets/img/person32.png").default}
            alt="Card image cap"
            style={{ height: "180px", width: "90px", margin: "20px" }}
          />
          <img
            class="card-img-top"
            src={require("assets/img/person33.png").default}
            alt="Card image cap"
            style={{ height: "180px", width: "90px", margin: "20px" }}
          />
          <img
            class="card-img-top"
            src={require("assets/img/person34.png").default}
            alt="Card image cap"
            style={{ height: "180px", width: "90px", margin: "20px" }}
          />
        </Col>
      </div>{" "}
      <Card>
        <Card.Header>
          <Card.Title as="h4">Time Spent per zone</Card.Title>
          <p className="card-category"></p>
        </Card.Header>
        <Card.Body>
          <div className="ct-chart ct-perfect-fourth" id="chartPreferences">
            <ChartistGraph
              data={{
                labels: ["40%", "20%", "40%"],
                series: [40, 20, 40],
              }}
              type="Pie"
            />
          </div>
          <div className="legend">
            <i className="fas fa-circle text-info"></i>
            Nike <i className="fas fa-circle text-danger"></i>
            Gucci <i className="fas fa-circle text-warning"></i>
            La coste
          </div>
        
        </Card.Body>
      </Card>
      <Card>
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
              Description
            </p>
          </div>
          <div class="card-footer text-muted">Appears at 7.2</div>
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
            Description
            </p>
          </div>
          <div class="card-footer text-muted">Appears at 1.2</div>
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
            Description
            </p>
          </div>
          <div class="card-footer text-muted">Appears at 5.6</div>
        </div>
      </div>
      </Card>
      
    </div>
  );
};
export default SinglePerson;
