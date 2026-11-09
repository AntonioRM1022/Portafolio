import { Component } from '@angular/core';
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
}

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss'
})
export class SolutionsComponent {
  readonly projects: SolutionProject[] = [
    {
      id: 'sofia-price-enterprise',
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
      id: 'spotify-sync-engine',
      category: 'Integración de APIs & Automatización Backend',
      title: 'Motor de Sincronización Automática de Datos & Gestión de Cuotas API',
      businessProblem:
        'Demuestra arquitectura backend resiliente para sincronización masiva de datos entre plataformas. Implementa autenticación segura OAuth 2.0, paginación profunda, inserción por lotes (batching) y algoritmos de deduplicación para operar fluidamente bajo estrictos límites de tasa (Rate Limiting).',
      videoUrl: 'assets/demos/spotify-sync-demo.mp4',
      posterLabel: 'Ejecución en Tiempo Real: Pipeline de Datos, OAuth 2.0 y Batch Processing',
      kpiHighlight: '100% deduplicación y cero desbordamiento de API',
      technologies: ['Python 3.10+', 'OAuth 2.0', 'REST APIs', 'Spotipy', 'Batch Processing', 'ETL Pipelines'],
      demoUrl: '#contacto',
      codeUrl: 'https://github.com/AntonioRM1022/Save_Liked_Song_a-Playlist'
    }
  ];
}

