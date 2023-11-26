import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { ThemeContext } from "../authContext/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [authError, setAuthError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useContext(ThemeContext);
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    login(data.email, data.password)
      .then(() => {
        Swal.fire({
          title: "User Login Successful.",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setAuthError(err?.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Medical Track | Login</title>
      </Helmet>
      <div className="min-h-screen bg-gray-200 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-md shadow-md w-full sm:w-96">
          <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="Email"
                className="w-full px-4 py-3 rounded border focus:outline-none focus:border-blue-500"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="mb-6">
              <input
                type="password"
                name="password"
                {...register("password", { required: true })}
                placeholder="Password"
                className="w-full px-4 py-3 rounded border focus:outline-none focus:border-blue-500"
              />
              {authError && <span className="text-red-600">{authError}</span>}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Don&apos;t have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
