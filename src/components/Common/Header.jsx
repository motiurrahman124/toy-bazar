import React, { useContext } from "react";
import PrimaryButton from "./PrimaryButton";
import { AuthContext } from "../provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then((result) => {
        Swal.fire({
          title: "Success!",
          text: "You have successfully logged out",
          icon: "success",
          confirmButtonText: "Cool",
        });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="shadow-lg">
      <div className="ccontainer">
        <div className="navbar bg-base-100 !px-0">
          <div className="navbar ">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 shadow rounded-box w-52 bg-secondary space-y-2 p-4 text-base"
              >
                <Link to="/">
                  <li className="hover:text-primary font-medium">Home</li>
                </Link>
                <Link to="/all-toys">
                  <li className="hover:text-primary font-medium">All Toys</li>
                </Link>
                {!!user && (
                  <Link to="/my-toys">
                    <li className="hover:text-primary font-medium">My Toys</li>
                  </Link>
                )}
                <Link to="/add-toy">
                  <li className="hover:text-primary font-medium">Add A Toy</li>
                </Link>
                <Link to="/blog">
                  <li className="hover:text-primary font-medium">Blogs</li>
                </Link>

                {user ? (
                  <>
                    <div className="flex items-center gap-x-4">
                      <img
                        src={user?.photoURL}
                        className="w-[50px] h-[50px] rounded-full object-cover"
                        alt=""
                        title={
                          user?.displayName?.length > 0 ? user?.displayName : ""
                        }
                      />
                      <button
                        onClick={handleLogout}
                        className="md:px-7 px-5 md:py-3 py-3 bg-red-500 rounded-full font-medium cursor-pointer text-white text-base hover:text-red-500 hover:bg-white hover:border-red-500 border-red-500 hover:border border h-fit"
                      >
                        {" "}
                        Log out
                      </button>
                    </div>
                  </>
                ) : (
                  <Link to="/login">
                    <li className="hover:text-primary font-medium">
                      <PrimaryButton text={"Login"} />
                    </li>
                  </Link>
                )}
              </ul>
            </div>
            <div className="flex items-center">
              <img
                src="https://i.ibb.co/gjPJG5f/images-removebg-preview.png"
                alt=""
                className="w-28 h-18"
              />
              <Link to="/" className="text-2xl font-bold font-monoton">
                <span className="text-secondary">Toy</span>{" "}
                <span className="text-primary">Bazar</span>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="px-1 text-base flex items-center gap-x-5">
              <NavLink to="/" className="hover:text-primary font-medium">
                Home
              </NavLink>
              <NavLink
                to="/all-toys"
                className="!hover:text-primary font-medium"
              >
                All Toys
              </NavLink>
              {!!user && (
                <NavLink
                  to="/my-toys"
                  className="hover:text-primary font-medium"
                >
                  My Toys
                </NavLink>
              )}

              <NavLink to="/add-toy" className="hover:text-primary font-medium">
                Add A Toy
              </NavLink>
              <NavLink to="/blog" className="hover:text-primary font-medium">
                Blogs
              </NavLink>
              {user ? (
                <>
                  <div className="flex items-center gap-x-4">
                    <img
                      src={user?.photoURL}
                      className="w-[50px] h-[50px] rounded-full object-cover"
                      alt=""
                      title={
                        user?.displayName?.length > 0 ? user?.displayName : ""
                      }
                    />
                    <button
                      onClick={handleLogout}
                      className="md:px-7 px-5 md:py-3 py-3 bg-red-500 rounded-full font-medium cursor-pointer text-white text-base hover:text-red-500 hover:bg-white hover:border-red-500 border-red-500 hover:border border h-fit"
                    >
                      {" "}
                      Log out
                    </button>
                  </div>
                </>
              ) : (
                <Link to="/login">
                  <PrimaryButton text={"Login"} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
