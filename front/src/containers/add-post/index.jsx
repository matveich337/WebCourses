import AddPost from "../../components/add-post";
import { addPost } from "./api/crud";
 
export function AddPostContainer({}) {
    return (
        <AddPost addPost={addPost}/>
    );
}
