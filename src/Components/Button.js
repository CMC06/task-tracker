const Button = ({ onClick, buttonTxt }) => {
  
  return (
    <button onClick = {onClick} className='btn'>{buttonTxt}</button>
  )
}

export default Button
