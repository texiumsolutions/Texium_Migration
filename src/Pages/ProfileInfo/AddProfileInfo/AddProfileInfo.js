import React, { useRef, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { NavBar } from "../../../Shared/NavBar/NavBar";
import { Card } from "../../../components/Card/Card";
import { FileUploader } from "../../../components/FileUploader/FileUploader";

const AddProfileInfo = () => {
  const [selectedName, setSelectedName] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [value, setValue] = useState("");
  const [ipValue, setIpValue] = useState("");
  const [userNameValue, setUserNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [databaseValue, setDatabaseValue] = useState("");
  const textareaRef = useRef(null);

  const handleIpChange = (event) => {
    setIpValue(event.target.value);
  };
  const handleUserNameChange = (event) => {
    setUserNameValue(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };
  const handleDatabaseChange = (event) => {
    setDatabaseValue(event.target.value);
  };

  const handleNameChange = (event) => {
    setSelectedName(event.target.value);
  };
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleTextareaChange = (event) => {
    setValue(event.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  // Database
  const handleUploadDatabase = () => {
    fetch(`http://localhost:5000/api/addMySQL`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ipValue,
        userNameValue,
        passwordValue,
        databaseValue,
      }),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <div className="nav_container">
        <NavBar />
      </div>

      <div className="content_container">
        <Card height="calc(100%)" width="calc(100%)">
          <div className="opentab_header">
            <Link className="opentab_back_btn" to={-1}>
              <IoArrowBack />
              Back
            </Link>
          </div>
          <div className="opentab_details_form">
            <div className="opentab_details_container">
              <div className="opentab_details">
                <p>Add Data</p>
                <Card height={"calc(100vh - 13.5em)"}>
                  {selectedValue === "File System" && (
                    <>
                      <label className="label" htmlFor="name">
                        Name
                      </label>

                      <br />

                      <input
                        className="opentab_details_input"
                        type="text"
                        placeholder="File Name"
                        value={selectedName}
                        onChange={handleNameChange}
                      />
                    </>
                  )}

                  <label className="label" htmlFor="option">
                    Type
                  </label>

                  <br />

                  <select
                    type="text"
                    required
                    className="opentab_details_input"
                    value={selectedValue}
                    onChange={handleChange}
                  >
                    <option value="" disabled hidden>
                      Select an option
                    </option>
                    <option value="File System">File System</option>
                    {/* <option value="MongoDB">MongoDB</option> */}
                    <option value="DataBase(MySQL)">DataBase(MySQL)</option>
                  </select>

                  {selectedValue === "File System" && (
                    <>
                      <label className="label">Description</label>

                      <br />

                      <textarea
                        type="text"
                        name="description"
                        className="opentab_details_input"
                        value={value}
                        onChange={handleTextareaChange}
                      />
                    </>
                  )}
                </Card>
              </div>
              <div className="opentab_parameters">
                <p>Parameters</p>

                <Card height={"calc(100vh - 13.5em)"}>
                  <div className="parameter_container">
                    <table>
                      <tbody>
                        {selectedValue === "File System" && (
                          <>
                            <FileUploader
                              // registerFieldText={"filePath"}
                              selectedName={selectedName}
                              selectedValue={selectedValue}
                              value={value}
                            />
                          </>
                        )}
                        {/* {selectedValue === "MongoDB" && (
                          <>
                            <InputField
                              text={"Scan Query"}
                              className="opentab_details_input"
                              type={"text"}
                              register={register}
                              registerFieldText={"scanQuery"}
                            />
                            <InputField
                              text={"Exclude AllData"}
                              className="opentab_details_input"
                              type={"text"}
                              register={register}
                              registerFieldText={"excludeAllData"}
                            />
                            <InputField
                              text={"Exclude Data"}
                              className="opentab_details_input"
                              type={"text"}
                              register={register}
                              registerFieldText={"excludeData"}
                            />
                          </>
                        )} */}
                        {selectedValue === "DataBase(MySQL)" && (
                          <>
                            <tr>
                              <td className="input_text_section">
                                <p>IP</p>
                              </td>

                              <td className="input_field_section">
                                <input
                                  className={"parameter_inputfield"}
                                  type={"text"}
                                  onChange={handleIpChange}
                                />
                              </td>
                            </tr>

                            <tr>
                              <td className="input_text_section">
                                <p>User Name</p>
                              </td>

                              <td className="input_field_section">
                                <input
                                  className={"parameter_inputfield"}
                                  type={"text"}
                                  onChange={handleUserNameChange}
                                />
                              </td>
                            </tr>
                            
                            <tr>
                              <td className="input_text_section">
                                <p>Passord</p>
                              </td>

                              <td className="input_field_section">
                                <input
                                  className={"parameter_inputfield"}
                                  type={"password"}
                                  onChange={handlePasswordChange}
                                />
                              </td>
                            </tr>

                            <tr>
                              <td className="input_text_section">
                                <p>Database</p>
                              </td>

                              <td className="input_field_section">
                                <input
                                  className={"parameter_inputfield"}
                                  type={"text"}
                                  onChange={handleDatabaseChange}
                                />
                              </td>
                            </tr>

                            <button
                              className="upload_btn"
                              onClick={handleUploadDatabase}
                            >
                              Submit
                            </button>
                          </>
                        )}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AddProfileInfo;
