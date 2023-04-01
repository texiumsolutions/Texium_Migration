import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../Transformation.css";
import { Card } from "../../../../../../components/Card/Card";
import { useForm } from "react-hook-form";

const SpecificMapping = () => {
  const { sourceId } = useParams();
  const [sourceOne, setsourceOne] = useState({});
  // const [sourceAdd, setSourceAdd] = useState("");
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const url = `http://localhost:5000/testing/${sourceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setsourceOne(data));
      
  }, [sourceId]);
 console.log(sourceOne);
  // const { File_Name,  Description, Source_Type } = sourceAdd;
  const onSubmit = (data) => {
    console.log(data);
    // event.preventDefault();
    // const File_Name = event.target.File_Name.value;
    // const sourceAdd = {
    //   // Id: _id,
    //   File_Name: File_Name,
    //   Source_Type: Source_Type,
    //   Description: Description,
    //   Directory_Path: Description,
    // };

    fetch("http://localhost:5000/newTesting", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(setsourceOne),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("Successfully add mapping!");
          reset();
        } else {
          alert("Failed to add mapping!");
        }
        
        setsourceOne();
      });
      
  };
  return (
    <div>
      <form className=" opentab_details_form" onSubmit={handleSubmit(onSubmit)}>
        <div className="opentab_details_container">
          <div className="propertice_details_container">
            <div className="opentab_details">
              <p>Change Data</p>
              <Card height={"calc(100vh - 255px)"}>
                <h5>Creation Date</h5>
                <p>{sourceOne.Uploaded_At}</p>

                <h5>Last Operation Date </h5>
                <p>2023-03-29 19:08</p>
              </Card>
            </div>
          </div>
          <div className="opentab_details">
            <p>Information</p>
            <Card height={"calc(100vh - 255px)"}>
              <h4> ID Number:- {sourceOne._id}</h4>
              <label className="label" htmlFor="">
                Name
              </label>
              <br />
              <input
                className="opentab_details_input"
                type="text"
                value={sourceOne.File_Name}
                {...register("File_Name")}
                required
              />

              <label className="label" htmlFor="option">
                Type
              </label>

              <br />

              <input
                type="text"
                className="opentab_details_input"
                value={sourceOne.Source_Type}
                disabled
                required
                {...register("Source_Type")}
              />
              <label className="label" htmlFor="option">
                Directory Path
              </label>

              <br />

              <textarea
                type="text"
                name="description"
                className="opentab_details_input"
                defaultValue={sourceOne.Directory_Path}
                {...register("Directory_Path")}
                required
              />

              <label className="label">Description</label>

              <br />

              <textarea
                type="text"
                name="description"
                className="opentab_details_input"
                defaultValue={sourceOne.Description}
                {...register("Description")}
                required
              />

              <input className="submit_button" type="submit" value="Save" />
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SpecificMapping;
