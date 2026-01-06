
export interface Lesson {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  type: 'video' | 'book' | 'scroll' | 'landmark' | 'quiz';
  image: string;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Resource {
  id: string;
  title: string;
  type: 'pdf' | 'map' | 'clock' | 'video' | 'quiz' | 'activity' | 'gallery';
  meta: string;
  category: string;
  url: string;
}
