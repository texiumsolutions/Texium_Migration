import React, { useEffect, useRef, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";
import { NavBar } from "../../../Shared/NavBar/NavBar";
import { Card } from "../../../components/Card/Card";
import { InputField } from "../../../components/InputField/InputField";

export const EditProfileInfo = () => {
  const { detailsId } = useParams();
  const [detailsInfo, setDetailsInfo] = useState({});
  const [selectedValue, setSelectedValue] = useState("");
  const [setDefaultValue] = useState("");
  const textareaRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const uri = `https://texium-migration-server.onrender.com/testing/${detailsId}`;
    fetch(uri)
      .then((response) => response.json())
      .then((data) => setDetailsInfo(data))
      .catch((error) => alert(error));
  }, [detailsId]);

  // Go to run file with updated value
  const handleSaveAndRun = (event) => {
    event.preventDefault();

    const updateData = {
      profileName,
      Description,
      normalDate,
      Run_Number,
      Type,
      Id,
    };
    console.log(updateData);

    // send data to the server
    fetch(`https://texium-migration-server.onrender.com/${detailsId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((response) => response.json())
      .then((data) => {
        setDetailsInfo(data);
      })
      .catch((error) => {
        console.error("Update failed:", error);
      });
    navigate(`/scanner`);
  };

  // passed Datas
  const profileName = detailsInfo.Name;
  const Description = detailsInfo.Description;
  const Last_Run_On = detailsInfo.Last_Run_On;
  const normalDate = new Date(Last_Run_On).toLocaleDateString();
  const Run_Number = detailsInfo.Run_Number;
  const Type = detailsInfo.Type;
  const Id = detailsInfo._id;

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value);
  };

  const handleTextareaChange = (event) => {
    setDefaultValue(event.target.value);
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
              <IoArrowBack/>
              Back
            </Link>
          </div>
          <div className="opentab_details_container">
            <div className="opentab_details">
              <p>Details</p>
              <Card height={"calc(100vh - 13.5em)"}>
                <form className="opentab_details_form">
                  <label className="label" htmlFor="fileName">
                    Name
                  </label>
                  <br />
                  <input
                    className="opentab_details_input"
                    type="text"
                    name="fileName"
                    placeholder="File Name"
                    defaultValue={profileName}
                  />

                  <label className="label" htmlFor="fileSystem">
                    Type
                  </label>

                  <br />

                  <select
                    className="opentab_details_input"
                    onChange={handleChange}
                    defaultValue={selectedValue}
                    // disabled
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
                    className="opentab_details_input"
                    ref={textareaRef}
                    defaultValue={Description}
                    onChange={handleTextareaChange}
                    placeholder="Description"
                  />
                </form>
              </Card>
            </div>

            <div className="opentab_parameters">
              <p>Parameters</p>

              <Card height={"calc(100vh - 13.5em)"}>
                <div className="parameter_container">
                  <table>
                    <tbody>
                      <>
                        <InputField
                          text={"id"}
                          type={"text"}
                          value={Id}
                          disabled
                        />
                        <InputField text={"Type"} type={"text"} value={Type} />
                        <InputField
                          text={"Last Run On"}
                          type={"text"}
                          value={normalDate}
                        />
                        <InputField
                          text={"Run Number"}
                          type={"text"}
                          value={Run_Number}
                        />
                        <input
                          onClick={handleSaveAndRun}
                          className="edit_btn"
                          type="button"
                          name="save_button"
                          value="Edit"
                        />
                      </>
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
