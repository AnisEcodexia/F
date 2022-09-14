import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer px-0 px-lg-3">
        <Container fluid>
          <nav>
            <ul className="footer-menu">
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Home
                </a>
              </li>
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Company
                </a>
              </li>
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Portfolio
                </a>
              </li>
            </ul>
            <p className="copyright text-center">
              © {new Date().getFullYear()}{" "}
              <a href="https://web.facebook.com/medanis.mouhalhal/">Aniss</a>, made with
              hate
               {/* lpatron weld lqahba */} 
            </p>
          </nav>
        </Container>
      </footer>
    );
  }
}

export default Footer;
