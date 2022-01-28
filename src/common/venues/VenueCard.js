import { Link } from 'react-router-dom'

function VenueCard({ venueId, description, image, name }) {
  return (
    <section>
      <div className="card venue">
        <div className="card-body venues">
          <h5 className="card-title venues">{name}</h5>
          <p className="card-text venues">{description}</p>
        </div>
        <Link to={`/venues/${venueId}`}>
          <img src={image} className="card-img-top venues" alt={name}/>
        </Link>
      </div>
    </section>
  )
}

export default VenueCard