import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import ProfileView from './profile-view';
import ProfileEdit from './profile-edit';
import "./style.scss";

const Profile = ({ name, email, description, getUser, editUser }) => {
    const [inputValue, setInputValue] = useState('');
    const [id, setId] = useState(null);
    const [editStatus, setEditStatus] = useState(false);

    useEffect(() => {
        setId(localStorage.getItem("user_id"))
    }, [])

    return (
        <>
            {id ?
                <>
                    {editStatus ? <ProfileEdit getUser={getUser} id={id} editUser={editUser} setEditStatus={setEditStatus} />
                        : <ProfileView getUser={getUser} id={id} setEditStatus={setEditStatus} />}
                </>
                : <div className="set-your-profile">
                    <h1>Enter your profile id</h1>

                    <input type="number" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="ID" />

                    <button onClick={() => {
                        if (!inputValue || inputValue < 1) {
                            toast("ID is required and must more than 0!", {
                                progressClassName: "red-progress"
                            });
                        } else {
                            localStorage.setItem("user_id", inputValue);
                            setId(inputValue);
                        }
                    }}>Submit</button>
                </div>
            }

        </>
    );
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
