import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NavbarWrapper } from "./components/layout/navbar-wrapper";
import AppRoutes from "./router";
import { AuthProvider } from "./context/auth-context";
import "./globals.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="font-sans">
          <NavbarWrapper />
          <AppRoutes />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;