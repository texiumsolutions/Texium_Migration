import React from "react";
import "./InputField.css";

export const InputField = ({ text, type }) => {
  return (
    <tr>
      <td className="input_text_section">
        <p>{text}</p>
      </td>

      <td className="input_field_section">
        <input className="parameter_inputfield" type={type} name={type} />
      </td>
    </tr>
  );
};
