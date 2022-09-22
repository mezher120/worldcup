import React from "react";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <div className={style.background}>
            <div className={style.text}>
            FIFA WORLD CUP QATAR 2022
            </div>
            <div>
                <div className={style.text}>Login / SignUp</div>
                <div className={style.text}> Fixture </div>
            </div>
        </div>
    )
}