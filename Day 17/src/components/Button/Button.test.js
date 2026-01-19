import { screen, render } from "@testing-library/react";
import Button from "./Button";

test('renders button with correct label', () => {
    
  render(<Button label={"Login"}/>)

  const btn = screen.getByText("Login")

  expect(btn).toBeInTheDocument

})
