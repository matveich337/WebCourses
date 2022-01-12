import "./style.css"

const AddPost = () => {
    return <>
    <h1>Add post</h1>
    <form className="add-post-form">
        <input placeholder="Description"/>
        <input placeholder="City"/>
        <input placeholder="Date"/>

        <button onClick={(e) => e.preventDefault()}>Create post</button>
    </form>
    </>
}

export default AddPost;