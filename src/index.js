import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App/App'
import { BrowserRouter as Router } from 'react-router-dom'
import './style.css'

ReactDOM.render (
    <StrictMode>
        <Router>
            <App />
        </Router>
    </StrictMode>, document.getElementById('root')

)