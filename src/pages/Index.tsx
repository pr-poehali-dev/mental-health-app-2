import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

function Index() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mood, setMood] = useState<string>('');
  const [journalEntry, setJournalEntry] = useState<string>('');

  const moods = [
    { emoji: '😊', label: 'Радостное', color: 'bg-yellow-200' },
    { emoji: '😌', label: 'Спокойное', color: 'bg-green-200' },
    { emoji: '😔', label: 'Грустное', color: 'bg-blue-200' },
    { emoji: '😰', label: 'Тревожное', color: 'bg-purple-200' },
    { emoji: '😴', label: 'Уставшее', color: 'bg-gray-200' },
  ];

  const meditations = [
    {
      title: 'Дыхание и покой',
      duration: '5 минут',
      description: 'Простая практика осознанного дыхания для снятия напряжения',
      icon: 'Wind',
    },
    {
      title: 'Сканирование тела',
      duration: '10 минут',
      description: 'Последовательное расслабление всех частей тела',
      icon: 'Heart',
    },
    {
      title: 'Благодарность',
      duration: '7 минут',
      description: 'Фокус на позитивных моментах дня',
      icon: 'Sparkles',
    },
    {
      title: 'Прогрессивная релаксация',
      duration: '12 минут',
      description: 'Глубокое расслабление через напряжение и отпускание',
      icon: 'Waves',
    },
  ];

  const resources = [
    {
      title: 'Горячие линии поддержки',
      items: ['Телефон доверия: 8-800-2000-122', 'Психологическая помощь: 051 (бесплатно)', 'Чат поддержки: 8-800-333-44-34'],
    },
    {
      title: 'Полезные материалы',
      items: ['Книга: "Спокойствие" от М. Уильямс', 'Приложение Headspace', 'Онлайн-курс по майндфулнес'],
    },
  ];

  const faqItems = [
    {
      question: 'Что такое медитация осознанности?',
      answer: 'Медитация осознанности — это практика концентрации внимания на настоящем моменте без осуждения. Она помогает снизить стресс, улучшить концентрацию и эмоциональное благополучие.',
    },
    {
      question: 'Как часто нужно медитировать?',
      answer: 'Начните с 5-10 минут ежедневно. Регулярность важнее длительности. Постепенно можно увеличивать время практики.',
    },
    {
      question: 'Когда обратиться к специалисту?',
      answer: 'Если вы чувствуете постоянную тревогу, депрессию, мысли о самоповреждении или трудности в повседневной жизни — обязательно обратитесь к психологу или психотерапевту.',
    },
    {
      question: 'Можно ли медитировать в любое время?',
      answer: 'Да! Утренняя медитация помогает настроиться на день, вечерняя — расслабиться. Выбирайте удобное для вас время.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {activeSection === 'home' && (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <header className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold text-purple-900 mb-4">Спокойствие</h1>
            <p className="text-lg text-purple-700">Ваш помощник для ментального благополучия</p>
          </header>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { title: 'Медитации', icon: 'Sparkles', desc: 'Гайдированные практики', section: 'meditations', color: 'from-purple-100 to-purple-200' },
              { title: 'Дневник', icon: 'BookOpen', desc: 'Отслеживайте настроение', section: 'journal', color: 'from-pink-100 to-pink-200' },
              { title: 'Ресурсы', icon: 'Heart', desc: 'Полезная информация', section: 'resources', color: 'from-blue-100 to-blue-200' },
              { title: 'FAQ', icon: 'HelpCircle', desc: 'Частые вопросы', section: 'faq', color: 'from-green-100 to-green-200' },
            ].map((item, idx) => (
              <Card
                key={idx}
                className={`p-8 cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br ${item.color} border-0 animate-scale-in`}
                style={{ animationDelay: `${idx * 0.1}s` }}
                onClick={() => setActiveSection(item.section)}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm">
                    <Icon name={item.icon} size={32} className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-purple-900 mb-2">{item.title}</h3>
                    <p className="text-purple-700">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'meditations' && (
        <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
          <Button
            variant="ghost"
            className="mb-6 text-purple-700 hover:text-purple-900"
            onClick={() => setActiveSection('home')}
          >
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Назад
          </Button>

          <h2 className="text-4xl font-bold text-purple-900 mb-8">Медитации и упражнения</h2>

          <div className="grid gap-6">
            {meditations.map((med, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow bg-white/90 backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-2xl">
                    <Icon name={med.icon} size={28} className="text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-purple-900">{med.title}</h3>
                      <span className="text-sm text-purple-600 bg-purple-100 px-3 py-1 rounded-full">{med.duration}</span>
                    </div>
                    <p className="text-purple-700 mb-4">{med.description}</p>
                    <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full">
                      <Icon name="Play" size={16} className="mr-2" />
                      Начать практику
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'journal' && (
        <div className="container mx-auto px-4 py-8 max-w-3xl animate-fade-in">
          <Button
            variant="ghost"
            className="mb-6 text-purple-700 hover:text-purple-900"
            onClick={() => setActiveSection('home')}
          >
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Назад
          </Button>

          <h2 className="text-4xl font-bold text-purple-900 mb-8">Дневник настроения</h2>

          <Card className="p-8 mb-6 bg-white/90 backdrop-blur">
            <h3 className="text-xl font-semibold text-purple-900 mb-4">Как вы себя чувствуете сегодня?</h3>
            <div className="flex gap-4 mb-6 flex-wrap">
              {moods.map((m, idx) => (
                <button
                  key={idx}
                  onClick={() => setMood(m.label)}
                  className={`p-4 rounded-2xl transition-all ${m.color} ${
                    mood === m.label ? 'ring-4 ring-purple-400 scale-110' : 'hover:scale-105'
                  }`}
                >
                  <div className="text-4xl mb-2">{m.emoji}</div>
                  <div className="text-sm font-medium text-purple-900">{m.label}</div>
                </button>
              ))}
            </div>

            {mood && (
              <div className="animate-fade-in">
                <label className="block text-purple-900 font-medium mb-2">Запишите свои мысли:</label>
                <Textarea
                  placeholder="Что произошло сегодня? Что вы чувствуете?"
                  className="min-h-32 mb-4 rounded-2xl border-purple-200 focus:ring-purple-400"
                  value={journalEntry}
                  onChange={(e) => setJournalEntry(e.target.value)}
                />
                <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full w-full">
                  <Icon name="Save" size={16} className="mr-2" />
                  Сохранить запись
                </Button>
              </div>
            )}
          </Card>
        </div>
      )}

      {activeSection === 'resources' && (
        <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
          <Button
            variant="ghost"
            className="mb-6 text-purple-700 hover:text-purple-900"
            onClick={() => setActiveSection('home')}
          >
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Назад
          </Button>

          <h2 className="text-4xl font-bold text-purple-900 mb-8">Полезные ресурсы</h2>

          <div className="space-y-6">
            {resources.map((res, idx) => (
              <Card key={idx} className="p-6 bg-white/90 backdrop-blur">
                <h3 className="text-2xl font-semibold text-purple-900 mb-4">{res.title}</h3>
                <ul className="space-y-3">
                  {res.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Icon name="CheckCircle" size={20} className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-purple-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}

            <Card className="p-6 bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
              <div className="flex gap-3">
                <Icon name="AlertCircle" size={24} className="text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-red-900 mb-2">Экстренная помощь</h3>
                  <p className="text-red-800">
                    Если вы находитесь в кризисной ситуации, немедленно обратитесь на телефон доверия <strong>8-800-2000-122</strong> или вызовите скорую помощь <strong>112</strong>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}

      {activeSection === 'faq' && (
        <div className="container mx-auto px-4 py-8 max-w-3xl animate-fade-in">
          <Button
            variant="ghost"
            className="mb-6 text-purple-700 hover:text-purple-900"
            onClick={() => setActiveSection('home')}
          >
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Назад
          </Button>

          <h2 className="text-4xl font-bold text-purple-900 mb-8">Часто задаваемые вопросы</h2>

          <Card className="p-6 bg-white/90 backdrop-blur">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left text-lg font-medium text-purple-900 hover:text-purple-700">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-purple-800 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      )}
    </div>
  );
}

export default Index;
