import React, { useRef, useState } from "react";
import { Card } from "../../../components/Card/Card";
import { InputField } from "../../../components/InputField/InputField";
import '../Imports.css';

const Details = () => {
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
        <p>Details</p>
        <Card height={"calc(100vh - 255px)"}>
          <form className="opentab_details_form">
            <label className="label" htmlFor="fileName">
              Name
            </label>
            <br />
            <input type="text" name="fileName" placeholder="File Name" />

            <label className="label" htmlFor="fileSystem">
              Type
            </label>

            <br />

            <select value={selectedValue} onChange={handleChange}>
              <option value="" disabled hidden>
                Select an option
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>

            <label className="label" htmlFor="Description">
              Description
            </label>
            <br />
            <textarea
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
              <InputField text={"scanFolderPaths"} type={"text"} />
              <InputField text={"excludeFolderPaths"} type={"text"} />
              <InputField text={"excludeFiles"} type={"text"} />
              <InputField text={"scanChangedFilesBehaviour"} type={"text"} />
              <InputField text={"moveFilesToFolder"} type={"text"} />
              <InputField text={"ignoreHiddenFiles"} type={"checkbox"} />
              <InputField text={"scanFolders"} type={"checkbox"} />
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Details;
