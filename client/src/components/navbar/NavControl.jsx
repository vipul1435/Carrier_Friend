import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
const NavControl = ({ children }) => {
    const location = useLocation();
    useEffect(() => { }, [location])
    if(location.pathname.includes('room') || location.pathname.includes('jobshare') || location.pathname.includes("admin")){
        return;
    }
    return (
        <div>{children}</div>
    )
}

export default NavControl