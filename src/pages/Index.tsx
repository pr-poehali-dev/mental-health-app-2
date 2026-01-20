import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

function Index() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mood, setMood] = useState<string>('');
  const [journalEntry, setJournalEntry] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedOrg, setSelectedOrg] = useState<any>(null);

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

  const organizations = [
    {
      name: 'ГБУ города Москвы Дом социального обслуживания «Северное Измайлово»',
      address: '105215, Москва, ул. 9-я Парковая, д. 53',
      phone: '+7 (499) 164-89-42',
      email: 'sd-12@mos.ru',
      website: 'https://пни12.рф/',
      director: 'Шестакова Яна Сергеевна',
      target: 'Граждане пожилого возраста (женщины старше 55 лет, мужчины старше 60 лет) и инвалиды 1-й и 2-й групп старше 18 лет, страдающие психическими расстройствами',
      services: 'Комплексные медико-социальные услуги (лечение, реабилитация, досуговая деятельность)',
    },
    {
      name: 'ГБУ Геронтологический центр «Восточный»',
      address: '105484, Москва, ул. 16-я Парковая, д. 16',
      phone: '(499) 464-03-89',
      email: 'gc-19@mos.ru',
      website: 'https://gcizmailovo.ru/',
      director: 'Шматковский Владимир Федорович',
      target: 'Граждане пожилого возраста и инвалиды 1 и 2 групп в возрасте старше 18 лет',
      services: 'Комплексные медико-социальные услуги (лечение, реабилитация, досуговая деятельность)',
    },
    {
      name: 'ГБУ города Москвы Дом социального обслуживания «Лосиноостровский»',
      address: '107150, г. Москва, ул. Лосиноостровская, д. 27, стр. 1',
      phone: '+7 (499) 160-02-86',
      email: 'sd-22@mos.ru',
      website: 'https://pni22.ru/',
      director: 'Ключев Антон Александрович',
      target: 'Граждане пожилого возраста и инвалиды 1-й и 2-й групп старше 18 лет, страдающие психическими расстройствами',
      services: 'Комплексные медико-социальные услуги (лечение, реабилитация, досуговая деятельность)',
    },
    {
      name: 'ГБУ города Москвы Дом социального обслуживания «Вешняки»',
      address: '111538, Москва, ул. Косинская, д. 8',
      phone: '+7 (495) 375-43-31',
      email: 'sd-26@mos.ru',
      website: 'https://www.pni26.ru/',
      director: 'Яковлев Александр Николаевич',
      target: 'Граждане пожилого возраста и инвалиды 1-й и 2-й групп старше 18 лет, страдающие психическими расстройствами',
      services: 'Комплексные медико-социальные услуги (лечение, реабилитация, досуговая деятельность)',
    },
    {
      name: 'ГБУ Геронтологический центр "Западный" обособленное структурное подразделение «Переделкино»',
      address: '119619, г. Москва, ул. 7-я Лазенки, д. 12, стр. 1',
      phone: '+7 (495) 442-54-91',
      email: 'gc-zapad@social.mos.ru',
      website: 'https://vnmgc.ru/',
      director: 'Келертас Юлия Владимировна',
      target: 'Инвалиды и граждане, имеющие ограничения жизнедеятельности',
      services: 'Комплексные медико-социальные услуги (лечение, реабилитация, досуговая деятельность)',
    },
    {
      name: 'ГБУ города Москвы Дом социального обслуживания «Фили-Давыдково»',
      address: '121433, г. Москва, ул. Полосухина, д. 3',
      phone: '+7 (499) 144-26-83 доб. 101',
      email: 'sd-4@mos.ru',
      website: 'https://sd-filid.mos.ru/',
      director: 'Петров Алексей Евгеньевич',
      target: 'Граждане пожилого возраста и инвалиды 1-й и 2-й групп старше 18 лет, страдающие психическими расстройствами',
      services: 'Комплексные медико-социальные услуги (лечение, реабилитация, досуговая деятельность)',
    },
    {
      name: 'ГБУ города Москвы Научно-практический геронтопсихиатрический центр',
      address: '142044, Московская обл., г. Домодедово, с. Добрыниха, д. 9',
      phone: '+7 (495) 600-90-30',
      email: 'sd-32@social.mos.ru',
      website: 'https://sdker.ru/',
      director: 'Глухова Татьяна Валерьевна',
      target: 'Граждане с когнитивными нарушениями и нуждающиеся в круглосуточном уходе',
      services: 'Комплексные медико-социальные услуги (лечение, реабилитация, досуговая деятельность)',
    },
    {
      name: 'ГБУ Дом социального обслуживания «Ступино» филиал «Данки»',
      address: '142200, Московская обл., Серпуховской р-н, м. Данки',
      phone: '+7 (496) 770-71-38',
      email: 'sd-2@social.mos.ru',
      website: 'http://pni2.ru/',
      director: 'Мальковская Людмила Александровна',
      target: 'Граждане пожилого возраста и инвалиды 1-й и 2-й групп старше 18 лет, страдающие психическими расстройствами',
      services: 'Комплексные медико-социальные услуги (лечение, реабилитация, досуговая деятельность)',
    },
    {
      name: 'ГБУ города Москвы Дом социального обслуживания «Луговой»',
      address: '141834, Московская обл., Дмитровский р-н, п. Луговой, д. 35',
      phone: '+7 (496) 222-70-02',
      email: 'sd-3@social.mos.ru',
      website: 'https://sdlugovoi.ru',
      director: 'Передельский Сергей Владимирович',
      target: 'Граждане пожилого возраста, страдающие психическими расстройствами',
      services: 'Комплексные медико-социальные услуги (лечение, реабилитация, досуговая деятельность)',
    },
    {
      name: 'ГБУ города Москвы Дом социального обслуживания «Ступино»',
      address: '142817, Московская область, г. Ступино, село Лужники',
      phone: '+7 (496) 642-69-90',
      email: 'sd-13@mos.ru',
      website: 'https://sdstupino.ru/',
      director: 'Лобанов Олег Сергеевич',
      target: 'Граждане пожилого возраста и инвалиды 1-й и 2-й групп старше 18 лет, страдающие психическими расстройствами',
      services: 'Комплексные медико-социальные услуги (лечение, реабилитация, досуговая деятельность)',
    },
    {
      name: 'ГБУ города Москвы Дом социального обслуживания «Дегунино»',
      address: '127412, г. Москва, ул. Талдомская, д. 6',
      phone: '+7 (499) 487-72-45',
      email: 'sd-25@social.mos.ru',
      website: 'https://sddegunino.mos.ru/',
      director: 'Горпинченко Михаил Михайлович',
      target: 'Граждане пожилого возраста и инвалиды 1-й и 2-й групп старше 18 лет, страдающие психическими расстройствами',
      services: 'Комплексные медико-социальные услуги (лечение, реабилитация, досуговая деятельность)',
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

  const filteredOrgs = organizations.filter(
    (org) =>
      org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      org.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      org.services.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              { title: 'Организации', icon: 'Building2', desc: 'Каталог организаций помощи', section: 'catalog', color: 'from-orange-100 to-orange-200' },
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

      {activeSection === 'catalog' && (
        <div className="container mx-auto px-4 py-8 max-w-6xl animate-fade-in">
          <Button
            variant="ghost"
            className="mb-6 text-purple-700 hover:text-purple-900"
            onClick={() => {
              setActiveSection('home');
              setSelectedOrg(null);
              setSearchQuery('');
            }}
          >
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Назад
          </Button>

          <h2 className="text-4xl font-bold text-purple-900 mb-8">Организации помощи</h2>

          <div className="mb-6">
            <div className="relative">
              <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" />
              <Input
                placeholder="Поиск по названию, адресу или услугам..."
                className="pl-12 rounded-2xl border-purple-200 focus:ring-purple-400 bg-white/90"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {selectedOrg ? (
            <Card className="p-8 bg-white/90 backdrop-blur animate-scale-in">
              <Button
                variant="ghost"
                size="sm"
                className="mb-4 text-purple-600"
                onClick={() => setSelectedOrg(null)}
              >
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                Назад к списку
              </Button>

              <h3 className="text-2xl font-bold text-purple-900 mb-6">{selectedOrg.name}</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={20} className="text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-purple-900 mb-1">Адрес</p>
                      <p className="text-purple-700">{selectedOrg.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={20} className="text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-purple-900 mb-1">Телефон</p>
                      <a href={`tel:${selectedOrg.phone}`} className="text-purple-700 hover:text-purple-900">
                        {selectedOrg.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="Mail" size={20} className="text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-purple-900 mb-1">Email</p>
                      <a href={`mailto:${selectedOrg.email}`} className="text-purple-700 hover:text-purple-900">
                        {selectedOrg.email}
                      </a>
                    </div>
                  </div>

                  {selectedOrg.website && (
                    <div className="flex items-start gap-3">
                      <Icon name="Globe" size={20} className="text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-purple-900 mb-1">Веб-сайт</p>
                        <a
                          href={selectedOrg.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-700 hover:text-purple-900 underline"
                        >
                          {selectedOrg.website}
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="User" size={20} className="text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-purple-900 mb-1">Директор</p>
                      <p className="text-purple-700">{selectedOrg.director}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="Users" size={20} className="text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-purple-900 mb-1">Целевая аудитория</p>
                      <p className="text-purple-700">{selectedOrg.target}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="Briefcase" size={20} className="text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-purple-900 mb-1">Услуги</p>
                      <p className="text-purple-700">{selectedOrg.services}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ) : (
            <div className="grid gap-4">
              {filteredOrgs.length === 0 ? (
                <Card className="p-8 text-center bg-white/90 backdrop-blur">
                  <Icon name="Search" size={48} className="mx-auto text-purple-300 mb-4" />
                  <p className="text-purple-700">Организации не найдены. Попробуйте изменить запрос.</p>
                </Card>
              ) : (
                filteredOrgs.map((org, idx) => (
                  <Card
                    key={idx}
                    className="p-6 hover:shadow-lg transition-all cursor-pointer bg-white/90 backdrop-blur hover:scale-[1.02]"
                    onClick={() => setSelectedOrg(org)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-orange-100 rounded-2xl flex-shrink-0">
                        <Icon name="Building2" size={24} className="text-orange-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-purple-900 mb-2">{org.name}</h3>
                        <div className="flex flex-col gap-2 text-sm">
                          <div className="flex items-start gap-2">
                            <Icon name="MapPin" size={16} className="text-purple-500 mt-0.5 flex-shrink-0" />
                            <span className="text-purple-700">{org.address}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Icon name="Phone" size={16} className="text-purple-500 mt-0.5 flex-shrink-0" />
                            <span className="text-purple-700">{org.phone}</span>
                          </div>
                        </div>
                      </div>
                      <Icon name="ChevronRight" size={20} className="text-purple-400 flex-shrink-0 mt-2" />
                    </div>
                  </Card>
                ))
              )}
            </div>
          )}
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