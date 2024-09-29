import React from 'react';
import { Outlet } from "react-router-dom";
import NavBar from '../components/NavBar';

// persistent layout component
function RootLayout() {
    return (
        <div>
            <h1>The Game App</h1>
            {/* Navbar */}
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
}

export default RootLayout;