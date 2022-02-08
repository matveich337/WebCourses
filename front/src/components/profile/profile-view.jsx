import { useQuery } from 'react-query';
import editImage from '../../assets/images/edit.png'

const ProfileView = ({id, getUser, setEditStatus}) => {
    const { isFetching, refetch, data } = useQuery('profile', () => getUser(id));
    const profile = data?.data;
    console.log(profile)
    if (!profile) return null;

    const { first_name, last_name, email, description, profile_image } = profile;

    return (
        <div className="profile-wrapper">
            <h1>Profile</h1>
            {profile_image && <img src={"http://localhost:4122" + profile_image} alt="image" />}
            <p>{first_name} {last_name}</p>
            <p>{email}</p>
            <p>{description}</p>
            <img src={editImage} alt="image" className="edit-img" onClick={() => {setEditStatus(true)}}/>
        </div>
    );
}

export default ProfileView;
