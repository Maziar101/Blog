import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "../Form/index.css";
import FormFields from "../../utils/useFormFields";
import { useSelector } from "react-redux";

export default function CreatePost() {
    const {token} = useSelector((state)=>state.auth);
  const [fields, handleFields] = FormFields();
  const [cat, setCat] = useState("Sport");
  const handleCatChange = (e) => {
    setCat(e.target.value);
  };
  const createPost = ()=>{
    (async()=>{
        const res = await fetch("http://localhost:5000/api/posts",{
            method:"POST",
            body:JSON.stringify({
                title: fields.title,
                desc: fields.desc,
                category: cat,
            }),
            headers:{
                authorization: `Bearer ${token}` ,
                'Content-Type': 'application/json',
            },
        });
        const data = await  res.json();
        console.log(data)
    })();
  }
  return (
    <Stack class="form-container">
      <Typography class="title">Create Post</Typography>
      <Stack class="form">
        <Stack class="input-group">
          <TextField
            sx={{ width: "100%" }}
            label="Title"
            color="secondary"
            onChange={handleFields}
            type="text"
            name="title"
            id="title"
          />
        </Stack>
        <Stack class="input-group">
          <TextField
            sx={{ width: "100%" }}
            label="description"
            type="desc"
            color="secondary"
            onChange={handleFields}
            name="desc"
            id="desc"
          />
        </Stack>
        <InputLabel sx={{color:"white"}} id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cat}
          label="category"
          sx={{color:"white"}}
          onChange={handleCatChange}
        >
          <MenuItem sx={{color:"black"}} value={"Sport"}>Sport</MenuItem>
          <MenuItem sx={{color:"black"}} value={"Digital"}>Digital</MenuItem>
          <MenuItem sx={{color:"black"}} value={"Medical"}>Medical</MenuItem>
        </Select>
        <Button onClick={createPost} class="sign">Create</Button>
      </Stack>
    </Stack>
  );
}
