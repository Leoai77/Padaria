import React, { useState } from 'react';
import { MapPin, Clock, Phone, Instagram, ChevronRight, Coffee, Croissant, Cake, Utensils, Star } from 'lucide-react';

const MENU_CATEGORIES = [
  { id: 'paes', name: 'Pães Fresquinhos', icon: Croissant },
  { id: 'doces', name: 'Confeitaria', icon: Cake },
  { id: 'salgados', name: 'Salgados', icon: Utensils },
  { id: 'cafe', name: 'Cafeteria', icon: Coffee },
];

const MENU_ITEMS = {
  paes: [
    { name: 'Pão Francês', description: 'Tradicional, quentinho e crocante a toda hora.', price: 'R$ 22,90/kg', image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=800' },
    { name: 'Pão de Queijo', description: 'Receita mineira autêntica, assado na hora.', price: 'R$ 4,50/un', image: 'https://images.unsplash.com/photo-1593504049359-74330189a345?auto=format&fit=crop&q=80&w=800' },
    { name: 'Pão Integral', description: 'Com grãos selecionados e fermentação natural.', price: 'R$ 12,00/un', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800' },
  ],
  doces: [
    { name: 'Bolo de Cenoura', description: 'Com cobertura generosa de chocolate.', price: 'R$ 8,00/fatia', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800' },
    { name: 'Sonho Tradicional', description: 'Recheio de creme de baunilha ou doce de leite.', price: 'R$ 6,50/un', image: 'https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&fit=crop&q=80&w=800' },
    { name: 'Torta de Morango', description: 'Massa crocante, creme pâtissière e morangos frescos.', price: 'R$ 14,00/fatia', image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=800' },
  ],
  salgados: [
    { name: 'Coxinha de Frango', description: 'Massa cremosa e recheio bem temperado.', price: 'R$ 7,50/un', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=800' },
    { name: 'Empada de Palmito', description: 'Massa que derrete na boca.', price: 'R$ 8,00/un', image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&q=80&w=800' },
    { name: 'Esfiha de Carne', description: 'Massa leve e recheio suculento com limão.', price: 'R$ 6,00/un', image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&q=80&w=800' },
  ],
  cafe: [
    { name: 'Café Expresso', description: 'Grãos selecionados, extração perfeita.', price: 'R$ 5,00', image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800' },
    { name: 'Cappuccino', description: 'Café, leite vaporizado e um toque de canela.', price: 'R$ 8,50', image: 'https://images.unsplash.com/photo-1534687941688-651ccaafbff8?auto=format&fit=crop&q=80&w=800' },
    { name: 'Suco de Laranja', description: 'Natural, espremido na hora.', price: 'R$ 9,00', image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=800' },
  ]
};

const REVIEWS = [
  {
    author: 'Marcio Rodrigo',
    date: '3 meses atrás',
    text: 'Olha essa padaria o que eu sei o dona dela era padeiro em uma mercadinho na rua Almir Rodrigues. Ele montou essa padaria estourou vende muito, muitas atendentes...',
    rating: 5,
  },
  {
    author: 'Cida Torlai',
    date: '5 meses atrás',
    text: 'A padaria por fora é simples, não chama a atenção. Porém quando você entra vê tudo limpinho e tudo simples. A surpresa está na qualidade dos produtos, bom preço e atendimento rápido e educado. Gosto muito da padaria, uma grata surpresa.',
    rating: 5,
  },
  {
    author: 'Paulo Domingues',
    date: '3 meses atrás',
    text: 'Qualidade de TODOS os produtos excepcional. Atendimento dos colaboradores de alto nível, e o melhor... Preço que cabe em qualquer bolso. SUPER RECOMENDO',
    rating: 5,
  },
  {
    author: 'Jacqueline Mayra',
    date: '6 meses atrás',
    text: 'A padaria é un achado, uma portinha pequena, que surpreende em tudo: TUDO fresquinhos, funcionários educados, ágeis e bem treinados. Todos os dias, dou quantas voltas for necessário para pegar o pão de cada dia.',
    rating: 5,
  },
  {
    author: 'Marcelo Telli',
    date: '3 meses atrás',
    text: 'Paes, bolos, salgados tudo fresquinho e gostoso, com um preço muito bom. Estão de parabéns 👏',
    rating: 5,
  }
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState('paes');

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header / Nav */}
      <header className="fixed top-0 left-0 right-0 bg-bakery-bg/90 backdrop-blur-md z-50 border-b border-bakery-ink/10">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Croissant className="text-bakery-accent w-8 h-8" />
            <h1 className="text-2xl font-bold tracking-tight text-bakery-ink">Bela Vista</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
            <a href="#inicio" className="hover:text-bakery-accent transition-colors">Início</a>
            <a href="#cardapio" className="hover:text-bakery-accent transition-colors">Cardápio</a>
            <a href="#avaliacoes" className="hover:text-bakery-accent transition-colors">Avaliações</a>
            <a href="#contato" className="hover:text-bakery-accent transition-colors">Contato</a>
          </nav>
          <button className="md:hidden">
            <div className="w-6 h-0.5 bg-bakery-ink mb-1.5"></div>
            <div className="w-6 h-0.5 bg-bakery-ink mb-1.5"></div>
            <div className="w-6 h-0.5 bg-bakery-ink"></div>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 lg:pt-0 min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1920" 
            alt="Interior da padaria" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bakery-bg via-bakery-bg/90 to-transparent"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10 w-full grid md:grid-cols-2 gap-12 items-center py-20">
          <div className="animate-fade-in-up">
            <p className="text-bakery-accent font-semibold tracking-widest uppercase text-sm mb-4">Tradição & Qualidade</p>
            <h2 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-6">
              Pães e Doces <br/>
              <span className="italic text-bakery-accent">Bela Vista</span>
            </h2>
            <p className="text-lg text-bakery-ink/80 mb-8 max-w-md leading-relaxed">
              Sua padaria de bairro favorita. Pão quente a toda hora, doces irresistíveis e o melhor café da região para acompanhar o seu dia.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#cardapio" className="bg-bakery-ink text-bakery-bg px-8 py-4 rounded-full font-medium hover:bg-bakery-ink/90 transition-colors flex items-center gap-2">
                Ver Cardápio <ChevronRight className="w-4 h-4" />
              </a>
              <a href="#contato" className="bg-bakery-secondary text-bakery-ink px-8 py-4 rounded-full font-medium hover:bg-bakery-secondary/80 transition-colors">
                Como Chegar
              </a>
            </div>
          </div>
          
          <div className="hidden md:block relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-[3/4] rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=800" 
                alt="Pães frescos" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-[200px] -rotate-6">
              <p className="font-serif text-2xl text-bakery-accent mb-1">Desde 1998</p>
              <p className="text-sm text-bakery-ink/70">Fazendo parte da sua família todos os dias.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="cardapio" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Nosso Cardápio</h2>
            <p className="text-bakery-ink/70 max-w-2xl mx-auto">Feito com carinho, ingredientes selecionados e receitas que passam de geração em geração.</p>
          </div>

          {/* Category Tabs */}
          <div className="flex overflow-x-auto pb-4 mb-12 gap-4 justify-start md:justify-center hide-scrollbar">
            {MENU_CATEGORIES.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full whitespace-nowrap transition-all ${
                    isActive 
                      ? 'bg-bakery-ink text-white shadow-md' 
                      : 'bg-bakery-bg text-bakery-ink/70 hover:bg-bakery-secondary'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{category.name}</span>
                </button>
              );
            })}
          </div>

          {/* Menu Items Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MENU_ITEMS[activeCategory as keyof typeof MENU_ITEMS].map((item, index) => (
              <div 
                key={item.name}
                className="group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-bakery-bg">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-1">{item.name}</h3>
                    <p className="text-sm text-bakery-ink/70 line-clamp-2">{item.description}</p>
                  </div>
                  <span className="font-medium text-bakery-accent whitespace-nowrap">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="avaliacoes" className="py-24 bg-bakery-secondary/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">O que dizem nossos clientes</h2>
            <p className="text-bakery-ink/70 max-w-2xl mx-auto">A satisfação de quem nos visita todos os dias é o nosso maior orgulho.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REVIEWS.map((review, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-3xl shadow-sm border border-bakery-ink/5 flex flex-col h-full animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-bakery-accent text-bakery-accent" />
                  ))}
                </div>
                <p className="text-bakery-ink/80 italic mb-6 flex-grow">"{review.text}"</p>
                <div className="mt-auto">
                  <p className="font-bold text-bakery-ink">{review.author}</p>
                  <p className="text-sm text-bakery-ink/50">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info / Location Section */}
      <section id="contato" className="py-24 bg-bakery-ink text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="#FFFFFF" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18,96.3,-2.8C95.8,12.4,88.8,27.3,79.4,40.4C70,53.5,58.2,64.8,44.5,72.7C30.8,80.6,15.4,85.1,0.5,84.3C-14.4,83.5,-28.8,77.4,-41.8,69.1C-54.8,60.8,-66.4,50.3,-74.6,37.5C-82.8,24.7,-87.6,9.6,-86.6,-5.1C-85.6,-19.8,-78.8,-34.1,-69.3,-45.6C-59.8,-57.1,-47.6,-65.8,-34.4,-73.3C-21.2,-80.8,-7,-87.1,7,-88.3C21,-89.5,42,-85.6,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-8">Venha nos visitar</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full shrink-0">
                    <MapPin className="w-6 h-6 text-bakery-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Endereço</h4>
                    <p className="text-white/70">Rua Exemplo, 123 - Bela Vista<br/>São Paulo - SP</p>
                    <a 
                      href="https://www.google.com.br/maps/place/P%C3%A3es+e+Doces+Bela+Vista/@-23.4683372,-46.6563389,15z" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-bakery-accent text-sm hover:underline mt-2 inline-block"
                    >
                      Abrir no Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full shrink-0">
                    <Clock className="w-6 h-6 text-bakery-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Horário de Funcionamento</h4>
                    <p className="text-white/70">Segunda a Sábado: 06:00 às 22:00<br/>Domingos e Feriados: 06:30 às 21:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full shrink-0">
                    <Phone className="w-6 h-6 text-bakery-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Contato</h4>
                    <p className="text-white/70">(11) 99999-9999<br/>contato@paesedocesbelavista.com.br</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-serif mb-4">Faça sua encomenda</h3>
              <p className="text-white/70 mb-6">Aceitamos encomendas para festas, eventos corporativos e confraternizações. Bolos, salgados e docinhos feitos com a qualidade que você já conhece.</p>
              <button className="w-full bg-bakery-accent text-bakery-ink py-4 rounded-xl font-bold hover:bg-bakery-accent/90 transition-colors">
                Falar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bakery-ink text-white/50 py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Croissant className="w-5 h-5 text-bakery-accent" />
            <span className="font-serif text-xl text-white">Bela Vista</span>
          </div>
          <p className="text-sm text-center">© {new Date().getFullYear()} Pães e Doces Bela Vista. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-bakery-accent transition-colors"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
