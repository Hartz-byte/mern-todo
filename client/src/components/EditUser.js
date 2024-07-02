import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState([]);
  const [flag, setFlag] = useState(false);

  const editHandler = (e, _id, key) => {
    const editedData = user.find((item) => item._id === _id);
    if (!editedData) return;

    let payload = { ...editedData, [key]: editedData.target.innerHTML };

    axios
      .put("http://localhost:3002/", payload)
      .then((res) => {
        console.log(res);
        setUser(editedData);
        // setFlag(!flag);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3002/")
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <button onClick={() => navigate("/add-user")}>Add User</button>
      <button onClick={() => navigate("/")}>Home Page</button>
      <div>Edit Page</div>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>User Name</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {user.length > 0
            ? user &&
              user.map((post) => {
                return (
                  <tr key={post._id}>
                    <td>{post._id}</td>
                    <td
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => {
                        editHandler(e, post._id, "userName");
                      }}
                    >
                      {post.userName}
                    </td>
                    <td
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => {
                        editHandler(e, post._id, "mobile");
                      }}
                    >
                      {post.mobile}
                    </td>
                  </tr>
                );
              })
            : "no data found"}
        </tbody>
      </table>
    </>
  );
};

export default EditUser;
