import React from 'react';
import { ReactNavbar } from "react-responsive-animate-navbar";


function NavBar(){
    return(
        <>
            <ReactNavbar
                color="rgb(25, 25, 25)"
                logo="https://i.ibb.co/j3N8DN9/Logo.png"
                menu={[
                { name: "HOME", to: "/" },
                { name: "ARTICLES", to: "/articles" },
                { name: "ABOUT ME", to: "/about" },
                { name: "CONTACT", to: "/contact" },
                ]}

            />
        </>
    );
}

export default NavBar;