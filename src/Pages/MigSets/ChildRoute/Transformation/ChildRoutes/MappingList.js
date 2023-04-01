import React, { useEffect,  useState } from "react";
import "../../../Migset.css";
import { Card } from "../../../../../components/Card/Card";
import {BsArrowRightSquareFill} from 'react-icons/bs';
import IntoMapping from "./Mapping/IntoMapping";

const MappingList = () => {
  const [sourceFileInfo, setSourceFileInfo] = useState([]);
  // const { register, handleSubmit, reset } = useForm();

  // const onSubmit = (data) => {
  //   fetch("https://texium-migration-server.onrender.com/testing", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },

  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((inserted) => {
  //       if (inserted.insertedId) {
  //         alert("Added New Product Successfully");

  //         reset();
  //       } else {
  //         alert("Failed add to the data");
  //       }
  //     });
  //   console.log(data);
  // };
  // onSubmit={handleSubmit(onSubmit)} (this will be in form)

  useEffect(() => {
    fetch("http://localhost:5000/testing")
      .then((response) => response.json())
      .then((data) => setSourceFileInfo(data))
      .catch((error) => alert(error));
  }, []);

  return (
    <div>
      <div className=" opentab_details_form" >
        <div className="opentab_details_container">
          <div className="opentab_parameters">
            <p>Parameters</p>

            <Card height={"calc(100vh - 255px)"}>
              <div className="select_btn">
                <span className="mappin_btn_text">
                  Total File {sourceFileInfo.length}{" "}
                </span>

                <br />
                <small
                  style={{
                    color: "black",
                  }}
                >
                  Select a file for mapping <span className="icon_arrow"> <BsArrowRightSquareFill ></BsArrowRightSquareFill></span>
                </small>
              </div>

              <div className="list_items ">
                {sourceFileInfo.map((sourceFileInfo) => (
                  <option
                    className="items"
                    key={sourceFileInfo._id}
                    sourceFileInfo={sourceFileInfo}
                  >
                    <span className="item_text">
                      {sourceFileInfo.File_Name}
                    </span>
                  </option>
                ))}
              </div>
            </Card>
          </div>
          <div className="opentab_details">
            <p>All File Data Here</p>
            <Card height={"calc(100vh - 255px)"}>
              {sourceFileInfo.map((sourceFileInfo) => (
                <IntoMapping
                  key={sourceFileInfo._id}
                  sourceFileInfo={sourceFileInfo}
                ></IntoMapping>
              ))}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MappingList;
