
export interface QuizQuestion {
    question: string;
    options: string[];
    correctAnswer: string;
}

export interface DragItem {
    id: string;
    type: 'item';
    content: string;
}

export interface DropTarget {
    id: string;
    type: 'target';
    content: string;
    expectedId: string;
}

export interface TimelineEventData {
    period: string;
    title: string;
    description: string;
}

export interface Hotspot {
    id: number;
    x: number; // percentage
    y: number; // percentage
    title: string;
    description: string;
}
