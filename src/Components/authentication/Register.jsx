import React, { useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useCustomMessage } from "../custom/CustomMessage";

function Register() {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const userRef = useRef(null);
  const pwdRef = useRef(null);
  const cnfPwdRef = useRef(null);
  const navigate = useNavigate();
  const showMessage = useCustomMessage()

  const handleSignUp = () => {
    const username = userRef.current.value;
    const password = pwdRef.current.value;
    const cnfpassword = pwdRef.current.value;

    if (!username || password !== cnfpassword) {
      showMessage("error","passwords doesn't match");
      return;
    }

    const isusername = users.some((user) => {
      if (username === user.username) {
        showMessage("error","uername already picked please use different username");
        return true;
      }
      return false;
    });

    if (isusername) return;

    const newusers = { username, password };

    setUsers((prev) => {
      const updateusers = [...prev, newusers];
      localStorage.setItem("users", JSON.stringify(updateusers));
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      showMessage("success","Registration Sucessfull");
      navigate("/login");
      return updateusers;
    });
  };

  return (
    <div className="h-full w-full relative bg-[url('/cool-background.png')] bg-cover flex flex-col justify-center items-center">
      <div className="text-5xl h-auto absolute left-[20px] top-[20px] text-slate-600">
        {" "}
        <span className=" text-red-500">TO</span>
        <span className=" text-blue-400">DO</span>
      </div>
      <div className=" w-[80%] h-[55%] lg:h-[55%] md:w-[50%] lg:w-[65%] shadow-2xl bg-white/15 backdrop-blur-md rounded-md flex border-white/30 ">
        <div className="h-full w-[60%] hidden lg:flex flex-col lg:justify-center  ">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-semibold  lg:mb-7 text-center text-white">
            Welcome to Your Productivity Hub!
          </h1>
          <p className="text-white text-center md:text-lg lg:text-xl xl:text-2xl  lg:p-5 lg:mb-1">
            Organize your tasks, set priorities, and achieve your goals with
            ease. Sign up today and take the first step toward staying
            productive!
          </p>

          <div className="lg:p-6 text-xl xl:text-2xl  text-center ">
            Already a user ? Login Here
          </div>
          <button
            className="p-2 lg:w-[20%] bg-blue-500 rounded-md hover:bg-blue-600 ease-linear self-center text-lg duration-300"
            onClick={() => navigate("/login")}
          >
            {" "}
            Login{" "}
          </button>
        </div>
        <div className="h-full w-full lg:w-[45%] bg-stone-900 flex  flex-col justify-evenly">
          <div className=" text-3xl lg:text-4xl font-semibold   bg-gradient-to-r text-blue-500 text-center">
            Register
          </div>
          <div className="h-[50%] flex flex-col  gap-3 pl-3">
            <div className="h-[40%] flex flex-col  gap-1">
              <h1 className="text-lg text-white">Username</h1>
              <input
                type="text"
                ref={userRef}
                className="h-[50%] bg-white rounded-md w-[90%] focus:outline-none text-black pl-2"
              />
            </div>
            <div className="h-[40%] flex  flex-col gap-1">
              <h1 className="text-lg  text-white">Password</h1>
              <input
                type="password"
                ref={pwdRef}
                className="h-[50%] bg-white rounded-md w-[90%] focus:outline-none text-black pl-2"
              />
            </div>
            <div className="h-[40%] flex  flex-col gap-1">
              <h1 className="text-lg  text-white">Confirm Password</h1>
              <input
                type="password"
                ref={cnfPwdRef}
                className="h-[50%] bg-white rounded-md w-[90%] focus:outline-none text-black pl-2"
              />
            </div>
            <p className="block lg:hidden">
              Already a User?<Link to="/login">Login here</Link>{" "}
            </p>
          </div>
          <div className="text-center">
            {" "}
            <button
              className="p-2 lg:w-[20%] bg-blue-500 rounded-md hover:bg-blue-600 ease-linear text-lg duration-300"
              onClick={handleSignUp}
            >
              {" "}
              Register{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
