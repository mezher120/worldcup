import React, { useEffect } from "react";
import style from "./Card.module.css";
import { NavLink } from "react-router-dom";
import Cardwinner from "./Cardwinner";
import { octavos } from '../actions';
import { useDispatch } from "react-redux";


export default function Card({group, teams}) {
    let [country, setCountry] = React.useState(
        {pos: "",
         country: "",
         group: group
        }
    )

const dispatch = useDispatch();

useEffect(() => {
    dispatch(octavos(country));
}, [country]);

console.log(country);
const Chosen = (e) => {
    console.log(e.target.id);
    if (country.country[0] !== e.target.id) {
      
        if (country.pos === "") {
            setCountry({...country, pos: 1, country: [e.target.id]});
        }
        if (country.pos === 1) {
            setCountry({...country, pos: 2, country: [...country.country, e.target.id]});
        }
        if (country.pos === 2) {
            setCountry({...country, pos: 1, country: [e.target.id]});
        }
    }
}

const Delete = (e) => {
    console.log("entre")
    setCountry({pos: "",
    country: "",
    group: group
   })
}



    return (
        <div>
            <div className={style.container}>
                <div className={style.group}>{group}</div>
                {teams && teams.map(e => 
                <div className={style.countries} key={e.id} id={e.country}  onClick={(e) => Chosen(e)}>
                    <img id={e.country} src={e.pic} className={style.flag} alt="sin" value={e.country}></img>
                    <div id={e.country} value={e.country} >{e.country}</div>
                </div> 
                )}
                </div>
            <Cardwinner country={country.country} ></Cardwinner>
            <div className={style.btncontainer}>
                {country.pos === "" ? null : <button className={style.delete} onClick={(e) => Delete(e)} >delete</button>}
            </div>
        </div>
    )
}
