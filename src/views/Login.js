import { useNavigate } from "react-router";
import { useState } from "react";

export default function Login() {
  //check to see if the fields are not empty
  const login = () => {
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
        <div style={{ minHeight: 800, marginTop: 30 }}>
          <h1>login page</h1>
          <div style={{ marginTop: 30 }}>
              <div>
                <form onSubmit={handleSubmit}>
                  <label style={{ marginRight: 10 }}>Input Username</label>
                  <input
                    type="text"
                    className="username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label style={{ marginRight: 10 }}>Input Password</label>
                  <input
                    type="text"
                    className="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button onClick={login}>Login</button>
                </form>
              </div>
          </div>
        </div>
      </>
    );
  };
}
