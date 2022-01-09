import Body from "../../components/body";
import { PostsContainer } from "../posts";
import catImage from "../../cat.jpg";
import { AddPostContainer } from "../add-post";
import { ProfileContainer } from "../profile";

export function BodyContainer({ activeComponent }) {
    const renderComponent = () => {
        if (activeComponent === 0) {
            return <PostsContainer
            image={catImage}
            description="Зник домашній пухнастик"
            nickname="Васька"
            city="Суми"
            date="02.12.2021"
        /> 
        } else if(activeComponent === 1) {
            return <AddPostContainer/>
        } else if(activeComponent === 2) {
            return <ProfileContainer image={catImage} name="Matvii" description="lorem ipsum" email="matv.shept@gmail.com"/>
        } else {
            return null;
        }
    } 

    return (
        <Body component={renderComponent}/>
    );
}
