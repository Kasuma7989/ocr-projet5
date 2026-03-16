import { useState } from 'react'
import './Carousel.scss'

function Carousel({ pictures }) {
  const [index, setIndex] = useState(0)

  const suivant = () => {
    if (index === pictures.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  const precedent = () => {
    if (index === 0) {
      setIndex(pictures.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  return (
    <div className="carousel">
      <img src={pictures[index]} alt={`photo ${index + 1}`} className="carousel__image" />
      
      {pictures.length > 1 && (
        <>
          <button className="carousel__btn carousel__btn--prev" onClick={precedent}>❮</button>
          <button className="carousel__btn carousel__btn--next" onClick={suivant}>❯</button>
          <span className="carousel__compteur">{index + 1}/{pictures.length}</span>
        </>
      )}
    </div>
  )
}

export default Carousel