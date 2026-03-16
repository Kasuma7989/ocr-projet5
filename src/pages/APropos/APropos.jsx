import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'
import bannerApropos from '../../assets/banner2.svg'
import './APropos.scss'

const valeurs = [
  { id: 1, titre: 'Fiabilité', contenu: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.' },
  { id: 2, titre: 'Respect', contenu: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
  { id: 3, titre: 'Service', contenu: 'La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos équipes ou nos hôtes, soit 5 étoiles.' },
  { id: 4, titre: 'Sécurité', contenu: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos équipes.' }
]

function APropos() {
  return (
    <div className="apropos">
      <Banner image={bannerApropos} />
      <div className="apropos__collapses">
        {valeurs.map((valeur) => (
          <Collapse
            key={valeur.id}
            titre={valeur.titre}
            contenu={valeur.contenu}
          />
        ))}
      </div>
    </div>
  )
}

export default APropos