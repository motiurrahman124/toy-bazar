import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { handleGoogleSignIn, signIn } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        Swal.fire({
          title: "Success!",
          text: "You have successfully logged in",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError("Your have entered wrong credentials");
      });
  };

  const handleLoginGoogle = () => {
    handleGoogleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        Swal.fire({
          title: "Success!",
          text: "You have successfully signed in",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mt-20">
      <div className="ccontainer">
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold">Welcome Back</h2>
          <p className="text-base">Please sign in to your account</p>
          {error?.length > 2 && (
            <p className="my-5 bg-red-50 text-center py-4 rounded-lg text-red-500">
              {error}
            </p>
          )}
          <div className="max-w-[500px] mx-auto pt-10 px-10">
            <form onSubmit={handleLogin}>
              <div className="">
                <label
                  className="text-dark text-[17px] block mb-2 text-left"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="border text-[21px] pl-5 py-3 w-full rounded-full"
                  required
                />
              </div>
              <div className="mt-5">
                <label
                  className="text-dark text-[21px]  block mb-2 text-left"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="border text-[21px] pl-5 py-3 w-full rounded-full"
                  id=""
                  required
                />
              </div>
              <input
                className="text-[21px] cursor-pointer font-bold rounded-full hover:text-primary border-primary hover:bg-white bg-primary text-white !px-10 py-[12px] mt-11 mb-[9px]"
                type="submit"
                value="Login"
              />
            </form>
          </div>
        </div>
        <p className="text-center">
          Are you new here? Please{" "}
          <Link to="/signup" className="hover:underline text-primary">
            Sign Up
          </Link>
        </p>
        <p className="text-center text-base">or</p>
        <button
          onClick={handleLoginGoogle}
          className="mt-10 mx-auto cursor-pointer text-center bg-primary bg-opacity-50 w-[100px] h-[80px] rounded-md text-4xl flex justify-center items-center mb-20"
        >
          <FcGoogle />
        </button>
      </div>
    </div>
  );
};

export default Login;
