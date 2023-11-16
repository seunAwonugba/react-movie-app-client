import { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const toggleNavbar = () => {
        setShowNavbar(!showNavbar);
    };
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <div className="logo">
                        <p>Movie App</p>
                    </div>

                    <div className="menu-icon" onClick={toggleNavbar}>
                        <MenuIcon />
                    </div>

                    <div className={`nav-elements ${showNavbar && "active"}`}>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/favorite">Favorite</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
