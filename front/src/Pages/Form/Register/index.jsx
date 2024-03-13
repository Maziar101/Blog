import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { Button, Stack, TextField, Typography } from "@mui/material";
import FormFields from "../../../utils/useFormFields";
export default function Register({handleAcc}) {
  const [fields,handleFields] = FormFields();
  const handleRegister = ()=>{
    if(fields.name&&fields.username&&fields.password){
      (async()=>{
        const res = await fetch("http://localhost:5000/api/users/register",{
          method:"POST",
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            name: fields.name,
            username: fields.username,
            password: fields.password,
          }),
        });
        const data = await res.json();
        alert(data?.message);
        handleAcc();
      })();
    }else{
      alert("Please fill out all fields");
    }
  };
  return (
    <Stack class="form-container">
      <Typography class="title">Register</Typography>
      <Stack class="form">
        <Stack class="input-group">
          <TextField
            sx={{ width: "100%" }}
            label="name"
            color="secondary"
            onChange={handleFields}
            type="text"
            name="name"
            id="name"
          />
        </Stack>
        <Stack class="input-group">
          <TextField
            sx={{ width: "100%" }}
            label="Username"
            color="secondary"
            type="text"
            onChange={handleFields}
            name="username"
            id="username"
          />
        </Stack>
        <Stack class="input-group">
          <TextField
            sx={{ width: "100%" }}
            label="Password"
            type="password"
            onChange={handleFields}
            color="secondary"
            name="password"
            id="password"
          />
        </Stack>
        <button onClick={handleRegister} class="sign">Register</button>
      </Stack>
      <Typography class="signup">
        have an account?{" "}
        <Button  onClick={handleAcc} rel="noopener noreferrer" class="changebtn">
          Login
        </Button>
      </Typography>
    </Stack>
  );
}
