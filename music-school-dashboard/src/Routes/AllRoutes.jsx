import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from '../Pages/Login'
import Course from '../Pages/Course'
import Overview from '../Pages/Overview'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/course' element={<Course />} />
            <Route path='/overview' element={<Overview />} />
        </Routes>
    )
}

export default AllRoutes