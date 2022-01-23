import PropTypes from "prop-types";
import "./style.css"
import moment from "moment";

const Posts = ({ blogs }) => {
    return (
        <div className="posts-wrapper">
            <h1>Posts</h1>
            <div className="posts">
                {
                    blogs && blogs.length > 0 && blogs.map(({ blog_id, blog_text, created_at, updated_at, user_id }) =>
                        <div className="single-post" key={blog_id}>
                            <p>
                                {blog_text}
                            </p>
                            <p>
                                {user_id}
                            </p>
                            <p className="post-date">
                                {moment(created_at).format("DD-MM-YYYY")}
                            </p>
                        </div>)
                }
            </div>
        </div>
    );
}

Posts.propTypes = {
    blogs: PropTypes.arrayOf(PropTypes.shape({
        blog_id: PropTypes.string.isRequired,
        blog_text: PropTypes.string,
        created_at: PropTypes.string.isRequired,
        updated_at: PropTypes.string,
        user_id: PropTypes.string.isRequired
    })).isRequired
}

export default Posts;
