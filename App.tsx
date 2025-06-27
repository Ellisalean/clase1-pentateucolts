
import React from 'react';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { Quote } from './components/Quote';
import { Accordion, AccordionItem } from './components/Accordion';
import { Tabs, TabPanel } from './components/Tabs';
import { Timeline } from './components/Timeline';
import { Quiz } from './components/Quiz';
import { FillInTheBlank } from './components/FillInTheBlank';
import { DragAndDrop } from './components/DragAndDrop';
import { InteractiveImage } from './components/InteractiveImage';
import { GeminiSection } from './components/GeminiSection';
import { CHAPTER_1_TEXT, CHAPTER_2_TEXT, QUIZ_QUESTIONS, DRAG_DROP_ITEMS, TIMELINE_EVENTS, CREATION_HOTSPOTS, FILL_IN_THE_BLANK_2 } from './constants';
import { BookOpen, Lightbulb, Heart, Wind, Sparkles } from 'lucide-react';

const App: React.FC = () => {

    return (
        <div className="min-h-screen bg-brand-bg">
            <Header title="Visión de Conjunto: Desde Génesis hasta Malaquías" subtitle="Capítulo 1" />
            
            <main className="max-w-4xl mx-auto p-4 md:p-8 space-y-12">

                <Section title="Una Historia Compartida">
                    <p className="text-lg leading-relaxed mb-4">{CHAPTER_1_TEXT.intro1}</p>
                    <p className="text-lg leading-relaxed">{CHAPTER_1_TEXT.intro2}</p>
                </Section>
                
                <Quote text={CHAPTER_1_TEXT.quote1} source="Génesis 18:19" />

                <Section title="Los Pilares de la Fe del Pueblo de Dios">
                    <Tabs tabLabels={["Fe", "Amor", "Esperanza"]}>
                        <TabPanel>
                            <p className="leading-relaxed">{CHAPTER_1_TEXT.faith}</p>
                        </TabPanel>
                        <TabPanel>
                            <p className="leading-relaxed">{CHAPTER_1_TEXT.love}</p>
                        </TabPanel>
                        <TabPanel>
                             <p className="leading-relaxed">{CHAPTER_1_TEXT.hope}</p>
                        </TabPanel>
                    </Tabs>
                </Section>

                <Section title="Las Grandes Promesas" icon={<BookOpen className="w-6 h-6 text-brand-primary" />}>
                     <Accordion>
                        <AccordionItem title="La Promesa de una Simiente">
                            <p>{CHAPTER_1_TEXT.promiseSeed}</p>
                        </AccordionItem>
                        <AccordionItem title="La Promesa de una Herencia">
                            <p>{CHAPTER_1_TEXT.promiseInheritance}</p>
                        </AccordionItem>
                     </Accordion>
                </Section>

                <Section title="Repaso Interactivo: Completa la Frase">
                    <FillInTheBlank
                        sentence="La revelación del Antiguo Testamento es la narración de cómo Dios ha cambiado a una muchedumbre de ___, transformándolos en propiedad suya."
                        correctAnswer="pecadores"
                    />
                </Section>

                <Section title="La Trayectoria Histórica del Pueblo de Dios">
                    <Timeline events={TIMELINE_EVENTS} />
                </Section>

                <Section title="El Conflicto Espiritual: Dos Simientes">
                    <p className="mb-4">{CHAPTER_1_TEXT.satanIntro}</p>
                     <Accordion>
                        <AccordionItem title="El Origen del Conflicto">
                             <p>{CHAPTER_1_TEXT.satanConflictOrigin}</p>
                        </AccordionItem>
                        <AccordionItem title="La Oposición a través de la Historia">
                             <p>{CHAPTER_1_TEXT.satanOpposition}</p>
                        </AccordionItem>
                     </Accordion>
                </Section>
                
                <Section title="Juego de Repaso: Asocia el Libro con su Tema">
                    <DragAndDrop items={DRAG_DROP_ITEMS} />
                </Section>

                <Section title="Comprueba tu Comprensión">
                    <Quiz questions={QUIZ_QUESTIONS} />
                </Section>

                <Quote text="Jesucristo es el mismo ayer, y hoy, y por los siglos." source="Hebreos 13:8" />
                
                <div className="border-t-2 border-brand-secondary my-16"></div>

                <Header title="Los Orígenes del Pueblo de Dios" subtitle="Capítulo 2" />

                <Section title="El Propósito Eterno en la Creación">
                    <p className="leading-relaxed mb-4">{CHAPTER_2_TEXT.purpose}</p>
                    <div className="bg-brand-light p-4 rounded-lg border-l-4 border-brand-primary">
                        <p className="font-sans font-semibold text-brand-text">Cita Clave: Efesios 1:4</p>
                        <p className="italic">"...según nos escogió en él antes de la fundación del mundo, para que fuésemos santos y sin mancha delante de él, en amor..."</p>
                    </div>
                </Section>

                <Section title="La Obra Creadora de Dios (Génesis 1)" icon={<Wind className="w-6 h-6 text-brand-primary"/>}>
                    <p className="mb-4">{CHAPTER_2_TEXT.creationWork}</p>
                    <Accordion>
                        <AccordionItem title="Orden desde el Caos: Luz y Vida">
                            <p>{CHAPTER_2_TEXT.orderFromChaos}</p>
                        </AccordionItem>
                        <AccordionItem title="Un Mundo Diferente: La Visión Pre-Diluvio">
                             <p>{CHAPTER_2_TEXT.differentWorld}</p>
                        </AccordionItem>
                        <AccordionItem title="La Creación del Hombre: A Imagen de Dios">
                             <p>{CHAPTER_2_TEXT.creationOfMan}</p>
                        </AccordionItem>
                    </Accordion>
                </Section>
                
                <Section title="Explora los Días de la Creación" icon={<Lightbulb className="w-6 h-6 text-brand-primary" />}>
                    <InteractiveImage 
                        imageUrl="https://picsum.photos/seed/creation/800/500"
                        altText="Representación abstracta de la creación"
                        hotspots={CREATION_HOTSPOTS}
                    />
                </Section>

                <Section title="El Cuidado Personal de Dios (Génesis 2)" icon={<Heart className="w-6 h-6 text-brand-primary"/>}>
                    <p className="mb-4">{CHAPTER_2_TEXT.personalCare}</p>
                    <Tabs tabLabels={["Provisión y Prueba", "El Descanso del Sabbath", "La Mujer y la Familia"]}>
                        <TabPanel>
                            <p>{CHAPTER_2_TEXT.gardenAndProvision}</p>
                        </TabPanel>
                        <TabPanel>
                            <p>{CHAPTER_2_TEXT.sabbathRest}</p>
                        </TabPanel>
                        <TabPanel>
                             <p>{CHAPTER_2_TEXT.womanAndFamily}</p>
                        </TabPanel>
                    </Tabs>
                </Section>

                <Section title="Repaso Clave del Capítulo 2">
                    <FillInTheBlank
                        sentence={FILL_IN_THE_BLANK_2.sentence}
                        correctAnswer={FILL_IN_THE_BLANK_2.correctAnswer}
                    />
                </Section>

                <Section title="¿Tienes Preguntas? ¡Consulta al Experto!" icon={<Sparkles className="w-6 h-6 text-brand-primary"/>}>
                    <GeminiSection context={CHAPTER_1_TEXT.fullText + '\n\n' + CHAPTER_2_TEXT.fullText} />
                </Section>
            </main>

            <footer className="text-center p-6 mt-12 bg-brand-light text-brand-secondary font-sans text-sm">
                <p>Curso del PENTATEUCO &copy; 2025. LATIN THEOLOGICAL SEMINARY.</p>
            </footer>
        </div>
    );
};

export default App;
