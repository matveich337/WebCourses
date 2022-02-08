import PropTypes from "prop-types";
import "./style.scss"
import moment from "moment";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import editImage from '../../assets/images/edit.png';
import { useNavigate } from 'react-router-dom';

const Posts = ({ blogs }) => {
    const navigate = useNavigate();

    return (
        <div className="posts-wrapper">
            <h1>Posts</h1>
            <div className="posts">
                {
                    blogs && blogs.length > 0 && blogs.map(({ blog_id, blog_text, created_at, updated_at, user_id }) =>
                        <Card className="single-post" key={blog_id}>
                            <CardContent>
                                <img src={editImage} alt="edit" onClick={() => {navigate(`/edit-post/${blog_id}`)}}/>
                                <Typography>
                                    {blog_text}
                                </Typography>
                                <Typography>
                                    {user_id}
                                </Typography>
                                <Typography className="post-date">
                                    {moment(created_at).format("DD-MM-YYYY")}
                                </Typography>
                            </CardContent>
                        </Card>
                    )
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
