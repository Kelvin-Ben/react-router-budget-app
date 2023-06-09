import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main, { mainLoader } from "./layouts/Main";
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import { logoutAction } from "./actions/logout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ExpensesPage, { expensesAction, expensesLoader } from "./pages/ExpensesPage";
// import { ExpensesPage } from "./pages/ExpensesPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        // errorElement: <Error />,
      },
      {
        path: "expenses",
        element: <ExpensesPage />,
        loader: expensesLoader,
        action: expensesAction,
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);
const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
};

export default App;
