import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

export default function ProtectedRoute({ children }: { children: React.ReactElement }) {
  const token = useAppSelector(state => state.auth.token) || localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
}