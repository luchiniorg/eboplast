import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Truck, ShieldCheck, DraftingCompass, Users, Building, HeartHandshake } from 'lucide-react';
import { servicesList } from '../data/eboplastData';

export default function ServicesSection() {
  const values = [
    {
      title: "Comunicación",
      desc: "Constante y efectiva entre los miembros que conformamos la empresa, genera un servicio de calidad para con nuestros proveedores y clientes. Nuestra política es siempre trabajar con nuestras puertas abiertas.",
      icon: <Building className="w-5 h-5 text-[#5b8314]" />
    },
    {
      title: "Confianza",
      desc: "Realizamos nuestros proyectos con calidad y transparencia; volcando nuestra experiencia de hace más de 40 años en el mercado, con la finalidad de satisfacer a cada uno de nuestros clientes. Confiabilidad comprobada en el tiempo: tener casi 50 años de trayectoria (desde 1978) proveyendo a empresas líderes demuestra que los equipos instalados duran y cumplen lo que prometen.",
      icon: <HeartHandshake className="w-5 h-5 text-[#5b8314]" />
    },
    {
      title: "Compromiso",
      desc: "Con nuestros clientes, proporcionándoles servicios de calidad; con la sociedad, al brindar estabilidad a las familias de nuestro personal; y con el medio ambiente, al respetar y cumplir todas las normas establecidas para el cuidado de éste.",
      icon: <Users className="w-5 h-5 text-[#5b8314]" />
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-slate-50 border-b border-slate-200 relative select-none">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Soluciones Integrales de Fabricación y Montaje
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-sans">
            Acompañamos cada etapa del proyecto: desde el cálculo de espesores y selección de resinas hasta el montaje y puesta en marcha en planta.
          </p>
        </div>

        {/* 5 Service Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          
          {servicesList.map((srv, idx) => (
            <div 
              key={idx}
              className="p-6 sm:p-7 bg-white border border-slate-200 rounded-sm hover:border-[#5b8314] transition-all duration-200 group shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-sm bg-lime-50 border border-lime-200 flex items-center justify-center p-2.5 mb-5 group-hover:bg-lime-100 transition-colors">
                <img src={srv.icon} alt={srv.title} className="w-full h-full object-contain" />
              </div>

              <h3 className="font-display text-lg font-bold text-slate-950 mb-2 group-hover:text-[#5b8314] transition-colors">
                {srv.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                {srv.description}
              </p>
            </div>
          ))}

          {/* 6th Card: Cotización y Asesoramiento Técnico */}
          <div className="p-6 sm:p-7 bg-white border border-[#5b8314] rounded-sm flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-sm bg-lime-100 border border-lime-300 flex items-center justify-center text-[#5b8314] mb-5">
                <DraftingCompass className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-950 mb-2">
                ¿Tiene un requerimiento especial?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                Nuestros ingenieros calculan espesores, resistencias químicas y estructuras según normativas ASTM, BS, ASME, NBS, IRAM y CIRSOC (o cualquier otra norma previo estudio).
              </p>
            </div>

            <Link
              to="/cotizador"
              className="mt-6 inline-flex items-center justify-center space-x-2 bg-[#5b8314] hover:bg-[#48680f] text-white font-mono font-bold px-4 py-3 rounded-sm transition-all text-xs tracking-wider uppercase w-full shadow-xs"
            >
              <span>CONSULTAR AL DEPARTAMENTO TÉCNICO</span>
            </Link>
          </div>

        </div>

        {/* Historia Institucional */}
        <div className="p-8 sm:p-10 bg-white border border-slate-200 rounded-sm shadow-sm mb-10">
          <div className="max-w-4xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold text-[#5b8314] uppercase tracking-wider block">
              Historia · Desde 1978
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950">
              Más de cuatro décadas liderando la ingeniería en PRFV
            </h3>
            <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              <p>
                Nuestra historia comenzó en <strong className="text-slate-900">1978</strong>, impulsada por el desafío de cubrir una demanda específica en el sector industrial. En ese entonces, <strong className="text-slate-900">Ebonit S.A.</strong>, empresa líder en el mercado de equipos metálicos anticorrosivos desde el año 1955, decidió crear una división especializada en la provisión de equipamiento en Plástico Reforzado con Fibra de Vidrio (PRFV).
              </p>
              <p>
                Al detectar las limitaciones de los termoplásticos tradicionales en cuanto a resistencia mecánica, seguridad y facilidad de transformación, apostamos por el PRFV poniendo el foco en la <strong className="text-slate-900">ingeniería aplicada</strong>. Frente a la falta de tecnología disponible por ese entonces en el medio local, tomamos la decisión estratégica de desarrollar nuestro propio <em>know-how</em>. Este camino nos llevó a diseñar y fabricar nuestra propia maquinaria y matricería, consolidando una capacidad productiva autónoma y a medida.
              </p>
              <p>
                La solidez de estas decisiones, sumada a un esfuerzo sostenido, nos permitió posicionarnos rápidamente como proveedores de confianza para compañías de primer nivel. Gracias a una estructura ágil y dinámica, y a nuestra constante actualización bajo estándares y técnicas internacionales, logramos un crecimiento continuo que hoy nos ubica en un lugar de privilegio dentro del mercado anticorrosivo.
              </p>
            </div>
          </div>
        </div>

        {/* Corporate Values Strip */}
        <div className="p-8 sm:p-10 bg-white border border-slate-200 rounded-sm shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-display text-2xl font-bold text-slate-950">Nuestros Valores Institucionales</h3>
            <p className="text-sm text-slate-500 mt-1 font-mono">El compromiso que sostiene nuestra reputación desde nuestra fundación en 1978.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="text-center sm:text-left space-y-2.5">
                <div className="inline-flex p-2.5 bg-slate-50 border border-slate-200 rounded-sm">
                  {v.icon}
                </div>
                <h4 className="font-display text-lg font-bold text-slate-950">{v.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
