import React from "react";
import style from './Cardwinner.module.css';

export default function Cardwinner({country}) {

    
    let [pos1 , pos2] = country; //destructuring
    console.log(pos1);
    // function Delete1(e) {
    //     e.preventDefault();
    //     setFirst("")   
    // }

    // function Delete2(e) {
    //     e.preventDefault();
    //     setSecond("")  
    // }
    
    return (
        <div className={style.container}>
            <div className={style.text}>
                1# - {pos1}
                {/* <button onClick={(e) => Delete1(e)} >X</button> */}
            </div>
            <div className={style.text}>
                2# - {pos2}
                {/* <button onClick={(e) => Delete2(e)} >X</button> */}
            </div>

        </div>
    );
}