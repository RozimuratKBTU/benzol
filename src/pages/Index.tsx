
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BenzeneModel from '@/components/BenzeneModel';
import Section from '@/components/Section';
import FeatureCard from '@/components/FeatureCard';
import AINetworkAnimation from '@/components/AINetworkAnimation';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 bg-gradient-to-br from-benzol-primary/10 to-benzol-accent/10 min-h-[80vh] flex items-center">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col order-2 md:order-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
              Бензол молекуласын
              <span className="gradient-text block">ИИ көмегімен зерттеу</span>
            </h1>
            <p className="text-lg mb-6 opacity-80 max-w-lg mx-auto md:mx-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Бұл сайт бензол молекуласының химиялық қасиеттерін жасанды интеллект көмегімен модельдеуге арналған
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Button asChild className="bg-benzol-primary hover:bg-benzol-secondary text-white">
                <Link to="/about">Жоба туралы</Link>
              </Button>
              <Button asChild variant="outline" className="border-benzol-primary text-benzol-primary">
                <Link to="/modeling">Модельдеу процесі</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="w-full h-[400px] animate-float">
              <BenzeneModel height="100%" interactive={true} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <Section
        title="Жоба мүмкіндіктері"
        subtitle="ИИ көмегімен бензол молекуласын модельдеу қалай жұмыс істейді"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            title="ИИ модельдеу"
            description="Терең машиналық оқыту әдістерін қолдана отырып бензол молекуласының қасиеттерін анықтау"
            gradient={true}
            className="animate-fade-in"
          />
          <FeatureCard
            title="3D визуализация"
            description="Бензол молекуласының толық интерактивті үш өлшемді моделі"
            gradient={true}
            className="animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          />
          <FeatureCard
            title="Нақты нәтижелер"
            description="Молекуланың химиялық қасиеттері туралы нақты деректер мен статистика"
            gradient={true}
            className="animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          />
        </div>
      </Section>
      
      {/* AI Preview Section */}
      <Section 
        title="ИИ жұмыс үрдісі" 
        className="bg-benzol-dark text-white"
        gradient={true}
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Нейрондық желі жұмысы
            </h3>
            <p className="mb-4">
              Бензол молекуласын талдау үшін бірнеше қабаттан тұратын терең нейрондық желі қолданылады. Бұл желі молекулалық құрылымды талдап, оның химиялық қасиеттерін болжайды.
            </p>
            <p>
              Жасанды интеллект көптеген молекулалар бойынша оқытылған, соның арқасында бензолдың ерекшеліктерін дәл анықтай алады.
            </p>
          </div>
          <div className="h-[300px] bg-benzol-dark/50 rounded-lg overflow-hidden">
            <AINetworkAnimation />
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section title="Жобаны толығырақ зерттеңіз">
        <div className="text-center">
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Бензол молекуласын жасанды интеллект көмегімен модельдеу жобасы туралы толығырақ білгіңіз келе ме? Біздің жобаның барлық аспектілерін зерттеңіз.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="bg-benzol-primary hover:bg-benzol-secondary text-white">
              <Link to="/about">Жоба туралы білу</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Байланысу</Link>
            </Button>
          </div>
        </div>
      </Section>
      
      <Footer />
    </div>
  );
};

export default Index;
