import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from './Fases.module.css';
import {cuartos, semis, final, terceros} from '../actions';

export default function Fases(props) {

    const all = useSelector((state) => state);
    const dispatch = useDispatch();

    const [octavos, setOctavos] = useState("");
    console.log(octavos, "denuevo")
    
    useEffect(() => {
        setOctavos(all);
    }, [all])

    function acuartos(e) {
        e.preventDefault();
        console.log(e.target.title);
        let cuart = {[e.target.title]: e.target.id}
        dispatch(cuartos(e.target.title, e.target.id));
    }

    function asemis(e) {
        e.preventDefault();
        console.log(e.target.title);
        let cuart = {[e.target.title]: e.target.id}
        dispatch(semis(e.target.title, e.target.id));
    }

    
    function afinal(e) {
        e.preventDefault();
        console.log(e.target.id);
        let cuart = {[e.target.title]: e.target.id}
        if (e.target.title === "1SS" || e.target.title === "2SS") {
            let newTitle = e.target.title + "final"
            dispatch(final(newTitle, e.target.id));
            dispatch(terceros(octavos["2SS"]));
        }
        if (e.target.title === "3SS" || e.target.title === "4SS") {
            let newTitle = e.target.title + "final"
            dispatch(final(newTitle, e.target.id));
            dispatch(terceros(octavos["1SS"]));
        }
        if (e.target.title === "1SS") {
            dispatch(terceros("tercero1", octavos["2SS"]));
        } else if (e.target.title === "2SS") {
            dispatch(terceros("tercero1", octavos["1SS"]));
        } else if (e.target.title === "3SS") {
            dispatch(terceros("tercero2", octavos["4SS"]));
        } else if (e.target.title === "4SS") {
            dispatch(terceros("tercero2", octavos["3SS"]));
        }

    }
    
    return (
<div className={style.container}>
    <div>
    <div className={style.text}>OCTAVOS FINAL</div>
    <div className={style.fasespares}>
        <div className={style.fasesContainer} id={octavos["1A"]} title="1CF" onClick={(e) => acuartos(e)} >{octavos["1A"]}</div>
        <div className={style.fasesContainer} id={octavos["2B"]} title="1CF" onClick={(e) => acuartos(e)} >{octavos["2B"]}</div>
        </div>
        <div className={style.fasespares}>
        <div className={style.fasesContainer} id={octavos["1C"]} title="2CF" onClick={(e) => acuartos(e)}>{octavos["1C"]}</div>
        <div className={style.fasesContainer} id={octavos["2D"]} title="2CF" onClick={(e) => acuartos(e)}>{octavos["2D"]}</div>
        </div>
        <div className={style.fasespares}>
        <div className={style.fasesContainer} id={octavos["1E"]} title="3CF" onClick={(e) => acuartos(e)}>{octavos["1E"]}</div>
        <div className={style.fasesContainer} id={octavos["2F"]} title="3CF" onClick={(e) => acuartos(e)}>{octavos["2F"]}</div>
        </div>
        <div className={style.fasespares}>
        <div className={style.fasesContainer} id={octavos["1G"]} title="4CF" onClick={(e) => acuartos(e)}>{octavos["1G"]}</div>
        <div className={style.fasesContainer} id={octavos["2H"]} title="4CF" onClick={(e) => acuartos(e)}>{octavos["2H"]}</div>
        </div>
    </div>
    <div>
    <div className={style.text}>CUARTOS FINAL</div>
        <div className={style.fasespares}>
        <div className={style.fasesContainer} id={octavos["1CF"]} title="1SS" onClick={(e) => asemis(e)} >{octavos["1CF"]}</div>
        <div className={style.fasesContainer} id={octavos["2CF"]} title="1SS" onClick={(e) => asemis(e)}>{octavos["2CF"]}</div>
        </div>
        <div className={style.fasespares}>
        <div className={style.fasesContainer} id={octavos["3CF"]} title="2SS" onClick={(e) => asemis(e)}>{octavos["3CF"]}</div>
        <div className={style.fasesContainer} id={octavos["4CF"]} title="2SS" onClick={(e) => asemis(e)}>{octavos["4CF"]}</div>
        </div>
    </div>
    <div>
    <div className={style.text}>SEMI FINAL</div>
        <div className={style.fasespares}>
        <div className={style.fasesContainer} id={octavos["1SS"]} title="1SS" onClick={(e) => afinal(e)} >{octavos["1SS"]}</div>
        <div className={style.fasesContainer} id={octavos["2SS"]} title="2SS" onClick={(e) => afinal(e)}>{octavos["2SS"]}</div>
        </div>
    <div className={style.text}>3er Puesto</div>
        <div className={style.fasespares}>
        <div className={style.fasesContainer}>{octavos["1TR"]}</div>
        <div className={style.fasesContainer}>{octavos["2TR"]}</div>
        </div>
    </div>
    <div>
    <div className={style.text}>SEMI FINAL</div>
        <div className={style.fasespares}>
        <div className={style.fasesContainer} id={octavos["3SS"]} title="3SS" onClick={(e) => afinal(e)}>{octavos["3SS"]}</div>
        <div className={style.fasesContainer} id={octavos["4SS"]} title="4SS" onClick={(e) => afinal(e)}>{octavos["4SS"]}</div>
        </div>
    <div className={style.text}>FINAL</div>
        <div className={style.fasespares}>
        <div className={style.fasesContainer}>{octavos["1FI"]}</div>
        <div className={style.fasesContainer}>{octavos["2FI"]}</div>
        </div>
    </div>
    <div>
    <div className={style.text}>CUARTOS FINAL</div>
        <div className={style.fasespares}>
        <div className={style.fasesContainer} id={octavos["5CF"]} title="3SS" onClick={(e) => asemis(e)} >{octavos["5CF"]}</div>
        <div className={style.fasesContainer} id={octavos["6CF"]} title="3SS" onClick={(e) => asemis(e)}>{octavos["6CF"]}</div>
        </div>
        <div className={style.fasespares}>
        <div className={style.fasesContainer} id={octavos["7CF"]} title="4SS" onClick={(e) => asemis(e)}>{octavos["7CF"]}</div>
        <div className={style.fasesContainer} id={octavos["8CF"]} title="4SS" onClick={(e) => asemis(e)}>{octavos["8CF"]}</div>
        </div>
    </div>
    <div>
    <div className={style.text}>OCTAVOS FINAL</div>
    <div className={style.fasespares}>
        <div className={style.fasesContainer} id={octavos["1B"]} title="5CF" onClick={(e) => acuartos(e)}>{octavos["1B"]}</div>
        <div className={style.fasesContainer} id={octavos["2A"]} title="5CF" onClick={(e) => acuartos(e)}>{octavos["2A"]}</div>
        </div>
        <div className={style.fasespares}>
        <div className={style.fasesContainer} id={octavos["1D"]} title="6CF" onClick={(e) => acuartos(e)}>{octavos["1D"]}</div>
        <div className={style.fasesContainer} id={octavos["2C"]} title="6CF" onClick={(e) => acuartos(e)}>{octavos["2C"]}</div>
        </div>
        <div className={style.fasespares}>
        <div className={style.fasesContainer} id={octavos["1F"]} title="7CF" onClick={(e) => acuartos(e)}>{octavos["1F"]}</div>
        <div className={style.fasesContainer} id={octavos["2E"]} title="7CF" onClick={(e) => acuartos(e)}>{octavos["2E"]}</div>
        </div>
        <div className={style.fasespares}>
        <div className={style.fasesContainer} id={octavos["1H"]} title="8CF" onClick={(e) => acuartos(e)}>{octavos["1H"]}</div>
        <div className={style.fasesContainer} id={octavos["2G"]} title="8CF" onClick={(e) => acuartos(e)}>{octavos["2G"]}</div>
        </div>
    </div>
</div>
    )
}