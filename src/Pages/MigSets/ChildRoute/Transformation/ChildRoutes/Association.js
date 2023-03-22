import React from 'react';
import { AiFillDelete, AiOutlinePlusSquare } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Association = () => {
  return (
    <div className="mapping_migset">
    <div className="mapping_list_left">
      <h3 >Mapping List</h3>
      <div>
        <div className="table_header">
          <input type="text" />
          <button type="button">
            <Link className="table_header_link" to={""}>
              <AiOutlinePlusSquare />
            </Link>
          </button>
          
          <button type="button">
            <Link className="table_header_link" to={""}>
              <AiFillDelete />
            </Link>
          </button>
        </div>
        <p>
          Document
        </p>
      </div>
    </div>
    <div className="association_list_right">
    <h6>Assosiations</h6>
      <p className="association_p">
      Please select a Mapping list to view details for it.
      </p>
      
    </div>
  </div>
  );
};



export default Association;