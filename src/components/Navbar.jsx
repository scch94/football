import React from "react";
import { useState } from "react";

export function Navbar({onSearch}){
    const [buscar,setBuscar]=useState("")
    return(
        <>
            <div>
                <form onSubmit={(e)=>onSearch(e,buscar)}>
                    <input type="text" name="info" value={buscar} onChange={(e=>setBuscar(e.target.value))}/>
                    {""}
                    <input type="submit" value="buscar" />
                    <h2>hola
                        
                    </h2>
                </form>
            </div>
        </>
    )
}