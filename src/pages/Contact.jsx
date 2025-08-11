import { Link } from "react-router-dom"

export const Contact = () => {
    return (
        <h1>
            hello contact
            <Link to={"/home"}>
                back to home
            </Link>
        </h1>
    )
}