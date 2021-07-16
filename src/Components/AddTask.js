import { useState } from 'react';


const AddTask = ({ onAdd }) => {

  const [text, setText] = useState('');
    
  const onSubmit = e => {
    e.preventDefault();
    
    if(!text){
      alert('Please add a task!');
      return;
    } 
    
    onAdd({ text });
    setText('');
  }

  return(
    <form className="add-task" >
      <input 
        type="text"
        className="input"
        placeholder="Add Task..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <input type='submit' value='Save Task' className="btn" onClick={onSubmit}/>
    </form>
  )
}

export default AddTask;