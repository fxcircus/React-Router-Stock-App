import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Stock( {stocks} ){
    const [thisStock, setThisStock] = useState ({})
    const params = useParams()
    const symbol = params.symbol
    let curr = []


    useEffect (() => {
        curr = stocks.filter(stock => stock.symbol === symbol)
        setThisStock(curr[0])
        console.log(curr)
    })

    const getKeyValue = (obj) => {
        const arr = []
        for (const [key, value] of Object.entries(obj)) {
            arr.push(
            <tr><td>{key.charAt(0).toUpperCase() + key.slice(1)}</td><td>{value}</td></tr>
            )
        }
        return arr
    }

    return (
        // <div>
        //     <div>Name: {thisStock.name}</div>
        //     <div>Price: {thisStock.price}</div>
        //     <div>Change: {thisStock.change}</div>
        //     <div>Price: {thisStock.price}</div>
        // </div>
        <table>
            {
                getKeyValue(thisStock)
            }
        </table>
    )
}