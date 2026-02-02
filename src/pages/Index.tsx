import { Star, Shield, Clock, CreditCard, Gift, Smartphone, ChevronRight, Menu, X, Award, Users, CheckCircle, AlertTriangle } from 'lucide-react';
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Import images
import heroCasino from '@/assets/hero-casino.jpg';
import licenciasEuropeas from '@/assets/licencias-europeas.jpg';
import metodosPago from '@/assets/metodos-pago-casino.jpg';
import autorImg from '@/assets/autor-carlos-martinez.jpg';
import casinoMovil from '@/assets/casino-movil.jpg';
import bonosCasino from '@/assets/bonos-casino.jpg';

// Casino data
const casinosData = [
  {
    nombre: "LuckyStar Casino",
    licencia: "Malta (MGA)",
    bonosBienvenida: "200% hasta 2.000€",
    tirosGratis: "150 FS",
    minDeposito: "10€",
    retiroMax: "Sin límite",
    tiempoRetiro: "24-48h",
    valoracion: 4.9,
    caracteristicas: ["Sin límites de apuesta", "Crypto aceptado", "+3.000 juegos"]
  },
  {
    nombre: "EuroVegas Online",
    licencia: "Curazao",
    bonosBienvenida: "300% hasta 3.000€",
    tirosGratis: "200 FS",
    minDeposito: "15€",
    retiroMax: "50.000€/mes",
    tiempoRetiro: "1-3 días",
    valoracion: 4.8,
    caracteristicas: ["VIP exclusivo", "Cashback 15%", "+4.500 slots"]
  },
  {
    nombre: "Royal Spins EU",
    licencia: "Gibraltar",
    bonosBienvenida: "150% hasta 1.500€",
    tirosGratis: "100 FS",
    minDeposito: "20€",
    retiroMax: "30.000€/mes",
    tiempoRetiro: "24h",
    valoracion: 4.7,
    caracteristicas: ["Soporte 24/7 español", "App móvil nativa", "Live casino premium"]
  },
  {
    nombre: "CryptoFortune",
    licencia: "Curazao",
    bonosBienvenida: "400% hasta 5 BTC",
    tirosGratis: "250 FS",
    minDeposito: "0.001 BTC",
    retiroMax: "Sin límite",
    tiempoRetiro: "Instant",
    valoracion: 4.9,
    caracteristicas: ["100% anónimo", "Sin verificación", "Retiros instantáneos"]
  },
  {
    nombre: "Mediterranean Bet",
    licencia: "Malta (MGA)",
    bonosBienvenida: "175% hasta 1.750€",
    tirosGratis: "75 FS",
    minDeposito: "10€",
    retiroMax: "25.000€/mes",
    tiempoRetiro: "48-72h",
    valoracion: 4.6,
    caracteristicas: ["Apuestas deportivas", "Poker integrado", "Torneos semanales"]
  }
];

