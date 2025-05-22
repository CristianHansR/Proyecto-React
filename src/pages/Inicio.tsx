import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";
import beigImg from "../assets/imgs/gorros/beig.jpg";
import polerablacaImg from "../assets/imgs/poleras/polera-blaca.jpg";
import pantalonesbeigImg from "../assets/imgs/pantalones/beig.jpg";
import pantalonesrotoImg from "../assets/imgs/pantalones/roto.jpg";

const productos = [
  { id: 1, nombre: "Jockey Beig", descripcion: "Gorro de Estilo casual.", imagen: beigImg, precio: "$5.990", estado: "Usado", detalle: "Visera curva" },
  { id: 4, nombre: "Polera Blanca", descripcion: "Tela de algodon.", imagen: polerablacaImg, precio: "$10.990", estado: "Estado: Nuevo", detalle: "Corea del norte" },
  { id: 7, nombre: "Pantalon Beig", descripcion: "Pantalon de Tela.", imagen: pantalonesbeigImg, precio: "$12.990", estado: "Estado: Nuevo", detalle: "Hombre" },
  { id: 9, nombre: "Jean Azul", descripcion: "Jean Roto", imagen: pantalonesrotoImg, precio: "$15.990", estado: "Estado: Rodillas rotas", detalle: "Dama" },
];

const Bienvenida = () => {
  const navigate = useNavigate();
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    function getRandomProducts(arr, n) {
      const shuffled = [...arr].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, n);
    }
    setRandomProducts(getRandomProducts(productos, 3));
  }, []);

  const handleVerDetalles = (id) => {
    navigate(`/tienda/${id}`);
  };

  return (
    <Container className="bienvenida py-5" style={{ paddingTop: "80px" }}>
      {/* Carousel */}
      <Carousel className="mb-5">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={beigImg}
            alt="Jockey Beig"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Jockey Beig</h3>
            <p>Gorro de estilo casual en color beig.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pantalonesbeigImg}
            alt="Jockey Burdeo"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Pantalon Beig</h3>
            <p>Pantalon de Tela. </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={polerablacaImg}
            alt="Jockey Negro"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Polera blanca</h3>
            <p>Tela de algodon.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Cards */}
      <Row>
        {randomProducts.map((producto) => (
          <Col md={4} key={producto.id} className="d-flex justify-content-center mb-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={producto.imagen}
                alt={producto.nombre}
                style={{ objectFit: "cover", height: "180px" }}
              />
              <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>{producto.descripcion}</Card.Text>
                <Button variant="primary" onClick={() => handleVerDetalles(producto.id)}>
                  Ver Detalles
                </Button>
              </Card.Body>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>{producto.precio}</strong></li>
                <li className="list-group-item">Estado: {producto.estado}</li>
                <li className="list-group-item">{producto.detalle}</li>
              </ul>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Bienvenida;
