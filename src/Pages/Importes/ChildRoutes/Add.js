import React, { useRef, useState } from "react";
import { Card } from "../../../components/Card/Card";
import { InputField } from "../../../components/InputField/InputField";
import './Details.css';

const Add = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);

  

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
    <div className="opentab_details_container">
      <div className="opentab_details">
        <p>Add Data</p>
        <Card height={"calc(100vh - 255px)"}>
          <form className="opentab_details_form">
            <label className="label" htmlFor="fileName">
              Name
            </label>
            <br />
            <input className="opentab_details_input" type="text" name="fileName" placeholder="File Name" />

            <label className="label" htmlFor="fileSystem">
              Type
            </label>

            <br />

            <select className="opentab_details_input" value={selectedValue} onChange={handleChange}>
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
              value={value}
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
                    <InputField text={"scanFolderPaths"} type={"text"} />
                    <InputField text={"excludeFolderPaths"} type={"text"} />
                    <InputField text={"excludeFiles"} type={"text"} />
                    <InputField
                      text={"scanChangedFilesBehaviour"}
                      type={"text"}
                    />
                    <InputField text={"moveFilesToFolder"} type={"text"} />
                    <InputField text={"ignoreHiddenFiles"} type={"checkbox"} />
                    <InputField text={"scanFolders"} type={"checkbox"} />
                  </>
                )}
                {selectedValue === "MongoDB" && (
                  <>
                    <InputField text={"scanQuary"} type={"text"} />
                    <InputField text={"excludeAllData"} type={"text"} />
                    <InputField text={"excludeData"} type={"text"} />
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

export default Add;