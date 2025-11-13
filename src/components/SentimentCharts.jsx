import { Card } from "@/components/ui/card"
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts"

export default function SentimentCharts() {
  const sentimentDistribution = [
    { name: "Positivo", value: 45 },
    { name: "Negativo", value: 25 },
    { name: "Neutral", value: 30 },
  ]

  const trendData = [
    { time: "00:00", Positivo: 30, Negativo: 20, Neutral: 25 },
    { time: "04:00", Positivo: 35, Negativo: 18, Neutral: 22 },
    { time: "08:00", Positivo: 42, Negativo: 22, Neutral: 28 },
    { time: "12:00", Positivo: 48, Negativo: 25, Neutral: 32 },
    { time: "16:00", Positivo: 45, Negativo: 28, Neutral: 35 },
    { time: "20:00", Positivo: 50, Negativo: 24, Neutral: 30 },
    { time: "23:59", Positivo: 52, Negativo: 23, Neutral: 28 },
  ]

  const COLORS = ["#10b981", "#f43f5e", "#64748b"]

  return (
    <div className="space-y-6">
      {/* Pie Chart */}
      <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
        <h2 className="text-lg font-semibold text-slate-900 mb-5">Distribución de Sentimientos</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={sentimentDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value}%`}
                outerRadius={90}
                dataKey="value"
                strokeWidth={2}
              >
                {sentimentDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} stroke="#fff" />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Line Chart */}
      <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
        <h2 className="text-lg font-semibold text-slate-900 mb-5">Tendencia Temporal</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData}>
              <XAxis 
                dataKey="time" 
                stroke="#94a3b8"
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="#94a3b8"
                style={{ fontSize: '12px' }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              />
              <Legend 
                wrapperStyle={{ paddingTop: '10px' }}
              />
              <Line 
                type="monotone" 
                dataKey="Positivo" 
                stroke="#10b981" 
                strokeWidth={2.5} 
                dot={{ fill: '#10b981', r: 3 }}
                activeDot={{ r: 5 }}
              />
              <Line 
                type="monotone" 
                dataKey="Negativo" 
                stroke="#f43f5e" 
                strokeWidth={2.5} 
                dot={{ fill: '#f43f5e', r: 3 }}
                activeDot={{ r: 5 }}
              />
              <Line 
                type="monotone" 
                dataKey="Neutral" 
                stroke="#64748b" 
                strokeWidth={2.5} 
                dot={{ fill: '#64748b', r: 3 }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  )
}
