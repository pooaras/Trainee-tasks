import React, { useState } from "react";
import Card from "@mui/material/Card";

const Droparea = ({ onDrop }) => {
  const [drop, setdrop] = useState(false);
  return (
    <Card
      onDragOver={(e) => e.preventDefault() }
        onDrop={(e) => {
        e.preventDefault()
        onDrop();
        setdrop(false);
      }}
      onDragEnter={() => setdrop(true)}
      onDragLeave={() => setdrop(false)}
      className={
        drop ? "bg-transparent border border-1 py-5 opacity-100" : "opacity-0"
      }
    >
      Drop Here
    </Card>
  );
};

export default Droparea;
