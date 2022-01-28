import { render, screen, waitFor, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../auth/Login'
import axios from 'axios'

const testUser = {
  email: 'test@test.com',
  password: 'testpassword',
}

afterEach(cleanup)

test('Should render the component', () => {
  render(<Login />)
})

test('Should accept user input and display it correctly', () => {
  render(<Login />)

  const emailInput = screen.getByLabelText('Email')
  const passwordInput = screen.getByLabelText('Password')
  const submitBtn = screen.getByRole('submit')

  expect(emailInput).toBeInTheDocument()
  expect(passwordInput).toBeInTheDocument()
  expect(submitBtn).toBeInTheDocument()

  userEvent.type(emailInput, testUser.email)
  userEvent.type(passwordInput, testUser.password)

  expect(emailInput.value).toEqual(testUser.email)
  expect(passwordInput.value).toEqual(testUser.password)
})

test('Should post the inputted values correctly', async () => {
  axios.post.mockResolvedValueOnce()

  render(<Login />)

  const emailInput = screen.getByLabelText('Email')
  const passwordInput = screen.getByLabelText('Password')
  const submitBtn = screen.getByRole('submit')

  userEvent.type(emailInput, testUser.email)
  userEvent.type(passwordInput, testUser.password)
  userEvent.click(submitBtn)

  await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1))

  expect(axios.post).toBeCalledWith(
    'https://ga-cheesebored.herokuapp.com/login',
    testUser
  )
})


test('Should display an error message with incorrect crendentials provided', async () => {
  axios.post.mockRejectedValueOnce()

  render(<Login />)

  userEvent.click(screen.getByRole('submit'))

  await waitFor(() => expect(axios.post).toHaveBeenCalled())

  const errorMessage = screen.getByRole('error-message')

  expect(errorMessage).toBeInTheDocument()
})