import React, { useState } from "react";
import "./FileUploader.css";

export const FileUploader = ({ selectedName, selectedValue, value }) => {
  const [directoryPath, setDirectoryPath] = useState("");

  const handleChange = (event) => {
    setDirectoryPath(event.target.value);
  };

  const handleUpload = (event) => {
    event.preventDefault();

    fetch("https://texium-migration-server.onrender.com/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        directoryPath,
        selectedName,
        selectedValue,
        value,
      }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Upload successful!");
        } else {
          alert("Upload failed!");
        }
        return response.json();
      })
      .catch((error) => {
        console.error(error);
        alert("Upload failed!");
      });
  };

  return (
    <div>
      <div className="filePath">
        <label for="input">Path</label>
        <input
          className="parameter_inputfield"
          type="text"
          value={directoryPath}
          onChange={handleChange}
        />
      </div>

      <br />

      <button className="upload_btn" onClick={handleUpload}>
        Submit
      </button>
    </div>
  );
};
