import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./containers/Home"
import Users from "./containers/Users"

function myRoutes() {
    return(
        <Router>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/order" Component={Users} />
            </Routes>
        </Router>


    )
}

export default myRoutes