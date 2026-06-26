TypeScript
import React from "react";

export default function FaqSection(): JSX.Element {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <h3 className="text-lg font-bold mb-3">Preguntas Frecuentes</h3>
      <div className="space-y-3 text-sm text-slate-600">
        <details>
          <summary className="font-semibold cursor-pointer">¿Cómo reporto un sitio?</summary>
          <p className="mt-2">Pulsa "Reportar Sitio de Acopio" y completa el formulario.</p>
        </details>
        <details>
          <summary className="font-semibold cursor-pointer">¿Qué verifica la red?</summary>
          <p className="mt-2">Verificamos ubicación, responsable y horario.</p>
        </details>
      </div>
    </div>
  );
}
