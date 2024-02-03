import React from "react";
import './style.css'


const Button = (props) => { 
    const alerta = (label) => {
       alert("O label deste botão é. " + props.label)
    }
    return(
        <>
            <button className="btn" onClick={()=>{alerta()}}> {props.label} </button>
        </>
    ) 
}
Button.defaultProps = {
    label: 'Clique Aqui'
}

export default Button