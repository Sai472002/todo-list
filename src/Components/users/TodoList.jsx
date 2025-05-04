import React, { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function TodoList({ list, onDelete, handleCheck }) {
  const complete = list?.filter((val) => val.done == true);
  return (
    <div className=" w-[95%] md:w-[45%] bg-black/20 rounded-md backdrop-blur-md ">
      <div className="text-2xl font-semibold p-3 text-teal-600">
        {/* <span className="text-blue-500">To</span>
        <span className="text-red-500">do</span>
        <span className="text-blue-500">'</span>
        <span className="text-red-500">s</span> */}
        Todo's
      </div>
      <ul>
        {list.map((a, id) => (
          <li
            key={id}
            className="flex items-center px-3 py-2 hover:bg-white/10 transition-all border-b border-gray-700"
          >
            <Checkbox
              checked={a.done}
              onChange={() => handleCheck(id)}
              inputProps={{ "aria-label": "controlled" }}
            />
            <p
              className={`ml-3 text-zinc-200 md:text-xl font-light ${
                a.done ? "line-through decoration-red-500" : ""
              }`}
            >
              {a.todo}
            </p>
            <DeleteOutlineOutlinedIcon
              onClick={() => onDelete(id)}
              className="ml-auto text-red-500 cursor-pointer hover:scale-110 transition-transform"
            />
          </li>
        ))}
      </ul>
      <div className="text-slate-400 text-base p-2 flex justify-between">
        <p>
          No of todo's: <span className="text-teal-500">{list.length}</span>
        </p>
        <p>
          Completed: <span className="text-teal-500">{complete.length}</span>
        </p>
      </div>
    </div>
  );
}

export default TodoList;
