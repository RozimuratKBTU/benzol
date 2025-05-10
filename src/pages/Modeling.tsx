
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import BenzeneModel from '@/components/BenzeneModel';
import AINetworkAnimation from '@/components/AINetworkAnimation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Modeling = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-12 px-4 bg-gradient-to-br from-benzol-primary/10 to-benzol-accent/10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Модельдеу <span className="gradient-text">процесі</span>
          </h1>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Бензол молекуласын жасанды интеллект көмегімен қалай модельдейміз
          </p>
        </div>
      </div>
      
      {/* Overview */}
      <Section title="Модельдеу процесінің кезеңдері">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-benzol-primary/10 pb-2">
              <CardTitle className="text-xl">1. Деректерді дайындау</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p>Бензол молекуласының құрылымдық деректерін жинау және өңдеу. Химиялық қасиеттерді сандық түрде кодтау.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-benzol-primary/20 pb-2">
              <CardTitle className="text-xl">2. Модель құру</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p>Нейрондық желі архитектурасын жасау және бензол молекуласын талдауға бейімдеу.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-benzol-primary/30 pb-2">
              <CardTitle className="text-xl">3. Нәтижелерді талдау</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p>ИИ болжамдарын нақты деректермен салыстыру және модель дәлдігін бағалау.</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex justify-center">
          <div className="w-16 h-16 relative">
            <div className="absolute inset-0 border-t-4 border-benzol-primary rounded-full animate-rotate-slow"></div>
            <div className="absolute inset-2 border-t-4 border-benzol-accent rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }}></div>
            <div className="absolute inset-4 bg-benzol-primary rounded-full animate-pulse-slow"></div>
          </div>
        </div>
      </Section>
      
      {/* Data Preparation */}
      <Section 
        title="1. Деректерді дайындау" 
        className="bg-benzol-dark text-white"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              Молекулалық құрылымды кодтау
            </h3>
            <p className="mb-4">
              Бензол молекуласын ИИ моделіне беру үшін алдымен оның құрылымын сандық түрде кодтау қажет. Бұл процесс молекуланың барлық маңызды аспектілерін сақтау үшін өте маңызды.
            </p>
            <p className="mb-6">
              Біз бензол молекуласын кодтау үшін келесі әдістерді қолданамыз:
            </p>
            
            <ul className="space-y-2 pl-5 list-disc">
              <li>Графтық репрезентация - атомдар түйіндер, ал химиялық байланыстар - қабырғалар</li>
              <li>Молекулалық дескрипторлар - ароматтылық, электрондық құрылым, т.б.</li>
              <li>SMILES нотациясы - C1=CC=CC=C1</li>
              <li>3D кеңістіктік координаттар</li>
            </ul>
          </div>
          <div className="h-[400px]">
            <BenzeneModel height="100%" interactive={false} />
          </div>
        </div>
      </Section>
      
      {/* Model Building */}
      <Section title="2. Модель құру">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 h-[400px] bg-gradient-to-br from-benzol-primary/5 to-benzol-accent/5 rounded-lg overflow-hidden">
            <AINetworkAnimation />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold mb-4">
              Нейрондық желі архитектурасы
            </h3>
            <p className="mb-4">
              Бензол молекуласының химиялық қасиеттерін модельдеу үшін біз арнайы нейрондық желі архитектурасын жасадық.
            </p>
            <p className="mb-6">
              Біздің модель келесі компоненттерден тұрады:
            </p>
            
            <div className="space-y-4">
              <div className="bg-benzol-primary/10 p-4 rounded">
                <h4 className="font-bold mb-1">1. Графтық нейрондық желі (GNN)</h4>
                <p>Молекулалық құрылымды графтық түрінде өңдейді</p>
              </div>
              
              <div className="bg-benzol-primary/10 p-4 rounded">
                <h4 className="font-bold mb-1">2. Конволюциялық қабаттар</h4>
                <p>Молекулалық паттерндерді анықтау үшін</p>
              </div>
              
              <div className="bg-benzol-primary/10 p-4 rounded">
                <h4 className="font-bold mb-1">3. Толық байланысты қабаттар</h4>
                <p>Соңғы қасиеттерді болжау үшін</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Training Process */}
      <Section 
        title="Модельді оқыту процесі" 
        className="bg-gradient-to-br from-benzol-primary/10 to-benzol-accent/10"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-center mb-8">
            Модельді оқыту - бұл бензол молекуласын модельдеу процесінің маңызды бөлігі. Төменде процесс кезеңдері көрсетілген.
          </p>
          
          <div className="relative">
            <div className="absolute left-8 h-full w-1 bg-benzol-primary/50 rounded-full"></div>
            
            <div className="ml-16 mb-8 relative">
              <div className="absolute -left-16 top-0 w-8 h-8 bg-benzol-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Оқыту деректерін дайындау</h4>
              <p>
                Бензол молекуласы және ұқсас ароматты қосылыстардың химиялық қасиеттері туралы деректерді жинау. Деректерді оқыту және тексеру жиындарына бөлу.
              </p>
            </div>
            
            <div className="ml-16 mb-8 relative">
              <div className="absolute -left-16 top-0 w-8 h-8 bg-benzol-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Гиперпараметрлерді оңтайландыру</h4>
              <p>
                Модельдің оқыту жылдамдығы, қабаттар саны сияқты параметрлерді оңтайландыру. Бұл модельдің тиімділігін арттыру үшін маңызды.
              </p>
            </div>
            
            <div className="ml-16 mb-8 relative">
              <div className="absolute -left-16 top-0 w-8 h-8 bg-benzol-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Модельді оқыту</h4>
              <p>
                Нейрондық желіні оқыту деректері бойынша оқыту. Модель біртіндеп бензол молекуласының құрылымы мен қасиеттері арасындағы байланысты үйренеді.
              </p>
            </div>
            
            <div className="ml-16 relative">
              <div className="absolute -left-16 top-0 w-8 h-8 bg-benzol-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">4</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Модельді бағалау</h4>
              <p>
                Модельдің болжау қабілетін бағалау үшін тексеру деректерін қолдану. Дәлдікті арттыру үшін модельді қайта оқыту немесе оптимизациялау.
              </p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Analysis Tools */}
      <Section title="3. Нәтижелерді талдау құралдары">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white shadow-md h-full">
            <CardHeader>
              <CardTitle>Болжам дәлдігін бағалау</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                ИИ моделі жасаған болжамдарды нақты эксперименталдық деректермен салыстырамыз. Біз келесі метрикаларды қолданамыз:
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li>Орташа абсолютті қате (MAE)</li>
                <li>Орташа квадраттық қате (RMSE)</li>
                <li>Корреляция коэффициенті (R<sup>2</sup>)</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md h-full">
            <CardHeader>
              <CardTitle>Визуализация құралдары</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Молекулалық құрылымды және модель нәтижелерін түсіну үшін бірнеше визуализация құралдарын қолданамыз:
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li>3D молекулалық рендеринг</li>
                <li>Электрондық тығыздық карталары</li>
                <li>Орбиталды визуализация</li>
                <li>Интерактивті графиктер мен диаграммалар</li>
                <li>Нейрондық желіні визуализациялау</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>
      
      <Footer />
    </div>
  );
};

export default Modeling;
