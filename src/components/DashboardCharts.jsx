import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

const pieData = [
  { name: 'Positivos', value: 450 },
  { name: 'Negativos', value: 210 },
  { name: 'Neutros', value: 80 },
];

const lineData = [
  { name: 'Lunes', positivos: 50, negativos: 20 },
  { name: 'Martes', positivos: 65, negativos: 15 },
  { name: 'Miércoles', positivos: 80, negativos: 30 },
  { name: 'Jueves', positivos: 70, negativos: 40 },
];

const PIE_COLORS = {
  Positivos: '#10B981',
  Negativos: '#EF4444',
  Neutros: '#6B7280',
};

export default function DashboardCharts() {
  return (
    <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="rounded-lg bg-white p-6 shadow-md">
        <h3 className="mb-4 text-xl font-bold">Distribución General</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={PIE_COLORS[entry.name]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-md">
        <h3 className="mb-4 text-xl font-bold">Tendencia de Sentimientos</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="positivos" stroke="#10B981" strokeWidth={2} />
            <Line type="monotone" dataKey="negativos" stroke="#EF4444" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
