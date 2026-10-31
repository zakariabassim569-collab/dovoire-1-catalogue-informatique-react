import React from "react";
function ResumeCatalogue (props){
    return (
        <div>
        <p>le nombre total de produits : {props.nbrProduits}</p>
        <p>le nombre de produits disponibles : {props.nbrDisponible}</p>
        { props.nbrDisponible=== 0 &&(<p>Tous les produits sont
indisponibles</p>) }
        </div>
    )
}
export default ResumeCatalogue;