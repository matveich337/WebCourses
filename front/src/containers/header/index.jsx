import Header from "../../components/header";

export function HeaderContainer({ activeComponent, setActiveComponent }) {
    const buttons = [ "posts", "add post", "profile" ]
    const renderButtons = buttons.map((el, idx) => <button className={idx === activeComponent ? "active" : ""} onClick={() => setActiveComponent(idx)}>{el}</button>) 

    return (
        <Header buttons={renderButtons} />
    );
}
