import React from "react";
import { useGetMembersQuery } from "../../features/team/memberApi";
import SingleMember from "./SingleMember";

const TeamMembers = () => {
  const { data: members, isSuccess, isLoading } = useGetMembersQuery();
  
  let content = null;
  if (isLoading) content = <div>Loading...</div>;
  if (isSuccess)
    content = members.map((member) => (
      <SingleMember key={member.id} member={member} />
    ));
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold">Team Members</h3>
      <div className="mt-3 space-y-4">{content}</div>
    </div>
  );
};

export default TeamMembers;
