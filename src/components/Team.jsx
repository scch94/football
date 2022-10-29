import React from "react";

export function Team ({team}){
    return(
        <>
            <div>
                <h1>{team.team_name}</h1>
                <img src={team.team_logo} alt={team.name} />
                <p>DT  {team.coaches[0].coach_name}</p>
                {/* <span>DT {team.coaches.coach_name}</span> */}
            </div>
        </>
    )
}