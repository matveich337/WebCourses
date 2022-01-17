import Header from "../../components/header";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

export function HeaderContainer({}) {
    const buttons = [{name: "Posts", link:"/"}, {name: "Add post", link:"/add-post"}, {name: "Profile", link:"/profile"}];
    const location = useLocation();
    const {pathname} = location;
    const renderButtons = buttons.map((el, idx) => <Link key={idx} className={pathname === el.link ? "active" : ""} to = {el.link}>{el.name}</Link>)
    
    return (
        <Header buttons={renderButtons} />
    );
}
