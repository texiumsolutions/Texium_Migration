import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Card } from "../../../components/Card/Card";
import { InputField } from "../../../components/InputField/InputField";
import "./Details.css";

const Add = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    fetch("http://localhost:5000/testing", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((inserted) => {
        if (inserted.insertedId) {
          alert("Added New Product Successfully");

          reset();
        } else {
          alert("Failed add to the data");
        }
      });
  };
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
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
      ;
    }
  };
  return (
    <div className="opentab_details_container">
      <form className=" opentab_details_form" onSubmit={handleSubmit(onSubmit)}>
        <div className="opentab_details">
          <p>Add Data</p>
          <Card height={"calc(100vh - 255px)"}>
            <label className="label" htmlFor="">
              Name
            </label>
            <br />
            <input
              className="opentab_details_input"
              type="text"
              placeholder="File Name"
              {...register("fileName")}
            />

            <label className="label" htmlFor="option">
              Type
            </label>

            <br />

            <select
              type="text"
              {...register("dropdown")}
              required
              className="opentab_details_input"
              value={selectedValue}
              onChange={handleChange}
            >
              <option value="" disabled hidden>
                Select an option
              </option>
              <option value="File System">File System</option>
              <option value="MongoDB">MongoDB</option>
              <option value="DataBase(MySQL)">DataBase(MySQL)</option>
            </select>

            <label className="label" >
              Description
            </label>

            <br />

            <textarea
              type="text"
              name="description"
              className="opentab_details_input"
              ref={textareaRef}
              value={value}
              onChange={handleTextareaChange}
              id="description" 
              // {...register("description")}
              
              
            />

            <input type="submit" />
          </Card>
        </div>
      </form>

      <div className="opentab_parameters">
        <p>Parameters</p>

        <Card height={"calc(100vh - 255px)"}>
          <div className="parameter_container">
            <table>
              <tbody>
                {selectedValue === "File System" && (
                  <>
                    <InputField
                      text={"scanFolderPaths"}
                      type={"text"}
                      {...register("scanFolder")}
                    />
                    <InputField
                      text={"excludeFolderPaths"}
                      type={"text"}
                      {...register("excludeFolder")}
                    />
                    <InputField
                      text={"excludeFiles"}
                      type={"text"}
                      {...register("excludeFiles")}
                    />
                    <InputField
                      text={"scanChangedFilesBehaviour"}
                      type={"text"}
                      {...register("scanChangedFiles")}
                    />
                    <InputField
                      text={"moveFilesToFolder"}
                      type={"text"}
                      {...register("moveFilesToFolder")}
                    />
                    <InputField
                      text={"ignoreHiddenFiles"}
                      type={"checkbox"}
                      {...register("ignoreHiddenFiles")}
                    />
                    <InputField
                      text={"scanFolders"}
                      type={"checkbox"}
                      {...register("scanFolders")}
                    />
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
