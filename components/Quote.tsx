
import React from 'react';

interface QuoteProps {
    text: string;
    source: string;
}

export const Quote: React.FC<QuoteProps> = ({ text, source }) => {
    return (
        <blockquote className="my-8 p-6 bg-brand-light border-l-4 border-brand-primary rounded-r-lg italic">
            <p className="text-xl leading-relaxed text-brand-text">"{text}"</p>
            <cite className="block text-right mt-4 font-sans not-italic font-semibold text-brand-secondary">- {source}</cite>
        </blockquote>
    );
};
