import "./style.css"
import PropTypes from 'prop-types';

const Header = ({buttons}) => {
    return (
        <header>
            {
                buttons
            }
        </header>
    )
}

Header.propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.node).isRequired
}

export default Header;
