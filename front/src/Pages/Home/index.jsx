import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLoader } from "react-spinners";

export default function Home() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:5000/api/posts");
      const data = await res.json();
      setPosts(data?.data);
    })();
  }, []);
  const items = posts?.map((e, index) => (
    <Stack sx={{ display: "flex", gap: "20px" , border:"1px solid #a78bfa" , width:"350px" , padding:"25px"}} key={index}>
      <Typography>{e?.title}</Typography>
      <Typography>{e?.desc?.slice(0,50)} ...</Typography>
      <Typography>Author : {e?.author}</Typography>
      <Button variant="contained" color="secondary">
        <Link style={{width:"100%"}} to={`/post-details/${e?._id}`}>More Info</Link>
      </Button>
    </Stack>
  ));
  return (
    <>
      {posts ? (
        <>
          <Box sx={{ marginTop: "100px" }}>
            <Typography variant="h2">Posts</Typography>
            <Box
              sx={{
                display: "grid",
                gap: "20px",
                marginTop:"30px",
                gridTemplateColumns: "auto auto auto",
              }}
            >
              {items}
            </Box>
          </Box>
        </>
      ) : (
        <HashLoader style={{ margin: "auto" }} color="#a78bfa" size={80} />
      )}
    </>
  );
}
