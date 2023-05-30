import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";
import Search from "./Search";
import Login from "./Login";

function Header() {
    return (
        <header>
            <Menu />
            <Logo />
            <Search />
            <Login />
        </header>
    );
}

export default Header;
