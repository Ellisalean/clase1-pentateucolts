
import React from 'react';

interface HeaderProps {
    title: string;
    subtitle: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
    return (
        <header className="bg-brand-primary text-white p-8 md:p-12 text-center rounded-b-lg shadow-lg">
            <h2 className="font-sans text-brand-accent text-sm md:text-base uppercase tracking-widest">{subtitle}</h2>
            <h1 className="font-serif text-3xl md:text-5xl font-bold mt-2">{title}</h1>
        </header>
    );
};
