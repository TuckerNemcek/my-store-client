import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Component imports
import Navigation from './components/Navigation'
import Home from './components/Home'
import ProductsList from './components/ProductsList'
import ProductDetail from './components/ProductDetail'
import PaymentSuccess from './components/PaymentSuccess'


function App() {
    return (
        <Router>
            <Route path='/' component ={Navigation} />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route  exact path='/products' component={ProductsList} />
                <Route  path ='/products/:id' component={ProductDetail} />
                <Route  path ='/success' component={PaymentSuccess} />
            </Switch>
        </Router>
    )
}

export default App
