import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components";
import { Stack } from "@mui/material";
import Form from "./Pages/Form";
import { useSelector } from "react-redux";
import PostDetails from "./Pages/PostDetails";
import CreatePost from "./Pages/CreatePost";

export default function App() {
  const {token} = useSelector(state=>state.auth);
  return (
    <>
      <Header />
      <Stack>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login-register" element={token?<Navigate to={"/"}/>:<Form/>} />
          <Route path="/post-details/:name/:id" element={<PostDetails/>} />
          <Route path="/create-post" element={token?<CreatePost/>:<Navigate to={'/login-register'}/>} />
        </Routes>
      </Stack>
    </>
  );
}
