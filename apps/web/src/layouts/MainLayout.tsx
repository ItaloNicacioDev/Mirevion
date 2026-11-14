import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Layout() {
  const location = useLocation();

  // Mantém o token de auth no localStorage para CSRF/cookies
  useEffect(() => {
    const token = localStorage.getItem("mirevion_token");
    if (token && location.pathname !== "/login") {
      // Token já existe, sessão ativa
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Outlet />
    </div>
  );
}
