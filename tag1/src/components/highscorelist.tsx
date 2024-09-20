import React from "react"
import HighsocreItem from "./HighsocreItem"



const highscores =
[
    {
        "name": "Steph",
        "points": 895,
        "icon": "🐬"
    },
    {
        "name": "Elisaaaa",
        "points": 620,
        "icon": "🐢"
    },
    {
        "name": "Christian",
        "points": 310,
        "icon": "🐊"
    },
    {
        "name": "Steve",
        "points": 285,
        "icon": "🦊"
    },
    {
        "name": "Robin",
        "points": 785,
        "icon": "🦉"
    },
    {
        "name": "vii",
        "points": 590,
        "icon": "🐒"
    },
    {
        "name": "Tolga",
        "points": 795,
        "icon": "🦁"
    },
    {
        "name": "kami",
        "points": 940,
        "icon": "🐻"
    },
    {
        "name": "PanneAnne",
        "points": 585,
        "icon": "🐧"
    },
    {
        "name": "san",
        "points": 400,
        "icon": "🐳"
    }
]




function HighsocreList(){

//    const items = highscores.map(({name, points, icon}) =>(
//        <HighsocreItem name={name} points={points} icon={icon} />
//    ))


    return <div>
       {highscores.map(({name, points, icon}) =>(
        <HighsocreItem name={name} points={points} icon={icon} />
    ))}

    </div>
}

export default HighsocreList