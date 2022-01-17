import PropTypes from 'prop-types';
import Profile from "../../components/profile";

const ProfileContainer = ({ name, email, image, description }) => {
    const profileDescription = `Description: ${description}`;
    const profileName = `Name: ${name}`;
    const profileEmail = `Email: ${email}`;
    
    return (
        <Profile
            image={image}
            name={profileName}
            description={profileDescription}
            email={profileEmail}
        />
    );
}

ProfileContainer.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    image: PropTypes.string,
    description: PropTypes.string
}

ProfileContainer.defaultProps = {
    image: "N/A",
    description: "N/A"
}

export default ProfileContainer;
