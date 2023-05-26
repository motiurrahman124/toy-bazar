import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home/Home";
import HomeLayout from "./Layout/Home";
import Login from "./Pages/Login/Login";
import AuthProvider from "./components/provider/AuthProvider";
import AddToy from "./Pages/AddToy/AddToy";
import MyToys from "./Pages/MyToys/MyToys";
import UpdateToy from "./Pages/UpdateToy/UpdateToy";
import Blog from "./Pages/Blog/Blog";
import AllToys from "./Pages/AllToys/AllToys";
import ViewToy from "./Pages/AllToys/ViewToy";
import PrivateRoute from "./routes/PrivateRoute";
import SignUp from "./Pages/SignUp/SignUp";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/add-toy",
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-toy/:id",
        element: <UpdateToy />,
        loader: ({ params }) =>
          fetch(`https://toy-bazar-server-seven.vercel.app/toy/${params.id}`),
      },
      {
        path: "/all-toys",
        element: <AllToys />,
      },
      {
        path: "/toy/:id",
        element: (
          <PrivateRoute>
            <ViewToy />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-bazar-server-seven.vercel.app/toy/${params.id}`),
      },
      {
        path: "/my-toys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
