import React from "react";
import DataTable from "react-data-table-component";
import { useForm } from "react-hook-form";
import { AiFillDelete, AiFillFile, AiOutlinePlusSquare } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";
import { InputField } from "../../../../../components/InputField/InputField";

const Rules = () => {
  const { register, handleSubmit, reset } = useForm();
  const columns = [
    {
      name: "Step",
      selector: (row) => row.step,
    },
    {
      name: "Function",
      selector: (row) => row.function,
    },
  ];

  const data = [
    {
      step: "1",
      function: "Getvalue (Document)",
    },
  ];

  return (
    <div className="mapping_migset">
      <div className="mapping_list_left">
        <h3>Rules</h3>
        <section className="rules_list_part">
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
            <button type="button">
              <Link className="table_header_link" to={""}>
                <FaClipboardList />
              </Link>
            </button>
          </div>
        </section>
        <section className="rules_list_part">
          <h5>Rules for system attributes</h5>
          There will be select list
        </section>
      </div>
      <div className="mapping_list_right">
        <h6>Rules Properties</h6>
        <div className="parameter_container">
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
        </div>
        <h6>Transformation Method</h6>
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
          <button type="button">
            <Link className="table_header_link" to={""}>
              <FaClipboardList />
            </Link>
          </button>
        </div>
        <DataTable columns={columns} data={data}></DataTable>
      </div>
    </div>
  );
};

export default Rules;
