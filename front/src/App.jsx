import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components";
import { Stack } from "@mui/material";
import Form from "./Pages/Form";
import { useSelector } from "react-redux";

export default function App() {
  const {token} = useSelector(state=>state.auth);
  return (
    <>
      <Header />
      <Stack>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login-register" element={token?<Navigate to={"/"}/>:<Form/>} />
        </Routes>
      </Stack>
    </>
  );
}
