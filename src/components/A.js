import React from "react";
import { Button, Slider } from "@mui/material";

const Acomponent = () => {
  console.log("Acomponent");
  return (
    <div > <p> Hello World from A </p>
      <Button variant="contained" color="primary">Button A</Button>
      <Slider />
      </div>
  );
}

export default Acomponent;