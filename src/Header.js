import React from "react";
import Input from "./Input";

const Header = ()=> {
    return (
        <div className="Header">
            <ul>
                <li><a href="#">News</a></li>
                <li><a href="#">Tests</a></li>
                <Input/>
            </ul>
        </div>
    )
}

export default Header;