const CompletedTask = ({ completed, task }) => {
  
  console.log(task.text);
  
  return (
    <div className='task'>
      <h4>{task.text}</h4>
    </div>
  )
}

export default CompletedTask
