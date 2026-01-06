
import { Lesson, Resource, TimelineEvent, SlideData, InteractiveCardData } from './types';

export const LESSONS: Lesson[] = [
  {
    id: 'lesson1',
    title: 'Introducción: El Propósito de la Creación',
    subtitle: 'Génesis - La creación del mundo y el establecimiento del pacto',
    duration: '15 min',
    icon: 'fa-video',
    type: 'video',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 'lesson2',
    title: 'La Creación en Génesis 1-2',
    subtitle: 'Explorando los detalles del relato de la creación',
    duration: '20 min',
    icon: 'fa-book',
    type: 'book',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'lesson3',
    title: 'Línea de Tiempo de los Orígenes',
    subtitle: 'Los siete días de la creación en perspectiva',
    duration: '25 min',
    icon: 'fa-scroll',
    type: 'scroll',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1494&q=80'
  },
  {
    id: 'lesson4',
    title: 'El Significado Teológico',
    subtitle: 'Implicaciones doctrinales de la creación',
    duration: '30 min',
    icon: 'fa-landmark',
    type: 'landmark',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'lesson5',
    title: 'Evaluación y Reflexión',
    subtitle: 'Aplicando las lecciones aprendidas',
    duration: '20 min',
    icon: 'fa-question-circle',
    type: 'quiz',
    image: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?auto=format&fit=crop&w=800&q=80'
  }
];

export const LESSON_3_ADDITIONAL_RESOURCES: InteractiveCardData[] = [
  {
    title: 'Galería de la Creación',
    description: 'Explora imágenes artísticas de los días de la creación.',
    icon: '🖼️',
    link: 'https://sites.google.com/view/pentateucolts/lecci%C3%B3n-1/galer%C3%ADa',
    btnText: 'Ver Galería'
  },
  {
    title: 'Recorrido Virtual',
    description: 'Video explicativo detallado del relato de la creación.',
    icon: '📹',
    link: 'https://youtu.be/5-9XAQHxERE?si=mf1VmemyDSh0MNZR',
    btnText: 'Ver Video'
  },
  {
    title: 'Test de Conocimiento',
    description: 'Pon a prueba lo aprendido sobre Génesis 1-2.',
    icon: '❓',
    link: 'https://sites.google.com/view/pentateucolts/lecci%C3%B3n-1/test-de-conocimiento',
    btnText: 'Realizar Test'
  },
  {
    title: 'Actividad Reflexiva',
    description: 'Ejercicio para aplicar las lecciones a la vida actual.',
    icon: '✍️',
    link: 'https://sites.google.com/view/pentateucolts/lecci%C3%B3n-1/actividad-reflexiva',
    btnText: 'Comenzar'
  }
];

export const RESOURCES: Resource[] = [
  {
    id: 'res1',
    title: 'Guía de Estudio - Génesis 1-2',
    type: 'PDF · Completo',
    category: 'Material de apoyo',
    link: 'https://drive.google.com/file/d/1edvFU58MqGr8sIqBupHHFOVXlymsddol/view?usp=sharing',
    icon: 'fa-file-pdf'
  },
  {
    id: 'res2',
    title: 'Syllabus - Pentateuco Scott',
    type: 'PDF · Completo',
    category: 'Material oficial',
    link: 'https://drive.google.com/file/d/1p8vIQwEgdIEFyvUd0y-vND_OjgIO6WEa/view?usp=drive_link',
    icon: 'fa-file-pdf'
  },
  {
    id: 'res3',
    title: 'Mapa del Edén',
    type: 'Sitio Web · HD',
    category: 'Geografía bíblica',
    link: 'https://sites.google.com/view/pentateucolts/lecci%C3%B3n-1/mapa-del-ed%C3%A9n',
    icon: 'fa-map'
  },
  {
    id: 'res4',
    title: 'Cronología de la bíblica',
    type: 'Sitio Web',
    category: 'Línea de tiempo',
    link: 'https://sites.google.com/view/pentateucolts/linea-de-tiempo',
    icon: 'fa-clock'
  }
];

export const TIMELINE: TimelineEvent[] = [
  { day: 'Día 1', title: 'Creación de la Luz', description: 'Dios separa la luz de las tinieblas. Establece el ciclo día-noche.', verse: '"Y vio Dios que la luz era buena" (Génesis 1:4)' },
  { day: 'Día 2', title: 'Creación del Cielo', description: 'Dios hace la expansión (cielo) separando las aguas de arriba de las de abajo.' },
  { day: 'Día 3', title: 'Tierra y Vegetación', description: 'Dios junta las aguas para formar mares y aparece la tierra seca. Crea toda vegetación.', verse: '"Y vio Dios que era bueno" (Génesis 1:12)' },
  { day: 'Día 4', title: 'Lumbreras Celestes', description: 'Dios crea el sol, la luna y las estrellas para marcar tiempos y estaciones.' },
  { day: 'Día 5', title: 'Aves y Criaturas Marinas', description: 'Dios llena las aguas de vida y el cielo de aves. Los bendice para que se multipliquen.', verse: '"Y vio Dios que era bueno" (Génesis 1:21)' },
  { day: 'Día 6', title: 'Animales y el Hombre', description: 'Dios crea los animales terrestres y finalmente al hombre a su imagen y semejanza.', verse: '"Y vio Dios todo lo que había hecho, y he aquí que era bueno en gran manera" (Génesis 1:31)' },
  { day: 'Día 7', title: 'El Día de Reposo', description: 'Dios descansa de su obra creadora, santificando el séptimo día.' }
];

export const INTRO_SLIDES: SlideData[] = [
  {
    title: 'El Propósito Eterno de Dios',
    content: [
      'Dios, antes de la creación, se hizo el propósito de llegar a tener un pueblo que pasara la eternidad con él y con el que pudiera compartir las bendiciones de toda esa eternidad.',
      'Efesios 1:4: "Nos escogerió en él antes de la fundación del mundo, para que fuésemos santos y sin mancha delante de él."'
    ],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'La Creación del Hombre',
    content: [
      'Dios creó al hombre a su imagen y semejanza (Génesis 1:26-27), con el propósito de tener comunión con él. El hombre fue creado para vivir ante Dios en una relación de amor.',
      'Ser a la imagen de Dios es ser capaz de tener amistad con Dios, y de experimentar amor recíproco por él.'
    ],
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'El Jardín del Edén',
    content: [
      'Dios plantó un jardín en Edén y puso allí al hombre (Génesis 2:8). Proveyó todo lo necesario para el hombre, incluyendo dos árboles especiales:',
      '• El Árbol de la Vida',
      '• El Árbol de la Ciencia del Bien y del Mal'
    ],
    image: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?auto=format&fit=crop&w=800&q=80'
  }
];
