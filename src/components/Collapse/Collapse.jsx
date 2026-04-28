import { useState } from 'react'
import arrow from '../../assets/arrow.svg'
import './Collapse.scss'

function Collapse({ titre, contenu }) {
  const [estOuvert, setEstOuvert] = useState(false)

  return (
    <div className="collapse">
      <button className="collapse__header" onClick={() => setEstOuvert(!estOuvert)}>
        <span className="collapse__titre">{titre}</span>
        <img
          src={arrow}
          alt=""
          className={`collapse__fleche ${estOuvert ? 'collapse__fleche--ouvert' : ''}`}
        />
      </button>
      {estOuvert && (
        <div className="collapse__contenu">
          {contenu}
        </div>
      )}
    </div>
  )
}

export default Collapse