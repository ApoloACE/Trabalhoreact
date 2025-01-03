import React, { useContext } from 'react';
import { Context } from '../context/Context';
import { useParams } from 'react-router-dom';
import { useStore } from '../store'; 

const Produtos = () => {
  const { all_product } = useContext(Context);
  const { produtosId } = useParams();
  const addToCart = useStore((state) => state.addToCart); 

  const produto = all_product.find((e) => e.id === Number(produtosId));

  if (!produto) {
    return <div>Produto não encontrado.</div>;
  }

  const handleAddToCart = () => {
    addToCart(produto); 
    alert(`${produto.name} foi adicionado ao carrinho!`);
  };

  return (
    <div>
      <h1>{produto.name}</h1>
      <img src={produto.image} alt={produto.name} />
      <p>Preço: R${produto.new_price}</p>
      <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default Produtos;
