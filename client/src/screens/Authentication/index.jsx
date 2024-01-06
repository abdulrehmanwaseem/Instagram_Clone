import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useGetloginUserQuery,
  usePostregisterUserMutation,
} from "../../redux/apis/apis";

const Authentication = () => {
  const [authPage, setAuthPage] = useState("SignUp");

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-zinc-950">
      {authPage === "SignUp" && <SignUp setAuthPage={setAuthPage} />}
      {authPage === "Login" && <Login setAuthPage={setAuthPage} />}
    </div>
  );
};

export default Authentication;

const SignUp = ({ setAuthPage }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [useRegister] = usePostregisterUserMutation();

  const onSubmit = (val) => {
    useRegister(val);
  };
  return (
    <>
      <img src="logo.png" className="w-[60%] lg:w-[25%] mb-7" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center gap-2 w-full px-5 lg:w-[35%]"
      >
        <input
          type="text"
          placeholder="username"
          className="input input-bordered w-full"
          {...register("username", { required: "Username is Required" })}
        />
        {errors?.username && (
          <span className="text-red-400 -my-1 self-start text-xs">
            {errors?.username?.message}
          </span>
        )}
        <input
          type="email"
          placeholder="email"
          className="input input-bordered w-full"
          {...register("email", { required: "Email is Required" })}
        />
        {errors?.email && (
          <span className="text-red-400 -my-1 self-start text-xs">
            {errors?.email?.message}
          </span>
        )}
        <input
          type="text"
          placeholder="name"
          className="input input-bordered w-full"
          {...register("name", { required: "Name is Required" })}
        />
        {errors?.name && (
          <span className="text-red-400 -my-1 self-start text-xs">
            {errors?.name?.message}
          </span>
        )}
        <input
          type="password"
          placeholder="password"
          className="input input-bordered w-full"
          {...register("password", { required: "Password is Required" })}
        />
        {errors?.password && (
          <span className="text-red-400 -my-1 self-start text-xs">
            {errors?.password?.message}
          </span>
        )}
        <button className="btn w-full bg-blue-600 text-white">
          Make New Account
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Already have an account ?</p>
        <span onClick={() => setAuthPage("Login")} className="text-blue-500">
          Login In
        </span>
      </div>
    </>
  );
};

const Login = ({ setAuthPage }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (val) => {};
  return (
    <>
      <img src="logo.png" className="w-[60%] mb-7 lg:w-[25%]" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center gap-3 w-full px-5 lg:w-[35%]"
      >
        <input
          type="text"
          placeholder="username"
          className="input input-bordered w-full"
          {...register("username", { required: "Username is Required" })}
        />
        <input
          type="password"
          placeholder="password"
          className="input input-bordered w-full"
          {...register("password", { required: "Password is Required" })}
        />
        <button className="btn w-full bg-blue-600 text-white">Login In</button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Don't have an account ?</p>
        <span className="text-blue-500" onClick={() => setAuthPage("SignUp")}>
          Sign Up
        </span>
      </div>
    </>
  );
};
