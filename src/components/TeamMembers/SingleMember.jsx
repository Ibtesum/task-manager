import React from "react";

const SingleMember = ({ member }) => {
  const { name, avatar, id } = member;
  return (
    <div className="checkbox-container">
      <img src={avatar} className="team-avater" />
      <p className="label">{name}</p>
    </div>
  );
};

export default SingleMember;
