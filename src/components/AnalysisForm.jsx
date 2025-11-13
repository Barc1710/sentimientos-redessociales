import { useState } from 'react';
import { analyzeTextSentiment } from '../service/apiService';

const SentimentResult = ({ data }) => {
  if (data.sentiment === 'error') {
    return (
      <div className="mt-4 rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-800">
        Ocurrió un problema al analizar el texto. Inténtalo de nuevo.
      </div>
    );
  }

  return (
    <div className="mt-4 rounded-md border border-slate-200 bg-slate-50 p-4 text-sm">
      <p>
        Sentimiento:&nbsp;
        <span className="font-semibold capitalize">{data.sentiment}</span>
      </p>
      <p>
        Puntuación:&nbsp;
        <span className="font-semibold">
          {typeof data.score === 'number' ? data.score.toFixed(2) : data.score}
        </span>
      </p>
    </div>
  );
};

export function AnalysisForm() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const trimmedText = text.trim();
    if (!trimmedText) {
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const data = await analyzeTextSentiment(trimmedText);
      setResult(data);
    } catch (error) {
      console.error('Error al analizar:', error);
      setResult({ sentiment: 'error', score: 0 });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-bold">Analizador de Sentimientos</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid w-full gap-3">
          <textarea
            className="min-h-[120px] w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:bg-white"
            placeholder="Escribe un tweet o comentario aquí..."
            value={text}
            onChange={(event) => setText(event.target.value)}
            disabled={isLoading}
          />
          <button
            type="submit"
            className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
            disabled={isLoading}
          >
            {isLoading ? 'Analizando…' : 'Analizar'}
          </button>
        </div>
      </form>

      {result && <SentimentResult data={result} />}
    </div>
  );
}

export default AnalysisForm;