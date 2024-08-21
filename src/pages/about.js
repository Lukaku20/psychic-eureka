import Link from "next/link";
export default function about() {
    return (
        <>
            <h1 className="text-2xl font-bold p-3"> Autoridades</h1>
            <div className="about" >
                <div className="box-border h-32 w-32 p-4 border-4">
                    <p>
                        NOELIA NARANJO
                    </p>
                </div>
                <div className="box-border h-32 w-32 p-4 border-4">
                    <p>
                        MIGUEL MASNU
                    </p>
                </div>

                <div className="box-border h-32 w-32 p-4 border-4">
                    <p>
                        LUCAS CARBALLO
                    </p>
                </div>
            </div>
            <Link href='/' className="button">Inicio</Link>
        </>
    );
}