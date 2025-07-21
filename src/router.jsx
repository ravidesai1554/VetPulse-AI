import React from "react";
import { Routes, Route } from "react-router-dom";

// Import all pages
import Home from "./pages/Home";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Diagnosis from "./pages/Diagnosis";
import DoctorVisit from "./pages/DoctorVisit";
import Emergency from "./pages/Emergency";
import GrowthPlan from "./pages/GrowthPlan";
import HealthRecords from "./pages/HealthRecords";
import Login from "./pages/Login";
import PredictionResults from "./pages/PredictionResults";
import RegisterAnimal from "./pages/RegisterAnimal";
import SigninDemo from "./pages/SigninDemo";
import SignupDemo from "./pages/SignupDemo";
import Veterinarians from "./pages/Veterinarians";
import NotFound from "./pages/NotFound";

// Import ProtectedRoute component
import ProtectedRoute from "./components/auth/protected-route";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin-demo" element={<SigninDemo />} />
      <Route path="/signup-demo" element={<SignupDemo />} />
      <Route path="/emergency" element={<Emergency />} />
      <Route path="/veterinarians" element={<Veterinarians />} />

      {/* Protected Routes - Require Authentication */}
      <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
      <Route path="/diagnosis" element={<ProtectedRoute><Diagnosis /></ProtectedRoute>} />
      <Route path="/doctor-visit" element={<ProtectedRoute><DoctorVisit /></ProtectedRoute>} />
      <Route path="/growth-plan" element={<ProtectedRoute><GrowthPlan /></ProtectedRoute>} />
      <Route path="/health-records" element={<ProtectedRoute><HealthRecords /></ProtectedRoute>} />
      <Route path="/prediction-results" element={<ProtectedRoute><PredictionResults /></ProtectedRoute>} />
      <Route path="/register-animal" element={<ProtectedRoute><RegisterAnimal /></ProtectedRoute>} />

      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;