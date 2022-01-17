import PropTypes from 'prop-types';
import "./style.css";

const Profile = ({ name, email, image, description }) => {
    return <div className="profile-wrapper">
        <h1>Profile</h1>
        <img src={image} alt="image" />
        <p>{name}</p>
        <p>{email}</p>
        <p>{description}</p>
    </div>
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    image: PropTypes.string,
    description: PropTypes.string
}

Profile.defaultProps = {
    image: "N/A",
    description: "N/A"
}

export default Profile;
