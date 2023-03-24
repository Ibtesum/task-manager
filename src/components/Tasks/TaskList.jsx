import React from "react";
import { useGetTasksQuery } from "../../features/tasks/tasksApi";
import SingleTask from "./SingleTask";

const TaskList = () => {
  const { data: tasks, isLoading, isSuccess } = useGetTasksQuery();
  let content = null;
  if (isLoading) content = <div>Loading...</div>;
  if (isSuccess)
    content = tasks.map((task) => <SingleTask key={task.id} task={task} />);

  return <div className="lws-task-list">{content}</div>;
};

export default TaskList;
