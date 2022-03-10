import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import "./App.css";

import { HomePage } from "./pages/Home";
import LoginPage from "./pages/Login";

function App() {


 const PrivateRoute = ({ children}: any) => {
  const isAuthenticated = Boolean(localStorage.getItem('loginStatus'));
    if (isAuthenticated ) {
      return children
    }
      
    return <Navigate to="/" />
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          ></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
