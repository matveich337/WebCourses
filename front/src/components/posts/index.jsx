import PropTypes from 'prop-types';
import "./style.css"

const Posts = ({ postDescription, postCity, catNickname, postDate, image }) => {
    return (
        <div className="post-wrapper">
            <h1>Posts</h1>
            {image && <img src={image} alt="cat"/>}
            <p>
                {postDescription}
            </p>
            <p>
                {postCity}
            </p>
            <p>
                {catNickname}
            </p>
            <p className="post-date">
                {postDate}
            </p>
        </div>
    );
}

Posts.propTypes = {
    postDescription: PropTypes.string,
    postCity: PropTypes.string.isRequired,
    catNickname: PropTypes.string.isRequired,
    image: PropTypes.string,
    postDate: PropTypes.string.isRequired
}

Posts.defaultProps = {
    description: "N/A",
    image: null
}

export default Posts;
