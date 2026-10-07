/* ─────────────────────────────────────────────────────────────
   CURADURÍA DE FORMACIÓN CONTINUA — UGEB
   Este es el único archivo que hay que editar para curar cursos.

   1) ALIANZAS: datos de cada aliado (nombre, color, sitio oficial).
   2) CURSOS:   un objeto por curso. Para agregar uno, copia un bloque,
                pégalo al final de la lista y cambia los campos.

   Campos de un curso:
     alianza    → debe coincidir con el "id" de una alianza
     titulo     → nombre del curso
     desc       → 1–2 frases: qué aprenderá la persona y por qué sirve
     categoria  → Tecnología | Finanzas | Idiomas | Habilidades blandas |
                  Empleabilidad | Negocios | Otra (puedes crear nuevas)
     nivel      → Básico | Intermedio | Avanzado
     modalidad  → En línea autogestivo | En línea con tutor | Presencial | Mixto
     duracion   → texto libre, ej. "20 horas"
     url        → enlace directo al curso en el sitio del aliado
     destacado  → true para mostrarlo en "Recomendados por UGEB"
     proximamente → true si aún no hay enlace (el botón queda como "Próximamente")
     ejemplo    → true mientras sea un dato de muestra; quítalo al curar el real
   ───────────────────────────────────────────────────────────── */

// El orden de la lista es el orden en pantalla.
// "logo" (opcional): imagen en la carpeta logos/. Sin logo se muestra la inicial.
// "logoAncho: true" agranda logos horizontales dentro del círculo.
const ALIANZAS = [
  { id: "capacitate", nombre: "Capacítate para el Empleo", corto: "Capacítate", logo: "logos/capacitate.png", color: "#4FB286",
    descripcion: "Cursos gratuitos para desarrollar habilidades laborales y de empleabilidad.", url: "https://capacitateparaelempleo.org" },
  { id: "academica-labs", nombre: "Académica Labs", corto: "Académica Labs", logo: "logos/academica-labs.png", logoAncho: true, color: "#B48CF2",
    descripcion: "Laboratorios de aprendizaje y herramientas digitales para la formación.", url: "https://academicalabs.org/" },
  { id: "liverpool", nombre: "Universidad Virtual de Liverpool", corto: "UV Liverpool", logo: "logos/liverpool.png", logoAncho: true, color: "#E0508C",
    descripcion: "Programas virtuales para crecer en habilidades profesionales y de negocio.", url: "https://universidad-virtual-liverpool.ifliverpool.edu.mx/educaci%C3%B3n-continua/cursos-uvl-para-la-vida" },
  { id: "uclx", nombre: "UCLX", corto: "UCLX", logo: "logos/uclx.svg", logoAncho: true, color: "#63B3ED",
    descripcion: "Programas learner-centric, ya probados con miles de usuarios, adaptados al contexto, en temáticas de habilidades blandas.", url: "https://www.uclx.media/" },
  { id: "santander", nombre: "Santander Open Academy", corto: "Santander", logo: "logos/santander.svg", color: "#E5484D",
    descripcion: "Plataforma global, online y gratuita de Banco Santander para el aprendizaje y desarrollo profesional.", url: "https://www.santanderopenacademy.com/es/index.html" },
  { id: "clara", nombre: "Clara Finanzas", corto: "Clara", logo: "logos/clara.png", logoAncho: true, color: "#F2C14E",
    descripcion: "Educación financiera práctica para tomar mejores decisiones con tu dinero.", url: "https://clarabanregio.com/cursos" }
];

