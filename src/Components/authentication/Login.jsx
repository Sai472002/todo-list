import { React, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useCustomMessage } from "../custom/CustomMessage";

function Login() {
  const navigate = useNavigate();
  const showMessage = useCustomMessage()

  const users = JSON.parse(localStorage.getItem("users")) || [];
  console.log(users);

  const [data, setData] = useState({ username: "", password: "" });
  console.log(data);

  const handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;
    setData((prev) => {
      const newdata = { ...prev, [key]: value };
      return newdata;
    });
  };

  const handleLogin = () => {
    const check = users.some((user) => 
      user.username === data.username && user.password === data.password
    );
    if (check) {
      showMessage("success","login successfull")
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("user",data.username)
      navigate("/");
    }
    else{
      showMessage("error","Invalid username or password")
    }
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

          <div className="lg:p-6 text-xl xl:text-2xl text-center ">
            Not a user ? Register Here
          </div>
          <button
            className="p-2 lg:w-[20%] bg-blue-500 rounded-md hover:bg-blue-600 ease-linear self-center text-lg duration-300"
            onClick={() => navigate("/signup")}
          >
            {" "}
            Register{" "}
          </button>
        </div>
        <div className="h-full w-full lg:w-[45%] bg-stone-900 flex flex-col justify-evenly ">
          <div className=" text-3xl lg:text-4xl font-semibold bg-gradient-to-r text-blue-500 text-center">
            Login
          </div>
          <div className="h-[50%] flex flex-col justify-center  gap-3 pl-3">
            <div className="h-[40%] flex flex-col  gap-1">
              <h1 className="text-lg text-white">Username</h1>
              <input
                type="text"
                name="username"
                className="h-[50%] bg-white rounded-md w-[90%] focus:outline-none text-black pl-2"
                onChange={(event) => handleChange(event)}
              />
            </div>
            <div className="h-[40%] flex  flex-col gap-1">
              <h1 className="text-lg  text-white">Password</h1>
              <input
                type="password"
                name="password"
                className="h-[50%] bg-white rounded-md w-[90%] focus:outline-none text-black pl-2"
                onChange={(event) => handleChange(event)}
              />
            </div>
            <p className="block lg:hidden">
              Not a User ? <Link to="/signup">Register Here</Link>
            </p>
          </div>
          <div className="text-center">
            {" "}
            <button
              className="p-2 lg:w-[20%] bg-blue-500 rounded-md hover:bg-blue-600 ease-linear text-lg duration-300"
              onClick={handleLogin}
            >
              {" "}
              Login{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
