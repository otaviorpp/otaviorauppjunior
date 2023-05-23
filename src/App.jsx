import React, { useState } from 'react';
import './styles.css';
import ShoppingList from './listacompras';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <div className="container">
      <h1>Lista de Compras</h1>
      <form>
        <input type="text" placeholder="Digite um item" id="itemInput" />
        <button
          type="button"
          onClick={() => {
            const newItem = document.getElementById('itemInput').value;
            if (newItem.trim() !== '') {
              addItem(newItem);
              document.getElementById('itemInput').value = '';
            }
          }}
        >
          Adicionar
        </button>
      </form>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
