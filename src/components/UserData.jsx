import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const UserData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = async (data) => {
    const { name, email, password } = data;
    try {
      const res = await axios.post(
        `https://e-commerce-backend-beta-five.vercel.app/signup`,
        {
          name,
          email,
          password,
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <>
      <div className=" bg-zinc-300 h-screen w-full flex justify-center items-center px-5">
        <div className="w-[25rem] h-[28.5rem] rounded-md bg-white px-8 py-4">
          <h1 className="text-center text-2xl font-semibold opacity-80">
            Create New Account
          </h1>
          <form className="mt-8" onSubmit={handleSubmit(onsubmit)}>
            <input
              {...register("name", { required: true })}
              type="text"
              className="block w-full py-3 mt-4 px-2 text-sm border border-white/40 rounded-md outline-none font-semibold "
              placeholder="Enter your  Name"
            />
            {errors.name && (
              <span className="text-red-600  text-sm px-3 ">
                Name is required.
              </span>
            )}
            <input
              {...register("email", { required: true })}
              type="email"
              className="block w-full py-3 mt-4 px-2 text-sm  border border-white/40 rounded-md outline-none  font-semibold"
              placeholder="Enter your Email"
            />
            {errors.email && (
              <span className="text-red-600  text-sm px-3 ">
                Email is required.
              </span>
            )}
            <input
              {...register("number", { required: true })}
              type="number"
              className="block w-full py-3 mt-4 px-2 text-sm  border border-white/40 rounded-md outline-none  font-semibold"
              placeholder="Enter Your Contact"
            />
            {errors.number && (
              <span className="text-red-600  text-sm px-3 ">
                Number is required.
              </span>
            )}
            <input
              {...register("password", { required: true })}
              type="password"
              className="block w-full py-3 mt-4 px-2 text-sm  border border-white/40 rounded-md outline-none  font-semibold"
              placeholder="Enter Your Password"
            />
            {errors.password && (
              <span className="text-red-600  text-sm px-3 ">
                Password is required.
              </span>
            )}
            <button className="block w-full mt-10 bg-red-600 py-3 rounded-xl text-md text-white font-semibold">
              Register
            </button>
          </form>
          <p className="mt-4 px-1 text-sm opacity-90">
            Already have an Account?{" "}
            <a href="login.html" className="text-blue-600 hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default UserData;
