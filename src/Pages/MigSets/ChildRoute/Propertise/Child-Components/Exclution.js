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
  // const columns2 = [
  //   {
  //     name: "Step",
  //     selector: (row) => row.step,
  //   },
  //   {
  //     name: "Function",
  //     selector: (row) => row.function,
  //   },
  // ];
  // const columns3 = [
  //   {
  //     name: "Step",
  //     selector: (row) => row.step,
  //   },
  //   {
  //     name: "Function",
  //     selector: (row) => row.function,
  //   },
  // ];

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
    }
  ];
  // const data2 = [
  //   {
  //     step: "1",
  //     function: "Getvalue (Document)",
  //   },
  // ];
  // const data3 = [
  //   {
  //     step: "1",
  //     function: "Getvalue (Document)",
  //   },
  // ];

  return (
    <div className="exclution_container">
      {/* <section className="exclution_classname"> */}
        {/* <h4>Avilable Attributes</h4> */}
        <DataTable columns={columns} data={data}></DataTable>
      {/* </section> */}
      {/* <section className="exclution_classname">
        <h4>Include Values- All Value Loaded</h4>
        <DataTable columns={columns2} data={data2}></DataTable>
      </section>
      <section className="exclution_classname">
        <h4>Excluded value</h4>
        <DataTable columns={columns3} data={data3}></DataTable>
      </section> */}
    </div>
  );
};

export default Exclution;
