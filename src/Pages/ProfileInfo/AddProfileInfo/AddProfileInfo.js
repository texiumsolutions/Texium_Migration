import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { InputField } from "../../components/InputField/InputField";
import { NavBar } from "../../Shared/NavBar/NavBar";

const AddProfileInfo = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
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
    console.log(data);
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
    <div className="container">
      <div className="nav_container">
        <NavBar />
      </div>

      <div className="content_container">
        <Card height="calc(100%)" width="calc(100%)">
        <div className="opentab_header">
          <Link className="opentab_back_btn" to={"/scanner"}>
            Back
          </Link>
        </div>
          <form
            className="opentab_details_form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="opentab_details_container">
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
                  <input
                    className="submit_button"
                    type="submit"
                    value="Save & Run"
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
        </Card>
      </div>
    </div>
  );
};

export default AddProfileInfo;
