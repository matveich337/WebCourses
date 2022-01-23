import "./style.css";
import PropTypes from "prop-types";
import Users from "../users/users";

const UserDetails = ({ birth, description, email, first_name, last_name, phone_number, status, university }) => {
    return (
        <div className="user-details-wrapper">
            <p>Name: {first_name} {last_name}</p>
            <p>Birth: {birth}</p>
            <p>Description: {description}</p>
            <p>Email: {email}</p>
            <p>Phone number: {phone_number}</p>
            <p>Status: {status}</p>
            <p>University: {university}</p>
        </div>
    )
}

UserDetails.propTypes = {
    birth: PropTypes.string,
    description: PropTypes.string,
    email: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    phone_number: PropTypes.string,
    status: PropTypes.string,
    university: PropTypes.string
}

Users.defaultProps = {
    birth: "N/A",
    description: "N/A",
    email: "N/A",
    first_name: "N/A",
    last_name: "N/A",
    phone_number: "N/A",
    status: "N/A",
    university: "N/A"
}

export default UserDetails;
