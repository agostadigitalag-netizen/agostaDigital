import { Menu, X, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const JOTFORM_FORM_URL = 'https://form.jotform.com/253346605890058';

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/logo_sfondo_bianco.png" alt="Agosta Digital Agency Logo" className="w-36 h-36 object-contain" />
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 bg-clip-text text-transparent">
                Agosta Digital
                <br />
                <h2 className="text-1xl md:text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 bg-clip-text text-transparent">
                Agency
                 </h2>
              </h1>
            </div>

            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('servizi')} className="text-purple-600 hover:text-purple-800 font-semibold transition-colors">
                Servizi
              </button>
              <button onClick={() => scrollToSection('chi-siamo')} className="text-purple-600 hover:text-purple-800 font-semibold transition-colors">
                Chi Sono
              </button>
              <button onClick={() => scrollToSection('contatti')} className="text-purple-600 hover:text-purple-800 font-semibold transition-colors">
                Contattami
              </button>
            </nav>

            <button
              className="md:hidden text-purple-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-3">
              <button onClick={() => scrollToSection('servizi')} className="text-purple-600 hover:text-purple-800 font-semibold transition-colors text-left">
                Servizi
              </button>
              <button onClick={() => scrollToSection('chi-siamo')} className="text-purple-600 hover:text-purple-800 font-semibold transition-colors text-left">
                Chi Sono
              </button>
              <button onClick={() => scrollToSection('contatti')} className="text-purple-600 hover:text-purple-800 font-semibold transition-colors text-left">
                Contattami
              </button>
            </nav>
          )}
        </div>
      </header>

      <section className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 text-white py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            La Tua Crescita Digitale Inizia Qui
          </h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            Aumentiamo la tua visibilità online, trasformiamo i tuoi social e creiamo strategie che portano risultati reali.
          </p>
        </div>
      </section>

      <section id="servizi" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-600 text-center mb-12">
            I Nostri Servizi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden service-card-hover transition-all duration-300 cursor-pointer">
              <img
                src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Gestione Social"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Gestione Social</h3>
                <p className="text-gray-600 leading-relaxed">
                  Gestiamo i tuoi profili social con contenuti strategici, creativi e progettati per aumentare follower e interazioni.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden service-card-hover transition-all duration-300 cursor-pointer">
              <img
                src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Creazione Siti Internet"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Creazione Siti Internet</h3>
                <p className="text-gray-600 leading-relaxed">
                  Realizziamo siti moderni, veloci e ottimizzati, pensati per convertire e valorizzare il tuo brand.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden service-card-hover transition-all duration-300 cursor-pointer">
              <img
                src="https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Creazione QR Code"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Creazione QR Code</h3>
                <p className="text-gray-600 leading-relaxed">
                  Generiamo QR Code professionali per campagne marketing, menù digitali, landing page e molto altro.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden service-card-hover transition-all duration-300 cursor-pointer">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Strategie Social"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Strategie Social</h3>
                <p className="text-gray-600 leading-relaxed">
                  Studiamo e applichiamo strategie di crescita per aumentare visibilità, engagement e vendite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="chi-siamo" className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 text-white py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Chi Sono
          </h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            Sono Flavia Agosta e mi sono laureata in Informatica presso l’Università di Catania nel 2011 e dal 2012 lavoro come programmatrice a Milano, collaborando con diverse aziende nello sviluppo di software e soluzioni digitali personalizzate. Questa esperienza mi ha permesso di affinare competenze tecniche solide, una forte capacità di analisi e una visione strategica orientata ai risultati.
            Negli anni ho imparato quanto sia importante unire la tecnologia alla comunicazione: per questo oggi ho scelto di mettere le mie competenze digitali al servizio di chi desidera far crescere la propria presenza online e così ho creato la mia Agenzia. Supporto professionisti, piccole attività e aziende nella definizione di strategie efficaci per i Social Media, aiutandoli a comunicare in modo chiaro, autentico e professionale.
            Lavoro principalmente da casa, il che mi consente di dedicare tempo, cura e creatività a ogni progetto che seguo. Credo nella collaborazione, nella trasparenza e nella costruzione di percorsi digitali su misura, capaci di valorizzare davvero l’identità di ogni cliente.
            La mia attività ha sede a Cusago, da cui opero quotidianamente per accompagnare le persone in un percorso di crescita digitale, combinando la precisione dell’informatica con l’immediatezza della comunicazione online.
          </p>
        </div>
      </section>

      <section id="contatti" className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="space-y-8">
              <a className="bg-white rounded-2xl shadow-xl p-6 flex items-center gap-4 hover:shadow-2xl transition-shadow w-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 via-purple-600 to-blue-500 text-white flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-gray-500">Telefono</div>
                  <div className="text-lg font-semibold text-gray-900">3500724206</div>
                </div>
              </a>
              <a className="bg-white rounded-2xl shadow-xl p-6 flex items-center gap-4 hover:shadow-2xl transition-shadow w-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 via-purple-600 to-blue-500 text-white flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="text-lg font-semibold text-gray-900 break-words">agostadigitalag@gmail.com</div>
                </div>
              </a>
            </div>
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden">
              <iframe
                src={JOTFORM_FORM_URL}
                title="Modulo di contatto JotForm"
                className="w-full h-[600px]"
                frameBorder="0"
                allow="geolocation; microphone; camera"
              ></iframe>
            </div>
          </div>
          <form
            action="mailto:agostadigitalag@gmail.com?subject=invio%20da%20sito"
            method="POST"
            encType="text/plain"
            className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
          >
           
          </form>
        </div>
      </section>

      <footer className="bg-pink-50 py-12 mt-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="text-center md:text-left">
              <p className="text-gray-600">
                © 2025 Agosta Digital Agency - Social Media Marketing, Siti Web, SEO, Branding, Digital Strategy, QR Code, Gestione Social
              </p>
              <p className="text-gray-600 mt-2">
                Tel: <a href="tel:3500724206" className="text-purple-600 hover:text-purple-800 font-semibold transition-colors">3500724206</a>
              </p>
              <p className="text-gray-600">
                Email: <a href="mailto:agostadigitalag@gmail.com" className="text-purple-600 hover:text-purple-800 font-semibold transition-colors">agostadigitalag@gmail.com</a>
              </p>
            </div>
            <div className="text-center md:text-right space-x-6">
              <a
                href="https://www.iubenda.com/privacy-policy/70430177"
                className="iubenda-white iubenda-noiframe iubenda-embed inline-block"
                title="Privacy Policy"
              >
                Privacy Policy
              </a>
              <a href="#cookies" className="text-purple-600 hover:text-purple-800 font-semibold transition-colors inline-block">
                
              </a>
              <a
                href="https://www.iubenda.com/privacy-policy/70430177/cookie-policy"
                className="iubenda-white iubenda-noiframe iubenda-embed inline-block"
                title="Cookie Policy"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
