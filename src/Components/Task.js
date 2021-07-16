import { FaExclamationCircle, FaTimesCircle } from 'react-icons/fa'

const Task = ({ task, onDelete, setImportant }) => {
  return (
    <div className={`task ${task.important ? 'task-important' : ''}`}>
      <h3>{task.text}  <FaExclamationCircle onClick={() => setImportant(task.id)} /> <FaTimesCircle onClick={() => onDelete(task.id)}/></h3>
    </div>
  )
}

export default Task
