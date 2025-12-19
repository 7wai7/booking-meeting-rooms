import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import LoadingCard from "./LoadingCard";

export function ProtectedRoute() {
  const { user, loading } = useAuth();

  if (loading) return <LoadingCard />;
  if (!user) return <Navigate to="/auth" replace />;

  return <Outlet />;
}
