import Task from "./Task";

const TaskList = ({ tasks, onDelete, setImportant }) => {

  return (
    <>
      {tasks.map((task, index) => (<Task key={index} task={task} onDelete={onDelete} setImportant={setImportant}/>
      ))}
    </>
  )
}

export default TaskList;
