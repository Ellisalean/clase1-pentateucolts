
import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { CheckCircle, XCircle } from 'lucide-react';

interface QuizProps {
    questions: QuizQuestion[];
}

export const Quiz: React.FC<QuizProps> = ({ questions }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [showResult, setShowResult] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    const handleSelectAnswer = (option: string) => {
        if (showResult) return;
        setSelectedAnswer(option);
        setShowResult(true);
    };

    const handleNext = () => {
        setSelectedAnswer(null);
        setShowResult(false);
        setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    };

    return (
        <div className="bg-brand-light p-6 rounded-lg">
            <h4 className="font-sans text-xl font-semibold mb-4 text-brand-text">{currentQuestion.question}</h4>
            <div className="space-y-3">
                {currentQuestion.options.map((option) => {
                    let buttonClass = "w-full text-left p-3 rounded-md border transition-all duration-200 font-sans ";
                    if (showResult) {
                        if (option === currentQuestion.correctAnswer) {
                            buttonClass += "bg-green-100 border-green-500 text-green-800";
                        } else if (option === selectedAnswer) {
                            buttonClass += "bg-red-100 border-red-500 text-red-800";
                        } else {
                           buttonClass += "bg-white border-gray-300 text-gray-700";
                        }
                    } else {
                        buttonClass += "bg-white border-gray-300 hover:bg-gray-50 text-gray-700";
                    }

                    return (
                        <button key={option} onClick={() => handleSelectAnswer(option)} disabled={showResult} className={buttonClass}>
                            {option}
                        </button>
                    );
                })}
            </div>
            {showResult && (
                <div className="mt-4 p-4 rounded-md flex items-center" style={{ backgroundColor: isCorrect ? '#e6fffa' : '#ffebee' }}>
                    {isCorrect ? <CheckCircle className="text-green-600 mr-3" /> : <XCircle className="text-red-600 mr-3" />}
                    <span className="font-semibold" style={{ color: isCorrect ? '#2f855a' : '#c53030' }}>
                        {isCorrect ? '¡Correcto!' : 'Incorrecto.'} La respuesta correcta es: {currentQuestion.correctAnswer}
                    </span>
                    <button
                        onClick={handleNext}
                        className="ml-auto bg-brand-primary text-white font-sans px-4 py-2 rounded-md hover:bg-brand-secondary transition-colors"
                    >
                        Siguiente
                    </button>
                </div>
            )}
        </div>
    );
};
