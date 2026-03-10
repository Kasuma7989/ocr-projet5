import logements from '../../data/logements.json'
import Card from '../../components/Card/Card'
import Banner from '../../components/Banner/Banner'
import bannerImage from '../../assets/banner.jpg'
import './Home.scss'

function Home() {
  return (
    <div className="home">
      <Banner texte="Chez vous, partout et ailleurs" image={bannerImage} />
      <div className="home__cards">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  )
}

export default Home