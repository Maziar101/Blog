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

export default function CreatePost() {
  const [fields, handleFields] = FormFields();
  const [cat, setCat] = useState("");
  const handleCatChange = (e) => {
    setCat(e.target.value);
  };
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
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cat}
          label="category"
          onChange={handleCatChange}
        >
          <MenuItem value={"Sport"}>Sport</MenuItem>
          <MenuItem value={"Digital"}>Digital</MenuItem>
          <MenuItem value={"Medical"}>Medical</MenuItem>
        </Select>
        <button class="sign">Login</button>
      </Stack>
      <Typography class="signup">
        Don't have an account?{" "}
        <Button rel="noopener noreferrer" class="changebtn">
          Register
        </Button>
      </Typography>
    </Stack>
  );
}
