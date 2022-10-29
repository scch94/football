import React from 'react'
import { useState } from 'react'
import { Navbar } from './Navbar'
import { Team } from './Team'

export const Principal = () => {
  const [equipo,setEquipo]=useState("")

  const [jugadores,setJugadores]=useState("")
  function onSearch(e,ciudad){
    e.preventDefault();
    const url=`https://apiv2.allsportsapi.com/football/?&met=Teams&teamName=${ciudad}&APIkey=94e89d2a0c5bb8b843f53aacebf7a22bdf25da1c19c1ad5ea02d613a0dc28375`
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
      console.log(data.result[0])
      setJugadores(data.result[0]);
    })

  }
  return (
    <>
      <Navbar onSearch={onSearch}/>
      {
        <Team team={jugadores}/>
      }
    </>
  )
}
