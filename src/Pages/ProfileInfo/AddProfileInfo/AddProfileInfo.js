import React, { useRef, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { NavBar } from "../../../Shared/NavBar/NavBar";
import { Card } from "../../../components/Card/Card";
import { FileUploader } from "../../../components/FileUploader/FileUploader";
import { InputField } from "../../../components/InputField/InputField";

const AddProfileInfo = () => {
  const [selectedName, setSelectedName] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);
  const register = (text) => {
    return text;
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

                  <label className="label">Description</label>

                  <br />

                  <textarea
                    type="text"
                    name="description"
                    className="opentab_details_input"
                    value={value}
                    onChange={handleTextareaChange}
                  />
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
                            <InputField
                              text={"Scan Quary For All"}
                              className="opentab_details_input"
                              type={"text"}
                              register={register}
                              registerFieldText={"scanQuaryForAll"}
                            />
                            <InputField
                              text={"Exclude Single Data"}
                              className="opentab_details_input"
                              type={"text"}
                              register={register}
                              registerFieldText={"excludeSingleData"}
                            />
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
