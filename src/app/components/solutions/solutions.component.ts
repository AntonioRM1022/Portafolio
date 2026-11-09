import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SolutionProject {
  id: string;
  category: string;
  title: string;
  businessProblem: string;
  videoUrl: string;
  posterLabel: string;
  kpiHighlight: string;
  technologies: string[];
  demoUrl: string;
  codeUrl: string;
  featured?: boolean;
}

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss'
})
export class SolutionsComponent {
  isModalOpen = false;
  selectedCategory = 'Todos';

  readonly allProjects: SolutionProject[] = [
    {
      id: 'sofia-price-enterprise',
      featured: true,
      category: 'Fintech & Automatización de Cartera',
      title: 'Sofia Price v2 - Sistema Enterprise de Cobranza & Préstamos',
      businessProblem:
        'Resuelve el descontrol financiero y la alta morosidad en operaciones de crédito comercial. Automatiza el cálculo dinámico de cuotas y penalizaciones, distribuye abonos de forma inteligente y ejecuta recordatorios diarios de cobro a las 6:00 a.m. vía WhatsApp sin intervención humana.',
      videoUrl: 'assets/demos/sofia-price-demo.mp4',
      posterLabel: 'Dashboard Financiero + Cron Jobs & Cobranza WhatsApp en Vivo',
      kpiHighlight: 'Automatización 100% de alertas de mora y recibos',
      technologies: ['FastAPI (Python)', 'Angular 17+', 'Node.js', 'APScheduler', 'TailwindCSS', 'SQLite / PostgreSQL'],
      demoUrl: '#contacto',
      codeUrl: 'https://github.com/AntonioRM1022'
    },
    {
      id: 'calculadora-whatsapp-status',
      featured: true,
      category: 'Comercio Móvil & Automatización de Ventas',
      title: 'App Móvil de Fijación de Precios & Publicación WhatsApp con IA',
      businessProblem:
        'Agiliza radicalmente el ciclo de venta en retail y distribución. Permite a los vendedores calcular márgenes de utilidad en segundos, estructurar ofertas mediante voz con IA (Google Gemini) y publicar fotos con copy optimizado en estados de WhatsApp con un solo toque.',
      videoUrl: 'assets/demos/calculadora-whatsapp-demo.mp4',
      posterLabel: 'App Flutter en Vivo: Captura por Voz IA + Publicación Inmediata',
      kpiHighlight: 'Publicación de catálogo en segundos con IA',
      technologies: ['Flutter (Dart)', 'Google Gemini AI', 'Speech-to-Text', 'Material Design 3', 'Android / iOS'],
      demoUrl: '#contacto',
      codeUrl: 'https://github.com/AntonioRM1022/Calculadora_Whatsapp'
    },
    {
      id: 'channel-bot-price',
      featured: true,
      category: 'Web Scraping & Automatización de Canales',
      title: 'Bot de Monitoreo de Liquidaciones & Difusión en WhatsApp',
      businessProblem:
        'Automatiza el monitoreo continuo de catálogos y liquidaciones mediante navegación desatendida con Playwright Stealth. Aplica algoritmos de pricing dinámico, previene publicaciones repetidas mediante hashing en SQLite y difunde ofertas automáticamente a canales de WhatsApp orquestado con Docker Compose.',
      videoUrl: 'assets/demos/channel-bot-demo.mp4',
      posterLabel: 'Playwright Stealth + Orquestación Docker Compose y WAHA API',
      kpiHighlight: 'Monitoreo y publicación 100% autónoma',
      technologies: ['Python 3.11', 'Playwright Stealth', 'Docker Compose', 'WAHA API', 'SQLAlchemy / SQLite', 'APScheduler'],
      demoUrl: '#contacto',
      codeUrl: 'https://github.com/AntonioRM1022/Channel_Bot_Price'
    },
    {
      id: 'spotify-sync-engine',
      featured: false,
      category: 'Integración de APIs & Backend ETL',
      title: 'Motor de Sincronización Automática de Datos & Gestión de Cuotas API',
      businessProblem:
        'Pipeline de datos backend para sincronización masiva entre plataformas. Integra autenticación OAuth 2.0 segura con rotación de tokens, paginación completa, inserción por lotes (batching) y algoritmos de deduplicación para operar fluidamente bajo límites de tasa (Rate Limiting).',
      videoUrl: 'assets/demos/spotify-sync-demo.mp4',
      posterLabel: 'Pipeline de Datos, OAuth 2.0 y Batch Processing',
      kpiHighlight: '100% deduplicación y cero desbordamiento de API',
      technologies: ['Python 3.10+', 'OAuth 2.0', 'REST APIs', 'Spotipy', 'Batch Processing', 'ETL Pipelines'],
      demoUrl: '#contacto',
      codeUrl: 'https://github.com/AntonioRM1022/Save_Liked_Song_a-Playlist'
    },
    {
      id: 'gis-executive-dashboard',
      featured: false,
      category: 'Inteligencia Territorial & Logística',
      title: 'Dashboard GIS para Monitoreo y Toma de Decisiones',
      businessProblem:
        'Centraliza datos geográficos y telemetría de activos en campo en un mapa interactivo de alto rendimiento. Diseñado para directores de operaciones que requieren visibilidad en tiempo real de cuadrillas, rutas críticas e indicadores territoriales.',
      videoUrl: 'assets/demos/gis-dashboard-demo.mp4',
      posterLabel: 'Capas Geoespaciales y Analítica Operativa en Tiempo Real',
      kpiHighlight: 'Visibilidad 360° de activos en campo',
      technologies: ['Angular', 'TypeScript', 'Node.js', 'PostGIS', 'Docker'],
      demoUrl: '#contacto',
      codeUrl: 'https://github.com/AntonioRM1022'
    },
    {
      id: 'devhack-platform',
      featured: false,
      category: 'Plataformas Web & Arquitectura Cloud',
      title: 'DevHack 2026 - Plataforma Full-Stack para Eventos Tecnológicos',
      businessProblem:
        'Arquitectura cloud desacoplada para gestión y registro de eventos masivos. Diseñada con Angular 17+ Standalone y API en FastAPI, base de datos MySQL distribuida en la nube con Aiven, control de sesiones anti-saturación de 60 segundos, validación reCAPTCHA y notificaciones transaccionales automatizadas vía EmailJS.',
      videoUrl: 'assets/demos/devhack-demo.mp4',
      posterLabel: 'Frontend Netlify + FastAPI en Render + MySQL Aiven Cloud',
      kpiHighlight: 'Arquitectura distribuida en producción (Netlify + Render + Aiven)',
      technologies: ['Angular 17+', 'FastAPI (Python)', 'MySQL Cloud (Aiven)', 'Render', 'Netlify', 'EmailJS', 'Figma'],
      demoUrl: '#contacto',
      codeUrl: 'https://github.com/AntonioRM1022'
    },
    {
      id: 'colorimetria-ai-vision',
      featured: false,
      category: 'Inteligencia Artificial & Visión por Computadora',
      title: 'App Móvil de Diagnóstico Facial & Colorimetría con GPT-4o Visión',
      businessProblem:
        'Solución de IA multimodal orientada a retail y estética digital. Analiza rasgos faciales e iluminación mediante GPT-4o Visión, clasifica paletas de colorimetría estacional, genera reportes visuales en formato infografía de alta resolución (.png) y los almacena en base de datos local SQLite.',
      videoUrl: 'assets/demos/colorimetria-ai-demo.mp4',
      posterLabel: 'Análisis Facial con GPT-4o Vision + Generación de Infografías PNG',
      kpiHighlight: 'Diagnóstico biométrico y de imagen asistido por IA',
      technologies: ['Flutter (Dart)', 'OpenAI GPT-4o Vision', 'SQLite (sqflite)', 'flutter_animate', 'gal / screenshot', 'Android / iOS'],
      demoUrl: '#contacto',
      codeUrl: 'https://github.com/AntonioRM1022'
    },
    {
      id: 'devhack-platform',
      featured: false,
      category: 'Plataformas Web & Arquitectura Cloud',
      title: 'DevHack 2026 - Plataforma Full-Stack para Eventos Tecnológicos',
      businessProblem:
        'Arquitectura cloud desacoplada para gestión y registro de eventos masivos. Diseñada con Angular 17+ Standalone y API en FastAPI, base de datos MySQL distribuida en la nube con Aiven, control de sesiones anti-saturación de 60 segundos, validación reCAPTCHA y notificaciones transaccionales automatizadas vía EmailJS.',
      videoUrl: 'assets/demos/devhack-demo.mp4',
      posterLabel: 'Frontend Netlify + FastAPI en Render + MySQL Aiven Cloud',
      kpiHighlight: 'Arquitectura distribuida en producción (Netlify + Render + Aiven)',
      technologies: ['Angular 17+', 'FastAPI (Python)', 'MySQL Cloud (Aiven)', 'Render', 'Netlify', 'EmailJS', 'Figma'],
      demoUrl: '#contacto',
      codeUrl: 'https://github.com/AntonioRM1022'
    },
    {
      id: 'colorimetria-ai-vision',
      featured: false,
      category: 'Inteligencia Artificial & Visión por Computadora',
      title: 'App Móvil de Diagnóstico Facial & Colorimetría con GPT-4o Visión',
      businessProblem:
        'Solución de IA multimodal orientada a retail y estética digital. Analiza rasgos faciales e iluminación mediante GPT-4o Visión, clasifica paletas de colorimetría estacional, genera reportes visuales en formato infografía de alta resolución (.png) y los almacena en base de datos local SQLite.',
      videoUrl: 'assets/demos/colorimetria-ai-demo.mp4',
      posterLabel: 'Análisis Facial con GPT-4o Vision + Generación de Infografías PNG',
      kpiHighlight: 'Diagnóstico biométrico y de imagen asistido por IA',
      technologies: ['Flutter (Dart)', 'OpenAI GPT-4o Vision', 'SQLite (sqflite)', 'flutter_animate', 'gal / screenshot', 'Android / iOS'],
      demoUrl: '#contacto',
      codeUrl: 'https://github.com/AntonioRM1022'
    },
    {
      id: 'drone-vision-system',
      featured: false,
      category: 'Industria 4.0 & Visión Artificial',
      title: 'Sistema de Supervisión Automatizada con Visión por Computadora',
      businessProblem:
        'Sustituye revisiones visuales manuales en campo mediante modelos de detección de objetos con OpenCV y FastAPI. Procesa flujos de video para control de calidad, conteo de piezas o inspección de infraestructura crítica con reportes inmediatos.',
      videoUrl: 'assets/demos/drone-vision-demo.mp4',
      posterLabel: 'Detección de Objetos en Vivo con OpenCV & FastAPI',
      kpiHighlight: 'Detección en tiempo real con 98% de precisión',
      technologies: ['Python', 'OpenCV', 'FastAPI', 'Flutter', 'Docker'],
      demoUrl: '#contacto',
      codeUrl: 'https://github.com/AntonioRM1022'
    }
  ];

  get featuredProjects(): SolutionProject[] {
    return this.allProjects.filter(p => p.featured);
  }

  get filteredProjects(): SolutionProject[] {
    if (this.selectedCategory === 'Todos') {
      return this.allProjects;
    }
    return this.allProjects.filter(p => p.category === this.selectedCategory);
  }

  get categories(): string[] {
    const cats = new Set(this.allProjects.map(p => p.category));
    return ['Todos', ...Array.from(cats)];
  }

  openModal(): void {
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.isModalOpen = false;
    document.body.style.overflow = '';
  }

  filterCategory(cat: string): void {
    this.selectedCategory = cat;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isModalOpen) {
      this.closeModal();
    }
  }
}
