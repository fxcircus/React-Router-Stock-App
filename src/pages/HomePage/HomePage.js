import { Link } from 'react-router-dom'

export default function HomePage(){
    return (
        <Link to="/stocks">
            <img src="/stock-app-icon-mindy.png" alt="icon"/>
        </Link>
    )
}