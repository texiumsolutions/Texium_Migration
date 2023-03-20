import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "../../../../components/Card/Card";
import { FileUploader } from "../../../../components/FileUploader/FileUploader";
import { InputField } from "../../../../components/InputField/InputField";
import "./OpenTabDetails.css";

export const OpenTabDetails = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [defaultValue, setDefaultValue] = useState("");
  const textareaRef = useRef(null);
  const [file, setFile] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();

  // passed Datas
  const profileName = location.state?.name;
  const Description = location.state?.Description;
  const Last_Run_On = location.state?.Last_Run_On;
  const normalDate = new Date(Last_Run_On).toLocaleDateString();
  const Run_Number = location.state?.Run_Number;
  const Type = location.state?.Type;
  const Id = location.state?._id;

  const fileOnChange = (event) => {
    setFile(event.target.files[0]);
  };

  const sendFile = (event) => {
    event.preventDefault();
    let formData = new FormData();

    formData.append("avater", file);

    fetch("http://localhost:5000/uploadFile", {
      method: "post",
      body: formData,
    })
      .then((response) => response.json())
      .then((resBody) => {
        if (resBody.success) {
          setSuccessMessage(resBody.message);
          setErrorMessage("");
        } else {
          setErrorMessage(resBody.message);
          setSuccessMessage("");
        }
      })
      .catch((error) => {
        setErrorMessage("Failed to upload file.");
        setSuccessMessage("");
      });
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value);
  };

  const handleTextareaChange = (event) => {
    setDefaultValue(event.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className="opentab_details_container">
      <div className="opentab_details">
        <p>Details</p>
        <Card height={"calc(100vh - 255px)"}>
          <form className="opentab_details_form">
            <label className="label" htmlFor="fileName">
              Name
            </label>
            <br />
            <input
              className="opentab_details_input"
              type="text"
              name="fileName"
              placeholder="File Name"
              defaultValue={profileName}
            />

            <label className="label" htmlFor="fileSystem">
              Type
            </label>

            <br />

            <select
              className="opentab_details_input"
              value={selectedValue}
              onChange={handleChange}
              defaultValue={selectedValue}
              // disabled
            >
              <option value="" disabled hidden>
                Select an option
              </option>
              <option value="File System">File System</option>
              <option value="MongoDB">MongoDB</option>
              <option value="DataBase(MySQL)">DataBase(MySQL)</option>
            </select>

            <label className="label" htmlFor="Description">
              Description
            </label>

            <br />

            <textarea
              className="opentab_details_input"
              ref={textareaRef}
              defaultValue={Description}
              onChange={handleTextareaChange}
              placeholder="Description"
            />
          </form>
        </Card>
      </div>

      <div className="opentab_parameters">
        <p>Parameters</p>

        <Card height={"calc(100vh - 255px)"}>
          <div className="parameter_container">
            <table>
              <tbody>
                {selectedValue === "File System" && (
                  <>
                    {/* <InputField text={"scanFolderPaths"} type={"text"} />
                    <br />
                    <input type="button" name="fileScanButton" value="SAVE" /> */}
                    <FileUploader />
                  </>
                )}
                {selectedValue === "MongoDB" && (
                  <>
                    <InputField text={"id"} type={"text"} value={Id} />
                    <InputField text={"Type"} type={"text"} value={Type} />
                    <InputField
                      text={"Last Run On"}
                      type={"text"}
                      value={normalDate}
                    />
                    <InputField
                      text={"Run Number"}
                      type={"text"}
                      value={Run_Number === "" ? "No Runtime" : Run_Number}
                    />
                    <InputField
                      selectedValue={selectedValue}
                      fileOnChange={fileOnChange}
                      sendFile={sendFile}
                      errorMessage={errorMessage}
                      successMessage={successMessage}
                      text={"fileInfo"}
                      type={"file"}
                    />
                  </>
                )}
                {selectedValue === "DataBase(MySQL)" && (
                  <>
                    <InputField text={"scanQuaryForAll"} type={"text"} />
                    <InputField text={"excludeSingleData"} type={"text"} />
                  </>
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};
