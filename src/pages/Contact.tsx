
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-12 px-4 bg-gradient-to-br from-benzol-primary/10 to-benzol-accent/10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Байланыс</span>
          </h1>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Бізбен байланысып, жоба туралы сұрақтарыңызды қойыңыз немесе пікіріңізді білдіріңіз
          </p>
        </div>
      </div>
      
      {/* Contact Section */}
      <Section title="Бізбен байланыс">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Хабарлама жіберу</h3>
            <ContactForm />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Байланыс ақпараты</h3>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-bold mb-2">Мекенжайымыз</h4>
                <p className="text-muted-foreground">Қазақстан Республикасы, Шымкент қ.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-bold mb-2">Электрондық пошта</h4>
                <p className="text-muted-foreground">info@benzol.kz</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-bold mb-2">Әлеуметтік желілер</h4>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-benzol-dark hover:text-benzol-primary transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-benzol-dark hover:text-benzol-primary transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-bold mb-2">Жобаға қатысу</h4>
                <p className="text-muted-foreground">
                  Біздің жобаға қатысып, өз үлесіңізді қосқыңыз келе ме? Бізге хабарласыңыз және біз сізге бұл мүмкіндік туралы толық ақпарат береміз.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* FAQ Section */}
      <Section 
        title="Жиі қойылатын сұрақтар" 
        className="bg-gradient-to-br from-benzol-primary/10 to-benzol-accent/10"
      >
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">Жобаның негізгі мақсаты қандай?</h4>
              <p className="text-muted-foreground">
                Жобаның негізгі мақсаты - жасанды интеллект көмегімен бензол молекуласының химиялық қасиеттерін дәл және тиімді модельдеу әдісін жасау.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">Бұл жоба кімдерге пайдалы?</h4>
              <p className="text-muted-foreground">
                Бұл жоба химия саласындағы ғалымдар, зерттеушілер, студенттер және молекулалық модельдеумен айналысатын мамандар үшін пайдалы болады.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">Жасанды интеллект модельдеу нәтижелері қаншалықты дәл?</h4>
              <p className="text-muted-foreground">
                Біздің ИИ моделі эксперименталдық деректермен шамамен 97% сәйкес келеді, бұл дәстүрлі модельдеу әдістерінің дәлдігімен салыстырылады, бірақ есептеу жылдамдығы әлдеқайда жоғары.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">Жобаның код базасы қолжетімді ме?</h4>
              <p className="text-muted-foreground">
                Иә, жобаның код базасы GitHub репозиторийінде ашық қолжетімді. Репозиторийге сілтеме алу үшін бізбен байланысыңыз.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">Мен жобаға өз үлесімді қалай қоса аламын?</h4>
              <p className="text-muted-foreground">
                Біздің жобаға үлес қосқыңыз келсе, бізге хабарласыңыз немесе GitHub репозиторийіндегі нұсқауларды орындаңыз. Біз әртүрлі мамандықтағы адамдардың үлесін құптаймыз.
              </p>
            </div>
          </div>
        </div>
      </Section>
      
      <Footer />
    </div>
  );
};

export default Contact;
