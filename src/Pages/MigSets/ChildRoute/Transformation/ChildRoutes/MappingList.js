import React from "react";
import "../../../Migset.css";
import { AiOutlinePlusSquare, AiFillFile, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const MappingList = () => {
  return (
    <div className="mapping_migset">
      <div className="mapping_list_left">
        <h3>Mapping List</h3>
        <div>
          <div className="table_header">
            <button type="button">
              <Link className="table_header_link" to={""}>
                <AiOutlinePlusSquare />
              </Link>
            </button>
            <button type="button">
              <Link className="table_header_link" to={""}>
                <AiFillFile />
              </Link>
            </button>
            <button type="button">
              <Link className="table_header_link" to={""}>
                <AiFillDelete />
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="mapping_list_right">
        <h6>Mapping List Properties</h6>
        <p className="mapping_p">
          Please select a Mapping list to view details for it.
        </p>
        <h6>Mapping List Values</h6>
        <p className="mapping_p">
          Please select a Mapping list to view details for it.
        </p>
      </div>
    </div>
  );
};

export default MappingList;
