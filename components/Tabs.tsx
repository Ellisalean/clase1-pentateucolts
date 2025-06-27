
import React, { useState } from 'react';

interface TabsProps {
    tabLabels: string[];
    children: React.ReactNode[];
}

interface TabPanelProps {
    children: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({ tabLabels, children }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <div className="border-b border-brand-secondary font-sans">
                <nav className="-mb-px flex space-x-4" aria-label="Tabs">
                    {tabLabels.map((label, index) => (
                        <button
                            key={label}
                            onClick={() => setActiveTab(index)}
                            className={`${
                                activeTab === index
                                    ? 'border-brand-primary text-brand-primary'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 focus:outline-none`}
                        >
                            {label}
                        </button>
                    ))}
                </nav>
            </div>
            <div className="pt-5">
                {children[activeTab]}
            </div>
        </div>
    );
};

export const TabPanel: React.FC<TabPanelProps> = ({ children }) => {
    return <div>{children}</div>;
};
