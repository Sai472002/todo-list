import React, { useState, useEffect } from "react";

function ShowDate() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");

  const updateTime = () => {
    const now = new Date();

    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    setDate(`${date}-${month}-${year}`);
    setDay(day);

    let hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    const amPm = hour >= 12 ? "PM" : "AM";
    hour = hour > 12 ? hour % 12 : hour === 0 ? 12 : hour;

    const formattedHour = hour < 10 ? "0" + hour : hour;
    const formattedMin = min < 10 ? "0" + min : min;
    const formattedSec = sec < 10 ? "0" + sec : sec;

    setTime(`${formattedHour}:${formattedMin}:${formattedSec} ${amPm}`);
  };

  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-between md:mb-[100px] ">
    <div className="p-1 md:p-4 rounded-md md:absolute left-10 top-20 bg-black/20 backdrop-blur-md">
      <p className="text-base md:text-4xl font-semibold text-teal-700 md:mb-3">{day}</p>
      <p className="text-base md:text-2xl font-semibold text-teal-700 ">{date}</p>
      </div>
      <div className="text-center max-h-[50%] md:h-fit md:p-1 bg-black/20 backdrop-blur-lg rounded-md md:absolute right-10 top-20">
      <p className=" text-base md:text-2xl font-semibold text-teal-700">{time}</p>
    </div></div>
    
  );
}

export default ShowDate;
