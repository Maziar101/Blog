import React, { useEffect, useState } from "react";
import "../index.css";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { HashLoader } from "react-spinners";
import FormFields from "../../../utils/useFormFields";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../store/Slices/AuthSlice";
export default function Login({ handleAcc }) {
  const {token} = useSelector((state)=>state.auth);
  const dispatch = useDispatch();
  const [users, setUsers] = useState();
  const [fields, handleFields] = FormFields();
  const handleLogin = async () => {
    if (fields?.username && fields?.password) {
      (async ()=>{
        const res = await fetch("http://localhost:5000/api/users",{
          headers:{"Content-Type":"application/json"},
          method:"POST",
          body:JSON.stringify({
            username:fields.username,
            password:fields.password,
          }),
        });
        const data = await res.json();
        dispatch(login(data?.data?.token));
        console.log(token)
      })();
    } else {
      alert("Please enter username and password");
    }
  };

  return (
    <>
      {" "}
      <Stack class="form-container">
        <Typography class="title">Login</Typography>
        <Stack class="form">
          <Stack class="input-group">
            <TextField
              sx={{ width: "100%" }}
              label="Username"
              color="secondary"
              onChange={handleFields}
              type="text"
              name="username"
              id="username"
            />
          </Stack>
          <Stack class="input-group">
            <TextField
              sx={{ width: "100%" }}
              label="Password"
              type="password"
              color="secondary"
              onChange={handleFields}
              name="password"
              id="password"
            />
          </Stack>
          <button onClick={handleLogin} class="sign">
            Login
          </button>
        </Stack>
        <Typography class="signup">
          Don't have an account?{" "}
          <Button
            onClick={handleAcc}
            rel="noopener noreferrer"
            class="changebtn"
          >
            Register
          </Button>
        </Typography>
      </Stack>
    </>
  );
}
