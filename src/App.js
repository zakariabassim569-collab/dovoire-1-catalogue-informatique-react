import EnteteBoutique from "./EnteteBoutique";
import Catalogue from "./Catalogue";
import ResumeCatalogue from "./ResumeCatalogue";
import MessageAccueil from "./MessageAccueil";

function App() {
        const produits = [
          {
            id: 1,
            nom: "Ordinateur portable",
            categorie: "Ordinateurs",
            prix: 8500,
            disponible: true,
            enPromotion: true
          },
          {
            id: 2,
            nom: "Clavier mécanique",
            categorie: "Accessoires",
            prix: 650,
            disponible: true,
            enPromotion: false
          },
          {
            id: 3,
            nom: "Écran 27 pouces",
            categorie: "Écrans",
            prix: 2200,
            disponible: false,
            enPromotion: false
          },
          {
            id: 4,
            nom: "Souris sans fil",
            categorie: "Accessoires",
            prix: 300,
            disponible: true,
            enPromotion: true
            }
            ];
            const nbrProduits =produits.length;
            const nbrDisponible = produits.filter((p) => {
              return p.disponible===true;
            }).length;

  return (
    <div>
      <EnteteBoutique
        nomBoutique="InfoTech"
        slogan="Votre équipement, notre expertise"
        couleurFond="#1E3A8A"
      />
      <Catalogue produits={produits}/>
      <ResumeCatalogue
        nbrProduits ={nbrProduits}
        nbrDisponible ={nbrDisponible}
      />
      <MessageAccueil nomClient="Bassim"/>

      
    </div>
  );
}

export default App;
