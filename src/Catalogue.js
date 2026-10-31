import React from "react";
import Produit from "./Produit";

function Catalogue (prop){
    const listproduits = prop.produits.map((p) => {
        return (
            <li key={p.id}>
                <Produit
                    nom={p.nom}
                    categorie={p.categorie}
                    prix={p.prix}
                    disponible={p.disponible}
                    enPromotion={p.enPromotion}
                />
        </li>)
    });
    return (
        <div>
            <h2>Catalogue des produits : </h2>
            <ul>
                {listproduits}
            </ul>
        </div>
    );
}
export default Catalogue;
