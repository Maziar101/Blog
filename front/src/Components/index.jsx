import { AppBar, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const [categories, setCategories] = useState();
  const { token } = useSelector((state) => state.auth);
  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:5000/api/categories");
      const data = await res.json();
      setCategories(data?.data);
    })();
  }, []);

  const items = categories?.map((category, index) => (
    <Stack component={"li"} key={index}>
      <Link style={{color:"#A78BFA"}}>{category?.name}</Link>
    </Stack>
  ));

  return (
    <>
      <AppBar sx={{ background: "#010409" }}>
        <Stack
          component={"ul"}
          sx={{ flexDirection: "row", gap: "20px", fontSize: "20px" }}
        >
          <Stack component={"li"}>
            <Link style={{color:"#A78BFA"}}>Home</Link>
          </Stack>
          {items}
          {token && (
            <>
              <Stack component={"li"}>
                <Link style={{color:"#A78BFA"}}>Create Category</Link>
              </Stack>
              <Stack component={"li"}>
                <Link style={{color:"#A78BFA"}}>Create Category</Link>
              </Stack>
            </>
          )}
        </Stack>
      </AppBar>
    </>
  );
}
