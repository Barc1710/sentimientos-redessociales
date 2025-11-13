import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { analyzeTextSentiment } from "@/service/apiService"

const sentimentEmojis = {
  positivo: "😊",
  negativo: "😔",
  neutro: "😐",
}

const sentimentColors = {
  positivo: "text-emerald-600",
  negativo: "text-rose-600",
  neutro: "text-slate-600",
}

const sentimentBgColors = {
  positivo: "bg-emerald-50",
  negativo: "bg-rose-50",
  neutro: "bg-slate-50",
}

const sentimentLabels = {
  positivo: "Positivo",
  negativo: "Negativo",
  neutro: "Neutral",
}

export default function SentimentAnalyzer() {
  const [text, setText] = useState("")
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const analyzeSentiment = async () => {
    if (!text.trim()) return

    setLoading(true)
    try {
      const response = await analyzeTextSentiment(text)
      
      setResult({
        sentiment: sentimentLabels[response.sentiment],
        confidence: Math.round(response.score * 100),
        emoji: sentimentEmojis[response.sentiment],
        color: sentimentColors[response.sentiment],
        bgColor: sentimentBgColors[response.sentiment],
      })
    } catch (error) {
      console.error("Error analizando sentimiento:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="p-6 h-full flex flex-col shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-lg font-semibold text-slate-900 mb-5">Analizador de Texto</h2>

      <Textarea
        placeholder="Escribe un comentario o texto para analizar..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={6}
        className="mb-4 resize-none text-sm"
      />

      <Button
        onClick={analyzeSentiment}
        disabled={!text.trim() || loading}
        className="w-full mb-6 bg-slate-900 hover:bg-slate-800"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
            Analizando...
          </span>
        ) : "Analizar Sentimiento"}
      </Button>

      {result && (
        <div className="mt-auto pt-6 border-t border-slate-200">
          <div className={`text-center space-y-3 p-4 rounded-lg ${result.bgColor}`}>
            <div className="text-4xl">{result.emoji}</div>
            <div>
              <div className={`font-semibold text-lg ${result.color}`}>
                {result.sentiment}
              </div>
              <div className="text-xs text-slate-600 mt-2">
                Confianza: <span className="font-medium">{result.confidence}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-1.5 mt-2">
                <div 
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    result.sentiment === 'Positivo' ? 'bg-emerald-500' : 
                    result.sentiment === 'Negativo' ? 'bg-rose-500' : 'bg-slate-500'
                  }`}
                  style={{ width: `${result.confidence}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  )
}
