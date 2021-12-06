import "./style.css"

export function Posts({ postDescription, postCity, catNickname, postDate, image=null }) {
    return (
        <div className="post-wrapper">
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
