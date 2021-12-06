import { PostsContainer } from "./containers/posts";
import catImage from "./cat.jpg";

import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
				<PostsContainer
				image={catImage}
				description="Зник домашній пухнастик"
				nickname="Васька"
				city="Суми"
				date="02.12.2021"
            />
            </header> 
        </div>
    );
}

export default App;
