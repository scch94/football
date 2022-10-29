import React from "react";
import s from './team.module.css'
export function Team ({team,onClose}){
    return(
        <>
            <div className={s.contenedor}>
                <h1>{team.team_name}</h1>
                <img src={team.team_logo} alt={team.tame_name} />
                <button onClick={e=>alert(`informacion de ${team.team_name}`)}>info</button>
                <button onClick={()=>onClose(team.team_name)}>elimar</button>
            </div>
        </>
    )
}