
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionProps {
    children: React.ReactNode;
}

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ children }) => {
    return <div className="space-y-2">{children}</div>;
};

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border border-brand-light rounded-md">
            <button
                onClick={toggleOpen}
                className="w-full flex justify-between items-center p-4 text-left font-sans font-semibold text-brand-text bg-brand-light hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-accent"
            >
                <span>{title}</span>
                <ChevronDown
                    className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            {isOpen && (
                <div className="p-4 border-t border-brand-light bg-white">
                    <div className="prose max-w-none text-brand-text leading-relaxed">
                       {children}
                    </div>
                </div>
            )}
        </div>
    );
};
