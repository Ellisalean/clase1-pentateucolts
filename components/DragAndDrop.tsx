
import React, { useState } from 'react';
import { DragItem, DropTarget } from '../types';

interface DragAndDropProps {
    items: {
        items: DragItem[];
        targets: DropTarget[];
    };
}

export const DragAndDrop: React.FC<DragAndDropProps> = ({ items }) => {
    const [draggedItem, setDraggedItem] = useState<DragItem | null>(null);
    const [matched, setMatched] = useState<Record<string, string>>({});

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, item: DragItem) => {
        setDraggedItem(item);
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', item.id);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, target: DropTarget) => {
        e.preventDefault();
        if (draggedItem && draggedItem.id === target.expectedId) {
            setMatched(prev => ({ ...prev, [target.id]: draggedItem.content }));
            setDraggedItem(null);
        }
    };
    
    const unmatchedItems = items.items.filter(item => !Object.values(matched).includes(item.content));

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start font-sans">
            <div className="space-y-4">
                <h4 className="font-semibold text-center text-brand-text">Libros (Arrastrar)</h4>
                {unmatchedItems.map(item => (
                    <div
                        key={item.id}
                        draggable
                        onDragStart={(e) => handleDragStart(e, item)}
                        className="p-3 bg-white border border-brand-accent rounded-md shadow-sm cursor-move text-center"
                    >
                        {item.content}
                    </div>
                ))}
                 {unmatchedItems.length === 0 && <p className="text-center text-green-600 font-semibold p-3 bg-green-50 rounded-md">¡Completado!</p>}
            </div>
            <div className="space-y-4">
                <h4 className="font-semibold text-center text-brand-text">Temas (Soltar aquí)</h4>
                {items.targets.map(target => (
                    <div
                        key={target.id}
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, target)}
                        className={`p-4 min-h-[60px] flex items-center justify-center border-2 rounded-md transition-colors ${matched[target.id] ? 'border-green-500 bg-green-50' : 'border-dashed border-brand-secondary bg-brand-light'}`}
                    >
                        {matched[target.id] ? (
                            <div className="text-green-800 font-bold">{matched[target.id]}</div>
                        ) : (
                            <div className="text-gray-500">{target.content}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
