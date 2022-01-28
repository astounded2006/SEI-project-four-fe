import { createVenueComment } from '../../lib/api'
import React from 'react'

function VenueCommentForm({ fetchVenue, venueId }) {
  const [commentValue, setCommentValue] = React.useState('')
  const [isError, setIsError] = React.useState(false)

  const handleChange = (e) => {
    setCommentValue(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('comment value', commentValue)
    try {
      // await createVenueComment(venueId, { content: commentValue })
      await createVenueComment(venueId, { text: commentValue })
      setCommentValue('')
      fetchVenue()
    } catch (err) {
      setIsError(true)
    }
  }

  return (
    <form className="venue-comment-container" onSubmit={handleSubmit}>
      <div className="f">
        <div className="c">
          <textarea className="textarea" name="content" onChange={handleChange} value={commentValue}/>
        </div>
        {isError && <p className="help is-danger">Please write a comment and try again!</p>}
      </div>
      <div className="field">
        <button type="submit" className="comment-button">Comment</button>
      </div>
    </form>
  )
}

export default VenueCommentForm