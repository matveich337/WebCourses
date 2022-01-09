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

export default Profile;