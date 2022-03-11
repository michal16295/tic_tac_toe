import React from "react";
import { ThemeProvider } from "styled-components";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";

import OnBoarding from "./screens/OnBoarding";
import PlayerProvider from "./context/Player.context";
import Game from "./screens/Game";
import routes from "./routes.json";
import "./App.css";

const App = () => {
  const publicRoutes = [
    <Route
      key="OnBoarding"
      path={routes.ON_BOARDING}
      element={<OnBoarding />}
    />,
    <Route key="Game" path={routes.GAME} element={<Game />} />,
  ];

  return (
    <ErrorBoundary>
      <PlayerProvider>
        <Router>
          <Routes>{publicRoutes}</Routes>
        </Router>
      </PlayerProvider>
    </ErrorBoundary>
  );
};

export default App;
