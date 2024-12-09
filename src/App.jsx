import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Cabecalho from './comum/componentes/Cabecalho/Cabecalho';
import Rodape from './comum/componentes/Rodape/Rodape';

import PaginaInicial from './paginas/PaginaInicial/PaginaInicial';
import EstoqueVeiculos from './paginas/PaginaInicial/EstoqueVeiculos/EstoqueVeiculos';



const router = createBrowserRouter([
  {
    path: '',
    element: <PaginaInicial />,
  },
  {
    path: 'estoque',
    element: <EstoqueVeiculos />,  
  },
]);

function App() {
  return (
    <>
      <Cabecalho />
      <RouterProvider router={router} />
      <Rodape />
    </>
  );
}

export default App;

