import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "¿Cómo sé que la información en Faro Vital es verídica?",
      answer: "Nuestro equipo de veedores está verificando continuamente toda la data recolectada de manera voluntaria y sin fines de lucro. Además, el proceso es 100% transparente y cualquier usuario puede consultar los datos del registro original directamente al acceder al sistema Kobo Collect. Para ser verificado e incorporado con plenas garantías, cada centro de acopio debe cumplir con los siguientes criterios rigurosos: 1) Transparencia absoluta en su gestión, 2) Identificación clara de la persona responsable de la actividad, 3) Debe tratarse de una organización civil, ente del estado o empresa reconocida, 4) La convocatoria debe estar publicada en sus redes sociales oficiales, 5) La entidad debe contar con probada credibilidad, 6) Debe existir un canal directo de comunicación con las personas afectadas, y 7) Debe especificarse de forma explícita el horario en el cual los voluntarios estarán recibiendo el apoyo de manera voluntaria.",
    },
    {
      question: "¿Qué es Kobo Collect y por qué lo utilizan?",
      answer: "Kobo Collect (KoboToolbox) es una plataforma tecnológica de código abierto de renombre internacional utilizada por organizaciones humanitarias para recolectar datos de forma estructurada, rápida y confiable incluso fuera de línea. Nos permite almacenar la información de forma segura y transparente, facilitando su integración en tiempo real con nuestro mapa público sin intermediarios.",
    },
    {
      question: "¿Cómo puedo reportar un centro de acopio que conozco?",
      answer: "Solo debes hacer clic en el botón 'Reportar Sitio de Acopio'. Serás redirigido a nuestro formulario de Kobo Collect, donde deberás rellenar campos clave como nombre del lugar, estado, ciudad, dirección exacta, datos de contacto del responsable y los insumos requeridos. Una vez enviado, el equipo estudiantil iniciará el protocolo de verificación.",
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-100" id="faq-section-container">
      <div className="text-center mb-8">
        <div className="inline-flex p-3 bg-blue-50 text-blue-600 rounded-2xl mb-3">
          <HelpCircle className="w-6 h-6" />
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0d243c] tracking-tight font-sans">
          Preguntas Frecuentes
        </h2>
        <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto leading-relaxed">
          Resolvemos tus dudas sobre el proceso de registro, la seguridad de los datos y nuestra logística estudiantil.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-3" id="faqs-accordion">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="border border-slate-100 rounded-2xl overflow-hidden bg-slate-50 transition-all duration-150"
              id={`faq-item-${idx}`}
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex justify-between items-center p-5 text-left font-bold text-sm text-[#0d243c] hover:bg-slate-100 focus:outline-none transition-all"
              >
                <span>{faq.question}</span>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-slate-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-500 flex-shrink-0" />
                )}
              </button>

              {isOpen && (
                <div className="p-5 pt-0 text-xs text-slate-600 leading-relaxed bg-white border-t border-slate-50">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
