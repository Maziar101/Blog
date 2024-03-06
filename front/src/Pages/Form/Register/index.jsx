import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { Button, Stack, TextField, Typography } from "@mui/material";
export default function Register({handleAcc}) {
  return (
    <Stack class="form-container">
      <Typography class="title">Register</Typography>
      <Stack class="form">
        <Stack class="input-group">
          <TextField
            sx={{ width: "100%" }}
            label="Username"
            color="secondary"
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
            name="password"
            id="password"
          />
        </Stack>
        <button class="sign">Register</button>
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
