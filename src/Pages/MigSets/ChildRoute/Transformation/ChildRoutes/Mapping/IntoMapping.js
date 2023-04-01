import React from "react";
import { useNavigate } from "react-router-dom";

const IntoMapping = ({ sourceFileInfo }) => {
  const { _id, File_Name, Source_Type, Description, Directory_Path } =
    sourceFileInfo;
  const navigate = useNavigate();
  const fileDetail = (_id) => {
    navigate(`/migsets/migsets-route/transformation/source/${_id}`);
  };

  return (
    <div>
      <h4
        style={{
          color: "var(--primary)",
        }}
      >
        {" "}
        ID Number:{_id}
      </h4>
      <label className="label" htmlFor="">
        Name
      </label>
      <br />
      <input
        className="opentab_details_input"
        type="text"
        value={File_Name}
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
        value={Source_Type}
      />
      <label className="label" htmlFor="option">
        Directory Path
      </label>

      <br />

      <input
        type="text"
        className="opentab_details_input"
        disabled
        value={Directory_Path}
      />

      <label className="label">Description</label>

      <br />

      <textarea
        type="text"
        name="description"
        className="opentab_details_input"
        value={Description}
        disabled
      />

      {/* <button className="submit_button" type="submit" value="Go for Mapping" /> */}
      <button onClick={() => fileDetail(_id)} className="submit_button">
        Go for Mapping
      </button>
    </div>
  );
};

export default IntoMapping;
