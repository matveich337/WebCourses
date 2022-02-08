import EditPost from "../../components/edit-post";
import { editPost, getSinglePost } from "./api/crud";
 
function EditPostContainer({}) {
    return (
        <EditPost editPost={editPost} getSinglePost={getSinglePost}/>
    );
}

export default EditPostContainer;
