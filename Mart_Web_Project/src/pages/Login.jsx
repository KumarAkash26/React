import React, { useContext, useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { MyStore } from "../context/MyContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { registeredUsers, setloggedUser } = useContext(MyStore);

  let navigate = useNavigate();

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let formSubmit = (data) => {
    let user = registeredUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });
    if (!user){
      alert("user not found or invalid credentials");
      reset();
      return;
      
    }

    setloggedUser(user);
    localStorage.setItem('loggedUser', JSON.stringify(user));
    alert("user loggedin");
    reset();
    navigate("/")

  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="mt-2 text-gray-500">Sign in to continue shopping</p>
        </div>

        <form onSubmit={handleSubmit(formSubmit)} className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email
            </label>

            <div className="flex items-center rounded-xl border border-gray-300 px-4 focus-within:border-black focus-within:ring-2 focus-within:ring-gray-300">
              <Mail className="text-gray-400" size={20} />
              <input
                {...register("email", {
                  required: "email is required",
                })}
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-3 py-3 outline-none"
              />
            </div>
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Password
            </label>

            <div className="flex items-center rounded-xl border border-gray-300 px-4 focus-within:border-black focus-within:ring-2 focus-within:ring-gray-300">
              <Lock className="text-gray-400" size={20} />

              <input
                {...register("pasword", {
                  required: "password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters is required",
                  },
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className="w-full bg-transparent px-3 py-3 outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={20} className="text-gray-500" />
                ) : (
                  <Eye size={20} className="text-gray-500" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <button
              type="button"
              className="font-medium text-gray-500 hover:text-black"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-black py-3 font-semibold text-white transition hover:bg-gray-700"
          >
            Login
          </button>

          <p className="text-center text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={() => {
                navigate("/register");
              }}
              type="button"
              className="font-semibold text-gray-500 hover:text-black"
            >
              Register
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
