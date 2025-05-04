import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Nav from "./Nav";
import ShowDate from "./ShowDate";
import { useCustomMessage } from "../custom/CustomMessage";

function Home() {
  const user = localStorage.getItem("user")
  const [data , setData]= useState(JSON.parse(localStorage.getItem(`${user}-todos`))||[])
  const [todo,setTodos] = useState("")
  const showMessage = useCustomMessage()
  
    const handleDelete = (id)=>{
      setData(data.filter((a,i)=>(i!==id)))
      showMessage("warning","Task deleted successfully")
    }
    
    const handleChange = (event)=>{
      const value = event.target.value
      setTodos(value)

    }

    const handleCheck = (id)=>{
      setData((prev)=> prev.map((val,i)=>(id==i?{...val,done:!val.done}:val)))
    }

    const handleAdd = ()=>{
      const temp = {todo,done:false}
      setData((prev)=>[...prev,temp],
      showMessage("success","Task created successfully")
      )
    }
    useEffect(()=>localStorage.setItem(`${user}-todos`,JSON.stringify(data)),[data])

  return (
    <div className="h-full relative w-full  bg-[url('/image5.jpg')] bg-cover bg-no-repeat flex flex-col gap-2 items-center">
      <Nav />
      <ShowDate/>
      <AddTodo handleAdd = {handleAdd} handleChange={handleChange}/>
      <TodoList list={data} onDelete={handleDelete} handleCheck={handleCheck} />
    </div>
  );
}

export default Home;
