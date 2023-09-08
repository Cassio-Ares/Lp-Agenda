import './Container.scss'

const Container = (props) => {
  return (
    <div className={props.styles}>
        {props.children}
    </div>
  )
}

export default Container