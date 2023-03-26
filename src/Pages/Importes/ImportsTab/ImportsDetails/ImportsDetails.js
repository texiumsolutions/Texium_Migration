import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Card } from "../../../../components/Card/Card";
import { InputField } from "../../../../components/InputField/InputField";
import "./ImportsDetails.css";

export const ImportsDetails = () => {
  // const [selectedValue, setSelectedValue] = useState("");
  // const [ defaultValue, setDefaultValue] = useState("");
  // const textareaRef = useRef(null);
  // const [file, setFile] = useState({});
  // const [successMessage, setSuccessMessage] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");

  // console.log(defaultValue);

  // const fileOnChange = (event) => {
  //   setFile(event.target.files[0]);
  // };

  // const sendFile = (event) => {
  //   event.preventDefault();
  //   let formData = new FormData();
  //   formData.append("avater", file);

  //   fetch(`http://localhost:5000/testing/${detailsId}`, {
  //     // method: "GET",
  //     body: formData,
  //   })
  //     .then((response) => response.json())
  //     .then((resBody) => {
  //       if (resBody.success) {
  //         setSuccessMessage(resBody.message);
  //         setErrorMessage("");
  //       } else {
  //         setErrorMessage(resBody.message);
  //         setSuccessMessage("");
  //       }
  //     })
  //     .catch((error) => {
  //       setErrorMessage("Failed to upload file.");
  //       setSuccessMessage("");
  //     });
  // };

  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  // };

  // const handleTextareaChange = (event) => {
  //   setDefaultValue(event.target.value);
  //   if (textareaRef.current) {
  //     textareaRef.current.style.height = "auto";
  //     textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  //   }
  // };
  const { register, handleSubmit, reset } = useForm();

  // const onSubmit = (data) => {
  //   fetch(`http://localhost:5000/testing/${detailsId}`, {
  //     method: "PUT",
  //     headers: {
  //       "content-type": "application/json",
  //     },

  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((inserted) => {
  //       if (inserted.insertedId) {
  //         alert("Added New Product Successfully");

  //         reset();
  //       } else {
  //         alert("Failed add to the data");
  //       }
  //     });
  //   console.log(data);
  // };
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
    <form className=" opentab_details_form" >
      <div className="opentab_details_container">
        <div className="opentab_details">
          <p>Add Data 
            {/* {detailsInfo.fileName} */}
            </p>
          <Card height={"calc(100vh - 255px)"}>
            <label className="label" htmlFor="">
              Name
               {/* {detailsInfo.fileName} */}
            </label>
            <br />
            <input
              className="opentab_details_input"
              type="text"
              name="fileName"
              placeholder="File Name"
              // defaultValue={""}
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
              value={value}
              onChange={handleTextareaChange}
            />
            <input className="submit_button" type="submit" value="Save & Run" />
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
                      <InputField
                        text={"Run Time"}
                        className="opentab_details_input"
                        type={"text"}
                        handleSubmit={handleSubmit}
                        register={register}
                        registerFieldText={"run_time"}
                      />

                      <InputField
                        text={"Last Run On"}
                        className="opentab_details_input"
                        type={"text"}
                        handleSubmit={handleSubmit}
                        register={register}
                        registerFieldText={"last_run_on"}
                      />

                      <InputField
                        text={"Last Run Status"}
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
                      <InputField
                        text={"Scan Query"}
                        className="opentab_details_input"
                        type={"text"}
                        handleSubmit={handleSubmit}
                        register={register}
                        registerFieldText={"scan_query"}
                      />
                      <InputField
                        text={"Exclude AllData"}
                        className="opentab_details_input"
                        type={"text"}
                        handleSubmit={handleSubmit}
                        register={register}
                        registerFieldText={"exclude_allData"}
                      />
                      <InputField
                        text={"Exclude Data"}
                        className="opentab_details_input"
                        type={"text"}
                        handleSubmit={handleSubmit}
                        register={register}
                        registerFieldText={"exclude_data"}
                      />
                    </>
                  )}
                  {selectedValue === "DataBase(MySQL)" && (
                    <>
                      <InputField
                        text={"Scan Quary For All"}
                        className="opentab_details_input"
                        type={"text"}
                        handleSubmit={handleSubmit}
                        register={register}
                        registerFieldText={"scanQuaryForAll"}
                      />
                      <InputField
                        text={"Exclude Single Data"}
                        className="opentab_details_input"
                        type={"text"}
                        handleSubmit={handleSubmit}
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
    </form>
  );
};
