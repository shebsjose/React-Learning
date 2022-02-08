import React, { Fragment } from "react";
import { BrowserRouter as
  Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import HomePage from "./Home";
import AdminPages from "./Admin";
import ContactPage from "./Contact";
import NotFound from "./NotFound";
import NavBar from "./NavBar";

const RouteLearning = () => {
  return (
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/admin" element={<AdminPages />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/notfound"element={<Navigate replace to="/home"/>} />
        </Routes>
      </Router>
  );
};

export default RouteLearning;
