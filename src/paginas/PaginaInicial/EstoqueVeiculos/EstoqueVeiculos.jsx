import React, { useState } from 'react';

const EstoqueVeiculos = () => {
  // Estado para armazenar os veículos no estoque
  const [veiculos, setVeiculos] = useState([]);
  
  // Estado para armazenar os dados do formulário
  const [form, setForm] = useState({
    nome: '',
    ano: '',
    preco: '',
    vendido: false
  });

  // Estado para exibir mensagens de erro
  const [error, setError] = useState('');

  // Função para atualizar os valores do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  // Função para formatar o preço com máscara monetária
  const formatPreco = (preco) => {
    return preco
      .replace(/\D/g, '') // Remove caracteres não numéricos
      .replace(/(\d)(\d{2})$/, '$1,$2') // Adiciona vírgula antes dos dois últimos dígitos
      .replace(/(?=(\d{3})+(\D))\B/g, '.'); // Adiciona ponto como separador de milhar
  };

  // Função para adicionar um veículo ao estoque
  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar se todos os campos estão preenchidos
    if (!form.nome || !form.ano || !form.preco) {
      setError('Preencha todos os campos.');
      return;
    }

    // Adiciona o novo veículo ao estoque
    setVeiculos([
      ...veiculos,
      {
        nome: form.nome,
        ano: form.ano,
        preco: form.preco,
        vendido: form.vendido
      }
    ]);

    // Limpa o formulário após o envio
    setForm({
      nome: '',
      ano: '',
      preco: '',
      vendido: false
    });

    // Limpa a mensagem de erro
    setError('');
  };

  // Função para remover um veículo do estoque
  const handleRemove = (nome) => {
    if (window.confirm(`Tem certeza que deseja excluir o veículo: ${nome}?`)) {
      setVeiculos(veiculos.filter((veiculo) => veiculo.nome !== nome));
    }
  };

  // Função para marcar um veículo como vendido
  const handleVendido = (nome) => {
    setVeiculos(veiculos.map((veiculo) =>
      veiculo.nome === nome ? { ...veiculo, vendido: !veiculo.vendido } : veiculo
    ));
  };

  return (
    <div>
      <h1>Estoque de veículos ({veiculos.length})</h1>

      {/* Formulário para adicionar veículos */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome do Veículo"
          value={form.nome}
          onChange={handleChange}
        />
        <input
          type="number"
          name="ano"
          placeholder="Ano"
          value={form.ano}
          onChange={handleChange}
        />
        <input
          type="text"
          name="preco"
          placeholder="Preço"
          value={form.preco}
          onChange={(e) => setForm({ ...form, preco: formatPreco(e.target.value) })}
        />
        <button type="submit">Adicionar Veículo</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>

      {/* Lista de veículos no estoque */}
      <h2>Veículos no Estoque</h2>
      {veiculos.length === 0 ? (
        <p>Estoque vazio.</p>
      ) : (
        <ul>
          {veiculos.map((veiculo, index) => (
            <li key={index} style={{ textDecoration: veiculo.vendido ? 'line-through' : 'none' }}>
              <strong>{veiculo.nome}</strong> - {veiculo.ano} - R${veiculo.preco} 
              <button onClick={() => handleRemove(veiculo.nome)} style={{ color: 'red' }}>
                Remover
              </button>
              <button onClick={() => handleVendido(veiculo.nome)}>
                {veiculo.vendido ? 'Marcar como disponível' : 'Marcar como vendido'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EstoqueVeiculos;

