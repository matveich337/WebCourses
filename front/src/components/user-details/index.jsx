import "./style.css";
import PropTypes from "prop-types";
import Users from "../users/users";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const UserDetails = ({ birth, description, email, first_name, last_name, phone_number, status, university }) => {
    return (
        <div className="user-details-wrapper">
            <Card>
                <CardContent>
                    <Typography>Name: {first_name} {last_name}</Typography>
                    <Typography>Birth: {birth}</Typography>
                    <Typography>Description: {description}</Typography>
                    <Typography>Email: {email}</Typography>
                    <Typography>Phone number: {phone_number}</Typography>
                    <Typography>Status: {status}</Typography>
                    <Typography>University: {university}</Typography>
                </CardContent>
            </Card>
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
