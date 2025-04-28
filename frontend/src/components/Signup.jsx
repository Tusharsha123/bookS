import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex h-screen items-center justify-center">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <div className=" border-[2px] shadow-md rounded-md p-5">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>

          <h3 className="font-bold text-lg">Signup</h3>
          <div className="space-y-2 mt-4">
            <span>fullname</span>
            <br />
            <input
              type="text"
              placeholder="Enter your fullname"
              className="w-80 px-3 border-rounded-md outline-none"
              {...register("name", {
                required: true,
              })}
            />
          </div>
          <div className="space-y-2 mt-4">
            <span>email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 border-rounded-md outline-none"
              {...register("Email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />
          </div>
          <div className="space-y-2 mt-4">
            <span>password</span>
            <br />
            <input
              type="text"
              placeholder="Enter your password"
              className="w-80 px-3 border-rounded-md outline-none"
              {...register("password", {
                required: true,
              })}
            />
          </div>
          <div className="flex justify-around mt-4">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
              signup
            </button>
            <p>
              Have Account?{" "}
              <Link
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                className="underline text-blue-500 cursor-pointer"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
