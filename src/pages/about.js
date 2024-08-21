import Link from "next/link";
export default function about(){
    return (
        <div className="about">
            <Link href='/' className="button">
      Inicio
    </Link>
            <h1 className="title"> Sobre nosotros:</h1>
        </div>
    );
}