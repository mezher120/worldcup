import React from "react";
import Card from "./Card";
import style from './LandingPage.module.css';
import Cardwinner from './Cardwinner';
import Fases from "./Fases";

const groups = [
    {group: "Group A", teams: [{id: 1, country: "Qatar", pic: "https://flagcdn.com/qa.svg"}, {id: 2, country: "Ecuador", pic: "https://flagcdn.com/ec.svg"}, 
                           {id: 3, country: "Senegal", pic: "https://flagcdn.com/sn.svg"}, {id: 4, country: "Netherlands", pic: "https://flagcdn.com/nl.svg"}]},
    {group: "Group B", teams: [{id: 5, country: "England", pic: "https://flagcdn.com/gb-eng.svg"}, {id: 6, country: "Iran", pic: "https://flagcdn.com/ir.svg"}, 
                           {id: 7, country: "USA", pic: "https://flagcdn.com/us.svg"}, {id: 8, country: "Wales", pic: "https://flagcdn.com/gb-wls.svg"}]},
    {group: "Group C", teams: [{id: 9, country: "Argentina", pic: "https://flagcdn.com/ar.svg"}, {id: 10, country: "Saudi Arabia", pic: "https://flagcdn.com/sa.svg"}, 
                           {id: 11, country: "Mexico", pic: "https://flagcdn.com/mx.svg"}, {id: 12, country: "Poland", pic: "https://flagcdn.com/pl.svg"}]},
    {group: "Group D", teams: [{id: 13, country: "France", pic: "https://flagcdn.com/fr.svg"}, {id: 14, country: "Australia", pic: "https://flagcdn.com/au.svg"}, 
                           {id: 15, country: "Denmark", pic: "https://flagcdn.com/dk.svg"}, {id: 16, country: "Tunisia", pic: "https://flagcdn.com/tn.svg"}]},
    {group: "Group E", teams: [{id: 17, country: "Spain", pic: "https://flagcdn.com/es.svg"}, {id: 18, country: "Costa Rica", pic: "https://flagcdn.com/cr.svg"}, 
                           {id: 19, country: "Germany", pic: "https://flagcdn.com/de.svg"}, {id: 20, country: "Japan", pic: "https://flagcdn.com/jp.svg"}]},
    {group: "Group F", teams: [{id: 21, country: "Belguim", pic: "https://flagcdn.com/be.svg"}, {id: 22, country: "Canada", pic: "https://flagcdn.com/ca.svg"}, 
                           {id: 23, country: "Morocco", pic: "https://flagcdn.com/ma.svg"}, {id: 24, country: "Croatia", pic: "https://flagcdn.com/hr.svg"}]},
    {group: "Group G", teams: [{id: 25, country: "Brazil", pic: "https://flagcdn.com/br.svg"}, {id: 26, country: "Serbia", pic: "https://flagcdn.com/rs.svg"}, 
                           {id: 27, country: "Switzerland", pic: "https://flagcdn.com/ch.svg"}, {id: 28, country: "Cameroon", pic: "https://flagcdn.com/cm.svg"}]},
    {group: "Group H", teams: [{id: 29, country: "Portugal", pic: "https://flagcdn.com/pt.svg"}, {id: 30, country: "Ghana", pic: "https://flagcdn.com/gh.svg"}, 
                           {id: 31, country: "Uruguay", pic: "https://flagcdn.com/uy.svg"}, {id: 32, country: "Korea Republic", pic: "https://flagcdn.com/kr.svg"}]}

]; 


export default function LandingPage() {

console.log(groups);

    return (
        <div>
            <div className={style.cards}>
            {groups && groups.map(g => 
                <Card group={g.group} teams={g.teams} ></Card>
            )}


            </div>
            {/* <div className={style.cards} >
                {groups && groups.map(g => 
                    <Cardwinner></Cardwinner>
                )}
            </div> */}
        <Fases> </Fases>
        </div>

    )
}