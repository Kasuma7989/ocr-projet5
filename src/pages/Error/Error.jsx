<<<<<<< HEAD
import { Link } from 'react-router-dom'
import './Error.scss'

function Error() {
  return (
    <div className="error">
      <h1 className="error__code">404</h1>
      <p className="error__message">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="error__link">Retourner sur la page d'accueil</Link>
    </div>
  )
=======
function Error() {
  return <h1>Page Error</h1>
>>>>>>> cac815eb84b7fce305773329636de0a15cffa9e3
}

export default Error