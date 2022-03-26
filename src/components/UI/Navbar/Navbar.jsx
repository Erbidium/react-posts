import React, {useContext, useEffect} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <div className="navbar">
            <MyButton onClick={logout}>
                Вийти
            </MyButton>
            <div className="navbar__links">
                <Link to="/about">Про сайт</Link>
                <Link to="/posts">Пости</Link>
            </div>
        </div>
    );
};

export default Navbar;
