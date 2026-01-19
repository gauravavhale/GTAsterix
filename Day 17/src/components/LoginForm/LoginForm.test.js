import LoginForm from "./LoginForm";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";

jest.mock("axios")

test('submit correct email and password', async() => {
    axios.post.mockResolvedValueOnce({ data: {} })

    const handleSubmit = jest.fn()
  
    render(<LoginForm onSubmit={handleSubmit}/>)

    await userEvent.type(screen.getByPlaceholderText("Name"), "test@mail.com")
    await userEvent.type(screen.getByPlaceholderText("Password"), "1234567890")

    await userEvent.click(screen.getByText("Submit"))

    expect(handleSubmit).toHaveBeenCalledWith({
        name: "test@mail.com",
        password: "1234567890"
    })
})

test('Shows success message after api login', async() => {

    axios.post.mockResolvedValueOnce({
        data:{token:"123456"},
    })

    render (<LoginForm onSubmit={jest.fn()} />)

    await userEvent.type(screen.getByPlaceholderText("Name"), "test@mail.com")
    await userEvent.type(screen.getByPlaceholderText("Password"), "1234567890")

    await userEvent.click(screen.getByText("Submit"));

    const msg = await screen.findByText("Login Successfull")

    expect(msg).toBeInTheDocument()

})

test('Full Login Flow Works Correctly', async() => {
  axios.post.mockResolvedValueOnce({
    data:{token: "fake-jwt-token"}
  })

  const handleSubmit = jest.fn()

  render(<LoginForm onSubmit={handleSubmit} />)

  await userEvent.type(screen.getByPlaceholderText("Name"), "test@mail.com")
  await userEvent.type(screen.getByPlaceholderText("Password"),"1234567890")

  await userEvent.click(screen.getByText("Submit"))

  expect(handleSubmit).toHaveBeenCalledWith({
    name:"test@mail.com",
    password:"1234567890",
  })

  await waitFor(()=>{
    expect(axios.post).toHaveBeenCalledWith("/login",{
        email:"test@mail.com",
        password:"1234567890",
    })
  })

  const success = await screen.findByText("Login Successfull")
  expect(success).toBeInTheDocument()

})

