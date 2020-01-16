import React from 'react';

//Componente: Bloco que retorna conteudo html,CSS e JS  [Um por arquivo]
//Propriedade: Atributos Informacoes que comp PAI passa p/ comp FILHO
//Estado


//componente App
function App() {
  function incrementCounter(props) {
    return alert('Hello');
  }

  return (
    <>
      <h1>Contador:0</h1>
      <button onClik={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
