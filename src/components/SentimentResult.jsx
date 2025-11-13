// src/components/SentimentResult.jsx
import React from 'react';

// Define los colores y emojis para cada sentimiento
const sentimentStyles = {
  positivo: { emoji: '😊', color: 'text-green-600', label: 'Positivo' },
  negativo: { emoji: '😠', color: 'text-red-600', label: 'Negativo' },
  neutro: { emoji: '😐', color: 'text-gray-600', label: 'Neutro' },
  error: { emoji: '⚠️', color: 'text-yellow-600', label: 'Error' },
};

function SentimentResult({ data }) {
  const { sentiment, score } = data;
  const style = sentimentStyles[sentiment] || sentimentStyles.error;
  
  return (
    <div className={`mt-6 p-4 border rounded-lg ${style.color} bg-opacity-10`}>
      <h3 className="text-xl font-semibold flex items-center">
        <span className="text-3xl mr-3">{style.emoji}</span>
        {style.label}
      </h3>
      {sentiment !== 'error' && (
        <p className="text-lg">
          Confianza: <strong>{Math.round(score * 100)}%</strong>
        </p>
      )}
    </div>
  );
}

export default SentimentResult;