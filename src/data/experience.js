// Localized fields are { en, es } objects; read them with useLocalized().
export const jobs = [
  {
    company: 'Hotaka Ikhodi',
    start: '2020',
    end: null,
    role: { en: 'Full Stack Developer', es: 'Desarrolladora Full Stack' },
    bullets: [
      {
        en: 'Designed and built custom Odoo ERP modules (Inventory, Sales, Web, Invoice) tailored to client requirements, improving day-to-day operational workflows.',
        es: 'Diseñé y desarrollé módulos personalizados de Odoo ERP (Inventario, Ventas, Web, Facturación) adaptados a los requerimientos de los clientes, mejorando los flujos operativos del día a día.',
      },
      {
        en: 'Developed a REST API with Node.js and Express.js for logistics processes: shipment creation, shipment justification, label generation and full lifecycle management.',
        es: 'Desarrollé una API REST con Node.js y Express.js para procesos logísticos: creación y justificación de envíos, generación de etiquetas y gestión de su ciclo de vida completo.',
      },
      {
        en: 'Built reusable, responsive HTML templates for invoices, labels and emails using Flexbox CSS and Jinja2, standardizing document generation across the platform.',
        es: 'Construí plantillas HTML reutilizables y responsivas para facturas, etiquetas y correos con Flexbox CSS y Jinja2, estandarizando la generación de documentos en la plataforma.',
      },
      {
        en: 'Implemented Azure Blob Storage integrations in Python for efficient file storage and retrieval, improving the reliability of file-handling processes.',
        es: 'Implementé integraciones con Azure Blob Storage en Python para almacenar y recuperar archivos de forma eficiente, mejorando la confiabilidad del manejo de archivos.',
      },
      {
        en: 'Built dynamic, user-facing web applications in Vue.js with custom routing, state management and reusable components.',
        es: 'Desarrollé aplicaciones web dinámicas en Vue.js con enrutamiento personalizado, manejo de estado y componentes reutilizables.',
      },
      {
        en: 'Improved backend performance and data integrity in ASP.NET Core applications by implementing Redis caching and Fluent Validation.',
        es: 'Mejoré el rendimiento y la integridad de datos en aplicaciones ASP.NET Core implementando caché con Redis y Fluent Validation.',
      },
      {
        en: 'Developed backend services and APIs in Java Spring Boot to support cross-team integrations.',
        es: 'Desarrollé servicios backend y APIs en Java Spring Boot para integraciones entre equipos.',
      },
    ],
    skills: ['Vue.js', 'JavaScript', 'Python', 'Odoo', 'MongoDB', 'Express.js', 'ASP.NET Core', 'Spring Boot'],
  },
  {
    company: 'Polaris Energy S.A.',
    start: '2019',
    end: '2020',
    role: { en: 'Jr. Developer', es: 'Desarrolladora Jr.' },
    bullets: [
      {
        en: 'Built a web application to track company equipment inventory using ASP.NET, Entity Framework and SQL Server, replacing manual spreadsheet-based tracking.',
        es: 'Desarrollé una aplicación web para el inventario de equipos de la empresa con ASP.NET, Entity Framework y SQL Server, reemplazando el control manual en hojas de cálculo.',
      },
      {
        en: "Extended the company's medical appointment system with new functionality for the health department, improving scheduling efficiency for staff.",
        es: 'Amplié el sistema de citas médicas de la empresa con nuevas funcionalidades para el departamento de salud, mejorando la eficiencia en la programación del personal.',
      },
    ],
    skills: ['ASP.NET', 'Entity Framework', 'SQL Server'],
  },
]
