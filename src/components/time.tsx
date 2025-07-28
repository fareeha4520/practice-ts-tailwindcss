import React, { useState, useEffect } from "react";

const Clock: React.FC = () => {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000); // update every second

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="text-purple-400 font-bold flex justify-center text-4xl ">
      {time}
    </div>
  );
};

export default Clock;
