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
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import MultiUploadComp from "components/MultiUploadComp";
import VideoList from "components/VideoList";
import VideoConfiguration from "views/VideoConfiguration";
import VideosDashboard from "views/VideosDashboard";
import SinglePerson from "views/SinglePerson";

const dashboardRoutes = [
  {
    upgrade: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "nc-icon nc-alien-33",
    component: Upgrade,
    layout: "/user",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/user",
  },
  {
    path: "/profile",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/user",
  },
  {
    path: "/table",
    name: "Table List",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/user",
  },
  /* {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Typography,
    layout: "/user",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-atom",
    component: Icons,
    layout: "/user",
  }, 
  {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/user",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/user",
  },*/
  {
    path: "/upload",
    name: "Upload",
    icon: "nc-icon nc-simple-add",
    component: MultiUploadComp,
    layout: "/user",
  },
  {
    path: "/Videos",
    name: "List of videos",
    icon: "nc-icon nc-camera-20",
    component: VideoList,
    layout: "/user",
  },
  {
    path: "/SinglePerson",
    name: "re-identification",
    icon: "nc-icon nc-settings-gear-64",
    component: SinglePerson,
    layout: "/user",
  },
  {
    path: "/VideosDashboard",
    name: "Videos Dashboard",
    icon: "nc-icon nc-paper-2",
    component: VideosDashboard,
    layout: "/user",
  },
];

export default dashboardRoutes;
