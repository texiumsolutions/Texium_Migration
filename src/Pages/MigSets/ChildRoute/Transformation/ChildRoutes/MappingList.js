import React, { useEffect, useRef, useState } from "react";
import "../../../Migset.css";
import { FaChevronDown } from "react-icons/fa";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { Card } from "../../../../../components/Card/Card";

const MappingList = () => {
  const [sourceFileInfo, setSourceFileInfo] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch("https://texium-migration-server.onrender.com/testing", {
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

  useEffect(() => {
    fetch("https://texium-migration-server.onrender.com/testing")
      .then((response) => response.json())
      .then((data) => setSourceFileInfo(data))
      .catch((error) => alert(error));
  }, []);

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "#dddddd",
        borderRight: "1px solid var(--primary)",
        fontWeight: "900",
        color: "var(--primary)",
      },
    },
    cells: {
      style: {
        paddingLeft: "16px",
        paddingRight: "8px",
        borderRight: "1px solid var(--background)",
      },
    },
  };

  const columns =
    sourceFileInfo.length > 0 ? Object.keys(sourceFileInfo[0]) : [];

  const colDisplay = columns.slice(0, -1);

  const columnsToDisplay = colDisplay.map((column) => ({
    name: column,
    selector: (row) => getField(row, column),
    sortable: true,
  }));

  const data = sourceFileInfo.map((info) => {
    const flatInfo = {};
    for (const key in info) {
      if (typeof info[key] === "object" && info[key] !== null) {
        for (const subKey in info[key]) {
          flatInfo[`${key}.${subKey}`] = info[key][subKey];
        }
      } else {
        flatInfo[key] = info[key];
      }
    }
    return flatInfo;
  });

  const getField = (row, field) => {
    const fields = field.split(".");
    let value = row[fields[0]];
    for (let i = 1; i < fields.length; i++) {
      value = value?.[fields[i]];
    }
    return value;
  };

  return (
    <div>
      <form className=" opentab_details_form" onSubmit={handleSubmit(onSubmit)}>
        <div className="opentab_details_container">
          <div className="opentab_parameters">
            <p>Parameters</p>

            <Card height={"calc(100vh - 255px)"}>
              <div className="select_btn">
                <span className="mappin_btn_text">Select Name</span>
                <span className="mappin_arroe_down">
                  <FaChevronDown></FaChevronDown>
                </span>
              </div>
              <div className="list_items ">
                <option className="items">
                  <span className="item_text">File 1</span>
                </option>
                <option className="items">
                  <span className="item_text">File 2</span>
                </option>
                <option className="items">
                  <span className="item_text">File 3</span>
                </option>
                <option className="items">
                  <span className="item_text">File 4</span>
                </option>
                <option className="items">
                  <span className="item_text">File 5</span>
                </option>
                <option className="items">
                  <span className="item_text">File 6</span>
                </option>
                <option className="items">
                  <span className="item_text">File 7</span>
                </option>
                <option className="items">
                  <span className="item_text">File 8</span>
                </option>
                <option className="items">
                  <span className="item_text">File 9</span>
                </option>
                <option className="items">
                  <span className="item_text">File 10</span>
                </option>
                <option className="items">
                  <span className="item_text">File 11</span>
                </option>
                <option className="items">
                  <span className="item_text">File 12</span>
                </option>
                <option className="items">
                  <span className="item_text">File 13</span>
                </option>
                <option className="items">
                  <span className="item_text">File 14</span>
                </option>
                <option className="items">
                  <span className="item_text">File 15</span>
                </option>
                <option className="items">
                  <span className="item_text">File 16</span>
                </option>
                <option className="items">
                  <span className="item_text">File 17</span>
                </option>
                <option className="items">
                  <span className="item_text">File 18</span>
                </option>
                <option className="items">
                  <span className="item_text">File 19</span>
                </option>
                <option className="items">
                  <span className="item_text">File 20</span>
                </option>
                <option className="items">
                  <span className="item_text">File 21</span>
                </option>
                <option className="items">
                  <span className="item_text">File 22</span>
                </option>
                <option className="items">
                  <span className="item_text">File 23</span>
                </option>
                <option className="items">
                  <span className="item_text">File 24</span>
                </option>
                <option className="items">
                  <span className="item_text">File 25</span>
                </option>
                <option className="items">
                  <span className="item_text">File 26</span>
                </option>
                <option className="items">
                  <span className="item_text">File 27</span>
                </option>
              </div>
            </Card>
          </div>
          <div className="opentab_details">
            <p>Change Data</p>
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
        </div>
      </form>
    </div>
  );
};

export default MappingList;
