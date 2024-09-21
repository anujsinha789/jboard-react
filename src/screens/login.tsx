import React from "react";
import TextField from "@mui/material/TextField";
import "../styles/login.css";

function login() {
  return (
    <div className="container">
      <div className="formContainer">
        <div className="fieldContainer">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </div>
      </div>
    </div>
  );
}

export default login;
