import React from "react";
import { useState } from "react";

function Toggle() {
  const [isOn,setItOn] = useState(false);
}
function handleClick(){
  setItOn((isOn)=>!isOn);
}
const color = isOn ? "red":"white";
return <button 
        style={{background:color}}
        onClick={handleClick}>{isOn ? "ON":"OFF"}</button>

export default Toggle;
