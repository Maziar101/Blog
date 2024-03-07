import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:5000/api/posts/${id}`);
      const data = await res.json();
      setPost(data?.data);
    })();
  }, [id]);
  return (
    <>
      {post ? (
        <>
          <Stack gap={5}>
            <Typography variant="h2">title: {post.title}</Typography>
            <Typography variant="h6">Description : {post.desc}</Typography>
            <Typography variant="h6">Author: {post.author} </Typography>
            <Typography >Category: {post.category}</Typography>
          </Stack>
        </>
      ) : (
        <HashLoader size={80} color="#A78BFA" style={{ margin: "auto" }} />
      )}
    </>
  );
}
