import { Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState();
  const {token} = useSelector((state)=>state.auth);
  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:5000/api/posts/${id}`);
      const data = await res.json();
      setPost(data?.data?.OnePost);
      console.log(data?.data);
    })();
  }, [id]);
  const deletePost = ()=>{
    (async ()=>{
      const res = await fetch(`http://localhost:5000/api/posts/${id}`,{
        method:"DELETE",
        headers:{
          'Content-Type':'application/json',
          'authorization':  `Bearer ${token}`
        },
        authorization:  `Bearer ${token}`
      });
      const data = await res.json();
      alert(data?.message);
      window.location.href="/"
    })();
  };
  return (
    <>
      {post ? (
        <>
          <Stack gap={5}>
            <Typography variant="h2">title: {post.title}</Typography>
            <Typography variant="h6">Description : {post.desc}</Typography>
            <Typography variant="h6">Author: {post.author} </Typography>
            <Typography >Category: {post.category.name}</Typography>
            <Button onClick={deletePost} variant="contained" color="error">Delete Post</Button>
          </Stack>
        </>
      ) : (
        <HashLoader size={80} color="#A78BFA" style={{ margin: "auto" }} />
      )}
    </>
  );
}
