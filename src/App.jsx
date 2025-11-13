import './App.css';
import SentimentAnalyzer from './components/SentimentAnalyzer.jsx';
import SentimentCharts from './components/SentimentCharts.jsx';

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <h1 className="text-2xl font-bold text-slate-900">
            Análisis de Sentimientos
          </h1>
          <p className="text-sm text-slate-600 mt-1">Dashboard de análisis en tiempo real</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Analyzer */}
          <div className="lg:col-span-1">
            <SentimentAnalyzer />
          </div>

          {/* Right Column - Charts */}
          <div className="lg:col-span-2">
            <SentimentCharts />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
