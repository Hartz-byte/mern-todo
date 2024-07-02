import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/add-user", element: <AddUser /> },
    { path: "/edit-user", element: <EditUser /> },
    { path: "*", element: <div>PAGE NOT FOUND</div> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
