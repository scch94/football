import React from 'react'
import { useState } from 'react'
import { Navbar } from './Navbar'
import { Team } from '../components/Team/Team.jsx'
import { Teams } from './teams/teams'

export const Principal = () => {
  const [equipos,setEquipos]=useState([])
  function onSearch(e,ciudad){
    e.preventDefault();
    const url=`https://apiv2.allsportsapi.com/football/?&met=Teams&teamName=${ciudad}&APIkey=94e89d2a0c5bb8b843f53aacebf7a22bdf25da1c19c1ad5ea02d613a0dc28375`
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
      console.log(data.result[0])
      setEquipos((prev)=>[...prev,...[data.result[0]]])
    })
  }
  function onClose(name){
    console.log(name)
    const nuevo=equipos.filter(equipo=>equipo.team_name!=name)
    setEquipos(nuevo)
  }
  return (
    <>
      <Navbar onSearch={onSearch}/>
      {
        <Teams equipos={equipos} onClose={onClose}/>
      }
    </>
  )
}
