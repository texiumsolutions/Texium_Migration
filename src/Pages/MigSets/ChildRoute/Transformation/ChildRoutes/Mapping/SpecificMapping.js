import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../Transformation.css";

const SpecificMapping = () => {
  const { sourceId } = useParams();
  const [sourceOne, setsourceOne] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/products/${sourceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setsourceOne(data));
  }, [sourceId]);
  console.log(sourceOne);
  return (
    <div>
      <h4
        style={{
          color: "var(--primary)",
        }}
      >
        {" "}
        ID Number:{sourceOne._id}
      </h4>
      <label className="label" htmlFor="">
        Name
      </label>
      <br />
      <input
        className="opentab_details_input"
        type="text"
        value={sourceOne.File_Name}
        disabled
      />

      <label className="label" htmlFor="option">
        Type
      </label>

      <br />

      <input
        type="text"
        className="opentab_details_input"
        disabled
        value={sourceOne.Source_Type}
      />
      <label className="label" htmlFor="option">
        Directory Path
      </label>

      <br />

      <input
        type="text"
        className="opentab_details_input"
        disabled
        value={sourceOne.Directory_Path}
      />

      <label className="label">Description</label>

      <br />

      <textarea
        type="text"
        name="description"
        className="opentab_details_input"
        value={sourceOne.Description}
        disabled
      />

      <input className="submit_button" type="submit" value="Save" />
    </div>
  );
};

export default SpecificMapping;
