import { Posts } from "../../components/posts";

export function PostsContainer({ description, city, nickname, image, date }) {
    const postDescription = `Опис: ${description}`;
    const postCity = `Місто: ${city}`;
    const catNickname = `Кличка: ${nickname}`;
    const postDate = `Дата: ${date}`;

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
