import React from 'react';
import './Form.module.css';

const Form = () => {
  return (
    <form className="Form">
      <div className="form-group">
        <label>Nome do Aluno:</label>
        <input type="text" placeholder="Digite o nome do aluno" />
      </div>
      <div className="form-group">
        <label>Nota 1:</label>
        <input type="number" placeholder="Digite a primeira nota" />
      </div>
      <div className="form-group">
        <label>Nota 2:</label>
        <input type="number" placeholder="Digite a segunda nota" />
      </div>
      <button type="submit">Consulta</button>
    </form>
  );
};

export default Form;