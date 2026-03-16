import { useParams, useNavigate } from 'react-router-dom'
import logements from '../../data/logements.json'
import Collapse from '../../components/Collapse/Collapse'
import './Logement.scss'
import Carousel from '../../components/Carousel/Carousel' 

function Logement() {
  const { id } = useParams()
  const navigate = useNavigate()
  const logement = logements.find((l) => l.id === id)

  if (!logement) {
    navigate('/erreur')
    return null
  }

  return (
    <div className="logement">
      <Carousel pictures={logement.pictures} />
      <div className="logement__infos">
        <div className="logement__infos-left">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="logement__tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="logement__tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="logement__infos-right">
          <div className="logement__rating">
            {[1, 2, 3, 4, 5].map((etoile) => (
              <span key={etoile} className={etoile <= logement.rating ? 'etoile--active' : 'etoile'}>★</span>
              ))}
          </div>
          <div className="logement__host">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
        </div>
      </div>

      <div className="logement__collapses">
        <Collapse titre="Description" contenu={logement.description} />
        <Collapse titre="Équipements" contenu={
          <ul>
            {logement.equipments.map((eq, index) => (
              <li key={index}>{eq}</li>
            ))}
          </ul>
        } />
      </div>
    </div>
  )
}

export default Logement