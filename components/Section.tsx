
import React from 'react';

interface SectionProps {
    title: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, icon, children }) => {
    return (
        <section className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-secondary">
            <div className="flex items-center mb-4">
                {icon && <div className="mr-3">{icon}</div>}
                <h3 className="font-sans text-2xl font-bold text-brand-primary">{title}</h3>
            </div>
            <div className="space-y-4">
                {children}
            </div>
        </section>
    );
};
