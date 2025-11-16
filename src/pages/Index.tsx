import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: "basic",
      name: "Базовый",
      price: "4 990",
      features: [
        "Доступ к 10 лекциям",
        "Базовая теория",
        "Анализ 20 произведений",
        "Доступ на 3 месяца"
      ]
    },
    {
      id: "standard",
      name: "Стандарт",
      price: "7 990",
      features: [
        "Доступ к 25 лекциям",
        "Углублённая теория",
        "Анализ 50 произведений",
        "Доступ на 6 месяцев",
        "Методические материалы"
      ],
      popular: true
    },
    {
      id: "premium",
      name: "Премиум",
      price: "12 990",
      features: [
        "Доступ ко всем лекциям",
        "Полная теория",
        "Анализ 100+ произведений",
        "Бессрочный доступ",
        "Все материалы",
        "Сертификат"
      ]
    }
  ];

  const handlePayment = (planId: string, price: string) => {
    const shopId = "YOUR_YOOMONEY_SHOP_ID";
    const paymentUrl = `https://yoomoney.ru/quickpay/confirm.xml?receiver=${shopId}&quickpay-form=shop&targets=Курс по современному искусству - ${planId}&paymentType=AC&sum=${price}&label=${planId}`;
    window.open(paymentUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="font-cormorant text-2xl font-semibold">Искусство</h1>
            <div className="flex gap-8">
              <a href="#home" className="text-sm hover:text-muted-foreground transition-colors">Главная</a>
              <a href="#pricing" className="text-sm hover:text-muted-foreground transition-colors">Тарифы</a>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="font-cormorant text-6xl md:text-7xl font-light leading-tight">
                Современное<br />Искусство
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Теоретический курс, который откроет вам мир современного искусства через историю и глубокий анализ произведений
              </p>
              <Button 
                size="lg" 
                className="rounded-none px-8"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Начать обучение
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/f37747b1-6719-43b3-8332-6201844325ca/files/57b379ce-7f37-48ad-b1b4-705c4ae4497f.jpg" 
                alt="Современное искусство"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <Icon name="BookOpen" size={32} className="text-primary" />
              <h3 className="font-cormorant text-2xl font-medium">История</h3>
              <p className="text-muted-foreground">
                От импрессионизма до современных течений
              </p>
            </div>
            <div className="space-y-4">
              <Icon name="Eye" size={32} className="text-primary" />
              <h3 className="font-cormorant text-2xl font-medium">Анализ</h3>
              <p className="text-muted-foreground">
                Детальный разбор ключевых произведений
              </p>
            </div>
            <div className="space-y-4">
              <Icon name="Lightbulb" size={32} className="text-primary" />
              <h3 className="font-cormorant text-2xl font-medium">Понимание</h3>
              <p className="text-muted-foreground">
                Развитие художественного мышления
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-5xl font-light mb-4">Тарифы</h2>
            <p className="text-muted-foreground">Выберите подходящий вариант обучения</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card 
                key={plan.id}
                className={`p-8 space-y-6 relative border-2 transition-all hover:shadow-lg ${
                  plan.popular ? 'border-primary' : 'border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-xs">
                    Популярный
                  </div>
                )}
                <div>
                  <h3 className="font-cormorant text-3xl font-medium mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="font-cormorant text-5xl font-light">{plan.price}</span>
                    <span className="text-muted-foreground">₽</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full rounded-none"
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => handlePayment(plan.id, plan.price)}
                >
                  Оплатить курс
                </Button>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <Icon name="Shield" size={16} />
              Безопасная оплата через ЮMoney
            </p>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-cormorant text-xl">Искусство</p>
            <p className="text-sm text-muted-foreground">© 2024 Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
