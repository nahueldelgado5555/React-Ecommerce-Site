import React, {useState} from "react";
import styled from "styled-components";

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding: 20px;
`;


const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  text-align: center;
`;


const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #0077ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #0060cb;
  }
`;



export const Contact = () => {

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Por ahora, simplemente muestra los datos del formulario en la consola
    setFormData({
      name: "",
      email: "",
      message: "",
      congrat: "Gracias por enviarnos tu mensaje"
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    const congratTextArea = document.getElementById('congrat');
    congratTextArea.removeAttribute('hidden');
  };



  return (
    <ContactWrapper>
      <Title>Contact Us</Title>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <Input type="text" id="name" name="name" required value={formData.name}
               onChange={handleChange} />
        <label htmlFor="email">Email:</label>
        <Input type="email" id="email" name="email" required value={formData.email}
               onChange={handleChange} />
        <label htmlFor="message">Message:</label>
        <TextArea id="message" name="message" required value={formData.message}
                  onChange={handleChange}></TextArea>
        <p id="congrat" onChange={handleChange} hidden>Gracias por tu mensaje</p>
        <Button type="submit">Send</Button>
      </Form>
    </ContactWrapper>
  );
};
