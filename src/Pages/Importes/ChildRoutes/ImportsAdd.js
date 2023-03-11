import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Card } from "../../../components/Card/Card";
import { InputField } from "../../../components/InputField/InputField";
import "./ImportsDetails.css";

const ImportsAdd = () => {
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
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };
  return (
    <form className=" opentab_details_form" onSubmit={handleSubmit(onSubmit)}>
      <div className="opentab_details_container">
        <div className="opentab_details">
          <p>Details</p>
          <Card height={"calc(100vh - 255px)"}>
            <form className="opentab_details_form">
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

              <label className="label" htmlFor="fileSystem">
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

              <label className="label" htmlFor="Description">
                Description
              </label>

              <br />

              <textarea
                type="text"
                name="description"
                className="opentab_details_input"
                {...register("description")}
                // ref={textareaRef}
                value={value}
                onChange={handleTextareaChange}
                // id="description"
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
                      <InputField
                        text={"ignoreHiddenFiles"}
                        type={"checkbox"}
                      />
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

      {/* <div className="opentab_details_container">
        <div className="opentab_details">
          <p>Add Data</p>
          <Card height={"calc(100vh)"}>
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

            <label className="label">Description</label>

            <br />

            <textarea
              type="text"
              name="description"
              className="opentab_details_input"
              {...register("description")}
              // ref={textareaRef}
              value={value}
              onChange={handleTextareaChange}
              // id="description"
            />
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
                      <label className="label" htmlFor="">
                        Run Time
                      </label>
                      <input
                        className="opentab_details_input"
                        type="text"
                        {...register("run_time")}
                      />
                      <label className="label" htmlFor="">
                        Last Run On
                      </label>
                      <input
                        className="opentab_details_input"
                        type="text"
                        {...register("last_run_on")}
                      />
                      <label className="label" htmlFor="">
                      Last Run Status
                      </label>
                      <InputField
                        className="opentab_details_input"
                        type={"text"}
                        handleSubmit={handleSubmit}
                        register={register}
                        registerFieldText={"last_run_status"}
                      />
                    </>
                  )}
                  {selectedValue === "MongoDB" && (
                    <>
                      <label className="label" htmlFor="">
                        Scan Quary
                      </label>
                      <input
                        className="opentab_details_input"
                        type="text"
                        text="Run Time"
                        {...register("scan_query")}
                      />
                      <label className="label" htmlFor="">
                        excludeAllData
                      </label>
                      <input
                        className="opentab_details_input"
                        type="text"
                        text="Run Time"
                        {...register("exclude_allData")}
                      />
                      <label className="label" htmlFor="">
                        Exclude Data
                      </label>
                      <input
                        className="opentab_details_input"
                        type="text"
                        text="Run Time"
                        {...register("exclude_data")}
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
            <input className="submit_button" type="submit" value="Save" />
          </Card>
        </div>
      </div> */}
    </form>
  );
};

export default ImportsAdd;
