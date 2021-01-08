import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { HashRouter } from 'react-router-dom'

import Logo from '../components/templates/Logo'
import Nav from '../components/templates/Nav'
import Footer from '../components/templates/Footer'
import Routes from './Router'

export default props =>
    <HashRouter>
        <div className="app">
            <Logo></Logo>
            <Nav></Nav>
            <Routes></Routes>
            <Footer></Footer>
        </div>
    </HashRouter>