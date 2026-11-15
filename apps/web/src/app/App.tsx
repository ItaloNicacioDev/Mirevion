import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../features/auth/LoginPage";
import Layout from "../layouts/MainLayout";
import DashboardPage from "../features/dashboard/DashboardPage";
import FinanceiroPage from "../features/financeiro/FinanceiroPage";
import RHPage from "../features/rh/RHPage";
import DespesasPage from "../features/despesas/DespesasPage";
import OrganizacaoPage from "../features/organizacao/OrganizacaoPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "financeiro", element: <FinanceiroPage /> },
      { path: "rh", element: <RHPage /> },
      { path: "despesas", element: <DespesasPage /> },
      { path: "organizacao", element: <OrganizacaoPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
