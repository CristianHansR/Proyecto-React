import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // 👈 Importamos Link
import beigImg from "../assets/imgs/gorros/beig.jpg";
import burdeoImg from "../assets/imgs/gorros/burdeo.jpg";
import negroImg from "../assets/imgs/gorros/negro.jpg";
import polerablacaImg from "../assets/imgs/poleras/polera-blaca.jpg";
import poleranegraImg from "../assets/imgs/poleras/polera-negra.jpg";
import polerarojaImg from "../assets/imgs/poleras/polera-roja.jpg";
import pantalonesbeigImg from "../assets/imgs/pantalones/beig.jpg";
import pantalonesdamaImg from "../assets/imgs/pantalones/dama.jpg";
import pantalonesrotoImg from "../assets/imgs/pantalones/roto.jpg";

const StorePage = () => {
  const productos = [
    {
      id: 1,
      nombre: "Jockey Beig",
      descripcion: "Gorro de Estilo casual.",
      imagen: beigImg,
      precio: "$5.990",
      estado: "Usado",
      detalle: "Visera curva",
    },
    {
      id: 2,
      nombre: "Jockey Burdeo",
      descripcion: "Gorro de Estilo casual.",
      imagen: burdeoImg,
      precio: "$5.990",
      estado: "Estado: Usado.",
      detalle: "Visera curva",
    },
    {
      id: 3,
      nombre: "Jockey Negro",
      descripcion: "Gorro de Estilo casual.",
      imagen: negroImg,
      precio: "$5.990",
      estado: "Estado: Gastado.",
      detalle: "visera curva",
    },
    {
      id: 4,
      nombre: "Polera Blanca",
      descripcion: "Tela de algodon.",
      imagen: polerablacaImg,
      precio: "$10.990",
      estado: "Estado: Nuevo",
      detalle: "Corea del norte",
    },
    {
      id: 5,
      nombre: "Polera Negra",
      descripcion: "Tela de algodon.",
      imagen: poleranegraImg,
      precio: "$10.990",
      estado: "Estado: Nuevo",
      detalle: "Africa",
    },
    {
      id: 6,
      nombre: "Polera Roja",
      descripcion: "Tela de algodon",
      imagen: polerarojaImg,
      precio: "$10.990",
      estado: "Estado: Nuevo",
      detalle: "España",
    },
    {
      id: 7,
      nombre: "Pantalon Beig",
      descripcion: "Pantalon de Tela.",
      imagen: pantalonesbeigImg,
      precio: "$12.990",
      estado: "Estado: Nuevo",
      detalle: "Hombre",
    },
    {
      id: 8,
      nombre: "Pantalon Gris",
      descripcion: "Tela de algodon.",
      imagen: pantalonesdamaImg,
      precio: "$12.990",
      estado: "Estado: Nuevo",
      detalle: "Dama",
    },
    {
      id: 9,
      nombre: "Jean Azul",
      descripcion: "Jean Roto",
      imagen: pantalonesrotoImg,
      precio: "$15.990",
      estado: "Estado: Rodillas rotas",
      detalle: "Dama",
    },
  ];

  return (
    <Container className="mt-5 pt-4">
      <h1 className="mb-3">Productos</h1>
      <p>Aquí puedes encontrar tus futuros productos.</p>

      <Row>
        {productos.map((producto) => (
          <Col md={4} key={producto.id} className="d-flex justify-content-center mb-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={producto.imagen}
                className="card-img-top"
                alt={producto.nombre}
                style={{ objectFit: "cover", height: "180px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <Link to={`/tienda/${producto.id}`} className="btn btn-primary">
                  Ver detalle
                </Link>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>{producto.precio}</strong></li>
                <li className="list-group-item">Estado: {producto.estado}</li>
                <li className="list-group-item">{producto.detalle}</li>
              </ul>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default StorePage;
