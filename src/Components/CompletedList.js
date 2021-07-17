import CompletedTask from "./CompletedTask"

const CompletedList = ({ completed }) => {
  return (
    <div className="TaskList">
    <h2>
      Completed Tasks:
    </h2>
      {completed.map((task) => (<CompletedTask key={task.id} completed={completed} task={task} />))}
    </div>
  )
}


export default CompletedList
