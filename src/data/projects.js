// Public repos from github.com/alon16. Add a `demo` URL to show a "Demo" link.
// `problem`, `challenge` and `solution` are { en, es } objects.
export const projects = [
  {
    name: 'Components UI Base',
    repo: 'https://github.com/alon16/alon-components-ui-base',
    demo: 'https://alon16.github.io/alon-components-ui-base/',
    problem: {
      en: 'Every web portal ends up rebuilding the same form controls (inputs, selects, date pickers, dialogs) with a slightly different look and behavior. This is a Vue 3 component library that several portals can share, each with its own branding.',
      es: 'Cada portal web termina reconstruyendo los mismos controles de formulario (inputs, selects, selectores de fecha, diálogos) con un aspecto y comportamiento ligeramente distintos. Es una librería de componentes Vue 3 que varios portales pueden compartir, cada uno con su propia marca.',
    },
    challenge: {
      en: 'Making 36 components look native to any portal without hard-coding a palette, while keeping them accessible from the keyboard and easy to use correctly from both TypeScript and plain JavaScript.',
      es: 'Lograr que 36 componentes se vean propios de cualquier portal sin fijar una paleta de colores, manteniéndolos accesibles con teclado y fáciles de usar bien tanto desde TypeScript como desde JavaScript.',
    },
    solution: {
      en: 'A public contract of --ui-* CSS tokens that each portal fills in its theme, plus a script that fails the check if any component declares its own color. Typed props, models and events for autocompletion; keyboard navigation and focus management in autocomplete and dialogs; and a playground with live examples of every component. Packaged and published with Vite to GitHub Packages.',
      es: 'Un contrato público de tokens CSS --ui-* que cada portal completa en su tema, más un script que falla si algún componente declara un color propio. Props, modelos y eventos tipados para autocompletado; navegación con teclado y manejo del foco en el autocompletado y los diálogos; y un playground con ejemplos en vivo de cada componente. Empaquetada con Vite y publicada en GitHub Packages.',
    },
    tags: ['Vue 3', 'TypeScript', 'Vite', 'CSS custom properties', 'Accessibility'],
  },
  {
    name: 'Omnifood',
    repo: 'https://github.com/alon16/OmnifoodProyect',
    demo: 'https://omnifood-alondra.netlify.app',
    problem: {
      en: 'Busy people who want to eat healthy rarely have time to cook. Omnifood is the landing page for a healthy-meal subscription service: it has to explain the offer and convert visitors on any device.',
      es: 'Las personas ocupadas que quieren comer sano casi nunca tienen tiempo para cocinar. Omnifood es la landing page de un servicio de suscripción de comidas saludables: debe explicar la oferta y convertir visitantes en cualquier dispositivo.',
    },
    challenge: {
      en: 'Keeping the layout and navigation comfortable from wide desktop screens down to small phones, while the page stays fast despite large food photos.',
      es: 'Mantener el diseño y la navegación cómodos desde pantallas grandes hasta teléfonos pequeños, y que la página siguiera siendo rápida a pesar de las fotos grandes.',
    },
    solution: {
      en: 'A Grid and Flexbox layout with seven em-based breakpoints and a mobile menu; a sticky navbar driven by IntersectionObserver instead of scroll listeners; and WebP images with a PNG fallback through <picture>.',
      es: 'Layout con Grid y Flexbox con siete breakpoints en em y menú móvil; una barra de navegación fija controlada con IntersectionObserver en lugar de eventos de scroll; e imágenes WebP con respaldo PNG mediante <picture>.',
    },
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
  },
  {
    name: 'Advent of Code',
    repo: 'https://github.com/alon16/AdventOfCode',
    problem: {
      en: 'Daily algorithm puzzles from Advent of Code 2021 and 2022, which I used to sharpen my problem-solving skills outside of work.',
      es: 'Retos diarios de algoritmos de Advent of Code 2021 y 2022, que usé para practicar resolución de problemas fuera del trabajo.',
    },
    challenge: {
      en: 'Turning long puzzle statements into working algorithms, and parsing irregular input files such as a diagram of crate stacks followed by a list of move instructions.',
      es: 'Convertir enunciados largos en algoritmos que funcionen y procesar archivos de entrada irregulares, como un diagrama de pilas de cajas seguido de una lista de movimientos.',
    },
    solution: {
      en: 'Solutions in Python (2021) and JavaScript with Node.js (2022), using regular expressions to extract each move and array operations (splice and concat) to simulate the stacks.',
      es: 'Soluciones en Python (2021) y JavaScript con Node.js (2022), usando expresiones regulares para extraer cada movimiento y operaciones de arreglos (splice y concat) para simular las pilas.',
    },
    tags: ['Python', 'JavaScript', 'Node.js', 'Algorithms'],
  },
]
