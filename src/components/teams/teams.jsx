import React from 'react'
import { Team } from '../Team/Team.jsx'
import s from './teams.module.css'
{}
export const Teams = ({equipos, onClose}) => {
  return (
    <>
        <div className={s.contenedor}>
            {
                equipos.map(equipo=><Team team={equipo} onClose={onClose}/>)
            }
        </div>

    </>
    
  )
}
