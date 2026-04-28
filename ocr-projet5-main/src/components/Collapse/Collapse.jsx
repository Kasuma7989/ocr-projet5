import { useState } from 'react'
import './Collapse.scss'

function Collapse({ titre, contenu }) {
  const [estOuvert, setEstOuvert] = useState(false)

  return (
    <div className="collapse">
      <button className="collapse__header" onClick={() => setEstOuvert(!estOuvert)}>
        <span className="collapse__titre">{titre}</span>
        <span className={`collapse__fleche ${estOuvert ? 'collapse__fleche--ouvert' : ''}`}>
          &#8743;
        </span>
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