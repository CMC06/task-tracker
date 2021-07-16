import Button from "./Button";




const Header = ({ showAdd, showComp }) => {

  
  return (
    <header className="App-header">
      <h1>
        Task Tracker Application
      </h1>
      <div className='header-btn'>
      <Button onClick={showAdd} buttonTxt='Add Task'/>
      <Button onClick={showComp} buttonTxt='Show Completed' />
      </div>
    </header>
  )
}

export default Header
