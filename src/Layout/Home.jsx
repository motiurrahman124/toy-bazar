import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeLayout = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = getPageTitle(location.pathname);
    document.title = pageTitle;
  }, [location]);

  const getPageTitle = (pathname) => {
    switch (pathname) {
      case "/login":
        return "Toy Bazar | Login";
      case "/signup":
        return "Toy Bazar | Sign Up";
      case "/add-toy":
        return "Toy Bazar | Add Toy";
      case "/all-toys":
        return "Toy Bazar | All Toys";
      case "/my-toys":
        return "Toy Bazar | My Toys";
      case "/blog":
        return "Toy Bazar | Blog";
      default:
        return "Toy Bazar";
    }
  };
  return (
    <div className="font-pt_sans">
      <ToastContainer />
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
