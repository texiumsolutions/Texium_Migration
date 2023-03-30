import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./InputField.css";

export const InputField = ({
  text,
  type,
  value,
  selectedValue,
  fileOnChange,
  sendFile,
  successMessage,
  errorMessage,
  register,
  registerFieldText,
  disabled,
}) => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const [detailsInfoMongo, setDetailsInfoMongo] = useState();
  const handleUpload = async (event) => {
    event.preventDefault();

    fetch(`http://localhost:5000/uploadMongoDB`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputValue,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setDetailsInfoMongo(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (detailsInfoMongo) {
      navigate("/scanner/openTab/objectsMongo", {
        state: { data: detailsInfoMongo },
      });
    }
  }, [detailsInfoMongo, navigate]);

  return (
    <tr>
      <td className="input_text_section">
        <p>{text}</p>
      </td>

      <td className="input_field_section">
        {selectedValue === "MongoDB" ? (
          <>
            <div className="mongoDb_parameter">
              <input
                className={"parameter_inputfield"}
                type={type}
                onChange={handleChange}
                disabled={disabled ? (disabled = true) : (disabled = false)}
              />

              {/* <button onClick={sendFile}>
                <Link className="mongoDB_save_btn" to="/scanner/openTab/run">
                  Upload
                </Link>
              </button> */}
              <button className="mongoDB_upload_btn" onClick={handleUpload}>
                Submit
              </button>
            </div>
            {successMessage && (
              <p style={{ color: "green" }}>{successMessage}</p>
            )}
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </>
        ) : (
          <input
            className={"parameter_inputfield"}
            type={type}
            name={type}
            defaultValue={value}
            disabled={disabled ? (disabled = true) : (disabled = false)}
            {...register(registerFieldText)}
          />
        )}
      </td>
    </tr>
  );
};
