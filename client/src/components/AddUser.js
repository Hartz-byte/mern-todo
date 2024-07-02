import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddUser = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [mobile, setMobile] = useState("");

  const addUserHandler = () => {
    let payload = {
      userName,
      mobile,
    };

    axios
      .post("http://localhost:3002/", payload)
      .then((res) => {
        console.log(res);
        setMobile("");
        setUserName("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <button onClick={() => navigate("/")}>Home Page</button>
      <button onClick={() => navigate("/edit-user")}>Edit User</button>
      <div>Add User Page</div>
      <br />
      <br />
      <label>User Name</label>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <label>Mobile</label>
      <input
        type="text"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button onClick={addUserHandler}>Add User</button>
    </>
  );
};

export default AddUser;
