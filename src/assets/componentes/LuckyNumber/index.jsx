import React from 'react';

// Componente funcional LuckyNumber utilizando desestruturação para props
const LuckyNumber = ({ type }) => {
    // Função para gerar um número da sorte baseado no tipo
    const generateLuckyNumber = () => {
        // Determina o valor máximo com base no tipo
        const valor = type === "loto" ? 120 : type === "mega" ? 60 : 0;

        // Retorna um número aleatório entre 1 e o valor determinado
        return Math.floor(Math.random() * valor + 1);
    };

    // Renderiza um item de lista com o número da sorte gerado
    return <li>{generateLuckyNumber()}</li>;
};

export default LuckyNumber;
