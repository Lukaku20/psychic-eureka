import Link from 'next/link';

const Header = () => (
  <header className="bg-blue-500 text-white p-4">
    <h1 className="text-2xl font-bold">Siduncu</h1>
    <nav>
      <ul className="flex justify-between items-center space-x-4">
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/about">Acerca de</Link>
        </li>
        <li>
          <Link href="/noticias">Noticias</Link> {/* Esta ruta debe coincidir con el nombre de tu archivo en `pages/noticias.js` */}
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
