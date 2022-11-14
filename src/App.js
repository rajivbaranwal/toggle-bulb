import { useState } from "react";
import off from "./Images/bulboff.png";
import on from "./Images/bulbon.png";

function App() {
  const [bulb, setBulb] = useState(off);
  const [toggle, setToggle] = useState(false);

  const onoff = () => {
    bulb == off ? setBulb(on) : setBulb(off);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <button onClick={onoff}>{bulb == on ? "off" : "on"}</button>
      <img src={bulb} alt="bulb" width={100} />
      {toggle == true ? (
        <img src={on} alt="on" width={100} />
      ) : (
        <img src={off} alt="off" width={100} />
      )}
      <button onClick={handleToggle}>
        Toggle Switch {toggle == true ? "OFF" : "ON"}
      </button>
      {/* <button onClick="off">Off</button> */}
    </>
  );
}

export default App;
