
import React, { useState } from 'react';
import { GoogleGenAI, GenerateContentResponse } from '@google/genai';
import { Sparkles, Bot, User } from 'lucide-react';

interface GeminiSectionProps {
    context: string;
}

export const GeminiSection: React.FC<GeminiSectionProps> = ({ context }) => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGenerate = async () => {
        if (!prompt.trim()) {
            setError('Por favor, introduce una pregunta.');
            return;
        }
        setIsLoading(true);
        setError('');
        setResponse('');

        try {
            if (!process.env.API_KEY) {
                throw new Error("API key not found.");
            }
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

            const fullPrompt = `System instruction: Eres un asistente teológico experto. Responde a la pregunta del usuario basándote únicamente en el texto proporcionado a continuación. Sé claro, conciso y mantén un tono académico y respetuoso. Si la respuesta no se encuentra en el texto, indícalo amablemente diciendo "La respuesta a esa pregunta no se encuentra en el texto proporcionado". No inventes información.

            Texto proporcionado:
            ---
            ${context}
            ---

            Pregunta del usuario: "${prompt}"`;

            const result: GenerateContentResponse = await ai.models.generateContent({
                model: 'gemini-2.5-flash-preview-04-17',
                contents: fullPrompt
            });
            
            setResponse(result.text);

        } catch (err) {
            console.error(err);
            setError('Hubo un error al contactar al asistente de IA. Por favor, inténtalo de nuevo más tarde.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-brand-light p-6 rounded-lg font-sans">
            <div className="flex items-center mb-4">
                <Sparkles className="w-6 h-6 text-brand-primary mr-3" />
                <h4 className="text-xl font-bold text-brand-text">Asistente de Estudio con IA</h4>
            </div>
            <p className="text-brand-text mb-4">¿Tienes alguna duda sobre el texto? ¡Pregúntale a nuestro asistente de IA!</p>
            
            <div className="flex flex-col sm:flex-row gap-2">
                <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Ej: ¿Cuál fue el propósito de Dios al crear al hombre?"
                    className="flex-grow p-3 border border-brand-secondary rounded-md focus:ring-2 focus:ring-brand-primary focus:outline-none"
                    disabled={isLoading}
                />
                <button
                    onClick={handleGenerate}
                    disabled={isLoading}
                    className="bg-brand-primary text-white px-6 py-3 rounded-md hover:bg-brand-secondary transition-colors disabled:bg-gray-400 flex items-center justify-center"
                >
                    {isLoading ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                        "Preguntar"
                    )}
                </button>
            </div>

            {error && <p className="text-red-600 mt-4">{error}</p>}

            {response && (
                 <div className="mt-6 bg-white p-4 rounded-md border border-gray-200">
                     <div className="flex items-start space-x-3">
                         <div className="flex-shrink-0">
                             <User className="w-6 h-6 text-brand-secondary" />
                         </div>
                         <div className="flex-grow">
                             <p className="font-semibold text-brand-text">{prompt}</p>
                         </div>
                     </div>
                     <hr className="my-3"/>
                     <div className="flex items-start space-x-3">
                         <div className="flex-shrink-0">
                             <Bot className="w-6 h-6 text-brand-primary" />
                         </div>
                         <div className="flex-grow">
                             <p className="font-semibold text-brand-primary mb-1">Respuesta del Asistente</p>
                             <p className="text-brand-text whitespace-pre-wrap">{response}</p>
                         </div>
                     </div>
                 </div>
            )}
        </div>
    );
};
