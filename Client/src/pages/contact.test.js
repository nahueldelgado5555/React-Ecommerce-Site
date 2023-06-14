import React from "react";
import {Contact} from "./contact";
import '@testing-library/jest-dom';
import {fireEvent, screen, render, getByText} from "@testing-library/react";


test('submit_todos_los_campos', () => {
    render(<Contact />);

    const nameInput = screen.getByLabelText("Name:");
    const emailInput = screen.getByLabelText("Email:");
    const messageInput = screen.getByLabelText("Message:");
    const sendButton = screen.getByRole("button", {name: "Send"});

    fireEvent.change(nameInput, {target: {value: "Lorena Romero"}});
    fireEvent.change(emailInput, {target: {value: "l.r.@hola.com"}});
    fireEvent.change(messageInput, {target: {value: "Hola, estoy interesada en comprar los auriculares."}});
    fireEvent.click(sendButton);

    expect(screen.getByText("Gracias por tu mensaje")).toBeInTheDocument();

})
