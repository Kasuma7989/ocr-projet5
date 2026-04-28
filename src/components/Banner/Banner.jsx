import './Banner.scss'
function Banner({ texte, image }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <p className="banner__texte">{texte}</p>
    </div>
  )
}

export default Banner