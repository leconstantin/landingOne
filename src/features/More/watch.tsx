"use client";

import { useEffect, useState } from "react";

export default function Watch() {
  const [time, setTime] = useState(new Date());
  const changeTime = () => {
    setTime(new Date());
  };

  useEffect(() => {
    setInterval(changeTime, 1000);
  }, [time]);

  return (
    <div className="flex items-center justify-center mt-10 text-2xl text-blue-500">
      <span>
        {" "}
        {time.getHours() < 10 && "0"}
        {time.getHours()}
      </span>
      <span> : </span>
      <span>
        {" "}
        {time.getMinutes() < 10 && "0"}
        {time.getMinutes()}
      </span>
      <span> : </span>
      <span>
        {time.getSeconds() < 10 && "0"}
        {time.getSeconds()}
      </span>
    </div>
  );
}
