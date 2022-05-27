import { useState } from "react";
import "./App.css";

function App() {
  // const [userName, setuserName] = useState("");
  // const [userEmail, setuserEmail] = useState("");

  // const handleChange = (e) => {
  //   if (e.target.name == "userName") {
  //     setuserName(e.target.value);
  //   }
  //   if (e.target.name == "userEmail") {
  //     setuserEmail(e.target.value);
  //   }
  // };

  //OR

  const [state, setState] = useState({ userName: "", userEmail: "" });
  const [showForm, setshowForm] = useState(true);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setState({ userName:"" , userEmail: "" });
    setshowForm(false);
  };

  return (
    <div className="App-div">
      <div>
        {showForm ? (
          <form onSubmit={handleSubmit}>
            <input
              type={"text"}
              name={"userName"}
              value={state.userName}
              placeholder={"Enter user name"}
              onChange={handleChange}
            ></input>
            <br />
            <input
              type={"email"}
              name={"userEmail"}
              value={state.userEmail}
              placeholder={"Enter user email"}
              onChange={handleChange}
            ></input>
            <br />
            <input type={"submit"} value={"submit"}></input>
          </form>
        ) : (
          <div>
            <p>
              User Name : {state.userName}
              <br></br>
              <br></br>
              User Email : {state.userEmail}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
