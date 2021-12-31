//export?
import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAdd }) => {
    const onClick = (e) => {
        console.log("Hamza")
    }

    const location = useLocation()

    return (
        <header className='header'>
            <h1 style={headingStyle}>{title} ✅</h1>
            {location.pathname === '/' && (<Button color={showAdd ? 'red' : 'yellow'}
                text={showAdd ? 'Close' : 'Add'}
                onClick={onAdd}
            ></Button>)}
        </header>
    )
}

Header.defaultProps = {
    title: "Default",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    color: 'white',
    backgroundColor: 'purple',
}

export default Header
