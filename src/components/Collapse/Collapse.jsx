import { useState } from 'react'
<<<<<<< HEAD
import arrow from '../../assets/arrow.svg'
=======
>>>>>>> cac815eb84b7fce305773329636de0a15cffa9e3
import './Collapse.scss'

function Collapse({ titre, contenu }) {
  const [estOuvert, setEstOuvert] = useState(false)

  return (
    <div className="collapse">
      <button className="collapse__header" onClick={() => setEstOuvert(!estOuvert)}>
        <span className="collapse__titre">{titre}</span>
<<<<<<< HEAD
        <img
          src={arrow}
          alt=""
          className={`collapse__fleche ${estOuvert ? 'collapse__fleche--ouvert' : ''}`}
        />
=======
        <span className={`collapse__fleche ${estOuvert ? 'collapse__fleche--ouvert' : ''}`}>
          &#8743;
        </span>
>>>>>>> cac815eb84b7fce305773329636de0a15cffa9e3
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