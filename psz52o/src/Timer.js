import React, { useState } from "react";

const Timer = () => {
  let newtime = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(newtime);

  const UpdateTime = () => {
    newtime = new Date().toLocaleTimeString();
    setCtime(newtime);
  };

  return (
    <>
      <div>
        <h1>{ctime}</h1>
        <button onClick={UpdateTime}>Get Time</button>
      </div>
    </>
  );
};

export default Timer;
