import PropTypes from "prop-types";
import "./style.css"
import moment from "moment";
import { Link } from 'react-router-dom';

const Users = ({ users }) => {
    return (
        <div className="users-wrapper">
            <h1>Users</h1>
            <div className="users">
                {
                    users && users.length > 0 && users.map(({ birth, description, email, first_name, last_name, phone_number, status, university, user_id }) =>
                        <Link to={`/users/${user_id}`} className="single-user" key={user_id}>
                            <p className="name">
                                {first_name} {last_name}
                            </p>
                            <p>
                                Description: {description}
                            </p>
                            <p>
                               Email: {email}
                            </p>
                            <p>
                                Phone number: {phone_number}
                            </p>
                            <p className="birth-date">
                                Birth date: {moment(birth).format("DD-MM-YYYY")}
                            </p>
                        </Link>)
                }
            </div>
        </div>
    );
}

Users.propTypes = {
    Users: PropTypes.arrayOf(PropTypes.shape({ 
        birth: PropTypes.string.isRequired,
        description: PropTypes.string,
        email: PropTypes.string.isRequired,
        first_name: PropTypes.string.isRequired,
        last_name: PropTypes.string.isRequired,
        phone_number: PropTypes.string,
        user_id: PropTypes.string.isRequired,
        university: PropTypes.string,
        status: PropTypes.string.isRequired
    }))
}

export default Users;
