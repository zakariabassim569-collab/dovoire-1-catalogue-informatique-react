import React from "react";

function EnteteBoutique(props){
    return(
        <div style = {{backgroundColor:props.couleurFond}}>
        <h1>Nom du Boutique : {props.nomBoutique}</h1>
        <p>{props.slogan}</p>
        </div>
    )
}
export default EnteteBoutique;