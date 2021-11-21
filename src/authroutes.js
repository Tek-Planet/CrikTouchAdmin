import { Navigate } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Login from "./pages/Login";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Login /> },

      { path: "/", element: <Navigate to="/login" /> }
    ]
  }
];

export default routes;
