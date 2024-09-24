import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h1>Sistema de Notas</h1>
      <Form />
      <Card nome="Murilo Pacheco" status="Aprovado" />
      <Card nome="Luiz carlos" status="Reprovado" />
    </div>
  );
}

export default App;