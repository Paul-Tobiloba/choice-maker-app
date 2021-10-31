import React from "react";

function Header() {
    return (
        <header className="w-full ">
            <nav className="navbar navbar-expand-lg navbar-light bg-gray-300 flex items-center justify-between flex-wrap p-6">
                <h1 className="flex items-center flex-shrink-0 text-purple-700 mr-6">
                    <a href="/">
                        <span className="logo-text font-semibold text-3xl tracking-tight">YOUR CHOICE</span>
                    </a>
                </h1>
            </nav>
        </header>
    );
}

export default Header;