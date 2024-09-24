import React from "react";

const Park = ({ name, image, link }) => {
  return (
    <td className="Park">
      <tr><h5>{name}</h5></tr>
      <tr><img src={image} alt={name} style={{ width: "250px", height: "250px" }} /></tr>
      <tr><a href={link} target="_blank" rel="noopener noreferrer">
        View Info
      </a></tr>
    </td>
  );
};

export default Park;
