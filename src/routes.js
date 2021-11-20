import { Navigate } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import MainLayout from "./components/MainLayout";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import AddQuestion from "./pages/AddQuestion";
import AddNews from "./pages/AddNews";
import Question from "./question/Question";
import News from "./news/News";

const routes = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { path: "news", element: <News /> },
      { path: "addNews", element: <AddNews /> },
      { path: "/", element: <Question /> },
      { path: "addQuestion", element: <AddQuestion /> },
      { path: "/", element: <Navigate to="/" /> }
    ]
  }
];

export default routes;
