
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import ResultsChart from '@/components/ResultsChart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Results = () => {
  // Данные для графиков
  const energyData = [
    { name: '0°', classic: 0, ai: 0 },
    { name: '30°', classic: 2.8, ai: 2.7 },
    { name: '60°', classic: 10.2, ai: 9.8 },
    { name: '90°', classic: 12.0, ai: 11.9 },
    { name: '120°', classic: 10.2, ai: 10.3 },
    { name: '150°', classic: 2.8, ai: 2.9 },
    { name: '180°', classic: 0, ai: 0.1 },
  ];
  
  const electronicData = [
    { name: 'HOMO', classic: -9.2, ai: -9.1 },
    { name: 'LUMO', classic: -0.8, ai: -0.9 },
    { name: 'Gap', classic: 8.4, ai: 8.2 },
    { name: 'IP', classic: 9.2, ai: 9.3 },
    { name: 'EA', classic: 0.8, ai: 0.7 },
  ];
  
  const geometryData = [
    { name: 'C-C (Å)', classic: 1.39, ai: 1.40 },
    { name: 'C-H (Å)', classic: 1.08, ai: 1.09 },
    { name: 'C-C-C (°)', classic: 120, ai: 119.8 },
    { name: 'H-C-C (°)', classic: 120, ai: 120.1 },
    { name: 'Ring planarity', classic: 0.01, ai: 0.02 },
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-12 px-4 bg-gradient-to-br from-benzol-primary/10 to-benzol-accent/10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Модельдеу <span className="gradient-text">нәтижелері</span>
          </h1>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Жасанды интеллект пен дәстүрлі әдістерді салыстыру
          </p>
        </div>
      </div>
      
      {/* Summary Section */}
      <Section title="Негізгі нәтижелер">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-benzol-primary/10 pb-2">
              <CardTitle className="text-xl">Дәлдік</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="text-center">
                <div className="text-5xl font-bold text-benzol-primary mb-2">96.8%</div>
                <p>ИИ-ның эксперименталдық деректермен сәйкестік дәлдігі</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-benzol-primary/10 pb-2">
              <CardTitle className="text-xl">Есептеу уақыты</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="text-center">
                <div className="text-5xl font-bold text-benzol-primary mb-2">48x</div>
                <p>Дәстүрлі DFT әдістеріне қарағанда жылдамырақ</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-benzol-primary/10 pb-2">
              <CardTitle className="text-xl">Ресурс үнемдеу</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="text-center">
                <div className="text-5xl font-bold text-benzol-primary mb-2">85%</div>
                <p>Есептеу ресурстарын аз пайдалану</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <p className="mb-6">
            Біздің жасанды интеллект негізіндегі бензол молекуласын модельдеу тәсілі дәстүрлі әдістермен салыстырғанда айтарлықтай артықшылықтар көрсетті. Негізгі қасиеттерді болжау дәлдігі қанағаттанарлық деңгейде, ал есептеу уақыты мен ресурстар тұрғысынан айтарлықтай үнемделуі байқалады.
          </p>
          
          <h4 className="font-bold text-lg mb-4">Модель сипаттамаларының дәлдігі:</h4>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Электрондық құрылым</span>
                <span>98%</span>
              </div>
              <Progress value={98} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span>Геометриялық параметрлер</span>
                <span>97%</span>
              </div>
              <Progress value={97} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span>Энергетикалық қасиеттер</span>
                <span>95%</span>
              </div>
              <Progress value={95} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span>Спектрлік сипаттамалар</span>
                <span>94%</span>
              </div>
              <Progress value={94} className="h-2" />
            </div>
          </div>
        </div>
      </Section>
      
      {/* Detailed Results */}
      <Section 
        title="Детальды нәтижелер" 
        className="bg-benzol-dark text-white"
      >
        <Tabs defaultValue="energy" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8 bg-benzol-dark border border-white/20">
            <TabsTrigger value="energy" className="data-[state=active]:bg-benzol-primary data-[state=active]:text-white">
              Энергетикалық профиль
            </TabsTrigger>
            <TabsTrigger value="electronic" className="data-[state=active]:bg-benzol-primary data-[state=active]:text-white">
              Электрондық қасиеттер
            </TabsTrigger>
            <TabsTrigger value="geometry" className="data-[state=active]:bg-benzol-primary data-[state=active]:text-white">
              Геометриялық құрылым
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="energy">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-benzol-primary/10">
                <CardTitle>Ротациялық энергетикалық кедергі</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-4">
                  Бензол молекуласында C-C байланысының айналасында ротация кезінде энергияның өзгеруі. Графиктен көретініміздей, ИИ болжамдары дәстүрлі әдістермен жақсы сәйкес келеді.
                </p>
                <div className="h-[400px]">
                  <ResultsChart data={energyData} />
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  <p>* Энергия ккал/моль өлшем бірлігінде көрсетілген</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="electronic">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-benzol-primary/10">
                <CardTitle>Электрондық құрылым</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-4">
                  Бензол молекуласының электрондық қасиеттері. HOMO (ең жоғарғы бос орбиталь), LUMO (ең төменгі бос емес орбиталь) және басқа да маңызды параметрлер.
                </p>
                <div className="h-[400px]">
                  <ResultsChart data={electronicData} />
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  <p>* Энергия электрон вольт (eV) өлшем бірлігінде көрсетілген</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="geometry">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-benzol-primary/10">
                <CardTitle>Геометриялық параметрлер</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-4">
                  Бензол молекуласының геометриялық параметрлері, соның ішінде байланыс ұзындықтары мен бұрыштары.
                </p>
                <div className="h-[400px]">
                  <ResultsChart data={geometryData} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </Section>
      
      {/* Comparison Section */}
      <Section title="ИИ және дәстүрлі модельдеу әдістерін салыстыру">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="shadow-md">
              <CardHeader className="bg-benzol-primary/10">
                <CardTitle>ИИ-негізделген модельдеу</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2 list-disc pl-5">
                  <li>Жылдам есептеу (секундтар немесе минуттар)</li>
                  <li>Аз есептеу ресурстарын қажет етеді</li>
                  <li>Жоғары дәлдік (~97%)</li>
                  <li>Молекулалық құрылымның ерекшеліктеріне бейімделу</li>
                  <li>Үлкен деректер жиынтықтары негізінде үйрену</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="shadow-md">
              <CardHeader className="bg-benzol-accent/10">
                <CardTitle>Дәстүрлі модельдеу (DFT)</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2 list-disc pl-5">
                  <li>Баяу есептеу (сағаттар немесе күндер)</li>
                  <li>Жоғары есептеу ресурстарын қажет етеді</li>
                  <li>Жоғары дәлдік ("алтын стандарт")</li>
                  <li>Әр молекула үшін бөлек есептеулер</li>
                  <li>Физикалық принциптерге негізделген</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-gradient-to-br from-benzol-primary/10 to-benzol-accent/10 rounded-lg p-6">
            <h4 className="text-xl font-bold mb-4">Қорытынды</h4>
            <p className="mb-4">
              Біздің зерттеу нәтижелері бойынша, жасанды интеллект негізіндегі модельдеу әдісі бензол молекуласының қасиеттерін болжауда дәстүрлі квантты-химиялық әдістермен салыстырылатын нәтижелерді көрсетеді.
            </p>
            <p>
              Сонымен қатар, ИИ моделі есептеудің жылдамдығы мен ресурстық тиімділігі тұрғысынан айтарлықтай артықшылықтарға ие. Бұл біздің тәсілімізді жаңа молекулаларды зерттеуде өте перспективалы етеді.
            </p>
          </div>
        </div>
      </Section>
      
      <Footer />
    </div>
  );
};

export default Results;
