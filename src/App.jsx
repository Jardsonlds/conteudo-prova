// src/App.jsx
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
    path: 'estoque',  // Adicionando a rota para EstoqueVeiculos
    element: <EstoqueVeiculos />,  // Componente que será exibido na rota "/estoque"
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

