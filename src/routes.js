import { Navigate } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
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
