import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";
import FormFields from "../../utils/useFormFields";

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState();
  const [fields, handleFields] = FormFields();

  const { token } = useSelector((state) => state.auth);
  const [cat, setCat] = useState("title");
  const handleCatChange = (e) => {
    setCat(e.target.value);
  };
  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:5000/api/posts/${id}`);
      const data = await res.json();
      setPost(data?.data?.OnePost);
    })();
  }, [id]);
  const deletePost = () => {
    (async () => {
      const res = await fetch(`http://localhost:5000/api/posts/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        authorization: `Bearer ${token}`,
      });
      const data = await res.json();
      alert(data?.message);
      window.location.href = "/";
    })();
  };
  const updatePost = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/posts/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          [cat]: fields.value
        }),
        headers: {
          "Content-Type": "application/json",
          'authorization': `Bearer ${token}`,
        }
      });
      const data = await res.json();
      console.log(data);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <>
      {post ? (
        <>
          <Stack gap={5}>
            <Typography variant="h2">title: {post.title}</Typography>
            <Typography variant="h6">Description : {post.desc}</Typography>
            <Typography variant="h6">Author: {post.author} </Typography>
            <Typography>Category: {post.category.name}</Typography>
            <Button onClick={deletePost} variant="contained" color="error">
              Delete Post
            </Button>
            <Typography variant="h4">Update</Typography>
            <Stack>
              <Box>
                <InputLabel
                  sx={{ color: "white" }}
                  id="demo-simple-select-label"
                >
                  Key
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={cat}
                  label="category"
                  fullWidth
                  sx={{ color: "white" }}
                  onChange={handleCatChange}
                >
                  <MenuItem sx={{ color: "black" }} value={"Sport"}>
                    title
                  </MenuItem>
                  <MenuItem sx={{ color: "black" }} value={"Digital"}>
                    desc
                  </MenuItem>
                </Select>
              </Box>
              <Box>
                <Stack class="input-group">
                  <TextField
                    sx={{ width: "100%" }}
                    label={cat}
                    color="secondary"
                    onChange={handleFields}
                    type="text"
                    name="value"
                    id="username"
                  />
                </Stack>
              </Box>
            </Stack>
            <Button onClick={updatePost} class="sign">Update</Button>
          </Stack>
        </>
      ) : (
        <HashLoader size={80} color="#A78BFA" style={{ margin: "auto" }} />
      )}
    </>
  );
}
