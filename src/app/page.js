
import Header from './componentes/Header';
import Main from './componentes/Main';
import Noticias from './pages/noticias';

export default function Home() {
  return (
    <>
      <Header />
      <Main />
    <p>Bienvenido a tu Sindicato</p>
      <Noticias />
    </>
  );
}
