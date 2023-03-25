import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeChecked } from "../../features/projects/projectSlice";

const SingleProject = ({ project }) => {
  const { id, projectName, colorClass } = project;

  const dispatch = useDispatch();
  const [checked, setChecked] = useState(true);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    dispatch(
      changeChecked({
        checkedProject: projectName,
        checkValue: e.target.checked,
      })
    );
  };
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        className={`${colorClass}`}
        checked={checked}
        onChange={handleChange}
      />
      <p className="label">{projectName}</p>
    </div>
  );
};

export default SingleProject;
