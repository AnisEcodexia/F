import React, { useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
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
import VideoDashboard from "views/VideosDashboard";
import Single from "views/SingleVideo";
import VideoConfiguration from "views/VideoConfiguration";
import SinglePerson from "views/SinglePerson";
import VideoZoning from "views/VideoZoning";

const AuthApi = React.createContext();
const TokenApi = React.createContext();
import Cookies from "js-cookie";
import SignIn from "views/SignIn";

function App() {
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState("");
  const readCookie = () => {
    let token = Cookies.get("token");
    console.log(token);
    if (token) {
      setAuth(true);
      setToken(token);
    }
  };
  React.useEffect(() => {
    readCookie();
  }, []);

  return (
    <>
      <AuthApi.Provider value={{ auth, setAuth }}>
        <TokenApi.Provider value={{ token, setToken }}>
          <Router>
            <div>
              <nav>
                <ul>
                  {!token ? (
                    <li>
                      <Link to="/register">Regsiter</Link>
                    </li>
                  ) : (
                    <></>
                  )}
                  {!token ? (
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                  ) : (
                    <></>
                  )}
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                </ul>
              </nav>
              <Routess />
            </div>
          </Router>
        </TokenApi.Provider>
      </AuthApi.Provider>
    </>
  );
}
const Routess = () => {
  const Auth = React.useContext(AuthApi);
  return (
    <Routes>
      <Route path="/home" element={<AdminLayout />} />
      <Route path="/homee" element={<Home />} />
      <Route path="login" element={<Login/>} />
      <Route path="signin" element={<SignIn />} />
      <Route path="/user" element={<PrivateUser />}>
        <Route path="upload" element={<MultiUploadComp />} />
        <Route path="dashboardd" element={<Dashboardd />} />
        <Route path="VideoZoning" element={<VideoZoning />} />
        <Route path="VideosDashboard" element={<VideoDashboard />} />
        <Route path="SingleVideo" element={<Single />} />
        <Route path="SinglePerson" element={<SinglePerson />} />
        <Route path="icons" element={<Icons />} />
        <Route path="profile" element={<User />}></Route>
        <Route path="Videos" element={<VideoList />}></Route>
        <Route path="Videos/:videoname" element={<SingleVideo />}></Route>
        <Route
          path="VideoConfiguration/:videoname"
          element={<VideoConfiguration />}
        ></Route>
        <Route path="VideoZoning/:videoname" element={<VideoZoning />}></Route>
        <Route path="notifications" element={<Notifications />}></Route>
        <Route path="maps" element={<Maps />}></Route>
        <Route path="typography" element={<Typography />}></Route>
        <Route path="table" element={<TableList />}></Route>
        
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="upgrade" element={<Upgrade />}></Route>
      </Route>
      <Route path="/register" element={<Register />}></Route>
      
      <Route path="/" element={<PrivateRoute />}></Route>
    </Routes>
  );
};
const Home = () => {
  const [data, setData] = useState("");
  const Auth = React.useContext(AuthApi);
  const Token = React.useContext(TokenApi);
  const handleonclick = () => {
    Auth.setAuth(false);
    Cookies.remove("token");
  };
  let toke = Token.token;
  const headers = {
    Authorization: `Bearer ${toke}`,
  };
  const getdata = async () => {
    let res = await axios
      .get("http://127.0.0.1:8000/users/me")
      .then((response) => {
        return response.data.data;
      });
    return res;
  };
  React.useEffect(async () => {
    let x = await getdata();
    setData(x);
    console.log(x);
  }, []);
  return (
    <>
      <h2>Home</h2>
      <button onClick={handleonclick}>Logout</button>
      <h1>{data}</h1>
    </>
  );
};

function Register() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const data = {
      username: name,
      company: company,
      password: password,
    };
    axios
      .post("http://127.0.0.1:8000/register", data)
      .then((response) => {
        console.log(response);
        alert(response);
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <>
      <form
        style={{
          marginTop: "100px",
          marginLeft: "50px",
          border: "solid 1px",
          width: "max-content",
          borderColor: "green",
        }}
        onSubmit={handleSubmit}
      >
        <div style={{ textAlign: "center" }}>Register Yourself</div>
        <br />
        <label>Username:</label>
        <input
          type="text"
          className="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br />
        <br />
        <label>Company: </label>
        <input
          type="text"
          className="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        ></input>
        <br />
        <br />
        <label>Password: </label>
        <input
          type="password"
          className="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
}

const Login = () => {
  const Auth = React.useContext(AuthApi);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (evt) => {
    if (evt) {
      evt.preventDefault();
    }
    const params = new URLSearchParams();
    params.append("username", name);
    params.append("password", password);

    const news = async () => {
      let res = await axios
        .post("http://127.0.0.1:8000/login", params)
        .then((response) => {
          console.log(response);
          Cookies.set("token", response.data.access_token);
          return response;
        })
        .catch((error) => {
          console.log(error.message);
        });
      return res;
    };
    let x = await news();
    if (x) {
      window.location.reload();
    }
  };
  return (
    <>
      <form
        style={{
          marginTop: "100px",
          marginLeft: "50px",
          border: "solid 1px",
          width: "max-content",
          borderColor: "green",
        }}
        onSubmit={handleSubmit}
      >
        <div style={{ textAlign: "center" }}>Login</div>
        <br />
        <label>Username:</label>
        <input
          type="text"
          className="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br />
        <br />
        <label>Password: </label>
        <input
          type="password"
          className="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
};
const Private = () => <div>this page requires login</div>;

function PrivateRoute() {
  const token = React.useContext(TokenApi);
  console.log(token.token.length)
  return token.token.length>0 ? <AdminLayout/> : <SignIn/>;
}

function PrivateUser() {
  const token = React.useContext(TokenApi);
  console.log(token)
  return token.token.length>0 ? <AdminLayout/> : <Private/>;
}


export default App;
