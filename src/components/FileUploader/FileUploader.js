import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FileUploader.css";

export const FileUploader = () => {
  const navigate = useNavigate();
  const [directoryPath, setDirectoryPath] = useState("");
  const [dataFiles, setDataFiles] = useState("");

  const handleChange = (event) => {
    setDirectoryPath(event.target.value);
  };

  const handleUpload = (event) => {
    event.preventDefault();

    fetch("http://localhost:5000/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ directoryPath }),
    })
      .then((response) => response.json())
      .then((data) => {
        const files = data.files;
        setDataFiles(files);
      })
      .catch((error) => console.error(error));

    console.log(dataFiles);
    navigate("/fileUploadRun", { state: { dataFiles } });
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
