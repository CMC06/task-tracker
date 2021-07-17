import Button from "./Button";




const Header = ({ showAdd, showComp, showingComp, showingAdd }) => {

  
  return (
    <header className="App-header">
      <h1>
        Task Tracker Application
      </h1>
      <div className='header-btn'>
      <Button onClick={showAdd} buttonTxt={showingAdd ? 'Hide Add' : 'Add Task'}/>
      <Button onClick={showComp} buttonTxt={showingComp ? 'Hide Completed' : 'Show Completed'} />
      </div>
    </header>
  )
}

export default Header
