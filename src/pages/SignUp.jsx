import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ThemeContext } from "../authContext/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import useAxiosPublic from "../hooks/useAxiosPublic";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [{ confirmPass, authError }, setAuthErrors] = useState({
    confirmPass: "",
    authError: "",
  });
  const { createUser, updateUserProfile } = useContext(ThemeContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const allErrors = {};
    if (data.password != data.confirmPassword) {
      allErrors.confirmPass = "Confirm password must be same as password";
      setAuthErrors(allErrors);
    } else {
      createUser(data.email, data.password)
        .then(() => {
          updateUserProfile(data.fullName)
            .then(() => {
              const userInfo = {
                name: data.fullName,
                email: data.email,
                role: data.role.toLowerCase(),
              };
              axiosPublic.post("/users", userInfo).then((res) => {
                if (res.status == 201) {
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User created successfully.",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate("/");
                }
              });
            })
            .catch((error) => console.log(error));
        })
        .catch((err) => {
          allErrors.authError = err?.message;
          setAuthErrors(allErrors);
        });
    }
  };

  return (
    <>
      <Helmet>
        <title>Medical Track | Sign Up</title>
      </Helmet>
      <div className="min-h-screen bg-gray-200 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-md shadow-md w-full sm:w-96">
          <h2 className="text-3xl font-semibold text-center mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
                type="text"
                name="fullName"
                {...register("fullName", { required: true })}
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded border focus:outline-none focus:border-blue-500"
              />
              {errors.fullName && (
                <span className="text-red-600">Must be write your name</span>
              )}
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="Email"
                className="w-full px-4 py-3 rounded border focus:outline-none focus:border-blue-500"
              />
              {errors.email && (
                <span className="text-red-600">Provide your email</span>
              )}
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                {...register("password", { required: true })}
                placeholder="Password"
                className="w-full px-4 py-3 rounded border focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                name="confirmPassword"
                {...register("confirmPassword", { required: true })}
                placeholder="Confirm Password"
                className="w-full px-4 py-3 rounded border focus:outline-none focus:border-blue-500"
              />
              {confirmPass && (
                <span className="text-red-600">{confirmPass}</span>
              )}
            </div>
            <select
              {...register("role", { required: true })}
              className="select select-bordered select-sm w-full max-w-xs mb-6 focus:outline-none focus:border-blue-500"
            >
              <option selected>Participant</option>
              <option>Organizer</option>
              <option>Professional</option>
            </select>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </button>
            {authError && <span className="text-red-600">{authError}</span>}
          </form>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Already have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
