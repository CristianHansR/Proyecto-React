import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactPage: React.FC = () => {
  const [nombre, setNombre] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mensaje, setMensaje] = useState<string>("");

  const validarEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nombreTrimmed = nombre.trim();
    const emailTrimmed = email.trim();
    const mensajeTrimmed = mensaje.trim();

    if (!nombreTrimmed || !emailTrimmed || !mensajeTrimmed) {
      alert("Por favor, ingresa texto válido en todos los campos.");
      return;
    }

    if (!validarEmail(emailTrimmed)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    const formularioData = { nombre: nombreTrimmed, email: emailTrimmed, mensaje: mensajeTrimmed };

    localStorage.setItem("contacto", JSON.stringify(formularioData));

    console.log("Formulario guardado en LocalStorage:", formularioData);
    alert("¡Formulario enviado con éxito!");
  };

  return (
    <Container className="mt-4">
      <header>
        <h1>Contáctanos</h1>
      </header>

      <Form className="mt-4" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Nombre:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tu nombre"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Correo electrónico:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Tu correo electrónico"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMensaje">
          <Form.Label>Mensaje:</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Escribe tu mensaje aquí"
            required
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default ContactPage;