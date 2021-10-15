import React, { useState } from "react";

const App = () =>{
  let time = new Date().toLocaleTimeString();

  const[Ctime, SetCtime] = useState(time);

  // function UpdateTime() {
  //   time = new Date().toLocaleTimeString();
  //   SetCtime(time);
  // }

  const UpdateTime = () =>{
    time = new Date().toLocaleTimeString();
    SetCtime(time);
  };
  setInterval(UpdateTime, 1000)

  return(
    <>
    <h1 className="Time">{Ctime}</h1>

              {/* The button was made from an example */}
    {/* <button className="Updatetime" id="Updatetye" onClick={UpdateTime}>Get Time</button> */}
    </>
  )
}

export default App;;






