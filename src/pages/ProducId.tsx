import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import beigImg from "../assets/imgs/gorros/beig.jpg";
import burdeoImg from "../assets/imgs/gorros/burdeo.jpg";
import negroImg from "../assets/imgs/gorros/negro.jpg";
import polerablacaImg from "../assets/imgs/poleras/polera-blaca.jpg";
import poleranegraImg from "../assets/imgs/poleras/polera-negra.jpg";
import polerarojaImg from "../assets/imgs/poleras/polera-roja.jpg";
import pantalonesbeigImg from "../assets/imgs/pantalones/beig.jpg";
import pantalonesdamaImg from "../assets/imgs/pantalones/dama.jpg";
import pantalonesrotoImg from "../assets/imgs/pantalones/roto.jpg";

// Datos de ejemplo
const productos = [
  { id: 1, nombre: "Jockey Beig", descripcion: "Gorro de Estilo casual.", imagen: beigImg, precio: "$5.990", estado: "Usado", detalle: "Visera curva" },
  { id: 2, nombre: "Jockey Burdeo", descripcion: "Gorro de Estilo casual.", imagen: burdeoImg, precio: "$5.990", estado: "Estado: Usado.", detalle: "Visera curva" },
  { id: 3, nombre: "Jockey Negro", descripcion: "Gorro de Estilo casual.", imagen: negroImg, precio: "$5.990", estado: "Estado: Gastado.", detalle: "visera curva" },
  { id: 4, nombre: "Polera Blanca", descripcion: "Tela de algodon.", imagen: polerablacaImg, precio: "$10.990", estado: "Estado: Nuevo", detalle: "Corea del norte" },
  { id: 5, nombre: "Polera Negra", descripcion: "Tela de algodon.", imagen: poleranegraImg, precio: "$10.990", estado: "Estado: Nuevo", detalle: "Africa" },
  { id: 6, nombre: "Polera Roja", descripcion: "Tela de algodon", imagen: polerarojaImg, precio: "$10.990", estado: "Estado: Nuevo", detalle: "España" },
  { id: 7, nombre: "Pantalon Beig", descripcion: "Pantalon de Tela.", imagen: pantalonesbeigImg, precio: "$12.990", estado: "Estado: Nuevo", detalle: "Hombre" },
  { id: 8, nombre: "Pantalon Gris", descripcion: "Tela de algodon.", imagen: pantalonesdamaImg, precio: "$12.990", estado: "Estado: Nuevo", detalle: "Dama" },
  { id: 9, nombre: "Jean Azul", descripcion: "Jean Roto", imagen: pantalonesrotoImg, precio: "$15.990", estado: "Estado: Rodillas rotas", detalle: "Dama" },
];

const Bienvenida = () => {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === parseInt(id));

  const handleComprar = () => {
    alert("Producto agregado al carrito de compras");
  };

  if (!producto) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "transparent",
        }}
      >
        <Container className="py-5" style={{ paddingTop: "80px" }}>
          <h2>Producto no encontrado</h2>
        </Container>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "transparent",
      }}
    >
      <Container className="py-5" style={{ paddingTop: "80px" }}>
        <h2 className="mb-4">Detalle del Producto</h2>
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="img-fluid rounded shadow"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </Col>
          <Col md={6}>
            <h3>{producto.nombre}</h3>
            <p><strong>Descripción:</strong> {producto.descripcion}</p>
            <p><strong>Precio:</strong> {producto.precio}</p>
            <p><strong>Estado:</strong> {producto.estado}</p>
            <p><strong>Detalle:</strong> {producto.detalle}</p>

            <div className="d-flex justify-content-center mt-4">
              <Button variant="success" onClick={handleComprar}>
                Comprar
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bienvenida;
