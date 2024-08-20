import Link from "next/link";
export default function about(){
    return (
        <div className="about">
            <Link href='/' color='blue.400' _hover={{ color: 'blue.500' }}>
      Inicio
    </Link>
            <h1 className="title"> Sobre nosotros:</h1>
        </div>
    );
}