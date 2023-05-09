import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main, { MainLoader } from "./layouts/Main";
import Dashboard, { dasboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: MainLoader,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        loader: dasboardLoader,
        // errorElement: <Error />,
      },
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
