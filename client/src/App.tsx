import React from "react";
import { ThemeProvider } from "styled-components";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";

import OnBoarding from "./screens/OnBoarding";
import routes from "./routes.json";
import "./App.css";

const App = () => {
  const publicRoutes = [
    <Route
      key="OnBoarding"
      path={routes.ON_BOARDING}
      element={<OnBoarding />}
    />,
  ];

  return (
    <ErrorBoundary>
      <Router>
        <Routes>{publicRoutes}</Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
