import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components";
import { Stack } from "@mui/material";
import Form from "./Pages/Form";

export default function App() {
  return (
    <>
      <Header />
      <Stack>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login-register" element={<Form/>} />
        </Routes>
      </Stack>
    </>
  );
}
