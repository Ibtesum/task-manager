import React, { useState } from "react";

const SingleProject = ({ project }) => {
  const { id, projectName, colorClass } = project;

  const [checked, setChecked] = useState(true);
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        className={`${colorClass}`}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <p className="label">{projectName}</p>
    </div>
  );
};

export default SingleProject;
