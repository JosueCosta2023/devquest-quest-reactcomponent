import React from "react";
import './style.css'

const Texto = (props) =>{

    const {contentText, colorText} = props;

    const Estilo = {
        color: colorText,
        textTransform: "uppercase"
    }

    return (
        <>
            <p style={Estilo}> {contentText} </p>
        </>

    )
}

export default Texto