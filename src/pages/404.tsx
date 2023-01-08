import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            Такой страницы не существует. Венритесь на <Link to="/">главную</Link>
        </div>
    )
}

export default NotFoundPage