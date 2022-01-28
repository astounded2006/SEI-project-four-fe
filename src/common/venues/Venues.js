import React from 'react'
import { getAllVenues } from '../../lib/api'
import VenueCard from './VenueCard'
import Error from '../Error'
import Loading from '../Loading'

function VenuesPage() {
  const [venues, setVenues] = React.useState(null)
  const [selectedVenue, setSelectedVenue] = React.useState('All Venues')
  const [searchedValue, setSearchedValue] = React.useState('')
  const [isError, setIsError] = React.useState(false)
  const isLoading = !venues && !isError

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAllVenues()
        setVenues(res.data)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  }, [])

  const handleSelect = (e) => {
    setSelectedVenue(e.target.value)
  }
  const handleSearch = (e) => {
    e.preventDefault()
    setSearchedValue(e.target.value)
  }
  console.log(searchedValue) // test


  const filteredVenues = (venues) => {
    return venues.filter(venue => {
      return (
        venue.name.toLowerCase().includes(searchedValue.toLowerCase()) &&
        (venue.venue === selectedVenue || selectedVenue === 'All Venues')
      )
    })
  }

  return (
    <section>
      <div className="searchdropmenu">
        <div className="input-group mb-3">
          <div className="input-group-text p-0">
            <input className="form-control" type="search" placeholder="Venue Search..." onChange={handleSearch}/>
          </div>
          <div className="dropdown">
            <select onChange={handleSelect} className="form-select form-select-md shadow-none bg-light border-2" type="button">
              <option> All Venues</option>
              <option value="Cocktail-bar" className="dropitem">Cocktail-bar</option>
              <option value="Restaurant" className="dropitem">Restaurant</option>
              <option value="Musem" className="dropitem">Museum</option>
            </select>
            <div className="container index">
              <div className="row row-cols-4 gx-2">
                {isError && <Error />}
                {isLoading && <Loading />}
                {venues &&
          filteredVenues(venues).map(venue => (
            <VenueCard
              key={venue._id}
              title={venue.name}
              image={venue.image}
              venueId={venue._id}
              venue={venue.venue}
            />
          ))
                }
              </div>   
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



export default VenuesPage