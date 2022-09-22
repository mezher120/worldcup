import React from "react";
import style from "./NavBar.module.css";

export default function Footer() {
    return (
        <div className={style.background}>
            <div className={style.text}>
            Website made by Javier Ferrari Mezher - Full Stack developer.
            </div>
            <div>
            <div className={style.text}>Linkedin</div>
            <div className={style.text}>Portfolio</div>
            </div>            
        </div>
    )
}