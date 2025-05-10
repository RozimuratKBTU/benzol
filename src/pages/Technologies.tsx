
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import FeatureCard from '@/components/FeatureCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Technologies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-12 px-4 bg-gradient-to-br from-benzol-primary/10 to-benzol-accent/10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Қолданылған <span className="gradient-text">технологиялар</span>
          </h1>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Біздің жобада қолданылатын жасанды интеллект технологиялары мен құралдары
          </p>
        </div>
      </div>
      
      {/* AI Technologies */}
      <Section title="Жасанды интеллект технологиялары">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Терең нейрондық желілер"
            description="Бензол молекуласының қасиеттерін болжау үшін көп қабатты терең желілер қолданылады."
            gradient={true}
          />
          
          <FeatureCard
            title="Графтық нейрондық желілер"
            description="Молекулалық құрылымды графтық түрде талдайтын арнайы нейрондық желілер."
            gradient={true}
          />
          
          <FeatureCard
            title="Конволюциялық нейрондық желілер"
            description="Молекулалық құрылымның кеңістіктік ерекшеліктерін анықтауға арналған желілер."
            gradient={true}
          />
          
          <FeatureCard
            title="Трансформер моделі"
            description="Молекулалық құрылым мен қасиеттер арасындағы күрделі қатынастарды үйрену үшін."
            gradient={true}
          />
          
          <FeatureCard
            title="Машиналық оқыту алгоритмдері"
            description="Молекулалық дескрипторлар мен қасиеттер арасындағы байланысты модельдеу."
            gradient={true}
          />
          
          <FeatureCard
            title="Автоэнкодерлер"
            description="Молекулалық құрылымның тиімді репрезентациясын үйрену."
            gradient={true}
          />
        </div>
      </Section>
      
      {/* Software Technologies */}
      <Section 
        title="Бағдарламалық қамтамасыз ету" 
        className="bg-benzol-dark text-white"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-benzol-dark border border-white/10 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white">Модельдеу құралдары</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <ul className="space-y-3 list-disc pl-5">
                <li>
                  <span className="font-bold text-white">PyTorch</span> - нейрондық желілерді құру мен оқыту үшін
                </li>
                <li>
                  <span className="font-bold text-white">TensorFlow</span> - терең оқыту моделін жасау үшін
                </li>
                <li>
                  <span className="font-bold text-white">RDKit</span> - молекулалық информатика үшін
                </li>
                <li>
                  <span className="font-bold text-white">PyTorch Geometric</span> - графтық нейрондық желілер үшін
                </li>
                <li>
                  <span className="font-bold text-white">CUDA</span> - GPU акселерациясы үшін
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-benzol-dark border border-white/10 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white">Визуализация құралдары</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <ul className="space-y-3 list-disc pl-5">
                <li>
                  <span className="font-bold text-white">Three.js</span> - 3D молекулалық визуализация үшін
                </li>
                <li>
                  <span className="font-bold text-white">D3.js</span> - деректерді интерактивті визуализациялау үшін
                </li>
                <li>
                  <span className="font-bold text-white">React</span> - пайдаланушы интерфейсі үшін
                </li>
                <li>
                  <span className="font-bold text-white">NGLView</span> - молекулалық құрылымдарды көрсету үшін
                </li>
                <li>
                  <span className="font-bold text-white">Recharts</span> - графиктер мен диаграммалар үшін
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>
      
      {/* Analysis Process */}
      <Section title="Бензол молекуласын ИИ көмегімен қалай талдаймыз">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-center mb-8">
            Жасанды интеллект бензол молекуласын бірнеше кезеңде талдайды
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-benzol-primary flex items-center justify-center text-white font-bold text-lg">1</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Молекуланы тану</h4>
                <p className="text-muted-foreground">
                  ИИ алдымен бензол молекуласын оның құрылымдық формуласы немесе 3D координаттары арқылы таниды. Молекула графтық түрде көрсетіліп, әр атом түйін ретінде, ал байланыстар қабырғалар ретінде кодталады.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-benzol-primary flex items-center justify-center text-white font-bold text-lg">2</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Құрылымдық ерекшеліктерді анықтау</h4>
                <p className="text-muted-foreground">
                  Графтық нейрондық желілер (GNN) молекуланың құрылымдық ерекшеліктерін анықтайды: симметрия, ароматтылық, байланыс ұзындықтары мен бұрыштары. Әр атомның локалдық ортасы талданады.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-benzol-primary flex items-center justify-center text-white font-bold text-lg">3</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Электрондық құрылымды модельдеу</h4>
                <p className="text-muted-foreground">
                  Нейрондық желі бензолдың электрондық құрылымын болжайды: молекулалық орбитальдар, электрондық тығыздықтың таралуы, HOMO-LUMO қашықтығы. Бұл қасиеттер молекуланың реактивтілігін анықтайды.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-benzol-primary flex items-center justify-center text-white font-bold text-lg">4</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Қасиеттерді болжау</h4>
                <p className="text-muted-foreground">
                  ИИ бензол молекуласының химиялық және физикалық қасиеттерін болжайды: тұрақтылық, реактивтілік, спектрлік ерекшеліктер. Бұл болжамдар эксперименталдық деректермен салыстырылады.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-benzol-primary flex items-center justify-center text-white font-bold text-lg">5</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Нәтижелерді визуализациялау</h4>
                <p className="text-muted-foreground">
                  Алынған нәтижелер интерактивті визуализация арқылы көрсетіледі: 3D молекулалық моделдер, электрондық тығыздық карталары, графиктер, диаграммалар. Бұл нәтижелерді интуитивті түрде түсінуге көмектеседі.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Future Technologies */}
      <Section 
        title="Болашақ технологиялар" 
        className="bg-gradient-to-br from-benzol-primary/10 to-benzol-accent/10"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-center mb-8">
            Біздің жоба келесі технологиялық инновацияларды интеграциялау бойынша зерттеулер жүргізуде:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-md h-full">
              <CardHeader className="bg-gradient-to-r from-benzol-primary/20 to-benzol-accent/10 pb-2">
                <CardTitle>Кванттық есептеулер</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="mb-4">
                  Кванттық есептеу технологиялары молекулалық модельдеудің дәлдігін және жылдамдығын айтарлықтай арттыруға мүмкіндік береді.
                </p>
                <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                  <li>Кванттық алгоритмдер интеграциясы</li>
                  <li>Молекулалық құрылымдарды кванттық симуляциялау</li>
                  <li>Кванттық машиналық оқыту техникалары</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md h-full">
              <CardHeader className="bg-gradient-to-r from-benzol-primary/20 to-benzol-accent/10 pb-2">
                <CardTitle>Мультимодальді ИИ</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="mb-4">
                  Мультимодальді ИИ технологиялары әртүрлі деректер көздерін біріктіріп, молекулалық модельдеудің дәлдігін арттыра алады.
                </p>
                <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                  <li>Молекулалық құрылым мен спектрлік деректерді интеграциялау</li>
                  <li>Мәтіндік химиялық әдебиет пен молекулалық деректерді біріктіру</li>
                  <li>Молекулалардың көптеген репрезентацияларын қолдану</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md h-full">
              <CardHeader className="bg-gradient-to-r from-benzol-primary/20 to-benzol-accent/10 pb-2">
                <CardTitle>Федеративті оқыту</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="mb-4">
                  Федеративті оқыту жеке деректердің құпиялылығын сақтай отырып, әртүрлі зертханалардағы молекулалық деректерді біріктіруге мүмкіндік береді.
                </p>
                <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                  <li>Құпия химиялық деректер арқылы оқыту</li>
                  <li>Коллаборативті модельдерді жасау</li>
                  <li>Деректерді бөлмей білім алмасу</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md h-full">
              <CardHeader className="bg-gradient-to-r from-benzol-primary/20 to-benzol-accent/10 pb-2">
                <CardTitle>Кеңейтілген және виртуалды шындық</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="mb-4">
                  AR және VR молекулалық құрылымдарды визуализациялау мен түсіну үшін жаңа мүмкіндіктер ашады.
                </p>
                <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                  <li>Иммерсивті 3D молекулалық визуализация</li>
                  <li>Интерактивті молекулалық манипуляция</li>
                  <li>Коллаборативті виртуалды зертханалар</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
      
      <Footer />
    </div>
  );
};

export default Technologies;
