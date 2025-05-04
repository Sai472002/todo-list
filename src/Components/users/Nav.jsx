import React from "react";
import Button from '@mui/material/Button';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useNavigate } from "react-router-dom";
function Nav() {
  const navigate = useNavigate()
  const handleLogout = ()=>{
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    navigate("/login")
  }
  return (
    <div className="w-full sticky p-3 bg-black/20 backdrop-blur-lg mb-5">
      <div className=" float-start text-whitesmoke text-3xl ">
        {/* <span className="text-blue-500">To</span>
        <span className="text-red-500">do</span>
        <span className="text-blue-500">'</span>
        <span className="text-red-500">s</span> */}
        TODO
      </div>
      <div className="float-end">
      <Button variant="outlined" size="small" color="error" endIcon={<LogoutOutlinedIcon/>} onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
}

export default Nav;
    