const navItems = [
  { label: "Casinos", href: "#casinos" },
  { label: "Licencias", href: "#licencias" },
  { label: "Bonos", href: "#bonos" },
  { label: "Métodos Pago", href: "#pagos" },
  { label: "FAQ", href: "#faq" },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < Math.floor(rating) ? 'star-gold fill-current' : 'text-muted'}`}
        />
      ))}
      <span className="ml-2 text-sm font-semibold text-primary">{rating.toFixed(1)}</span>
    </div>
  );
};

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="nav-casino fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-cta flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">C</span>
              </div>
              <span className="font-heading text-lg font-semibold text-primary">Casinos EU</span>
            </a>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-border">
              {navItems.map((item) => (
                <a 
                  key={item.href} 
                  href={item.href} 
                  className="block py-3 nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Breadcrumbs */}
      <div className="pt-20 pb-4 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <nav aria-label="Breadcrumb" className="flex items-center text-sm">
            <a href="/" className="breadcrumb-item hover:text-primary transition-colors">Inicio</a>
            <ChevronRight className="breadcrumb-separator w-4 h-4" />
            <span className="text-primary">Casinos Fuera de España</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <header className="relative bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src={heroCasino} 
            alt="Ruleta de casino con fichas doradas flotando en ambiente lujoso" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <span className="badge-gold mb-4 inline-block">Actualizado Enero 2026</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              ¿Buscas Casinos Fuera de España?{' '}
              <span className="text-gradient-gold">Aquí Tienes la Verdad</span> que Nadie Te Cuenta
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Después de probar personalmente más de 50 casinos online europeos en 2026, te cuento cuáles realmente 
              valen la pena y cuáles son una pérdida de tiempo. Sin filtros, sin patrocinios ocultos.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#casinos" className="btn-casino">
                <Gift className="w-5 h-5 mr-2" />
                Ver Mejores Casinos 2026
              </a>
              <a href="#licencias" className="btn-casino-outline">
                Entender las Licencias
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>50+ casinos analizados</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span>12 años de experiencia</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Actualizado semanalmente</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Table of Contents */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-heading font-semibold mb-6 flex items-center gap-3">
              <div className="gold-dot"></div>
              Contenido de Esta Guía
            </h2>
            <div className="casino-card">
              <nav className="grid md:grid-cols-2 gap-2">
                <a href="#intro" className="toc-link">1. Por qué jugadores españoles eligen casinos europeos</a>
                <a href="#casinos" className="toc-link">2. Ranking: Mejores casinos fuera de España 2026</a>
                <a href="#licencias" className="toc-link">3. Licencias europeas: MGA, Curazao y Gibraltar</a>
                <a href="#bonos" className="toc-link">4. Bonos sin restricciones DGOJ</a>
                <a href="#pagos" className="toc-link">5. Métodos de pago y criptomonedas</a>
                <a href="#movil" className="toc-link">6. Casinos móviles y apps</a>
                <a href="#seguridad" className="toc-link">7. Seguridad y juego responsable</a>
                <a href="#faq" className="toc-link">8. Preguntas frecuentes</a>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="intro" className="section-casino">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Por Qué Miles de Españoles Ya Juegan en Casinos Europeos
            </h2>
            <div className="gold-line w-20 mb-8"></div>
            
            <div className="prose prose-invert max-w-none space-y-6 text-foreground/90">
              <p className="text-lg leading-relaxed">
                Mira, voy a ser directo contigo. Llevo más de una década analizando casinos online y hay algo que 
                muchas guías no te dicen: <strong>la regulación DGOJ, aunque bienintencionada, ha creado un mercado 
                extremadamente limitado</strong> para el jugador español. si quieres descubrir las plataformas más fiables y con mejores ventajas, te recomiendo consultar nuestro 
<a href="https://casinossinverificacion.com/casinos-online-fuera-de-espana/" target="_blank" rel="noopener">
ranking completo de casinos online fuera de españa
</a>, donde analizamos casinos europeos con retiros rápidos, bonos competitivos y seguridad garantizada.


              </p>
              
              <p className="leading-relaxed">
                ¿Sabías que en un casino con licencia española el bono máximo está topado al 100% de tu primer 
                depósito, con un límite de 200€? Mientras tanto, en un casino europeo con licencia de Malta puedes 
                encontrar bonos del 300% o 400% hasta varios miles de euros. Y eso es solo el principio.
              </p>

              <div className="casino-card my-8">
                <h3 className="text-xl font-heading font-semibold mb-4 text-primary">
                  Lo que la DGOJ no te deja hacer
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span>Apostar más de cierta cantidad por giro en slots (límites obligatorios)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span>Acceder a miles de juegos populares no homologados en España</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span>Recibir bonos competitivos que sí ofrecen casinos internacionales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span>Usar criptomonedas como método de pago principal</span>
                  </li>
                </ul>
              </div>

              <p className="leading-relaxed">
                No estoy diciendo que los casinos DGOJ sean malos. Simplemente ofrecen una experiencia muy diferente, 
                más restrictiva. Si eres un jugador experimentado que sabe gestionar su bankroll, las opciones 
                europeas te dan mucha más libertad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Casinos Ranking Section */}
      <section id="casinos" className="section-casino bg-navy/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="badge-gold mb-4 inline-block">Ranking 2026</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Los 5 Mejores Casinos Fuera de España
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Después de meses de pruebas reales con depósitos propios, estos son los casinos online europeos 
              que realmente cumplen lo que prometen.
            </p>
          </div>

          {/* Casino Table - Desktop */}
          <div className="hidden lg:block overflow-x-auto mb-12">
            <table className="casino-table">
              <thead>
                <tr>
                  <th className="min-w-[180px]">Casino</th>
                  <th>Licencia</th>
                  <th>Bono Bienvenida</th>
                  <th>Free Spins</th>
                  <th>Mín. Depósito</th>
                  <th>Retiro Máx.</th>
                  <th>Tiempo Retiro</th>
                  <th>Valoración</th>
                </tr>
              </thead>
              <tbody>
                {casinosData.map((casino, index) => (
                  <tr key={index}>
                    <td>
                      <div className="font-semibold text-foreground">{casino.nombre}</div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {casino.caracteristicas.slice(0, 2).map((c, i) => (
                          <span key={i} className="text-xs px-2 py-0.5 bg-muted rounded">{c}</span>
                        ))}
                      </div>
                    </td>
                    <td>
                      <span className="badge-burgundy">{casino.licencia}</span>
                    </td>
                    <td className="font-semibold text-primary">{casino.bonosBienvenida}</td>
                    <td>{casino.tirosGratis}</td>
                    <td>{casino.minDeposito}</td>
                    <td>{casino.retiroMax}</td>
                    <td>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        {casino.tiempoRetiro}
                      </span>
                    </td>
                    <td>
                      <StarRating rating={casino.valoracion} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Casino Cards - Mobile */}
          <div className="lg:hidden space-y-6">
            {casinosData.map((casino, index) => (
              <div key={index} className="casino-card">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground">{casino.nombre}</h3>
                    <span className="badge-burgundy mt-2 inline-block">{casino.licencia}</span>
                  </div>
                  <StarRating rating={casino.valoracion} />
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Bono:</span>
                    <div className="font-semibold text-primary">{casino.bonosBienvenida}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Free Spins:</span>
                    <div className="font-semibold">{casino.tirosGratis}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Mín. Depósito:</span>
                    <div>{casino.minDeposito}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Tiempo Retiro:</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {casino.tiempoRetiro}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {casino.caracteristicas.map((c, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-muted rounded">{c}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-xl bg-secondary/20 border border-secondary/30">
            <p className="text-sm text-muted-foreground flex items-start gap-3">
              <Award className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground">Metodología:</strong> Cada casino ha sido probado durante al menos 
                2 semanas con depósitos reales. Evaluamos velocidad de retiro, calidad del soporte, variedad de juegos 
                y transparencia en los términos de bonos.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Licencias Section */}
      <section id="licencias" className="section-casino">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="badge-gold mb-4 inline-block">Regulación</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  Licencias Europeas: Tu Garantía de Seguridad
                </h2>
                <div className="gold-line w-20 mb-8"></div>
                
                <div className="space-y-6 text-foreground/90">
                  <p className="leading-relaxed">
                    Aquí está el punto crucial que muchos ignoran: no todos los casinos fuera de España son iguales. 
                    La diferencia entre un casino seguro y una estafa está en la licencia.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-cta flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Malta Gaming Authority (MGA)</h4>
                        <p className="text-sm text-muted-foreground">La más respetada de Europa. Auditorías estrictas, fondos de jugadores protegidos, y resolución de disputas garantizada.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-cta flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Gibraltar Gambling Commission</h4>
                        <p className="text-sm text-muted-foreground">Regulación británica de alto nivel. Ideal para casinos que operan en mercados europeos premium.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-cta flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Curazao eGaming</h4>
                        <p className="text-sm text-muted-foreground">Más flexible, permite criptomonedas y menos restricciones. Válida para casinos que aceptan jugadores españoles.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={licenciasEuropeas} 
                  alt="Escudo dorado con estrellas europeas representando licencias de juego seguras" 
                  className="rounded-xl shadow-elevated w-full"
                />
                <div className="absolute -bottom-4 -right-4 casino-card p-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-8 h-8 text-primary" />
                    <div>
                      <div className="font-semibold text-foreground">100% Verificado</div>
                      <div className="text-xs text-muted-foreground">Todos nuestros casinos tienen licencia activa</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonos Section */}
      <section id="bonos" className="section-casino bg-navy/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src={bonosCasino} 
                  alt="Caja de regalo roja con monedas doradas y fichas de casino representando bonos de bienvenida" 
                  className="rounded-xl shadow-elevated w-full"
                />
              </div>
              
              <div className="order-1 md:order-2">
                <span className="badge-gold mb-4 inline-block">Promociones</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  Bonos Sin las Restricciones DGOJ
                </h2>
                <div className="gold-line w-20 mb-8"></div>
                
                <div className="space-y-6 text-foreground/90">
                  <p className="leading-relaxed">
                    Esta es probablemente la razón principal por la que tantos jugadores españoles miran hacia 
                    casinos europeos. La diferencia en bonos es abismal.
                  </p>
                  
                  <div className="casino-card">
                    <h4 className="font-semibold text-foreground mb-4">Comparativa Real 2026</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <span className="text-muted-foreground">Casino DGOJ típico:</span>
                        <span className="font-semibold">100% hasta 200€</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <span className="text-muted-foreground">Casino MGA europeo:</span>
                        <span className="font-semibold text-primary">200-300% hasta 2.000€</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-muted-foreground">Casino crypto Curazao:</span>
                        <span className="font-semibold text-primary">400% hasta 5 BTC</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Consejo personal:</strong> Siempre lee los requisitos de 
                    apuesta (wagering). Un bono del 400% con x60 wagering puede ser peor que uno del 100% con x30.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Métodos de Pago Section */}
      <section id="pagos" className="section-casino">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="badge-gold mb-4 inline-block">Transacciones</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Métodos de Pago y Criptomonedas
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Una de las grandes ventajas de los casinos europeos es la variedad de opciones para 
                depositar y retirar tu dinero.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="casino-card">
                  <div className="flex items-center gap-4 mb-4">
                    <CreditCard className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-heading font-semibold">Métodos Tradicionales</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/90">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Visa y Mastercard (depósitos instantáneos)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Skrill y Neteller (retiros en 24h)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Transferencia bancaria (3-5 días)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Paysafecard para mayor privacidad
                    </li>
                  </ul>
                </div>

                <div className="casino-card border-gold-subtle">
                  <div className="flex items-center gap-4 mb-4">
                    <Gift className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-heading font-semibold">Criptomonedas</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Mi método preferido para casinos fuera de España. Transacciones anónimas, sin 
                    comisiones bancarias y retiros casi instantáneos.
                  </p>
                  <ul className="space-y-2 text-sm text-foreground/90">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Bitcoin (BTC) - El más aceptado
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Ethereum (ETH) - Rápido y económico
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      USDT/USDC - Stablecoins sin volatilidad
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Litecoin - Fees mínimos
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <img 
                  src={metodosPago} 
                  alt="Métodos de pago casino incluyendo tarjetas de crédito Bitcoin y Ethereum" 
                  className="rounded-xl shadow-elevated w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casino Móvil Section */}
      <section id="movil" className="section-casino bg-navy/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="badge-gold mb-4 inline-block">Móvil</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  Juega Donde Quieras: Casinos Móviles 2026
                </h2>
                <div className="gold-line w-20 mb-8"></div>
                
                <div className="space-y-6 text-foreground/90">
                  <p className="leading-relaxed">
                    Más del 70% de mis sesiones de prueba las hago desde el móvil. La buena noticia es que los 
                    mejores casinos europeos han invertido fuertemente en optimización móvil.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Smartphone className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground">HTML5 optimizado</h4>
                        <p className="text-sm text-muted-foreground">Todos los juegos funcionan directamente en el navegador, sin descargas.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Smartphone className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground">Apps nativas (algunos casinos)</h4>
                        <p className="text-sm text-muted-foreground">Para Android principalmente, ya que Apple restringe apps de gambling.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Smartphone className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground">Live casino en móvil</h4>
                        <p className="text-sm text-muted-foreground">Ruleta, blackjack y baccarat en vivo con calidad HD.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <img 
                  src={casinoMovil} 
                  alt="Mano sosteniendo smartphone con juego de slots de casino mostrando símbolos 777" 
                  className="rounded-xl shadow-elevated w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seguridad Section */}
      <section id="seguridad" className="section-casino">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="badge-gold mb-4 inline-block">Importante</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Seguridad y Juego Responsable
              </h2>
              <div className="gold-line w-20 mx-auto mb-6"></div>
            </div>

            <div className="space-y-6 text-foreground/90">
              <p className="leading-relaxed">
                Mira, puedo recomendarte los mejores casinos del mundo, pero nada de eso importa si no juegas 
                de forma responsable. Después de tantos años en esta industria, he visto de todo, y créeme 
                cuando te digo que el gambling puede ser peligroso si no estableces límites claros.
              </p>

              <div className="casino-card border-secondary/30">
                <h3 className="text-xl font-heading font-semibold mb-4 text-secondary">
                  Mis reglas personales (y te sugiero que las adoptes)
                </h3>
                <ol className="space-y-3 list-decimal list-inside">
                  <li><strong>Nunca juegues dinero que no puedas perder.</strong> Es la regla de oro.</li>
                  <li><strong>Establece un presupuesto mensual</strong> y respétalo religiosamente.</li>
                  <li><strong>No persigas pérdidas.</strong> Si pierdes tu límite diario, para.</li>
                  <li><strong>El alcohol y el gambling no se mezclan.</strong> Punto.</li>
                  <li><strong>Usa las herramientas de autoexclusión</strong> si sientes que pierdes el control.</li>
                </ol>
              </div>

              <p className="leading-relaxed">
                Los casinos europeos serios ofrecen herramientas de juego responsable: límites de depósito, 
                autoexclusión temporal, y acceso a organizaciones de ayuda. Si en algún momento sientes que 
                el juego deja de ser entretenimiento, busca ayuda profesional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-casino bg-navy/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="badge-gold mb-4 inline-block">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Preguntas Frecuentes sobre Casinos Fuera de España
              </h2>
              <p className="text-muted-foreground">
                Las dudas más comunes que me llegan de jugadores españoles.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="faq-item px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  ¿Es legal jugar en casinos fuera de España?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  En España, la DGOJ regula el juego online, pero no es ilegal que un ciudadano español 
                  acceda a casinos con licencias europeas de Malta, Curazao o Gibraltar. No existe sanción 
                  para el jugador individual. La responsabilidad recae en los operadores que no tienen 
                  licencia española por ofrecer servicios en el mercado regulado.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="faq-item px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  ¿Qué ventajas tienen los casinos europeos frente a los DGOJ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Las principales ventajas son: bonos más generosos (200-500% vs 100% máximo DGOJ), sin 
                  límites de apuesta obligatorios, catálogo de juegos mucho más amplio, acceso a slots 
                  populares no disponibles en España, y posibilidad de usar criptomonedas. Además, muchos 
                  ofrecen programas VIP más atractivos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="faq-item px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  ¿Cómo verifico que un casino europeo es seguro?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Comprueba que tenga licencia válida y verificable (MGA Malta, Curazao o Gibraltar), 
                  encriptación SSL (candado en la URL), proveedores de juegos reconocidos (NetEnt, 
                  Microgaming, Pragmatic Play), y busca reseñas en foros de jugadores. Evita casinos 
                  sin información clara de licencia o con demasiadas quejas de pagos pendientes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="faq-item px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  ¿Puedo usar criptomonedas en casinos fuera de España?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Sí, muchos casinos europeos, especialmente los con licencia de Curazao, aceptan 
                  Bitcoin, Ethereum, USDT y otras criptomonedas. Esto ofrece transacciones más rápidas, 
                  mayor privacidad, y a menudo bonos especiales para depósitos crypto. Es mi método 
                  preferido por la velocidad de los retiros.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="faq-item px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  ¿Cuánto tiempo tardan los retiros en casinos europeos?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Depende del método: e-wallets como Skrill o Neteller procesan en 24-48 horas, las 
                  criptomonedas pueden ser casi instantáneas (minutos a horas), y las transferencias 
                  bancarias tardan 3-5 días laborables. La mayoría de casinos serios procesan solicitudes 
                  en menos de 24 horas, aunque el tiempo total depende del método elegido.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="faq-item px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  ¿Necesito VPN para acceder a casinos europeos desde España?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Generalmente no es necesario. Los casinos con licencias europeas que aceptan jugadores 
                  españoles permiten el acceso directo. Sin embargo, usar VPN puede causar problemas 
                  durante la verificación de cuenta y los retiros, ya que los casinos pueden bloquear 
                  cuentas que detecten cambios sospechosos de IP.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section id="autor" className="section-casino">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="author-box">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <img 
                  src={autorImg} 
                  alt="Carlos Martínez experto en casinos online y analista de iGaming" 
                  className="w-32 h-32 rounded-full object-cover border-2 border-gold-subtle"
                />
                <div className="text-center md:text-left">
                  <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                    <span className="badge-gold">Autor</span>
                    <span className="badge-burgundy">Verificado</span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">Carlos Martínez</h3>
                  <p className="text-primary font-medium mb-4">Experto en iGaming | Analista de Casinos Online</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Llevo más de 12 años analizando casinos online en Europa. He trabajado como consultor 
                    para operadores con licencia MGA y actualmente me dedico a escribir guías independientes 
                    para ayudar a jugadores españoles a tomar decisiones informadas. Todos mis análisis se 
                    basan en pruebas reales con mi propio dinero.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-4 justify-center md:justify-start text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      50+ casinos probados
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Depósitos propios
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Sin patrocinios
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-cta flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">C</span>
                </div>
                <span className="font-heading text-lg font-semibold text-primary">Casinos Fuera de España</span>
              </div>
              <p className="text-muted-foreground text-sm max-w-lg mx-auto">
                Guía independiente de casinos online europeos para jugadores españoles. 
                Información actualizada y análisis imparciales desde 2014.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-8 border-t border-border text-center">
              <p className="text-xs text-muted-foreground mb-4">
                <strong>Aviso:</strong> El juego puede ser adictivo. Juega con responsabilidad. Solo para mayores de 18 años.
              </p>
              <p className="text-xs text-muted-foreground">
                © 2026 Casinos Fuera de España. Todos los derechos reservados. 
                Última actualización: Enero 2026.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
