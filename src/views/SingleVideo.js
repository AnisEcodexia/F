import React from "react";
import { Button, Table, Card, Row, Container } from "react-bootstrap";
import ChartistGraph from "react-chartist";
import "./custom-css.css";

const SingleVideo = () => {
  return (
    <div>
      <div class="row">
        <div class="card col-sm-4" style={{ width: `400px`, margin: "20px" }}>
          <div class="card-header center">Floor 1 Left aisle Camera 1 </div>
          <img
            class="card-img-top"
            src={require("assets/img/1.png").default}
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">Label : Super Market x</p>
            <p class="card-text">Section : Left aisle</p>
            <p class="card-text">Floor : First</p>
            <p class="card-text">
              Description : Super market x first floor left aisle camera 1
            </p>
          </div>
          <div class="card-footer text-muted">Uploaded 14/05/2022</div>
        </div>
        <div
          class="container"
          style={{ height: `600px`, width: `600px`, margin: "20px" }}
        >
          <div
            class="rendered-form"
            style={{ height: `600px`, width: `600px`, margin: "20px" }}
          >
            <div class="formbuilder-checkbox-group form-group field-checkbox-group-1656258133220">
              <label
                for="checkbox-group-1656258133220"
                class="formbuilder-checkbox-group-label"
              ></label>
              <div class="checkbox-group">
                <div class="formbuilder-checkbox">
                  <input
                    name="checkbox-group-1656258133220[]"
                    access="false"
                    id="checkbox-group-1656258133220-0"
                    value="Person Counter"
                    type="checkbox"
                  />
                  <label for="checkbox-group-1656258133220-0">
                    Person Counter
                  </label>
                </div>
                <div class="formbuilder-checkbox">
                  <input
                    name="checkbox-group-1656258133220[]"
                    access="false"
                    id="checkbox-group-1656258133220-1"
                    value="Person bounding box"
                    type="checkbox"
                  />
                  <label for="checkbox-group-1656258133220-1">
                    Person bounding box
                  </label>
                </div>
                <div class="formbuilder-checkbox">
                  <input
                    name="checkbox-group-1656258133220[]"
                    access="false"
                    id="checkbox-group-1656258133220-2"
                    value="Historical trajectory "
                    type="checkbox"
                  />
                  <label for="checkbox-group-1656258133220-2">
                    Historical trajectory{" "}
                  </label>
                </div>
                <div class="formbuilder-checkbox">
                  <input
                    name="checkbox-group-1656258133220[]"
                    access="false"
                    id="checkbox-group-1656258133220-3"
                    value="Heatmap"
                    type="checkbox"
                  />
                  <label for="checkbox-group-1656258133220-3">Heatmap</label>
                </div>
                <div class="formbuilder-checkbox">
                  <input
                    name="checkbox-group-1656258133220[]"
                    access="false"
                    id="checkbox-group-1656258133220-4"
                    value="Zones"
                    type="checkbox"
                  />
                  <label for="checkbox-group-1656258133220-4">Zones</label>
                </div>
                <Button>Download Video</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <Card className="card-plain table-plain-bg">
          <Card.Header>
            <Card.Title as="h4">Video detections</Card.Title>
            <Row>
              <h4 style={{ width: "50%" }}>Total number of people : 4</h4>
              <h4>Average time spent : 3.8</h4>
            </Row>
          </Card.Header>
          <Card.Body className="table-full-width table-responsive px-0">
            <Table className="table-hover">
              <thead>
                <tr>
                  <th class="tg-dvpl">Id</th>
                  <th class="tg-0pky">Person Image</th>
                  <th class="tg-0pky">Entry Time</th>
                  <th class="tg-0pky">Exit Time</th>
                  <th class="tg-0lax">Time Spent</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="tg-0pky">1</td>
                  <td class="tg-0pky">
                    <img
                      style={{ height: `100px`, width: `50px` }}
                      src={require("assets/img/person_1.png").default}
                    ></img>
                  </td>
                  <td class="tg-0pky">1.5</td>
                  <td class="tg-uog8">7.6</td>
                  <td class="tg-0lax">6.1</td>
                </tr>
                <tr>
                  <td class="tg-0pky">2</td>
                  <td class="tg-0pky">
                    <img
                      style={{ height: `100px`, width: `50px` }}
                      src={require("assets/img/person_2.png").default}
                    ></img>
                  </td>
                  <td class="tg-0pky">1.5</td>
                  <td class="tg-uog8">7.0</td>
                  <td class="tg-0lax">6.0</td>
                </tr>
                <tr>
                  <td class="tg-0pky">3</td>
                  <td class="tg-0pky">
                    <img
                      style={{ height: `100px`, width: `50px` }}
                      src={require("assets/img/person_3.png").default}
                    ></img>
                  </td>
                  <td class="tg-0pky">2</td>
                  <td class="tg-uog8">2.9</td>
                  <td class="tg-0lax">0.9</td>
                </tr>
                <tr>
                  <td class="tg-0lax">4</td>
                  <td class="tg-0lax">
                    <img
                      style={{ height: `100px`, width: `50px` }}
                      src={require("assets/img/person_4.png").default}
                    ></img>
                  </td>
                  <td class="tg-0pky">3</td>
                  <td class="tg-uog8">5.5</td>
                  <td class="tg-0lax">2.5</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
        <Card className="card-plain table-plain-bg">
          <Card.Header>
            <Card.Title class="center" as="h2">
              Video Zones
            </Card.Title>
            <Row>
              <img
                src="https://logo.clearbit.com/gucci.com"
                style={{ width: "100px", height: "100px" }}
              ></img>
              <h4 style={{ width: "40%" }}>Total number of people : 3</h4>
              <h4 style={{ width: "40%" }}>Average time spent : 3</h4>
            </Row>
          </Card.Header>
          <Card.Body className="table-full-width table-responsive px-0">
            <Table className="table-hover">
              <thead>
                <tr>
                  <th class="tg-dvpl">Id</th>
                  <th class="tg-0pky">Person Image</th>
                  <th class="tg-0pky">Entry Time</th>
                  <th class="tg-0pky">Exit Time</th>
                  <th class="tg-0lax">Time Spent</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="tg-0pky">1</td>
                  <td class="tg-0pky">
                    <img
                      style={{ height: `100px`, width: `50px` }}
                      src={require("assets/img/person_1.png").default}
                    ></img>
                  </td>
                  <td class="tg-0pky">1.5</td>
                  <td class="tg-uog8">7.6</td>
                  <td class="tg-0lax">6.1</td>
                </tr>
                <tr>
                  <td class="tg-0pky">2</td>
                  <td class="tg-0pky">
                    <img
                      style={{ height: `100px`, width: `50px` }}
                      src={require("assets/img/person_2.png").default}
                    ></img>
                  </td>
                  <td class="tg-0pky">1.5</td>
                  <td class="tg-uog8">7.0</td>
                  <td class="tg-0lax">6.0</td>
                </tr>
                <tr>
                  <td class="tg-0pky">3</td>
                  <td class="tg-0pky">
                    <img
                      style={{ height: `100px`, width: `50px` }}
                      src={require("assets/img/person_3.png").default}
                    ></img>
                  </td>
                  <td class="tg-0pky">2</td>
                  <td class="tg-uog8">2.9</td>
                  <td class="tg-0lax">0.9</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
        <Card className="card-plain table-plain-bg">
          <Card.Header>
            <Row>
              <img
                src="https://logo.clearbit.com/lacoste.com"
                style={{ width: "100px", height: "100px" }}
              ></img>
              <h4 style={{ width: "50%" }}>Total number of people : 2</h4>
              <h4>Average time spent : 2.4</h4>
            </Row>
          </Card.Header>
          <Card.Body className="table-full-width table-responsive px-0">
            <Table className="table-hover">
              <thead>
                <tr>
                  <th class="tg-dvpl">Id</th>
                  <th class="tg-0pky">Person Image</th>
                  <th class="tg-0pky">Entry Time</th>
                  <th class="tg-0pky">Exit Time</th>
                  <th class="tg-0lax">Time Spent</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="tg-0pky">1</td>
                  <td class="tg-0pky">
                    <img
                      style={{ height: `100px`, width: `50px` }}
                      src={require("assets/img/person_1.png").default}
                    ></img>
                  </td>
                  <td class="tg-0pky">1.5</td>
                  <td class="tg-uog8">7.6</td>
                  <td class="tg-0lax">6.1</td>
                </tr>
                <tr>
                  <td class="tg-0pky">2</td>
                  <td class="tg-0pky">
                    <img
                      style={{ height: `100px`, width: `50px` }}
                      src={require("assets/img/person_2.png").default}
                    ></img>
                  </td>
                  <td class="tg-0pky">1.5</td>
                  <td class="tg-uog8">7.0</td>
                  <td class="tg-0lax">6.0</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title as="h4">Zones visits</Card.Title>
            <p className="card-category">
              Avereage time a person spends by a zone
            </p>
          </Card.Header>
          <Card.Body>
            <div className="ct-chart" id="chartActivity">
              <ChartistGraph
                data={{
                  labels: [
                    "Gucci",
                    "Nike",
                    "Adidas",
                    "La coste",
                    "Balenciaga",
                    "Armani",
                    "Puma",
                  ],
                  series: [[7.1, 5.1, 9.3, 7.8, 6, 2.6, 1.8]],
                }}
                type="Bar"
                options={{
                  seriesBarDistance: 10,
                  axisX: {
                    showGrid: false,
                  },
                  height: "245px",
                }}
                responsiveOptions={[
                  [
                    "screen and (max-width: 640px)",
                    {
                      seriesBarDistance: 5,
                      axisX: {
                        labelInterpolationFnc: function (value) {
                          return value[0];
                        },
                      },
                    },
                  ],
                ]}
              />
            </div>
          </Card.Body>
          <Card.Footer>
            <hr></hr>
            <div className="stats">
              <i className="fas fa-check"></i>
              Data information certified
            </div>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title as="h4">Number of people over time</Card.Title>
            <p className="card-category">from opening to closing time </p>
          </Card.Header>
          <Card.Body>
            <div className="ct-chart" id="chartHours">
              <ChartistGraph
                data={{
                  labels: [
                    "7:00AM",
                    "10:00AM",
                    "1:00PM",
                    "4:00PM",
                    "7:00PM",
                    "10:00PM",
                  ],
                  series: [
                    [0, 385, 490, 492, 554, 586],
                    [0, 152, 143, 240, 287, 335],
                    [0, 113, 67, 108, 190, 239],
                    [0, 45, 62, 46, 72, 466],
                  ],
                }}
                type="Line"
                options={{
                  low: 0,
                  high: 800,
                  showArea: false,
                  height: "245px",
                  axisX: {
                    showGrid: false,
                  },
                  lineSmooth: true,
                  showLine: true,
                  showPoint: true,
                  fullWidth: true,
                  chartPadding: {
                    right: 50,
                  },
                }}
                responsiveOptions={[
                  [
                    "screen and (max-width: 640px)",
                    {
                      axisX: {
                        labelInterpolationFnc: function (value) {
                          return value[0];
                        },
                      },
                    },
                  ],
                ]}
              />
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="legend">
              <span class="dot red"></span>Guci
              <span class="dot purple"></span>La Coste
              <span class="dot orange"></span>Nike
              <span class="dot sky"></span>Adidas
            </div>
            <hr></hr>
            <div className="stats">
              <i className="fas fa-history"></i>
              Updated 3 minutes ago
            </div>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
};

export default SingleVideo;
