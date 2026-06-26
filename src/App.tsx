import React, { useState } from "react";
import FaroVitalLogo from "./FaroVitalLogo";
import FaqSection from "./FaqSection";
import FedeveFooter from "./FedeveFooter";
import { HelpCircle, ExternalLink, Settings, ShieldCheck, Landmark, Heart, Check, Scale, BookOpen, Eye, Info } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  // Configurable Kobo Collect links
  const [formLink, setFormLink] = useState("https://ee-eu.kobotoolbox.org/x/4af7rguR");
  const [mapLink, setMapLink] = useState("https://eu.kobotoolbox.org/#/forms/a6fdweWwKPuHmSmz8FqzGd/data/map");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [tempFormLink, setTempFormLink] = useState(formLink);
  const [tempMapLink, setTempMapLink] = useState(mapLink);
  const [isSavedAlert, setIsSavedAlert] = useState(false);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setFormLink(tempFormLink);
    setMapLink(tempMapLink);
    setIsSavedAlert(true);
    setTimeout(() => setIsSavedAlert(false), 3000);
    setIsSettingsOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-[#0d243c]" id="faro-vital-app-root">
      
      {/* HEADER & TOP BANNER */}
      <header className="relative bg-gradient-to-b from-[#e0f2fe] via-[#f0f9ff] to-slate-50 overflow-hidden pt-6 pb-16 px-4" id="hero-header-section">
        {/* Absolute Background Lighting effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-sky-400/20 to-blue-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Global Nav Bar / Federation Banner */}
        <div className="max-w-7xl mx-auto flex justify-between items-center mb-12 relative z-10" id="global-nav">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-2xl shadow-sm border border-[#e0f2fe]">
            <Scale className="w-4 h-4 text-[#3b82f6]" />
            <span className="text-[10px] font-extrabold text-[#0d243c] tracking-widest uppercase">
              Coalición Ciudadana • Faro Vital
            </span>
          </div>

          {/* Quick Config Button */}
          <button
            onClick={() => {
              setTempFormLink(formLink);
              setTempMapLink(mapLink);
              setIsSettingsOpen(!isSettingsOpen);
            }}
            className="flex items-center gap-1.5 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 font-bold px-3 py-2 rounded-xl text-xs shadow-sm border border-slate-200 transition-all cursor-pointer"
            id="configure-links-trigger"
          >
            <Settings className="w-3.5 h-3.5 animate-spin-slow" />
            Configurar Enlaces
          </button>
        </div>

        {/* Settings Modal (Overlay-like Card) */}
        <AnimatePresence>
          {isSettingsOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-xl mx-auto mb-10 bg-white p-6 rounded-3xl shadow-xl border border-[#e0f2fe] relative z-20 text-left"
              id="settings-form-panel"
            >
              <h3 className="text-sm font-extrabold text-[#0d243c] uppercase tracking-wider mb-2 flex items-center gap-2">
                <Settings className="w-4 h-4 text-[#3b82f6]" />
                Personalizar Enlaces de Kobo Collect
              </h3>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                Puedes reescribir estos enlaces para que correspondan a tus propios formularios y mapas activos de Kobo Collect. Los cambios se aplicarán inmediatamente a los botones de la landing page.
              </p>
              
              <form onSubmit={handleSaveSettings} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 mb-1">
                    Enlace del Formulario de Registro (Kobo Collect Form)
                  </label>
                  <input
                    type="url"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#3b82f6] focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-slate-800 outline-none transition-all font-mono"
                    value={tempFormLink}
                    onChange={(e) => setTempFormLink(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 mb-1">
                    Enlace del Mapa en Vivo (Kobo Público)
                  </label>
                  <input
                    type="url"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#3b82f6] focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-slate-800 outline-none transition-all font-mono"
                    value={tempMapLink}
                    onChange={(e) => setTempMapLink(e.target.value)}
                    required
                  />
                </div>

                <div className="flex gap-2.5 pt-2">
                  <button
                    type="submit"
                    className="bg-[#0d243c] hover:bg-blue-900 text-white font-bold px-4 py-2 rounded-xl text-xs transition-all shadow cursor-pointer"
                  >
                    Guardar Cambios
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsSettingsOpen(false)}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold px-4 py-2 rounded-xl text-xs transition-all cursor-pointer"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Global Save Alert */}
        <AnimatePresence>
          {isSavedAlert && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white text-xs font-bold px-5 py-3 rounded-2xl shadow-xl z-50 flex items-center gap-2 border border-emerald-500"
              id="links-saved-toast"
            >
              <Check className="w-4 h-4" />
              ¡Enlaces actualizados correctamente en toda la landing page!
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Central Block */}
        <div className="max-w-4xl mx-auto text-center relative z-10" id="hero-main-container">
          
          {/* Logo Component Replicating exactly the provided image */}
          <div className="mb-8 flex justify-center hover:scale-105 transition-all duration-300" id="hero-logo-wrapper">
            <FaroVitalLogo size="lg" showText={true} />
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0d243c] tracking-tight font-sans mb-6 max-w-3xl mx-auto leading-none" id="hero-title">
            Faro Vital: <span className="text-[#3b82f6]">Red de Apoyo</span> y Sitios de Acopio en Tiempo Real.
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed mb-8" id="hero-subtitle">
            Información verificada, transparente y al alcance de todos. Unidos, hacemos la diferencia.
          </p>

          {/* Core Call to Actions */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto" id="hero-core-ctas">
            <a
              href={formLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#3b82f6] hover:bg-blue-700 text-white font-extrabold px-8 py-4.5 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-sm tracking-wide text-center"
              id="hero-cta-form"
            >
              Reportar Sitio de Acopio
            </a>
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#0d243c] font-extrabold px-8 py-4.5 rounded-2xl shadow hover:shadow-md border border-slate-200 hover:-translate-y-0.5 transition-all duration-200 text-sm tracking-wide text-center"
              id="hero-cta-map"
            >
              <ExternalLink className="w-4 h-4 text-[#3b82f6]" />
              Ver Mapa de Centros Verificados
            </a>
          </div>

          <div className="mt-6 flex justify-center items-center gap-2 text-xs text-slate-400 font-medium" id="hero-no-profit-badge">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
            <span>Iniciativa ciudadana independiente y sin fines de lucro</span>
          </div>

        </div>
      </header>

      {/* METRIC SECTION - EXTREMELY SIMPLE & MINIMALIST */}
      <section className="max-w-3xl mx-auto px-4 md:px-6 -mt-6 mb-16 relative z-10" id="single-metric-section">
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-sky-100 grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-center md:text-left">
          
          {/* Centered state coordination status */}
          <div className="flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-slate-100 pb-6 md:pb-0 md:pr-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 bg-emerald-50 text-emerald-600 rounded-lg">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Estado Coordinado
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-extrabold text-[#0d243c] tracking-tight">0</span>
              <span className="text-sm font-semibold text-slate-400">activos</span>
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-xs">
              Centros de acopio verificados actualmente en el mapa interactivo.
            </p>
          </div>

          {/* Quick status information */}
          <div className="flex flex-col items-center md:items-start">
            <span className="bg-sky-50 text-sky-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2">
              Red Monitoreada
            </span>
            <h3 className="text-sm font-bold text-[#0d243c] mb-1">
              Filtro y Transparencia Activa
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Garantizamos que cada centro que visualices en nuestro mapa público pase previamente por el riguroso filtro de verificación y validación voluntaria de nuestra coalición ciudadana.
            </p>
          </div>

        </div>
      </section>

      {/* DETAILED EXPLANATION OF THE INITIATIVE & METHODOLOGY */}
      <main className="max-w-5xl mx-auto px-4 md:px-6 mb-20" id="initiative-details-section">
        
        {/* SITUATIONAL CONTEXT CARD: ¿QUÉ PASÓ? */}
        <div className="bg-[#fffbeb] border border-amber-200 rounded-3xl p-6 md:p-8 mb-8 shadow-sm flex flex-col md:flex-row gap-6 items-start" id="situational-context-card">
          <div className="bg-amber-100 text-amber-800 p-3 rounded-2xl shrink-0" id="context-icon-badge">
            <span className="text-xl font-bold font-mono">24J</span>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-extrabold text-amber-800 tracking-wider uppercase">
              Contexto Situacional • Reporte Factual
            </h3>
            <h4 className="text-lg font-bold text-[#0d243c]">
              Evento Sísmico del 24 de Junio de 2026
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              El 24 de junio de 2026, poco después de las 6 de la tarde, dos terremotos sacudieron el estado Yaracuy, en el norte de Venezuela, con apenas 39 segundos de diferencia: el primero de magnitud 7,2 y el segundo de 7,5. El epicentro estuvo cerca de San Felipe, a unos 200 kilómetros de Caracas. Los sismos se sintieron en gran parte del país y causaron el colapso de edificios en varias ciudades, incluyendo Caracas. Se registraron réplicas en las horas siguientes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Main text block explaining the initiative */}
          <div className="md:col-span-7 bg-white rounded-3xl p-8 shadow-md border border-slate-100 flex flex-col gap-6" id="about-initiative-block">
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 bg-blue-50 text-[#3b82f6] rounded-2xl">
                <Info className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-sky-600 uppercase tracking-widest block">
                  Propósito de la Coalición
                </span>
                <h2 className="text-2xl font-extrabold text-[#0d243c] tracking-tight font-sans">
                  ¿Qué es Faro Vital?
                </h2>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              <strong>Faro Vital</strong> es una iniciativa abierta, independiente y de carácter ciudadano, sin fines de lucro, impulsada por una coalición de la sociedad civil. Este proyecto nace de la unión de voluntades y capacidades técnicas —lideradas por <strong>Defensores WASH</strong> y con el respaldo de la <strong>Federación de Estudiantes de Derecho de Venezuela (FEDEVE)</strong>— con el objetivo común de centralizar información veraz y accesible para nuestra comunidad.
            </p>

            <p className="text-xs text-slate-500 leading-relaxed">
              Nuestra coalición cree firmemente en la fuerza de la colaboración: cuando la ciudadanía se organiza y los datos se vuelven transparentes, creamos redes de apoyo más sólidas. En Faro Vital, la tecnología está al servicio de la gente para potenciar el apoyo mutuo y facilitar que las instituciones públicas, organizaciones y entes de coordinación puedan sumarse y articular esfuerzos de forma ordenada.
            </p>

            {/* Crucial declarations styled elegantly */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3" id="coalition-disclaimers">
              <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Declaraciones Clave de la Plataforma:
              </h4>
              <ul className="space-y-2 text-xs text-slate-600 list-disc list-inside">
                <li><strong>Origen Ciudadano:</strong> La data recopilada no nos pertenece; proviene directamente de ciudadanos comprometidos que han verificado la información en sus propias localidades.</li>
                <li><strong>Neutralidad Absoluta:</strong> La información provista no es suministrada por ningún partido político ni por el gobierno de Venezuela.</li>
                <li><strong>Filtro Voluntario:</strong> Actuamos meramente como un canal de verificación y filtrado voluntario de los datos, con un carácter estrictamente no lucrativo.</li>
                <li><strong>Democratización de Espacios:</strong> Buscamos descentralizar y democratizar los distintos espacios de acopio y ayuda que se habilitan en el país para que la información esté al alcance de todos en igualdad de condiciones.</li>
                <li><strong>Solidaridad e Integración:</strong> Mantenemos un espíritu de total colaboración, sirviendo como puente de información incluso para que las instituciones públicas coordinen debidamente con estos espacios independientes de apoyo civil.</li>
              </ul>
            </div>
          </div>

          {/* Methodology Block */}
          <div className="md:col-span-5 bg-gradient-to-b from-[#0d243c] to-[#0a1b2d] text-white rounded-3xl p-8 shadow-xl relative overflow-hidden" id="methodology-block">
            {/* Ambient visual touch */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500 opacity-10 rounded-full blur-2xl" />

            <div className="relative z-10 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-sky-300" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-sky-300">
                  El Servicio
                </h3>
              </div>

              <h4 className="text-xl font-extrabold tracking-tight">
                ¿Cómo funciona el registro y la verificación transparente?
              </h4>

              <div className="space-y-4 text-xs text-slate-300" id="methodology-steps">
                
                <div className="flex gap-3 items-start">
                  <span className="w-5 h-5 rounded-full bg-[#1e3a5f] text-sky-300 flex items-center justify-center font-bold text-[10px] shrink-0 border border-blue-900">
                    1
                  </span>
                  <div>
                    <h5 className="font-bold text-white mb-0.5">Registro Ciudadano Directo</h5>
                    <p className="leading-relaxed text-[11px]">
                      Los ciudadanos u organizaciones reportan su espacio de acopio de forma autónoma en el sistema Kobo Collect ingresando su ubicación, el responsable, los insumos y el horario de atención voluntaria.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <span className="w-5 h-5 rounded-full bg-[#1e3a5f] text-sky-300 flex items-center justify-center font-bold text-[10px] shrink-0 border border-blue-900">
                    2
                  </span>
                  <div>
                    <h5 className="font-bold text-white mb-0.5">Validación de Datos</h5>
                    <p className="leading-relaxed text-[11px]">
                      Nuestra red de veedores voluntarios evalúa la data para asegurar transparencia, ubicar al responsable, certificar la credibilidad en redes oficiales y confirmar los detalles operativos del centro.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <span className="w-5 h-5 rounded-full bg-[#1e3a5f] text-sky-300 flex items-center justify-center font-bold text-[10px] shrink-0 border border-blue-900">
                    3
                  </span>
                  <div>
                    <h5 className="font-bold text-white mb-0.5">Democratización Inmediata</h5>
                    <p className="leading-relaxed text-[11px]">
                      Toda la información es de acceso abierto y libre, visible en el mapa interactivo para asegurar transparencia total.
                    </p>
                  </div>
                </div>

              </div>

              <div className="pt-4 border-t border-blue-900/60 mt-2 flex flex-col gap-2">
                <a
                  href={formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#3b82f6] hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-xl text-xs transition-all text-center flex items-center justify-center gap-1.5"
                >
                  Ir al Formulario de Registro
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 md:px-6 mb-24" id="faqs-accordion-section">
        <FaqSection />
      </section>

      {/* FOOTER */}
      <FedeveFooter />

    </div>
  );
}
