import { BrowserRouter } from 'react-router-dom'
import { render, screen, waitFor, cleanup } from '@testing-library/react'
import axios from 'axios'
import VenueIndex from '../components/venues/VenueIndex'

afterEach(cleanup)

const response = [
  {
    _id: '5bf69d5b115e7252c5e6b911',
    name: 'Beemster Classic',
    origin: 'Netherlands',
    image: 'https://ga-cheesebored.herokuapp.com/images/beemster-classic.jpeg',
    tastingNotes:
        'This cheese looks and feels similar to parmesan but it is more closely related to gouda in taste and texture. The first thing you will notice when tasting the Beemster Classic is the smooth, creamy texture followed by a sharp, salty flavor due to its extensive aging.',
    user: {
      _id: '5bf6c0f57288d357a9110cdd',
      username: 'mickyginger',
      email: 'mike.hayden@ga.co',
    },
  },
  {
    _id: '5bf69d5b115e7252c5e6b90f',
    name: 'Bourdin Chèvre',
    origin: 'France',
    image: 'https://ga-cheesebored.herokuapp.com/images/bourdin-chevre.jpeg',
    tastingNotes:
        'This style of fresh goat\'s cheese is a staple in French markets, and for very good reason. It has a soft and moist texture and a gentle but creamy flavor.',
    user: {
      _id: '5bf6c0f57288d357a9110cdd',
      username: 'mickyginger',
      email: 'mike.hayden@ga.co',
    },
  },
  {
    _id: '5bf69d5b115e7252c5e6b8f8',
    name: 'Caerphilly',
    origin: 'Wales',
    image: 'https://ga-cheesebored.herokuapp.com/images/caerphilly.jpeg',
    tastingNotes:
        'This young cheese has an ivory white rind with a pale colored paste and semi-firm texture. It\'s a moist, crumbly cheese, and its flavor is usually described as salty buttermilk, slightly sour, but buttery.',
    user: {
      _id: '5bf6c0f57288d357a9110cdd',
      username: 'mickyginger',
      email: 'mike.hayden@ga.co',
    },
  }
]


test('Should render the loading state, then a list of venues on success', async () => {
  axios.get.mockResolvedValueOnce({ data: response })

  render(
    <BrowserRouter>
      <VenueIndex />
    </BrowserRouter>
  )

  const loadingIndicator = screen.getByRole('Loading')

  expect(loadingIndicator).toBeInTheDocument()

  await waitFor(() => expect(axios.get).toHaveBeenCalled())

  response.forEach(item => {
    const element = screen.getByAltText(item.name)
    expect(element).toBeInTheDocument()
  })
})

test('Should render loading state, then error message on failed response', async () => {
  axios.get.mockRejectedValueOnce()

  render(
    <BrowserRouter>
      <VenueIndex />
    </BrowserRouter>
  )

  const loadingIndicator = screen.getByRole('loading')

  expect(loadingIndicator).toBeInTheDocument()

  await waitFor(() => expect(axios.get).toHaveBeenCalled())

  const errorMessage = screen.getByRole('error-message')

  expect(errorMessage).toBeInTheDocument()
})