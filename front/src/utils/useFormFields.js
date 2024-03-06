import React, { useState } from "react";

export default function FormFields() {
  const [fields, setFields] = useState();
  const handleFields = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };
  return [fields, handleFields];
}
