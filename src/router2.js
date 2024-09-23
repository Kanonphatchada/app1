import React from "react";
import { BrowserRouter,NavLink } from "react-router-dom";
import './navlink.css'

export default function Router2() {
    return(
        <BrowserRouter>
        <nav className="nav">
            <NavLink to='/'
            className={({isActive}) =>isActive?"active_memu":"memu"}
            style={({isActive}) => { 
                return {
                    fontWeight: isActive ? "bold" : ""
                };
            }}>Home</NavLink> -&nbsp;
            <NavLink to='/products' className={({isActive}) => isActive?"active_memu":"memu"}>
            Products</NavLink> -&nbsp;
            <NavLink to='/member' className={({isActive}) => isActive?"active_memu":"memu"}>
            Member</NavLink> -&nbsp;
            <NavLink to='/contact' className={({isActive}) => isActive?"active_memu":"memu"}>
            Contact</NavLink> -&nbsp;
        </nav>
        </BrowserRouter>
    )
}