import { useNavigate } from 'react-router-dom';
import Principal from '../../comum/componentes/Principal/Principal';
import './PaginaInicial.css';

const PaginaInicial = () => {
  const navigate = useNavigate();

  
  const irParaEstoque = () => {
    navigate('/estoque'); 
  };

  return (
    <div>
      <Principal titulo="Página Inicial"></Principal>

      
      <button onClick={irParaEstoque}>Estoque de Veículos</button>
    </div>
  );
};

export default PaginaInicial;