// OTROS SITIOS DE INTERÉS (bolitas con logo). Para usar un logo propio, guarda la
// imagen en la carpeta "logos/" y agrega  logo: "logos/archivo.png"  al sitio.
// Si no hay "logo", se usa el ícono oficial del dominio.
const SITIOS = [
  { nombre: "Coursera", url: "https://www.coursera.org/", dominio: "coursera.org", color: "#0056D2" },
  { nombre: "edX", url: "https://www.edx.org/", dominio: "edx.org", color: "#02262B" },
  { nombre: "Harvard University", url: "https://pll.harvard.edu/catalog/free", dominio: "harvard.edu", color: "#A51C30" },
  { nombre: "Google", url: "https://grow.google/intl/es/courses-and-tools/?category=career", dominio: "google.com", color: "#4285F4" },
  { nombre: "Microsoft", url: "https://learn.microsoft.com/es-es/training/", dominio: "microsoft.com", color: "#00A4EF" }
];

const CURSOS = [
  /* ── EJEMPLOS: reemplázalos por los cursos reales que cures ── */
  {
    alianza: "capacitate",
    titulo: "Atención y servicio al huésped",
    desc: "Ruta de aprendizaje para brindar una atención y un servicio de calidad a huéspedes y clientes.",
    categoria: "Empleabilidad",
    modalidad: "En línea autogestivo",
    url: "https://capacitateparaelempleo.org/interna-ruta/76",
    destacado: true
  },
  {
    alianza: "capacitate",
    titulo: "Organiza tus finanzas",
    desc: "Ruta de aprendizaje para ordenar tu dinero y tomar mejores decisiones financieras.",
    categoria: "Finanzas",
    modalidad: "En línea autogestivo",
    url: "https://capacitateparaelempleo.org/interna-ruta/41",
    destacado: true
  },
  {
    alianza: "capacitate",
    titulo: "Haz que la IA trabaje para ti",
    desc: "Curso para aprender a usar la inteligencia artificial como herramienta en tu día a día y en tu trabajo.",
    categoria: "Tecnología",
    modalidad: "En línea autogestivo",
    url: "https://capacitateparaelempleo.org/cursos/view/100926",
    destacado: true
  },
  {
    alianza: "academica-labs",
    titulo: "Diseñador de prompts IA",
    desc: "Curso para aprender a redactar instrucciones efectivas que te permitan sacar el mejor provecho de las herramientas de inteligencia artificial.",
    categoria: "Tecnología",
    modalidad: "En línea autogestivo",
    url: "https://academicalabs.org/curso-preview/12",
    destacado: true
  },
  {
    alianza: "academica-labs",
    titulo: "Manejo ético de la información y datos",
    desc: "Curso para manejar con responsabilidad, seguridad y ética la información y los datos en tu trabajo.",
    categoria: "Tecnología",
    modalidad: "En línea autogestivo",
    url: "https://academicalabs.org/curso-preview/91",
    destacado: true
  },
  {
    alianza: "academica-labs",
    titulo: "Gestión del ecosistema digital",
    desc: "Curso para organizar y aprovechar las herramientas, plataformas y canales digitales de forma ordenada y estratégica.",
    categoria: "Tecnología",
    modalidad: "En línea autogestivo",
    url: "https://academicalabs.org/curso-preview/4",
    destacado: true
  },
  {
    alianza: "uclx",
    titulo: "VocaAcción",
    desc: "Descubre tu match profesional: una plataforma para explorar tu vocación y orientar tu camino laboral.",
    categoria: "Empleabilidad",
    modalidad: "En línea autogestivo",
    url: "https://vocaaccion.org/",
    destacado: true
  },
  {
    alianza: "uclx",
    titulo: "No+Violencia",
    desc: "Curso en línea por módulos para prevenir la violencia en el ámbito escolar y laboral, con un módulo de violencia de género.",
    categoria: "Habilidades blandas",
    modalidad: "En línea autogestivo",
    url: "https://nomasviolencia.mx/",
    destacado: true
  },
  {
    alianza: "uclx",
    titulo: "MBA Desarrollo gerencial",
    desc: "Programa de desarrollo gerencial. Muy pronto tendrás más información.",
    categoria: "Negocios",
    url: "",
    proximamente: true,
    destacado: true
  },
  {
    alianza: "liverpool",
    titulo: "Habilidades Digitales para Padres",
    desc: "Identifica las habilidades digitales básicas para acompañar a tus hijos en su vida escolar.",
    categoria: "Habilidades blandas",
    modalidad: "En línea autogestivo",
    duracion: "8 horas",
    url: "https://universidad-virtual-liverpool.ifliverpool.edu.mx/educaci%C3%B3n-continua/cursos-uvl-para-la-vida#h.fm0wgu1kxvwt",
    destacado: true
  },
  {
    alianza: "liverpool",
    titulo: "Actitud frente al cambio",
    desc: "Identifica actitudes que te ayudan a mantenerte positivo frente a los cambios, con actividades interactivas.",
    categoria: "Habilidades blandas",
    modalidad: "En línea autogestivo",
    duracion: "8 horas",
    url: "https://universidad-virtual-liverpool.ifliverpool.edu.mx/educaci%C3%B3n-continua/cursos-uvl-para-la-vida#h.ljl3sbeg7a9p",
    destacado: true
  },
  {
    alianza: "liverpool",
    titulo: "Introducción a las finanzas personales",
    desc: "Reconoce la importancia de saber manejar el dinero para alcanzar estabilidad y metas de vida.",
    categoria: "Finanzas",
    modalidad: "En línea autogestivo",
    duracion: "5 horas",
    url: "https://universidad-virtual-liverpool.ifliverpool.edu.mx/educaci%C3%B3n-continua/cursos-uvl-para-la-vida#h.ku7zr6d3ku8z",
    destacado: true
  },
  {
    alianza: "clara",
    titulo: "Crédito Inteligente",
    desc: "Aprende a manejar de manera eficiente tus créditos y deudas: tipos de crédito, estrategias para salir de deudas y decisiones financieras responsables.",
    categoria: "Finanzas",
    modalidad: "En línea autogestivo",
    url: "https://clarabanregio.teachable.com/p/credito-inteligente1",
    destacado: true
  },
  {
    alianza: "clara",
    titulo: "Cuentas claras",
    desc: "Cursos prácticos para poner orden en tus finanzas y tener una visión completa de tu situación financiera.",
    categoria: "Finanzas",
    nivel: "Básico",
    modalidad: "En línea autogestivo",
    duracion: "2 a 4 semanas",
    url: "https://cursosclara.com/p/cuentas-claras",
    destacado: true
  },
  {
    alianza: "clara",
    titulo: "Inversiones claras",
    desc: "Conoce las diferentes formas de invertir tu dinero según tu capital y tu perfil de riesgo.",
    categoria: "Finanzas",
    nivel: "Básico",
    modalidad: "En línea autogestivo",
    url: "https://cursosclara.com/p/inversiones-claras",
    destacado: true
  },
  {
    alianza: "santander",
    titulo: "Excel: de básico a intermedio",
    desc: "Aprende a usar Excel desde lo esencial hasta un nivel intermedio para trabajar con tus datos.",
    categoria: "Tecnología",
    nivel: "Básico",
    modalidad: "En línea autogestivo",
    url: "https://app.santanderopenacademy.com/es/course/excel",
    destacado: true
  },
  {
    alianza: "santander",
    titulo: "Domina la IA con Gemini",
    desc: "Aprende a aprovechar la inteligencia artificial de Gemini en tu trabajo y en tu día a día.",
    categoria: "Tecnología",
    modalidad: "En línea autogestivo",
    url: "https://app.santanderopenacademy.com/es/course/master-ai-with-gemini",
    destacado: true
  },
  {
    alianza: "santander",
    titulo: "Pensamiento y mentalidad estratégica",
    desc: "Desarrolla una forma de pensar estratégica para tomar mejores decisiones y anticiparte a los retos.",
    categoria: "Negocios",
    modalidad: "En línea autogestivo",
    url: "https://app.santanderopenacademy.com/es/course/strategic-thinking-strategic-mindset",
    destacado: true
  }
];
