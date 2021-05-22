import React from 'react';
import { ReactNavbar } from "react-responsive-animate-navbar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function NavBar(){
    const Login = () => <h1>Test Login</h1>;

    return(
        <>
            <ReactNavbar
                logo="https://i.ibb.co/j3N8DN9/Logo.png"
                menu={[
                { name: "HOME", to: "/" },
                { name: "LEARN MORE", to: "/articles" },
                { name: "POPULAR CRYPTO", to: "/about" },
                { name: "LOGIN", to: "/login" },
                ]}
                social={[]}
            />
        </>
    );
}

export default NavBar;