import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const PropertiesDetails = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/sourceObjects", {
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
    <div className="container_migset">
      <form
        className=" opentab_details_form "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="propertice_details_container">
          <div className="opentab_details">
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
              disabled
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
            <h5>Creation Date</h5>
            <p>2023-03-29 19:08</p>

            <h5>Last Operation Date </h5>
            <p>2023-03-29 19:08</p>
            <h5>Last operation</h5>
            <p>Object Unselection</p>

            <input
              className=" propetise_save_button"
              type="submit"
              value="Save & Run"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PropertiesDetails;
