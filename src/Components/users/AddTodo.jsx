import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function AddTodo({handleAdd,handleChange}) {

  return (
    <div className="flex h-[60px] w-[95%] md:w-[45%] bg-black/20 rounded-md backdrop-blur-lg items-center justify-between px-4">
      <input
        type="text"
        className="h-[70%] w-[80%] pl-2 rounded-md bg-black/20 md:text-lg text-zinc-200 placeholder-gray-400 hover:bg-white/30 transition-all duration-300 ease-linear focus:outline-0 caret-blue-600"
        placeholder="Add a todo..."
        onChange={(event)=>handleChange(event)}
      />
      <Button variant="contained" onClick={handleAdd} endIcon={<AddIcon />}>
        Add
      </Button>
    </div>
  );
}

export default AddTodo;
