import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header'
import TaskList from './Components/TaskList'
import AddTask from './Components/AddTask'
import CompletedList from './Components/CompletedList';


function App() {

  const [tasks, setTasks] = useState([{text: 'Brush teeth', completed: false, id: 1, important: false}, {text: 'Pick up groceries', completed: false, id: 2, important: false}, {text: 'Take cat to vet', completed: false, id: 3, important: false}]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const [showAddTask, setShowAddTask] = useState(false);

  //Delete task function (within UI)
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    let hold = tasks.filter(task => task.id === id);
    hold[0].completed = true;
    console.log(hold);
    setCompletedTasks([...completedTasks, ...hold]);
    console.log(completedTasks);
  }

  //Set Task as Important
  const setImportant = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, important: !task.important} : task));
  };
  
  //AddTask Function
  const addTask = (task) => {
    const id = Math.floor(Math.random()*100000 + 1);
    const newTask = {...task, id, completed: false, important: false};
    setTasks([...tasks, newTask]);
  }
  
  

  return (
    <div className="App">
      <Header showAdd={() => setShowAddTask(!showAddTask)} showComp={() => setShowCompleted(!showCompleted)} showingComp={showCompleted} showingAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      <div className="taskList">
        {tasks.length > 0 ? <TaskList tasks={tasks} onDelete={deleteTask} setImportant={setImportant}/> : <h2>All Tasks Completed!</h2>}
        
      </div>
      <div className="taskList">
        {completedTasks.length > 0 && showCompleted ? <CompletedList completed={completedTasks} /> : ''} 
      </div>
    
    </div>
  );
}

export default App;
