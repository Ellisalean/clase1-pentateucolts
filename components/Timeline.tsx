
import React from 'react';
import { TimelineEventData } from './../types';
import { BookMarked } from 'lucide-react';

interface TimelineProps {
    events: TimelineEventData[];
}

export const Timeline: React.FC<TimelineProps> = ({ events }) => {
    return (
        <div className="relative border-l-2 border-brand-secondary ml-4 pl-4">
            {events.map((event, index) => (
                <TimelineEvent key={index} {...event} />
            ))}
        </div>
    );
};

export const TimelineEvent: React.FC<TimelineEventData> = ({ period, title, description }) => {
    return (
        <div className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-brand-light rounded-full -left-4 ring-4 ring-white">
                <BookMarked className="w-4 h-4 text-brand-primary" />
            </span>
            <h4 className="flex items-center mb-1 text-lg font-semibold text-brand-text font-sans">
                {title} <span className="text-brand-secondary bg-brand-light text-sm font-medium ml-3 px-2.5 py-0.5 rounded">{period}</span>
            </h4>
            <p className="text-base font-normal text-gray-600">{description}</p>
        </div>
    );
};
