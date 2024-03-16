import { AppBar, Button, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/Slices/AuthSlice";

export default function Header() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);



  return (
    <>
      <AppBar sx={{ background: "#010409" }}>
        <Stack
          component={"ul"}
          sx={{ flexDirection: "row", gap: "20px", fontSize: "20px" }}
        >
          <Stack component={"li"}>
            <Link style={{ color: "#A78BFA" }}>Home</Link>
          </Stack>
          {token ? (
            <>
              <Stack component={"li"}>
                <Link to={'/create-post'} style={{ color: "#A78BFA" }}>Create Post</Link>
              </Stack>
              <Stack component={"li"}>
                <Button
                  onClick={()=>dispatch(logout())}
                  style={{ color: "#A78BFA", fontSize: "18px" }}
                >
                  Logout
                </Button>
              </Stack>
            </>
          ) : (
            <>
              <Stack component={"li"}>
                <Link
                  to={"/login-register"}
                  style={{ color: "#A78BFA", fontSize: "18px"}}
                >
                  Login/Register
                </Link>
              </Stack>
            </>
          )}
        </Stack>
      </AppBar>
    </>
  );
}
