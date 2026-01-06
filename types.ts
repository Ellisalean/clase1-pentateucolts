
export interface Lesson {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  icon: string;
  image: string;
  type: 'video' | 'book' | 'scroll' | 'landmark' | 'quiz';
}

export interface Resource {
  id: string;
  title: string;
  type: string;
  category: string;
  link: string;
  icon: string;
}

export interface InteractiveCardData {
  title: string;
  description: string;
  icon: string;
  link: string;
  btnText: string;
}

export interface SlideData {
  title: string;
  content: string[];
  image: string;
  quote?: {
    text: string;
    author: string;
  };
}

export interface TimelineEvent {
  day: string;
  title: string;
  description: string;
  verse?: string;
}

export enum SidebarTab {
  OUTLINE = 'outline',
  RESOURCES = 'resources'
}
