const Bienvenida = () => {
  return (
    <div className="bienvenida py-5" style={{ paddingTop: "80px" }}>
      <div className="container">
        <h2 className="mb-4 text-center">Sobre Nosotros</h2>
        
        <div className="row mb-4">
          <div className="col-md-6">
            <p>
              Todo comenzó en un pequeño cuarto lleno de telas, bocetos y sueños. Tres amigos,
              apasionados por la moda y el arte de expresarse a través de lo que uno viste,
              decidieron unir sus talentos para crear algo distinto. No buscábamos seguir tendencias,
              sino contar historias con cada prenda, transmitir actitud, libertad y autenticidad. Así
              nació nuestra marca, con la firme intención de vestir a personas reales, con estilo
              propio y espíritu libre.
            </p>
          </div>
          <div className="col-md-6">
            <p>
              La idea surgió una noche de verano, entre charlas, café y una máquina de coser prestada.
              Diseñamos nuestra primera colección a mano, cortando telas en una mesa improvisada y
              pintando etiquetas a pulso. Vendíamos en ferias, en redes sociales, incluso desde la
              cajuela del auto. Cada prenda que entregábamos era una pieza con alma, y con el tiempo,
              nuestros clientes se convirtieron en parte de la historia.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p>
              Hoy, aunque hemos crecido, seguimos manteniendo la esencia que nos vio nacer: la
              atención a los detalles, la calidad de cada tejido y, sobre todo, el amor por lo que
              hacemos. Cada colección es un reflejo de nuestra evolución, inspirada en la calle, en la
              música, en la gente que se atreve a ser diferente. No diseñamos solo ropa, creamos una
              actitud.
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Queremos que te sientas parte de esto. Que al usar una de nuestras prendas, sientas que
              estás llevando algo más que moda: estás llevando una historia, una forma de ver el
              mundo, una declaración de identidad. Gracias por acompañarnos en este camino. Apenas
              estamos comenzando.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bienvenida;
