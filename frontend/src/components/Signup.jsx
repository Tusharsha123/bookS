import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    console.log(userInfo);
    await axios
      .post("http://localhost:3000/api/v1/user/crtUsr", userInfo)
      .then((res) => {
        console.log(res);
        toast.success("Successfully signup!");
        navigate(from, { replace: true });
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        console.log("err", err);
        toast.error("This is an error! : " + err.response.data.message);
      });
  };
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
              {...register("email", {
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
