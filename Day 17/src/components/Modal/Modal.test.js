import { render, screen } from "@testing-library/react";
import Modal from "./Modal";
import userEvent from "@testing-library/user-event";

test('opens and closes model', async() => {

    render(<Modal/>)

    const openBtn = screen.getByText("On Click")
    await userEvent.click(openBtn)

    expect(screen.getByText("Model Content")).toBeInTheDocument()


    const closedBtn = screen.getByText("Close")
    await userEvent.click(closedBtn)

    expect(screen.queryByText("Model Content")).not.toBeInTheDocument()

})
