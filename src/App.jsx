import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main, { mainLoader } from "./layouts/Main";
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import { logoutAction } from "./actions/logout";
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
        errorElement: <Error />,
      },
      {
        path: "logout",
        action: logoutAction

      }
    ]
  },
]);
const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
