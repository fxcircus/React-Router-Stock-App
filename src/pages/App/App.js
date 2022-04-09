import { Routes, Route } from 'react-router-dom'
import Data from '../../data'
import About from '../../pages/About/About'
import Dashboard from '../../pages/Dashboard/Dashboard'
import HomePage from '../../pages/HomePage/HomePage'
import Stock from '../../pages/Stock/Stock'
import Nav from '../../components/Nav'

export default function App() {
    return (
        <div>
            <Nav/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/stocks" element={<Dashboard stocks={Data}/>} />
            </Routes>
        </div>
    )
}

{/* <About/>
<Dashboard/>
<HomePage/>
<Stock/> */}