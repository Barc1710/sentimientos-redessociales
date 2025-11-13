// --- ¡AQUÍ ESTÁ LA CLAVE! ---
// Esta es la URL que cambiarás al final.
// Por ahora, la dejamos apuntando a una API falsa que haremos.
const API_BASE_URL = "/api"; // Usaremos un mock local de Vercel/Vite

/**
 * Esta función finge la respuesta de la API de Python.
 * Devuelve un sentimiento aleatorio después de 1 segundo.
 */
const fakeSentimentCall = (text) => {
    console.log(`[API MOCK] Analizando: "${text}"`);

    return new Promise((resolve) => {
        setTimeout(() => {
            const sentiments = ['positivo', 'negativo', 'neutro'];
            const randomSentiment = sentiments[Math.floor(Math.random() * sentiments.length)];
            const randomScore = Math.random() * (0.98 - 0.6) + 0.6; // Score alto

            const mockResponse = {
                sentiment: randomSentiment,
                score: parseFloat(randomScore.toFixed(2)) // ej: 0.87
            };

            console.log(`[API MOCK] Respuesta:`, mockResponse);
            resolve(mockResponse);
        }, 1000); // Simula 1 segundo de espera
    });
};

/**
 * Esta es la función ÚNICA que tus componentes usarán.
 * Está "cableada" para usar el mock, pero lista para la real.
 */
export const analyzeTextSentiment = async (text) => {
    // --- MODO MOCK (Actual) ---
    // Llama a la función falsa de arriba
    return fakeSentimentCall(text);

    /* // --- MODO REAL (Para el final) ---
    // Cuando la API de Python esté lista, borras el "return fakeSentimentCall(text);"
    // y descomentas estas líneas:
  
    try {
      // Asume que la URL real es la que pusiste en tus variables de entorno
      const realApiUrl = import.meta.env.VITE_API_URL || API_BASE_URL;
      const response = await axios.post(realApiUrl + '/analyze', {
        text: text 
      });
      return response.data; // Devuelve { sentiment: "positivo", score: 0.9 }
    } catch (error) {
      console.error("Error conectando con la API real:", error);
      throw error; // Propaga el error a la UI
    }
    */
};