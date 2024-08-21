import Link from "next/link";

export default function Noticias() {
    return (
      <div className="noticias">
        <Link href='/' className="button">
      Inicio
    </Link>
        <h1>Noticias</h1>
        <p>Bienvenido a la sección de noticias.</p>
        <div className="container">
        <div className="row">
          <h1>Articles</h1>
          <div className="col-md-4">
            <label>Date:</label>
            <input type="date" className="form-control" />
          </div>
        </div>
      </div>
      </div>
    );
  }
