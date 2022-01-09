import { useState } from "react";
import { HeaderContainer } from "./containers/header";
import { BodyContainer } from "./containers/body";
import "./App.css";

function App() {
    const [activeComponent, setActiveComponent] = useState(0);

    return (
        <div className="App">
            <HeaderContainer activeComponent={activeComponent} setActiveComponent={setActiveComponent}/>
            <BodyContainer activeComponent={activeComponent}/>
        </div>
    );
}

export default App;
