import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface MethodologyStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

@Component({
  selector: 'app-methodology',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './methodology.component.html',
  styleUrl: './methodology.component.scss'
})
export class MethodologyComponent {
  readonly steps: MethodologyStep[] = [
    {
      stepNumber: '01',
      title: 'Entendimiento del Negocio',
      subtitle: 'Diagnóstico operativo y definición de alcance',
      description:
        'Antes de escribir una sola línea de código, analizo tus cuellos de botella operativos, reglas de negocio y métricas clave para asegurar que la solución genere un retorno de inversión medible.',
      deliverables: [
        'Mapeo de procesos actuales',
        'Definición de KPIs e impacto esperado',
        'Propuesta técnica clara sin jerga innecesaria'
      ]
    },
    {
      stepNumber: '02',
      title: 'Desarrollo Colaborativo (UI/UX y Arquitectura)',
      subtitle: 'Diseño centrado en usuarios reales y bases sólidas',
      description:
        'Construimos interfaces intuitivas para tu equipo o clientes finales respaldadas por una arquitectura escalable, modular y segura. Avances visibles cada semana con retroalimentación continua.',
      deliverables: [
        'Prototipos interactivos y flujos de usuario',
        'Arquitectura Full-Stack e integraciones API',
        'Revisiones ejecutivas por iteración'
      ]
    },
    {
      stepNumber: '03',
      title: 'Entrega de Resultados',
      subtitle: 'Puesta en marcha, acompañamiento y escalabilidad',
      description:
        'Despliegue en servidores productivos listos para operar sin fricciones. Incluye capacitación a tu personal, documentación técnica completa y monitoreo para garantizar continuidad operativa.',
      deliverables: [
        'Despliegue en la nube / Docker',
        'Transferencia de conocimiento y manuales',
        'Soporte post-lanzamiento y evolución'
      ]
    }
  ];
}

