
import { Module, Resource } from './types';

export const MODULES: Module[] = [
  {
    id: 'module1',
    title: 'Capítulo 2: Los Orígenes',
    lessons: [
      {
        id: 'lesson1',
        title: 'Introducción: El Propósito de la Creación',
        subtitle: 'Génesis - La creación del mundo y el establecimiento del pacto',
        duration: '15 min',
        type: 'video',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1470&q=80'
      },
      {
        id: 'lesson2',
        title: 'La Creación en Génesis 1-2',
        subtitle: 'Explorando los detalles del relato de la creación',
        duration: '20 min',
        type: 'book',
        image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'lesson3',
        title: 'Línea de Tiempo de los Orígenes',
        subtitle: 'Los siete días de la creación en perspectiva',
        duration: '25 min',
        type: 'scroll',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1494&q=80'
      },
      {
        id: 'lesson4',
        title: 'El Significado Teológico',
        subtitle: 'Implicaciones doctrinales de la creación',
        duration: '30 min',
        type: 'landmark',
        image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1494&q=80'
      },
      {
        id: 'lesson5',
        title: 'Evaluación y Reflexión',
        subtitle: 'Aplicando las lecciones aprendidas',
        duration: '20 min',
        type: 'quiz',
        image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1494&q=80'
      }
    ]
  }
];

export const RESOURCES: Resource[] = [
  {
    id: 'res1',
    title: 'Guía de Estudio - Génesis 1-2',
    type: 'pdf',
    meta: 'PDF · Completo',
    category: 'Material de apoyo',
    url: 'https://drive.google.com/file/d/1edvFU58MqGr8sIqBupHHFOVXlymsddol/view?usp=sharing'
  },
  {
    id: 'res2',
    title: 'Syllabus - Pentateuco Scott',
    type: 'pdf',
    meta: 'PDF · Completo',
    category: 'Currículo',
    url: 'https://drive.google.com/file/d/1p8vIQwEgdIEFyvUd0y-vND_OjgIO6WEa/view?usp=drive_link'
  },
  {
    id: 'res3',
    title: 'Mapa del Edén',
    type: 'map',
    meta: 'Imagen · HD',
    category: 'Geografía bíblica',
    url: 'https://sites.google.com/view/pentateucolts/lecci%C3%B3n-1/mapa-del-ed%C3%A9n'
  },
  {
    id: 'res4',
    title: 'Cronología Bíblica',
    type: 'clock',
    meta: 'Interactivo',
    category: 'Línea de tiempo',
    url: 'https://sites.google.com/view/pentateucolts/linea-de-tiempo'
  },
  {
    id: 'res5',
    title: 'Recorrido Virtual',
    type: 'video',
    meta: 'Video HD',
    category: 'Multimedia',
    url: 'https://youtu.be/5-9XAQHxERE?si=mf1VmemyDSh0MNZR'
  },
  {
    id: 'res6',
    title: 'Test de Conocimiento',
    type: 'quiz',
    meta: 'Evaluación',
    category: 'Lección 1',
    url: 'https://sites.google.com/view/pentateucolts/lecci%C3%B3n-1/test-de-conocimiento'
  },
  {
    id: 'res7',
    title: 'Actividad Reflexiva',
    type: 'activity',
    meta: 'Ejercicio',
    category: 'Aplicación',
    url: 'https://sites.google.com/view/pentateucolts/lecci%C3%B3n-1/actividad-reflexiva'
  }
];
