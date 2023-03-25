
import { useSelector } from "react-redux";
import { useGetTasksQuery } from "../../features/tasks/tasksApi";
import SingleTask from "./SingleTask";

const TaskList = () => {
  const { data: tasks, isLoading, isSuccess } = useGetTasksQuery();
  // console.log(tasks);

  const { check } = useSelector((state) => state.projects);


  // NEED TO DO A LOT OF WORK
  const filterFunction = (task) => {
    const findInCheck = check?.find(
      (i) => i.checkedProject === task.project.projectName
    );

    switch (findInCheck?.checkValue) {
      case true:
        return true;
      case false:
        return false;
      default:
        return true;
    }
  };

  let content = null;
  if (isLoading) content = <div>Loading...</div>;
  if (isSuccess)
    content = tasks
      .filter(filterFunction)
      .map((task) => <SingleTask key={task.id} task={task} />);

  return <div className="lws-task-list">{content}</div>;
};

export default TaskList;
