import React from 'react';
import styles from './Card.module.css';

const Card = ({ nome, status }) => {
  return (
    <div className={styles.Card}>
      <h2>{nome}</h2>
      <p className={status === 'Aprovado' ? styles.Aprovado : styles.Reprovado}>{status}</p>
    </div>
  );
}

export default Card;