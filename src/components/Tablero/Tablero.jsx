import { tablero } from "../../data/tableroBase"
import Casilla from "../Casilla/Casilla"
import "./Tablero.css"
tablero

const Tablero = () => {
  return (
    <div className="tablero">
        {tablero.map((e,index)=><Casilla key={index}/>)}
        
       
    </div>
  )
}

export default Tablero