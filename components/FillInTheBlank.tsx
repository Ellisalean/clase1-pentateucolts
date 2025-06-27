
import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface FillInTheBlankProps {
    sentence: string;
    correctAnswer: string;
}

export const FillInTheBlank: React.FC<FillInTheBlankProps> = ({ sentence, correctAnswer }) => {
    const [userInput, setUserInput] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const parts = sentence.split('___');
    const isCorrect = userInput.trim().toLowerCase() === correctAnswer.toLowerCase();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-brand-light p-6 rounded-lg text-lg text-center">
            <p className="leading-relaxed">
                {parts[0]}
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => {
                        setUserInput(e.target.value);
                        setIsSubmitted(false);
                    }}
                    className={`mx-2 p-1 w-40 text-center border-b-2 bg-transparent focus:outline-none transition-colors duration-300 ${
                        isSubmitted ? (isCorrect ? 'border-green-500' : 'border-red-500') : 'border-brand-secondary focus:border-brand-primary'
                    }`}
                    disabled={isSubmitted && isCorrect}
                />
                {parts[1]}
            </p>
            <div className="mt-4 h-10 flex items-center justify-center">
                {!isSubmitted && (
                     <button type="submit" className="bg-brand-primary text-white font-sans px-6 py-2 rounded-md hover:bg-brand-secondary transition-colors">
                        Revisar
                    </button>
                )}
                {isSubmitted && (
                    <div className={`flex items-center text-base p-2 rounded-md ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {isCorrect ? <CheckCircle className="w-5 h-5 mr-2" /> : <XCircle className="w-5 h-5 mr-2" />}
                        <span>{isCorrect ? '¡Excelente!' : `La respuesta correcta es "${correctAnswer}".`}</span>
                    </div>
                )}
            </div>
        </form>
    );
};
