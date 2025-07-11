# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

src/
├── assets/
│ ├── icons/
│ │
│ ├── images/
│ │ ├── backgrounds/
│ │ │
│ │ ├── logos/
│ │ │
│ │ └── page-specific/
│ │ │ ├── aboutUs
│ │ │ │
│ │ │ │── contact
│ │ │ │
│ │ │ │── courses
│ │ │ │ ├── advanced-open-water
│ │ │ │ ├── open-water
│ │ │ │ └── rescue-diver
│ │ │ │
│ │ │ │── destinations
│ │ │ │ ├── isla-fuerte
│ │ │ │ ├── providencia
│ │ │ │ └── santa-marta
│ │ │ │
│ │ │ │── experiences
│ │ │ │ └── santa-marta
│ │ │ │
│ │ │ │── home
│ │ │ │
│ │ │ │── not-found
│ │ │ │
│ │ │ │── policy
│ │ │ │
│ │ │ │── safety
│ │ │ │
│ │ │ └── under-construction
│
├── components/
│ ├── common/
│ │ ├── Button/
│ │ │ └── CTAButton.jsx
│ │ │
│ │ ├── Card/
│ │ │
│ │ ├── Image/
│ │ │ └── ImageComponent.jsx
│ │ │
│ │ ├── Text
│ │ │ ├── SectionTitle.jsx
│ │ │ ├── SectionSubTitle.jsx
│ │ │ └── SectionText.jsx
│ │
│ ├── layout/
│ │ ├── Footer/
│ │ │ └── Footer.jsx
│ │ │
│ │ ├── MainLayout/
│ │ │ └── MainLayout.jsx
│ │ │
│ │ ├── Navbar/
│ │ │ └── Navbar.jsx
│ │
│ ├── ui/
│ │ │ ├── FloatingActionsComponent.jsx
│ │ │ ├── LanguageSwitcherComponent.jsx
│ │ │ ├── RouteScrollManagerComponent.jsx
│ │ │ └── SEOComponent.jsx
│
├── pages/
│ ├── AboutUsPage/
│ │ ├── AboutUsPage.jsx
│ │ └── components/
│ │ │ ├── CommitmentCardComponent.jsx
│ │ │ ├── CommitmentSection.jsx
│ │ │ ├── HistorySection.jsx
│ │ │ ├── TeamCardComponent.jsx
│ │ │ └── TeamSection.jsx
│ │
│ ├── ContactPage/
│ │ ├── ContactPage.jsx
│ │ └── components/
│ │ │ ├── CommunicationChannelComponent.jsx
│ │ │ └── CommunicationsSection.jsx
│ │
│ ├── DetailPage/
│ ├── components/
│ │ ├── ContentComponent.jsx
│ │ ├── DescriptionComponent.jsx
│ │ ├── DetailsComponent.jsx
│ │ ├── GallerySection.jsx
│ │ ├── IncludedComponent.jsx
│ │ ├── NextHorizontalComponent.jsx
│ │ ├── NextVerticalComponent.jsx
│ │ └── NoteComponent.jsx

│ ├── CoursePage/
│ │ ├── components/
│ │ └── CoursePage.jsx
│ │
│ ├── DestinationPage/
│ │ ├── components/
│ │ └── DestinationPage.jsx
│ │
│ ├── ExperiencePage/
│ │ ├── components/
│ │ └── ExperiencePage.jsx

│ ├── ExperiencesPage/
│ │ ├── components/
│ │ │ └── Cards/
│ │ │ │ ├── ExperienceCardComponent.jsx
│ │ │ │ ├── CalendarExperienceCardComponent.jsx
│ │ │ │ ├── CourseCardComponent.jsx
│ │ │ │ ├── DestinationCardComponent.jsx

│ │ │ └── Sections/
│ │ │ │ ├── CalendarExperiencesSection.jsx
│ │ │ │ ├── ExperiencesSection.jsx
│ │ │ │ ├── CoursesSection.jsx
│ │ │ │ ├── DestinationsSection.jsx
│ │ │ │ ├── CustomExperienceSection.jsx

│ │
│ ├── HomePage/
│ │ ├── HomePage.jsx
│ │ └── components/ # Componentes específicos de la Home Page (secciones)
│ │ ├── HeroSection.jsx
│ │ ├── ExperiencesSection.jsx
│ │ │ └── ExperienceCardComponent.jsx
│ │ ├── SafetySection.jsx
│ │ │ └── SafetyCardComponent.jsx
│ │ └── TestimonialSection.jsx
│ │ └── TestimonialCardComponent.jsx
│ │
│ ├── NotFoundPage/
│ │ └── NotFoundPage.jsx
│ │
│ ├── PolicyPage/
│ │ └── PolicyPage.jsx
│ │
│ ├── SafetyPage/
│ │ ├── SafetyPage.jsx
│ │ └── components/
│ │ ├── ProtocolsSection.jsx
│ │ │ └── ProtocolCardComponent.jsx
│ │ ├── EquipmentSection.jsx
│ │ │ └── EquipmentCardComponent.jsx
│ │ └── CertificationsSection.jsx
│ │ └── CertificationCardComponent.jsx
│ │
│ └── UnderConstructionPage/
│ └── UnderConstructionPage.jsx
│
├── sections/ # Componentes de "sección" reusables en _múltiples_ páginas (organismos)
│ ├── CTAComponent/ # Este CTA se usa en Home, About Us, Safety, Contact, Courses, Experiences
│ │ ├── CTAComponent.jsx
│ │ └── CTAButton.jsx # CTAButton es parte integral de CTAComponent, no un botón genérico
│ ├── ReusableHeader/ # Si el `HeaderComponent` es el mismo para varias páginas (no todas)
│ │ └── ReusableHeader.jsx
│ └── SharedGallerySection/ # Si una sección de galería es idéntica en varias páginas
│ └── SharedGallerySection.jsx
│
├── hooks/ # Custom Hooks para encapsular lógica reutilizable y con estado (ej. useAuth)
│ └── useScrollAnimation.js # Para efectos con `motion/react` si hay lógica común
│ └── useFormValidation.js
│
├── services/ # Módulos para interactuar con APIs externas, bases de datos, etc.
│ ├── api.js # Funciones para llamadas a la API
│ └── authService.js
│
├── utils/ # Funciones utilitarias (ej. formatters, validators, constantes)
│ ├── constants.js
│ ├── helpers.js
│ └── validation.js
│
├── styles/ # Archivos CSS/Tailwind globales o de configuración
│ ├── index.css # Archivo principal de Tailwind CSS
│ └── base.css # Estilos base, reset CSS
│ └── themes/ # Si manejas temas de color
│ └── dark.css
│
├── App.jsx # Componente raíz donde se definen las rutas (React Router)
├── main.jsx # Punto de entrada de la aplicación (ReactDOM.createRoot)
└── router/ # Manejo de rutas, si se vuelve complejo
└── index.jsx
