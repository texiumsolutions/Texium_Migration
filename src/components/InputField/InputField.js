import React from "react";
import { Link } from "react-router-dom";
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
                onChange={fileOnChange}
              />

              <button onClick={sendFile}>
                <Link className="mongoDB_save_btn" to="/scanner/openTab/run">
                  Upload
                </Link>
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
            // {...register(registerFieldText)}
          />
        )}
      </td>
    </tr>
  );
};
