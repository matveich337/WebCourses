import PropTypes from 'prop-types';
import Posts from "../../components/posts";
import { useQuery } from 'react-query'

import { getPost } from "./api/crud";

const PostsContainer = ({ }) => {

    const { isFetching, refetch, data } = useQuery('blogs', () => getPost());
    const blogs = data?.data;

    return (
        <>
            {isFetching ? <div>LOADING...</div> : <Posts blogs={blogs} />}
        </>
    );
}

export default PostsContainer;
