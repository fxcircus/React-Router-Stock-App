import { Link } from 'react-router-dom'

export default function Dashboard( { stocks }){
    

    return (
        <table>
            <tr>
                <th>Company Name</th>
                <th>Price</th>
                <th>Change</th>
            </tr>
            {stocks.map(stock => {
                return (
                    <tr className='row'>
                        <Link to={stock.symbol}>
                            <td>{stock.name}</td>
                        </Link>
                            <td>{stock.price}</td>
                            <td>{stock.change} ({stock.changesPercentage})</td>
                    </tr>
                )
            })}
            
        </table>
    )
}