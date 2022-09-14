/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import App from './App';
import "@fortawesome/fontawesome-free/css/all.min.css";
import AdminLayout from "layouts/Admin.js";
import MultiUploadComp from "components/MultiUploadComp";
import Icons from "views/Icons";
import VideoList from "components/VideoList";
import SingleVideo from "components/SingleVideo";
import Notifications from "views/Notifications";
import Maps from "views/Maps";
import Typography from "views/Typography";
import TableList from "views/TableList";
import User from "views/UserProfile";
import Dashboard from "views/Dashboard";
import Dashboardd from "views/Dashboardd";
import Upgrade from "views/Upgrade";
import Login from "views/Login";
import SignIn from 'views/SignIn'
import VideoDashboard from "views/VideosDashboard";
import Single from "views/SingleVideo";
import VideoConfiguration from "views/VideoConfiguration";
import SinglePerson from "views/SinglePerson";
import VideoZoning from "views/VideoZoning";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

