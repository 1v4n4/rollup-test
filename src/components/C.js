import React from "react";
import { Button, Slider } from "@mui/material";

const Ccomponent = () => {
  console.log("Ccomponent");
  return (
    <div > <p> Hello World from C </p>
      <Button variant="contained" color="primary">Button C</Button>
      <Slider />
    </div >
  );
}

export default Ccomponent;