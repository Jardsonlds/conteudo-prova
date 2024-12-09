import React, { useState } from 'react';

const EstoqueVeiculos = () => {
  
  const [veiculos, setVeiculos] = useState([]);
  
  
  const [form, setForm] = useState({
    nome: '',
    ano: '',
    preco: '',
    vendido: false
  });

  
  const [error, setError] = useState('');

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  
  const formatPreco = (preco) => {
    return preco
      .replace(/\D/g, '') 
      .replace(/(\d)(\d{2})$/, '$1,$2')
      .replace(/(?=(\d{3})+(\D))\B/g, '.');
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (!form.nome || !form.ano || !form.preco) {
      setError('Preencha todos os campos.');
      return;
    }

  
    setVeiculos([
      ...veiculos,
      {
        nome: form.nome,
        ano: form.ano,
        preco: form.preco,
        vendido: form.vendido
      }
    ]);

    
    setForm({
      nome: '',
      ano: '',
      preco: '',
      vendido: false
    });

    
    setError('');
  };

  
  const handleRemove = (nome) => {
    if (window.confirm(`Tem certeza que deseja excluir o veículo: ${nome}?`)) {
      setVeiculos(veiculos.filter((veiculo) => veiculo.nome !== nome));
    }
  };


  const handleVendido = (nome) => {
    setVeiculos(veiculos.map((veiculo) =>
      veiculo.nome === nome ? { ...veiculo, vendido: !veiculo.vendido } : veiculo
    ));
  };

  return (
    <div>
      <h1>Estoque de veículos ({veiculos.length})</h1>

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

