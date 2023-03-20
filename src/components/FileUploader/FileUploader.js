import axios from "axios";
import React, { useState } from "react";
import "./FileUploader.css";

export const FileUploader = () => {
  const [path, setPath] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post("/testing", { path });
    console.log(response.data);
  };

  const handleInputChange = (event) => {
    setPath(event.target.value);
  };

  return (
    <div>
      <form className="filePath" onSubmit={handleSubmit}>
        <label style={{ display: "flex" }}>
          Local Path:
          <input
            className="parameter_inputfield"
            type="text"
            value={path}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};
