import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navigation = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'about', label: 'О школе', icon: 'School' },
    { id: 'teachers', label: 'Педагоги', icon: 'Users' },
    { id: 'achievements', label: 'Достижения', icon: 'Trophy' },
    { id: 'news', label: 'Новости', icon: 'Newspaper' },
    { id: 'contacts', label: 'Контакты', icon: 'Phone' },
  ];

  const features = [
    {
      icon: 'BookOpen',
      title: 'Электронная библиотека',
      description: 'Доступ к учебным материалам онлайн',
      color: 'bg-coral'
    },
    {
      icon: 'FileText',
      title: 'Документы',
      description: 'Важные положения и документы',
      color: 'bg-navy'
    },
    {
      icon: 'Calendar',
      title: 'Электронный дневник',
      description: 'Для родителей и учеников',
      color: 'bg-turquoise'
    },
    {
      icon: 'Clock',
      title: 'Расписание',
      description: 'Уроки и звонки онлайн',
      color: 'bg-yellow'
    },
  ];

  const teachers = [
    { name: 'Иванова Мария Петровна', subject: 'Математика', experience: '15 лет' },
    { name: 'Смирнов Алексей Иванович', subject: 'Физика', experience: '12 лет' },
    { name: 'Петрова Елена Сергеевна', subject: 'Русский язык', experience: '18 лет' },
    { name: 'Козлов Дмитрий Александрович', subject: 'История', experience: '10 лет' },
  ];

  const achievements = [
    { title: 'Победа в олимпиаде по математике', year: '2024', level: 'Региональный' },
    { title: 'Лучшая школа года', year: '2023', level: 'Городской' },
    { title: 'Призёры конкурса робототехники', year: '2024', level: 'Всероссийский' },
  ];

  const news = [
    { 
      title: 'Открытие новой лаборатории',
      date: '15 октября 2024',
      description: 'В школе открылась современная научная лаборатория для изучения физики и химии.'
    },
    {
      title: 'День открытых дверей',
      date: '20 октября 2024',
      description: 'Приглашаем будущих первоклассников и их родителей познакомиться со школой.'
    },
    {
      title: 'Спортивные соревнования',
      date: '25 октября 2024',
      description: 'Наши ученики заняли первое место в городских соревнованиях по волейболу.'
    },
  ];

  const schedule = [
    { number: 1, time: '8:00 - 8:45' },
    { number: 2, time: '8:55 - 9:40' },
    { number: 3, time: '10:00 - 10:45' },
    { number: 4, time: '11:05 - 11:50' },
    { number: 5, time: '12:10 - 12:55' },
    { number: 6, time: '13:05 - 13:50' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-coral to-yellow flex items-center justify-center shadow-lg">
                <Icon name="GraduationCap" className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-coral to-navy bg-clip-text text-transparent">
                  Школа №1
                </h1>
                <p className="text-sm text-muted-foreground">Образование будущего</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'bg-coral text-white shadow-lg'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'home' && (
          <div className="space-y-16 animate-fade-in">
            <section className="text-center py-20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-coral/10 via-turquoise/10 to-yellow/10 rounded-3xl"></div>
              <div className="relative z-10">
                <Badge className="mb-6 bg-navy text-white px-6 py-2 text-base">
                  Добро пожаловать
                </Badge>
                <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-coral via-navy to-turquoise bg-clip-text text-transparent">
                  Современное образование
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Инновационные методы обучения, опытные педагоги и комфортная среда для развития каждого ученика
                </p>
                <div className="flex gap-4 justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="lg" className="bg-coral hover:bg-coral/90 text-white shadow-lg">
                        <Icon name="UserPlus" size={20} className="mr-2" />
                        Записаться в школу
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Запись в школу</DialogTitle>
                        <DialogDescription>
                          Заполните форму, и мы свяжемся с вами в ближайшее время
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 pt-4">
                        <div>
                          <Label htmlFor="parent-name">ФИО родителя</Label>
                          <Input id="parent-name" placeholder="Иванов Иван Иванович" />
                        </div>
                        <div>
                          <Label htmlFor="child-name">ФИО ребёнка</Label>
                          <Input id="child-name" placeholder="Иванов Пётр Иванович" />
                        </div>
                        <div>
                          <Label htmlFor="phone">Телефон</Label>
                          <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                        </div>
                        <div>
                          <Label htmlFor="message">Комментарий</Label>
                          <Textarea id="message" placeholder="Дополнительная информация..." />
                        </div>
                        <Button className="w-full bg-coral hover:bg-coral/90">
                          Отправить заявку
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button size="lg" variant="outline" onClick={() => setActiveSection('about')}>
                    <Icon name="Info" size={20} className="mr-2" />
                    Узнать больше
                  </Button>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-3xl font-bold mb-8 text-center">Наши возможности</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <Card 
                    key={index} 
                    className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader>
                      <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                        <Icon name={feature.icon as any} className="text-white" size={28} />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription className="text-base">{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-navy/5 to-turquoise/5 rounded-3xl p-12">
              <h3 className="text-3xl font-bold mb-8 text-center">Расписание звонков</h3>
              <div className="max-w-2xl mx-auto">
                <div className="grid gap-3">
                  {schedule.map((item) => (
                    <Card key={item.number} className="hover:shadow-md transition-shadow">
                      <CardContent className="flex items-center justify-between p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-coral rounded-lg flex items-center justify-center text-white font-bold text-lg">
                            {item.number}
                          </div>
                          <span className="text-lg font-medium">Урок {item.number}</span>
                        </div>
                        <Badge variant="outline" className="text-base px-4 py-2">
                          {item.time}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {activeSection === 'about' && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-8">О школе</h2>
            <Card>
              <CardContent className="p-8 space-y-6">
                <p className="text-lg leading-relaxed">
                  Школа №1 — современное образовательное учреждение с богатой историей и традициями. 
                  Мы создаём комфортную среду для обучения и развития каждого ученика.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                  <div className="text-center p-6 bg-coral/10 rounded-xl">
                    <div className="text-4xl font-bold text-coral mb-2">850+</div>
                    <div className="text-muted-foreground">Учеников</div>
                  </div>
                  <div className="text-center p-6 bg-navy/10 rounded-xl">
                    <div className="text-4xl font-bold text-navy mb-2">60+</div>
                    <div className="text-muted-foreground">Педагогов</div>
                  </div>
                  <div className="text-center p-6 bg-turquoise/10 rounded-xl">
                    <div className="text-4xl font-bold text-turquoise mb-2">25+</div>
                    <div className="text-muted-foreground">Лет опыта</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'teachers' && (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-8">Наши педагоги</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teachers.map((teacher, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-coral to-navy rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {teacher.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{teacher.name}</CardTitle>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-navy">{teacher.subject}</Badge>
                          <Badge variant="outline">Опыт: {teacher.experience}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'achievements' && (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-8">Достижения</h2>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-yellow rounded-xl flex items-center justify-center">
                        <Icon name="Trophy" className="text-white" size={28} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{achievement.title}</CardTitle>
                        <div className="flex gap-2">
                          <Badge className="bg-coral">{achievement.year}</Badge>
                          <Badge variant="outline">{achievement.level}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'news' && (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-8">Новости</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((item, index) => (
                <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardHeader>
                    <Badge className="w-fit mb-3 bg-turquoise">{item.date}</Badge>
                    <CardTitle className="text-xl mb-3">{item.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-8">Контакты</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MapPin" className="text-coral" />
                    Адрес
                  </CardTitle>
                  <CardDescription className="text-base pt-2">
                    г. Москва, ул. Школьная, д. 1
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Phone" className="text-navy" />
                    Телефон
                  </CardTitle>
                  <CardDescription className="text-base pt-2">
                    +7 (495) 123-45-67
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Mail" className="text-turquoise" />
                    Email
                  </CardTitle>
                  <CardDescription className="text-base pt-2">
                    school1@edu.ru
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Clock" className="text-yellow" />
                    Режим работы
                  </CardTitle>
                  <CardDescription className="text-base pt-2">
                    Пн-Пт: 8:00 - 18:00
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t bg-white mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>© 2024 Школа №1. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
