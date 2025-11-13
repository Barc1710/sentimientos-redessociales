// src/App.jsx
import React from 'react';
import { AnalysisForm } from './components/AnalysisForm';
import { DashboardCharts } from './components/DashboardCharts';

function App() {
  return (
    // Fondo gris claro para toda la página
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto">
        
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-center text-gray-800">
            📊 Dashboard de Análisis de Sentimientos
          </h1>
          <p className="text-center text-gray-600">Proyecto Final IA - UNSM</p>
        </header>

        {/* Layout principal */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Columna Izquierda: Analizador */}
          <aside className="lg:w-1/3">
            <AnalysisForm />
          </aside>

          {/* Columna Derecha: Dashboard */}
          <main className="lg:w-2/3">
            <DashboardCharts />
          </main>

        </div>
      </div>
    </div>
  );
}

export default App;