import React from 'react';
import { useStore } from '../store'; 
import Headset from './Popular/Headset';
import Mouse from './Popular/Mouse';
import Teclados from './Popular/Teclados';
import AdicionarProduto from './AdicionarProduto';


function Home() {

  const removeProduct = useStore((state) => state.removeProduct);

  
  const handleRemoveProduct = (productId) => {
    removeProduct(productId); 
  };

  return (
    

    <div>

      <main>
        <h2>Bem-vindo a Pog Store</h2>
        <p></p>
        <footer>
          Bem vindo a sua melhor loja da Black Fraude!!
        </footer>
      </main>


    


          <Headset/>
          <Mouse/>
          <Teclados/>
         
 
    </div>
  );
}

export default Home;
