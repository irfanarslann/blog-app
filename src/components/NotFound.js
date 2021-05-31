import { Link } from "react-router-dom";
import React from 'react'

const NotFound = () => {
    return (
        <div>
            This page is not valid <span><Link to="/"> Click Here</Link></span> to go Home Page...
        </div>
    )
}

export default NotFound
