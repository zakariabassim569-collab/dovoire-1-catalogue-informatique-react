import React from "react";

function Produit (props){
    return(
    <div>
        <h3>Nom du produit : {props.nom}</h3>
        <p>Categorie du produit: {props.categorie} </p>
        <p>prix du produit en dirhams : {props.prix} dirhams</p>
        <p style={{color:props.disponible? "green":"red"}}>{props.disponible ? "Disponible": "Rupture de stock"};</p>
        <p>{props.enPromotion && "Offre promotionnelle"}</p>
    </div>);
}
export default Produit;