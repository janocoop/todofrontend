import {Link} from "react-router-dom";

function MainPage() {
    return <div>
        <h1>Willkommen</h1>
        <Link to="/todos">
            zu den Todos
        </Link>
    </div>}

export default MainPage;