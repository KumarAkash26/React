import React, { useContext, useState } from "react";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { MyStore } from "../context/MyContext";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { registeredUsers, setregisteredUsers } = useContext(MyStore);

  let navigate = useNavigate();

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  let formSubmit = (data) => {
    console.log(data);
    let arr = [...registeredUsers, data];
    setregisteredUsers(arr)
    alert("User registered successfully");
    localStorage.setItem('registeredUsers', JSON.stringify(arr));
    reset();
  } 

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
          <p className="mt-2 text-gray-500">Register to start shopping</p>
        </div>

        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Full Name
            </label>

            <div className="flex items-center rounded-xl border border-gray-300 px-4 focus-within:border-black focus-within:ring-2 focus-within:ring-gray-300">
              <User className="text-gray-400" size={20} />
              <input
                {...register("name", {
                  required: "Name is required",
                })}
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-transparent px-3 py-3 outline-none"
              />
              
            </div>
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>

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
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
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

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Confirm Password
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
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                className="w-full bg-transparent px-3 py-3 outline-none"
              />
              

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff size={20} className="text-gray-500" />
                ) : (
                  <Eye size={20} className="text-gray-500" />
                )}
              </button>
            </div>
          </div>

          <label className="flex items-start gap-2 text-sm text-gray-600">
            <input type="checkbox" className="mt-1" />I agree to the Terms &
            Conditions and Privacy Policy.
          </label>

          <button
            type="submit"
            className="w-full rounded-xl bg-black py-3 font-semibold text-white transition hover:bg-gray-700"
          >
            Create Account
          </button>

          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <button
              type="button"
              className="font-semibold text-gray-500 hover:text-black"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
