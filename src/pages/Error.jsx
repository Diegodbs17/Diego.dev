import React from 'react'
import { Link } from 'react-router'

function Error() {
  return (
    <section id='error' className='error'>
      <div className="container">
        <div className="error-404-content">
          <h2 className="error-heading">Error 404</h2>
          <p className="para-error">La page n'existe pas</p>
          <Link to="/" className='link-error'>Retourner à l'accueil</Link>
        </div>
      </div>
    </section>
  )
}

export default Error