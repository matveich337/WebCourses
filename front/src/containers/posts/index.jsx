import PropTypes from 'prop-types';
import Posts from "../../components/posts";

const PostsContainer = ({ description, city, nickname, image, date }) => {
    const postDescription = `Description: ${description}`;
    const postCity = `City: ${city}`;
    const catNickname = `Nickname: ${nickname}`;
    const postDate = `Date: ${date}`;

    return (
        <Posts
            postDescription={postDescription}
            postCity={postCity}
            catNickname={catNickname}
            postDate={postDate}
            image={image}
        />
    );
}

PostsContainer.propTypes = {
    description: PropTypes.string,
    city: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    image: PropTypes.string,
    date: PropTypes.string.isRequired
}

PostsContainer.defaultProps = {
    description: "N/A",
    image: "N/A"
}

export default PostsContainer;
