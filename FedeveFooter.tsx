import React from "react";
import { Scale, Heart, ShieldAlert, BookOpen, ExternalLink, Activity } from "lucide-react";

export default function FedeveFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0d243c] text-white pt-16 pb-12 px-6 border-t border-blue-950 relative overflow-hidden" id="fedeve-footer-section">
      {/* Subtle backdrop glows */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-900 opacity-20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10" id="footer-content-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-blue-900" id="footer-grid">
          
          {/* Column 1: Branding & Affiliation (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-4" id="footer-branding-col">
            <div className="flex items-center gap-3">
              <div className="bg-[#1e3a5f] p-2.5 rounded-xl text-sky-300 border border-blue-900">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold tracking-tight text-white uppercase">
                  FARO VITAL
                </h3>
                <span className="text-[10px] font-bold text-sky-300 tracking-wider block uppercase">
                  Coalición Ciudadana e Independiente
                </span>
              </div>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mt-2">
              Faro Vital es una iniciativa abierta, independiente y de carácter ciudadano, sin fines de lucro, impulsada por una coalición de la sociedad civil. Este proyecto nace de la unión de voluntades y capacidades técnicas —lideradas por <strong>Defensores WASH</strong> y con el respaldo de la <strong>Federación de Estudiantes de Derecho de Venezuela (FEDEVE)</strong>— con el objetivo común de centralizar información veraz y accesible para nuestra comunidad.
            </p>

            <div className="flex items-center gap-2 text-[10px] text-amber-400 bg-blue-950/40 border border-blue-900 px-3 py-2 rounded-xl max-w-xs mt-2 font-medium">
              <ShieldAlert className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <span>Iniciativa netamente humanitaria, apolítica y neutral.</span>
            </div>
          </div>

          {/* Column 2: Legal & Academic Mission (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-4" id="footer-mission-col">
            <h4 className="text-xs font-bold text-sky-300 uppercase tracking-widest">
              Declaración de Responsabilidad y Datos Abiertos
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Es importante destacar que la data recopilada no nos pertenece; se trata de una labor sin fines de lucro donde los datos provienen de ciudadanos que han verificado la información de manera directa. 
              Faro Vital actúa estrictamente como un filtro voluntario. La información no es suministrada por ningún partido político ni por el gobierno de Venezuela. Nuestro objetivo es promover la democratización de los distintos espacios habilitados para este fin en el país.
            </p>
            <div className="flex gap-4 text-xs text-sky-200 mt-2" id="fedeve-values">
              <div className="flex items-center gap-1.5 font-bold">
                <Heart className="w-3.5 h-3.5 text-rose-500" />
                <span>Solidaridad Ciudadana</span>
              </div>
              <div className="flex items-center gap-1.5 font-bold">
                <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                <span>Neutralidad Imparcial</span>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links & Contact (3 cols) */}
          <div className="md:col-span-3 flex flex-col gap-4" id="footer-links-col">
            <h4 className="text-xs font-bold text-sky-300 uppercase tracking-widest">
              Canales Oficiales
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a
                  href="https://www.fedeve.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-all flex items-center gap-1.5 font-semibold text-slate-300"
                >
                  Portal de FEDEVE
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <span className="block font-medium text-slate-500">Coordinación de Datos:</span>
                <span className="text-sky-200 font-mono">datos@faro-vital.org</span>
              </li>
              <li>
                <span className="block font-medium text-slate-500">Consultas de la Coalición:</span>
                <span className="text-sky-200 font-mono">contacto@faro-vital.org</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500" id="footer-copyright-row">
          <div>
            <span>© {currentYear} <strong>Faro Vital VE</strong>. Iniciativa abierta e independiente. Sin fines de lucro.</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Coordinación técnica:</span>
            <span className="text-slate-300 font-bold bg-[#1e3a5f] px-2.5 py-1 rounded-md text-[10px] tracking-wide uppercase border border-blue-900">
              Defensores WASH & FEDEVE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
