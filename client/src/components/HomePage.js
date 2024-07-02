import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3002/")
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [flag]);

  console.log("user", user);

  const deleteHandler = (_id) => {
    console.log(_id);
    let payload = {
      _id,
    };

    axios
      .delete("http://localhost:3002/", { data: payload })
      .then((res) => setFlag(!flag))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <button onClick={() => navigate("/add-user")}>Add User</button>
      <button onClick={() => navigate("/edit-user")}>Edit User</button>
      <div>Home Page</div>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>User Name</th>
            <th>Mobile</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {user &&
            user.map((post) => {
              return (
                <tr key={post._id}>
                  <td>{post._id}</td>
                  <td>{post.userName}</td>
                  <td>{post.mobile}</td>
                  <td onClick={() => deleteHandler(post._id)}>Delete</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default HomePage;
