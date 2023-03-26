import React from "react";
import DataTable from "react-data-table-component";
import "./PropertiseChild.css";

const Exclution = () => {
  const columns = [
    {
      name: "Avilable Attributes",
      selector: (row) => row.attributes,
    },
    {
      name: "Include Values- All Value Loaded",
      selector: (row) => row.Excluded,
    },
    {
      name: "Excluded value",
      selector: (row) => row.valueexcluded,
    },
  ];

  const data = [
    {
      attributes: "content_size",
      Excluded: "Getvalue (Document)",
      valueexcluded: "Getvalue (Document)",
    },
    {
      attributes: "creation_date",
      Excluded: "Getvalue (Document)",
      valueexcluded: "Getvalue (Document)",
    },
    {
      attributes: "extention",
      Excluded: "Getvalue (Document)",
      valueexcluded: "",
    },
    {
      attributes: "filename",
      Excluded: "file (140)",
      valueexcluded: "",
    },
    {
      attributes: "is_hidden",
      Excluded: "file (1000)",
      valueexcluded: "",
    },
    {
      attributes: "mc_content_location",
      Excluded: "file (10)",
      valueexcluded: "",
    },
  ];

  return (
    <div className="exclution_container">
      <DataTable columns={columns} data={data}></DataTable>
    </div>
  );
};

export default Exclution;
