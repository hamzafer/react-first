
const Button = (props) => {
    return (
        <button onClick={props.onClick} className='btn' 
                style={{color : props.color}}>
                {props.text}
        </button>
    )
}

export default Button
