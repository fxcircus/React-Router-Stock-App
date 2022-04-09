import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <Link to="/">
                <div>Home</div>
            </Link>
            <Link to="/stocks">
                <div>Stocks</div>
            </Link>
            <Link to="/about">
                <div>About</div>
            </Link>
        </nav>
    )
}