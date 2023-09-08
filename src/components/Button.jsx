
const Button = ({text, event, submit, styles}) => {
  return (
    <div >
        <button className= {styles} onClick={event} submit={submit}>
            {text}
        </button>
    </div>
  )
}

export default Button