import { useNavigate } from 'react-router-dom';
import Principal from '../../comum/componentes/Principal/Principal';
import './PaginaInicial.css';

const PaginaInicial = () => {
  const navigate = useNavigate();

  // Função para navegar para a página de Estoque de Veículos
  const irParaEstoque = () => {
    navigate('/estoque'); // Redireciona para a página /estoque
  };

  return (
    <div>
      <Principal titulo="Página Inicial"></Principal>

      {/* Botão para navegar para a página de Estoque de Veículos */}
      <button onClick={irParaEstoque}>Ir para Estoque de Veículos</button>
    </div>
  );
};

export default PaginaInicial;
