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

    return (
        <div>
            <div>Name: {thisStock.name}</div>
            <div>Price: {thisStock.price}</div>
        </div>
    )
}