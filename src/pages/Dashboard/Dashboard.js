import { Link } from 'react-router-dom'

export default function Dashboard( { stocks }){
    return (
        <div className="stock-list">
            {stocks.map(stock => {
                return (
                    <Link to={stock.symbol}>
                        {stock.name}
                    </Link>
                )
            })}
        </div>
    )
}