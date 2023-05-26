import React, { useContext, useState } from "react";
import { AuthContext } from "../../components/provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { createUser, updateUserData, handleGoogleSignIn } =
    useContext(AuthContext);

  const handleSignup = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    setError("");
    if (password !== confirm) {
      setError("Your confirm password did not match");
      return;
    } else if (password.length < 6) {
      setError("Password must be 6 character or longer");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        updateUserData(loggedUser, name, photo)
          .then(() => {
            console.log("user updated");
            form.reset();
            navigate("/");
            Swal.fire({
              title: "Success!",
              text: "You have successfully signed up",
              icon: "success",
              confirmButtonText: "Cool",
            });
            window.location.reload();
          })
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="ccontainer pb-28 pt-10">
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold">Create Account</h2>
        <p className="text-base ">
          Your personal data will be used to support your experience throughout
          this website,
          <br />
          to manage access to your account, and for other purposes described in
          our privacy policy.
        </p>
        {error?.length > 2 && (
          <p className="my-5 bg-red-50 text-center p-4 rounded-lg text-red-500 mx-auto">
            {error}
          </p>
        )}
        <div className="max-w-[500px] mx-auto pt-10 px-10">
          <form onSubmit={handleSignup}>
            <div className="">
              <label
                className="text-dark text-[17px] block mb-2 text-left"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                className="border text-[21px] px-5 py-3 w-full rounded-full"
                required
              />
            </div>
            <div className="mt-5">
              <label
                className="text-dark text-[17px] block mb-2 text-left"
                htmlFor="photo"
              >
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                className="border text-[21px] px-5 py-3 w-full rounded-full"
                required
              />
            </div>
            <div className="mt-5">
              <label
                className="text-dark text-[17px] block mb-2 text-left"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="border text-[21px] px-5 py-3 w-full rounded-full"
                required
              />
            </div>
            <div className="mt-5">
              <label
                className="text-dark text-[17px] block mb-2 text-left"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                className="border text-[21px] px-5 py-3 w-full rounded-full"
                required
              />
            </div>
            <div className="mt-5">
              <label
                className="text-dark text-[17px] block mb-2 text-left"
                htmlFor="confirm"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirm"
                className="border text-[21px] px-5 py-3 w-full rounded-full"
                required
              />
            </div>
            <input
              className="text-[21px] cursor-pointer font-bold rounded-full hover:text-primary border-primary hover:bg-white bg-primary text-white !px-10 py-[12px] mt-11 mb-[9px]"
              type="submit"
              value="Sign Up"
            />
          </form>
        </div>
        <p className="text-center">
          Already have an account? Please{" "}
          <Link to="/login" className="hover:underline text-primary">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
