// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../features/pages/LoginPage";
import UserListPage from "../features/user/pages/UserListPage";
import RoleListPage from "../features/role/pages/RoleListPage";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <UserListPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/roles"
          element={
            <ProtectedRoute>
              <RoleListPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <div>Dashboard</div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}