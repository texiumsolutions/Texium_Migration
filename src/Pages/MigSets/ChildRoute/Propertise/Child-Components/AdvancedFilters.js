import React from "react";
import DataTable from "react-data-table-component";
import { useForm } from "react-hook-form";
import { Card } from "../../../../../components/Card/Card";
import { InputField } from "../../../../../components/InputField/InputField";
import "../../../Migset.css";

const AdvancedFilters = () => {
  const { register, handleSubmit, reset } = useForm();
  const columns = [
    {
        name: 'Source Attributes',
        selector: row => row.attributes,
    },
    {
        name: 'Operator',
        selector: row => row.operator,
    },
    {
        name: 'Value',
        selector: row => row.value,
    },
    {
        name: 'Connectors',
        selector: row => row.connectors,
    }
];

const data = [
    {
      
    },
]

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "#dddddd",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
      },
    },
  };
  return (
    <Card height="calc(100vh)" width="calc(100%)">
      <div className="table_header">
        <InputField
          text={"Source Operator"}
          className="input_style"
          type={"text"}
          handleSubmit={handleSubmit}
          register={register}
          registerFieldText={"scan_query"}
        />
        <InputField
          text={"Scan Query"}
          className="input_style"
          type={"text"}
          handleSubmit={handleSubmit}
          register={register}
          registerFieldText={"scan_query"}
        />
        <InputField
          text={"Scan Query"}
          className="input_style"
          type={"text"}
          handleSubmit={handleSubmit}
          register={register}
          registerFieldText={"scan_query"}
        />
      </div>

      <DataTable
        columns={columns}
        data={data}
        customStyles={customStyles}
        noDataComponent="There is no data!"
        selectableRowsHighlight
        subHeader
        subHeaderComponent={
          <input
            type="text"
            name="button"
            className="filter_input"
            placeholder="Search Here"
          />
        }
      />
    </Card>
  );
};

export default AdvancedFilters;
