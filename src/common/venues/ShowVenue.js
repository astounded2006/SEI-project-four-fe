import React from 'react'
import { useParams } from 'react-router-dom'
import { deleteVenueComment, getSingleVenue, toggleFavourite } from '../../lib/api' //getProfileInfo,
import Error from '../Error'
import Loading from '../Loading'
import VenueCommentCard from './VenueCommentCard'
import VenueCommentForm from './VenueCommentForm'
import { isAuthenticated } from '../../lib/auth'


function ShowVenues(){
  const { venueId } = useParams() //,userId
  const [venue, setVenue] = React.useState(null)
  const [isError, setIsError] = React.useState(null)
  const [hasFavourited, setHasFavourited] = React.useState(false)
  const isLoading = !venue && !isError
  
  const fetchVenue = React.useCallback(() => {
    const getData = async () => {
      try {
        const res = await getSingleVenue(venueId)
        setVenue(res.data)
      } catch (err) {
        setIsError(true)
      }
    
    }
    getData()
  }, [venueId])

  React.useEffect(() => {
    fetchVenue()
  }, [venueId, fetchVenue])

  const handleFavouriteClick = async e => {
    e.preventDefault()
    try {
      const faveClick = await toggleFavourite(venueId)
      console.log(faveClick.data.favouritedBy)
      setHasFavourited(!hasFavourited)
    } catch (err) {
      console.log('error')
      // setIsError(true)
    }
  }
  console.log(hasFavourited)

  const handleDeleteComment = async (commentId) => {
    if (window.confirm('Do you want to delete this comment?')) {
      try {
        await deleteVenueComment(venueId, commentId)
        fetchVenue()
      } catch (err) {
        console.log(err)
      }
    }
  }
  
  return (
    <section>
      <div className="venue-show-container">
        {isError && <Error />}
        {isLoading && <Loading />}
        {venue && (
          <>
            <div className="venue-card-container">
              <h2 className="venue-card-title">
                {venue.title}
              </h2>
              <div className="venue-course-container">
                <p className="venue-course">
                  {venue.course}             
                </p>
              </div>
              <div className="venue-card-image-container">
                <figure className="venue-card-image">
                  <img src={venue.image} alt={venue.name} height={500} width= {700}/>
                </figure>  
                {hasFavourited ? 
                  <button className="faveBtn" onClick={handleFavouriteClick}>                
                    <i className="bi-bookmark-heart"> Remove Favourites</i>
                  </button>   
                  : 
                  <button className="faveBtn" onClick={handleFavouriteClick}>                
                    <i className="bi-bookmark-heart"> Add to Favourites</i>
                  </button>   
                }
                
                <div className="venue-minutes-container">
                  <p><i className="bi bi-clock"></i><strong> Type: </strong> {venue.description}.</p>                 
                </div>       
              </div>
              <div className="venue-location-container">
                <div className="venue-location-title">
                  <h3>Location</h3>
                </div>     
                <div className="venue-location">         
                  <p> <strong>Address:</strong> {venue.location}</p> 
                  <p><strong>Expensive:</strong> {venue.expensive}</p>
                  <p><strong>Number:</strong> {venue.number}</p>
                  <p><strong>Parking:</strong> {venue.parking}</p>
                </div>
              </div>
              <div className="venue-location-container">
                <div className="venue-location-title">
                  <h3>Description:</h3>   
                </div>
                <div className="venue-description">
                  <p> {venue.description} </p>   
                </div>                   
              </div>
              <div className="venue-childfriendly-container">
                <div className="venue-childfriendly-title">
                  <h3>Is it ChildFriendly</h3>
                </div>
                <div className="venue-childfriendly">
                  <p className="venue-childfriendly-title"> {venue.childfriendly} </p>
                </div>
              </div>
              <div className="column">
                {venue.comments.map(comment => (
                  <VenueCommentCard
                    key={comment._id}
                    text={comment.text}
                    addedBy={comment.addedBy}
                    handleDelete={() => handleDeleteComment(comment._id)}
                  />
                ))}
              </div>
              {isAuthenticated() && (
                <VenueCommentForm
                  fetchVenue={fetchVenue}
                  venueId={venueId}
                />
              )}
            </div>
          </>
        )
        }
      </div>
    </section>
  )
}

export default ShowVenues