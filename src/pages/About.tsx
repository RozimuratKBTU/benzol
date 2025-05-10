
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import BenzeneModel from '@/components/BenzeneModel';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-12 px-4 bg-gradient-to-br from-benzol-primary/10 to-benzol-accent/10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Жоба <span className="gradient-text">туралы</span>
          </h1>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Біздің жоба бензол молекуласының құрылымы мен қасиеттерін жасанды интеллект көмегімен зерттеуге бағытталған
          </p>
        </div>
      </div>
      
      {/* Project Description */}
      <Section title="Жоба мақсаты">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="mb-4 text-lg">
              Бұл жобаның негізгі мақсаты - жасанды интеллект технологиясын қолдана отырып, бензол молекуласының химиялық қасиеттерін дәл және жылдам модельдеу әдістерін әзірлеу.
            </p>
            <p className="mb-4">
              Бензол (C<sub>6</sub>H<sub>6</sub>) - органикалық химияда маңызды рөл атқаратын ароматты көмірсутек. Оның ерекше құрылымы мен қасиеттерін түсіну химия ғылымы үшін аса маңызды.
            </p>
            <p>
              Дәстүрлі молекулалық моделдеу әдістері көп есептеу ресурстарын қажет етеді және уақыт алады. Жасанды интеллект көмегімен біз бұл процесті айтарлықтай жеделдете аламыз, сонымен қатар болжамдар дәлдігін арттыра аламыз.
            </p>
          </div>
          <div className="h-[400px]">
            <BenzeneModel height="100%" interactive={true} />
          </div>
        </div>
      </Section>
      
      {/* Why Benzene */}
      <Section 
        title="Неліктен бензол?" 
        className="bg-benzol-dark text-white"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <h3 className="text-2xl font-bold mb-3 gradient-text">Бензолдың ерекшеліктері</h3>
              <ul className="space-y-3 list-disc pl-5">
                <li>Симметриялы циклдік құрылым</li>
                <li>Ерекше электрондық конфигурация</li>
                <li>Ароматты қасиеттер</li>
                <li>Арнайы химиялық реактивтілік</li>
                <li>Көптеген органикалық қосылыстардың негізі</li>
              </ul>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Молекулалық модельдеуге үлгі
            </h3>
            <p className="mb-4">
              Бензол молекуласы өзінің ерекше құрылымы мен қасиеттерімен танымал, сондықтан ол молекулалық модельдеудің "алтын стандарты" болып саналады.
            </p>
            <p>
              Оның симметриялы алтыбұрышты құрылымы, тұрақтылығы және π-электрондық жүйесі оны жасанды интеллект көмегімен модельдеу үшін өте қызықты нысан етеді. Бензолды зерттеу арқылы біз баска күрделі органикалық молекулаларды модельдеу үшін әдістемелерді жетілдіре аламыз.
            </p>
          </div>
        </div>
      </Section>
      
      {/* Why AI */}
      <Section title="Неліктен жасанды интеллект?">
        <div className="max-w-3xl mx-auto">
          <p className="mb-6 text-lg">
            Жасанды интеллект технологиясы химиялық құрылымдар мен қасиеттер арасындағы күрделі қатынастарды анықтауға көмектеседі, бұл дәстүрлі есептеу әдістерімен қол жеткізу қиын.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-benzol-primary/10 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-2">Артықшылықтары:</h4>
              <ul className="space-y-2 list-disc pl-5">
                <li>Есептеу жылдамдығының артуы</li>
                <li>Үлкен деректер жиынтығын талдау мүмкіндігі</li>
                <li>Қасиеттерді болжаудағы жоғары дәлдік</li>
                <li>Бейтаныс молекулаларды зерттеу мүмкіндігі</li>
              </ul>
            </div>
            <div className="bg-benzol-accent/10 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-2">ИИ технологиялары:</h4>
              <ul className="space-y-2 list-disc pl-5">
                <li>Терең нейрондық желілер</li>
                <li>Графтық нейрондық желілер</li>
                <li>Конволюциялық нейрондық желілер</li>
                <li>Рекурренттік нейрондық желілер</li>
                <li>Күшейтілген оқыту алгоритмдері</li>
              </ul>
            </div>
          </div>
          
          <p>
            Жасанды интеллект молекулалық құрылымдарды тиімді түрде кодтауға және оқыту үлгілері арқылы молекулалық қасиеттерді болжауға мүмкіндік береді. Бұл әсіресе ароматты жүйелер сияқты күрделі құрылымдарды зерттеу кезінде пайдалы.
          </p>
        </div>
      </Section>
      
      {/* Team Section */}
      <Section 
        title="Жоба командасы" 
        className="bg-gradient-to-br from-benzol-primary/10 to-benzol-accent/10"
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-8">
            Біздің команда химия, компьютерлік ғылым және машиналық оқыту саласындағы мамандардан тұрады. Бірлесе отырып, біз бензол молекуласын модельдеудің инновациялық тәсілін жасадық.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-benzol-primary/20 flex items-center justify-center">
                <span className="text-3xl font-bold text-benzol-primary">ХҒ</span>
              </div>
              <h4 className="text-lg font-bold">Химия ғылымдары</h4>
              <p className="text-muted-foreground">Молекулалық модельдеу және органикалық химия</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-benzol-accent/20 flex items-center justify-center">
                <span className="text-3xl font-bold text-benzol-accent">КҒ</span>
              </div>
              <h4 className="text-lg font-bold">Компьютерлік ғылымдар</h4>
              <p className="text-muted-foreground">Алгоритмдер және бағдарламалық қамтамасыз ету</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-benzol-primary/20 flex items-center justify-center">
                <span className="text-3xl font-bold text-benzol-primary">МО</span>
              </div>
              <h4 className="text-lg font-bold">Машиналық оқыту</h4>
              <p className="text-muted-foreground">Нейрондық желілер және дерекқорды талдау</p>
            </div>
          </div>
        </div>
      </Section>
      
      <Footer />
    </div>
  );
};

export default About;
