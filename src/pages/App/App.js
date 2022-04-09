import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Data from '../../data'
import About from '../../pages/About/About'
import Dashboard from '../../pages/Dashboard/Dashboard'
import HomePage from '../../pages/HomePage/HomePage'
import Stock from '../../pages/Stock/Stock'
import Nav from '../../components/Nav'

export default function App() {
    const [ stocks, setStocks ] = useState([])

    const apiKey ='f560c7d415b372b0b2362f2ee6a7eec9'

    const getData = async () => {
        try {
            const response = await fetch(`https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=${apiKey}`)
            const data = await response.json()
            setStocks(data)
        } catch(err) {
            console.error(err)
        }
    }    

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <Nav/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/stocks" element={<Dashboard stocks={stocks}/>} />
                <Route path="/stocks/:symbol" element={<Stock stocks={stocks}/>}/>
            </Routes>
        </div>
    )
}

{/* <About/>
<Dashboard/>
<HomePage/>
<Stock/> */}