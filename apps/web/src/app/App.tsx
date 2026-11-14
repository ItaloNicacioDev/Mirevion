import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./features/auth/LoginPage";
import Layout from "./layouts/MainLayout";
import DashboardPage from "./features/dashboard/DashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
