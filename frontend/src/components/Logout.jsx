import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("logout scs...");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("err... " + error);
      setTimeout(() => {}, 2000);
    }
  };
  return (
    <div>
      <button
        onClick={handleLogout}
        className="px-3 py-2 bg-red-700 text-white rounded-md cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
