import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  ProgressBar
} from "react-bootstrap";

function TableList() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Insights per brand</Card.Title>
                
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Top Brands</th>
                      <th className="border-0">Walk By</th>
                      <th className="border-0">Dwell Time</th>
                      <th className="border-0">Engagement</th>
                      <th className="border-0">Conversion</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                      <img style={{ width:"70px", height: "70px"}} src="https://logo.clearbit.com/armani.com" /> Armani
                      </td>
                      <td>6421</td>
                      <td>
                      <ProgressBar variant="success" now={87} />
                        87%
                      </td>
                      <td><ProgressBar variant="success" now={76} />76%</td>
                      <td><ProgressBar variant="success" now={78} />78%</td>
                    </tr>
                    <tr>
                      <td>
                      <img style={{ width:"70px", height: "70px"}} src="https://logo.clearbit.com/balenciaga.com" /> Balenciaga
                      </td>
                      <td>6271</td>
                      <td>
                      <ProgressBar variant="warning" now={49} /> 49%
                      </td>
                      <td><ProgressBar variant="danger" now={20} />20%</td>
                      <td><ProgressBar variant="danger" now={14} />14%</td>
                    </tr>
                    <tr>
                      <td>
                      <img style={{ width:"70px", height: "70px"}} src="https://logo.clearbit.com/gucci.com" /> Gucci
                      </td>
                      <td>1231</td>
                      <td>
                      <ProgressBar variant="info" now={61} /> 61%
                      </td>
                      <td><ProgressBar variant="info" now={60} />60%</td>
                      <td><ProgressBar variant="success" now={80} />80%</td>
                    </tr>
                    <tr>
                      <td>
                      <img style={{ width:"70px", height: "70px"}} src="https://logo.clearbit.com/nike.com" /> Nike
                      </td>
                      <td>8201</td>
                      <td>
                      <ProgressBar variant="danger" now={11} />11%
                      </td>
                      <td><ProgressBar variant="danger" now={20} />20%</td>
                      <td><ProgressBar variant="warning" now={30} />30%</td>
                    </tr>
                    <tr>
                      <td>
                      <img style={{ width:"70px", height: "70px"}} src="https://logo.clearbit.com/adidas.com" /> Adidas
                      </td>
                      <td>4139</td>
                      <td>
                      <ProgressBar variant="success" now={89} />89%
                      </td>
                      <td><ProgressBar variant="info" now={50} />50%</td>
                      <td><ProgressBar variant="warning" now={49} />49%</td>
                    </tr>
                    <tr>
                      <td>
                      <img style={{ width:"70px", height: "70px"}} src="https://logo.clearbit.com/puma.com" /> Puma
                      </td>
                      <td>4216</td>
                      <td>
                      <ProgressBar variant="warning" now={30} />30%
                      </td>
                      <td><ProgressBar variant="info" now={51} />51%</td>
                      <td><ProgressBar variant="info" now={52} />52%</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Table on Plain Background</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Salary</th>
                      <th className="border-0">Country</th>
                      <th className="border-0">City</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>$36,738</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Minerva Hooper</td>
                      <td>$23,789</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Sage Rodriguez</td>
                      <td>$56,142</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Philip Chaney</td>
                      <td>$38,735</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Doris Greene</td>
                      <td>$63,542</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Mason Porter</td>
                      <td>$78,615</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
