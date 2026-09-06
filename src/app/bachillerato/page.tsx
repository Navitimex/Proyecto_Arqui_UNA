"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Download,
  Search,
  BookOpen,
  GraduationCap,
  Briefcase,
  HelpCircle,
  Clock,
  Award,
  ChevronDown,
  X,
  Copy,
  Check,
  Code2,
  Database,
  Network,
  Cpu,
  ShieldCheck,
  Sparkles,
  Layers,
  Building2,
  TrendingUp,
  CheckCircle2,
  UserCheck,
  Users,
} from "lucide-react";
import { useToast } from "@/components/Toast";

type KnowledgeArea = "software" | "sistemas" | "datos" | "basicas" | "humanidades";

interface Course {
  code: string;
  name: string;
  credits: number;
  area: KnowledgeArea;
  req?: string;
  unlockedBy?: string[];
  description: string;
  topics: string[];
  technologies?: string[];
  isElective?: boolean;
}

interface Semester {
  semNumber: number;
  year: number;
  title: string;
  courses: Course[];
}

interface ElectiveOption {
  code: string;
  name: string;
  area: string;
  description: string;
  skills: string[];
}

export default function BachilleratoPage() {
  const { showToast } = useToast();

  // Navigation tabs state
  const [activeTab, setActiveTab] = useState<"malla" | "perfil" | "laboral" | "admision" | "faq">("malla");

  // Filter and search state
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedArea, setSelectedArea] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Interactive course modal state
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [hoveredCourseCode, setHoveredCourseCode] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Electives modal state
  const [showElectivesModal, setShowElectivesModal] = useState<boolean>(false);

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Complete curriculum data with enriched descriptions & competencies
  const semesters: Semester[] = [
    {
      semNumber: 1,
      year: 1,
      title: "I Ciclo (Primer Año)",
      courses: [
        {
          code: "EIF-200",
          name: "Fundamentos de Informática",
          credits: 4,
          area: "software",
          unlockedBy: ["EIF-201", "EIF-204"],
          description: "Introducción al pensamiento algorítmico, lógica de resolución de problemas, estructuras elementales de control y conceptos fundamentales del cómputo moderno.",
          topics: ["Lógica proposicional y algoritmia", "Estructuras de selección e iteración", "Modularización y funciones", "Representación de datos en memoria"],
          technologies: ["Python", "Pseudocódigo", "Git / GitHub"],
        },
        {
          code: "MAT-001",
          name: "Cálculo I",
          credits: 4,
          area: "basicas",
          unlockedBy: ["MAT-002", "MAT-003"],
          description: "Estudio del cálculo diferencial e integral de una variable con aplicaciones directas a problemas de optimización, modelado y análisis computacional.",
          topics: ["Límites y continuidad", "Derivadas y tasas de cambio", "Optimización algorítmica", "Integración básica"],
        },
        {
          code: "LIX-101",
          name: "Inglés Integrado I",
          credits: 3,
          area: "humanidades",
          unlockedBy: ["LIX-102"],
          description: "Desarrollo de competencias comunicativas en inglés técnico con énfasis en comprensión de lectura de documentación de software y vocabulario computacional.",
          topics: ["Lectura técnica de estándares", "Gramática comunicativa aplicada a TI", "Vocabulario de ingeniería de software"],
        },
        {
          code: "HUM-001",
          name: "Comunicación y Lenguaje",
          credits: 3,
          area: "humanidades",
          description: "Técnicas de redacción formal, análisis crítico de textos científicos y habilidades orales para la presentación efectiva de proyectos tecnológicos.",
          topics: ["Redacción técnica de informes", "Oratoria profesional y pitch", "Comprensión lectora avanzada"],
        },
      ],
    },
    {
      semNumber: 2,
      year: 1,
      title: "II Ciclo (Primer Año)",
      courses: [
        {
          code: "EIF-201",
          name: "Programación I",
          credits: 4,
          area: "software",
          req: "EIF-200",
          unlockedBy: ["EIF-202"],
          description: "Paradigma de programación orientada a objetos (POO), abstracción, encapsulamiento, herencia, polimorfismo y diseño de aplicaciones con interfaces gráficas.",
          topics: ["Clases, objetos e instanciación", "Herencia y polimorfismo", "Manejo estructurado de excepciones", "Persistencia simple de datos"],
          technologies: ["Java / C#", "JUnit", "IDEs Modernos", "Git"],
        },
        {
          code: "MAT-002",
          name: "Álgebra Lineal",
          credits: 4,
          area: "basicas",
          req: "MAT-001",
          unlockedBy: ["EIF-203"],
          description: "Matrices, sistemas de ecuaciones lineales, espacios vectoriales y transformaciones aplicadas a gráficos por computadora y ciencia de datos.",
          topics: ["Matrices y determinantes", "Espacios vectoriales", "Transformaciones lineales", "Valores y vectores propios"],
        },
        {
          code: "LIX-102",
          name: "Inglés Integrado II",
          credits: 3,
          area: "humanidades",
          req: "LIX-101",
          description: "Consolidación de expresión oral y escrita en contextos de reuniones técnicas ágiles (Scrum ceremonies), documentación y especificaciones de software.",
          topics: ["Reuniones técnicas (Daily, Sprint Review)", "Redacción de requerimientos en inglés", "Presentación de demos"],
        },
        {
          code: "SOC-001",
          name: "Realidad Nacional",
          credits: 3,
          area: "humanidades",
          description: "Análisis del entorno socioeconómico, político y digital de Costa Rica, con énfasis en la brecha digital y la inclusión mediante tecnologías.",
          topics: ["Brecha digital en Costa Rica", "Ética pública y legislación nacional", "Impacto social de la tecnología"],
        },
      ],
    },
    {
      semNumber: 3,
      year: 2,
      title: "III Ciclo (Segundo Año)",
      courses: [
        {
          code: "EIF-202",
          name: "Programación II",
          credits: 4,
          area: "software",
          req: "EIF-201",
          unlockedBy: ["EIF-205", "EIF-206"],
          description: "Profundización en POO avanzada, patrones de diseño de software (GoF), interfaces de usuario reactivas y arquitectura desacoplada por capas.",
          topics: ["Patrones de diseño (Singleton, Factory, Observer)", "Arquitectura en capas (MVC / MVP)", "Manejo de eventos y concurrencia básica", "Conexión a orígenes de datos"],
          technologies: ["Java / C#", "JavaFX / Swing", "Patrones GoF"],
        },
        {
          code: "EIF-203",
          name: "Estructuras Discretas",
          credits: 4,
          area: "basicas",
          req: "MAT-002",
          description: "Fundamentos matemáticos para la computación: teoría de conjuntos, relaciones, grafos, árboles, combinatoria y autómatas de estados finitos.",
          topics: ["Teoría de grafos y árboles", "Relaciones de recurrencia", "Lógica booleana y circuitos", "Autómatas y lenguajes formales"],
        },
        {
          code: "EIF-204",
          name: "Arquitectura de Computadores",
          credits: 4,
          area: "sistemas",
          req: "EIF-200",
          unlockedBy: ["EIF-207"],
          description: "Organización de hardware, procesadores, jerarquía de memoria caché, lenguaje ensamblador y comprensión del ciclo de instrucción a bajo nivel.",
          topics: ["Microarquitectura y CPU", "Jerarquía de memoria y caché", "Interrupciones y buses", "Programación en ensamblador"],
          technologies: ["Assembly x86/ARM", "Simuladores MIPS", "C"],
        },
        {
          code: "HUM-002",
          name: "Arte y Humanidades",
          credits: 3,
          area: "humanidades",
          description: "Apreciación estética, creatividad, diseño centrado en la persona y sensibilidad social orientada a la innovación tecnológica.",
          topics: ["Pensamiento creativo", "Historia de la cultura y la ciencia", "Ética humanista en la era digital"],
        },
      ],
    },
    {
      semNumber: 4,
      year: 2,
      title: "IV Ciclo (Segundo Año)",
      courses: [
        {
          code: "EIF-205",
          name: "Estructuras de Datos",
          credits: 4,
          area: "software",
          req: "EIF-202",
          unlockedBy: ["EIF-210"],
          description: "Diseño y análisis formal de estructuras no lineales en memoria: árboles binarios, AVL, grafos, tablas hash y análisis de complejidad asintótica (Big-O).",
          topics: ["Listas enlazadas, pilas y colas", "Árboles binarios y balanceados (AVL, B-Tree)", "Algoritmos en grafos (Dijkstra, Kruskal)", "Complejidad temporal y espacial Big-O"],
          technologies: ["C++ / Java", "Valgrind", "Algoritmia"],
        },
        {
          code: "EIF-206",
          name: "Bases de Datos I",
          credits: 4,
          area: "datos",
          req: "EIF-202",
          unlockedBy: ["EIF-209"],
          description: "Modelado relacional entidad-relación, normalización (1FN-3FN), diseño físico y consultas complejas en lenguaje SQL estándar.",
          topics: ["Modelo Entidad-Relación y Relacional", "Normalización formal de datos", "Consultas avanzadas en SQL (DDL, DML)", "Transacciones ACID e integridad"],
          technologies: ["PostgreSQL / MySQL", "DBeaver", "SQL"],
        },
        {
          code: "MAT-003",
          name: "Probabilidad y Estadística",
          credits: 4,
          area: "basicas",
          req: "MAT-001",
          unlockedBy: ["EIF-211"],
          description: "Inferencia estadística, distribuciones de probabilidad, muestreo y pruebas de hipótesis para evaluación empírica de sistemas y modelos de datos.",
          topics: ["Variables aleatorias discretas y continuas", "Distribución normal, binomial, Poisson", "Inferencia estadística y regresión", "Pruebas de hipótesis aplicadas a TI"],
          technologies: ["R", "Python / SciPy"],
        },
        {
          code: "EIF-207",
          name: "Sistemas Operativos",
          credits: 4,
          area: "sistemas",
          req: "EIF-204",
          unlockedBy: ["EIF-208"],
          description: "Gestión de procesos, sincronización y semáforos, concurrencia, administración de memoria virtual, sistemas de archivos y scripting en terminal Linux.",
          topics: ["Planificación de CPU y procesos", "Sincronización (Mutex, Semáforos, Deadlocks)", "Memoria virtual y paginación", "Shell scripting y llamadas al sistema"],
          technologies: ["Linux (Ubuntu/Debian)", "Bash", "POSIX C", "Docker"],
        },
      ],
    },
    {
      semNumber: 5,
      year: 3,
      title: "V Ciclo (Tercer Año)",
      courses: [
        {
          code: "EIF-208",
          name: "Redes y Conectividad",
          credits: 4,
          area: "sistemas",
          req: "EIF-207",
          unlockedBy: ["EIF-214"],
          description: "Arquitectura modelo OSI y pila TCP/IP, enrutamiento, subredes IPv4/IPv6, protocolos de capa de aplicación (DNS, HTTP/S, SSH) y configuración de equipos.",
          topics: ["Subnetting IPv4 y direccionamiento IPv6", "Protocolos de transporte TCP vs UDP", "Enrutamiento estático y dinámico (OSPF)", "Análisis de tráfico con Wireshark"],
          technologies: ["Cisco Packet Tracer", "Wireshark", "Linux Networking", "TCP/IP"],
        },
        {
          code: "EIF-209",
          name: "Bases de Datos II",
          credits: 4,
          area: "datos",
          req: "EIF-206",
          unlockedBy: ["EIF-213"],
          description: "Bases de datos no relacionales (NoSQL), optimización y tuning de consultas, procedimientos almacenados, triggers, indexación B-Tree y replicación distribuida.",
          topics: ["Motores NoSQL (Documentos, Key-Value)", "Optimización con Explain Plan e índices", "Procedimientos almacenados y triggers", "Alta disponibilidad y sharding"],
          technologies: ["MongoDB", "Redis", "PostgreSQL Avanzado", "Docker"],
        },
        {
          code: "EIF-210",
          name: "Ingeniería de Software I",
          credits: 4,
          area: "software",
          req: "EIF-205",
          unlockedBy: ["EIF-212"],
          description: "Ciclo de vida del software, metodologías ágiles (Scrum, Kanban), ingeniería de requerimientos, modelado UML formal y pruebas unitarias de software.",
          topics: ["Marco de trabajo Scrum y roles ágiles", "Historias de usuario y criterios de aceptación", "Modelado UML de casos de uso y clases", "Pruebas unitarias y TDD"],
          technologies: ["Jira", "GitHub Projects", "UML", "Jest / JUnit"],
        },
        {
          code: "EIF-211",
          name: "Investigación de Operaciones",
          credits: 3,
          area: "basicas",
          req: "MAT-003",
          description: "Modelos de optimización lineal y entera, método Simplex, modelos de transporte, teoría de colas y simulación estocástica para toma de decisiones.",
          topics: ["Programación lineal y método Simplex", "Problemas de transporte y asignación", "Teoría de inventarios y colas", "Simulación computacional"],
          technologies: ["Python (PuLP / SciPy)", "Solver"],
        },
      ],
    },
    {
      semNumber: 6,
      year: 3,
      title: "VI Ciclo (Tercer Año)",
      courses: [
        {
          code: "EIF-212",
          name: "Ingeniería de Software II",
          credits: 4,
          area: "software",
          req: "EIF-210",
          unlockedBy: ["EIF-215"],
          description: "Arquitectura de software empresarial (Clean Architecture, Microservicios), integración continua (CI/CD), aseguramiento de calidad (QA) y pruebas de integración.",
          topics: ["Arquitecturas en capas y microservicios", "Pipelines de CI/CD automatizados", "Pruebas de integración y cobertura de código", "Refactorización y deuda técnica"],
          technologies: ["GitHub Actions", "Docker", "SonarQube", "Postman"],
        },
        {
          code: "EIF-213",
          name: "Desarrollo de Aplicaciones Web",
          credits: 4,
          area: "software",
          req: "EIF-209",
          unlockedBy: ["EIF-217"],
          description: "Diseño y construcción de sistemas web cliente-servidor, desarrollo de APIs RESTful, autenticación basada en tokens (JWT), TypeScript y frameworks modernos.",
          topics: ["Arquitectura REST y diseño de APIs", "Frontend reactivo con componentes SPA/SSR", "Seguridad web (CORS, CSRF, JWT)", "Despliegue y hosting cloud"],
          technologies: ["TypeScript", "Next.js / React", "Node.js / Express", "Tailwind CSS"],
        },
        {
          code: "EIF-214",
          name: "Seguridad y Auditoría TI",
          credits: 4,
          area: "sistemas",
          req: "EIF-208",
          unlockedBy: ["EIF-216"],
          description: "Fundamentos de ciberseguridad, criptografía aplicada, gestión de identidades, análisis de vulnerabilidades OWASP Top 10 y marcos normativos de auditoría (ISO 27001).",
          topics: ["Criptografía simétrica y asimétrica", "Vulnerabilidades OWASP Top 10", "Firewalls, VPNs y defensas perimetrales", "Auditoría de sistemas e ISO/IEC 27001"],
          technologies: ["Kali Linux", "Wireshark", "Burp Suite", "OpenSSL"],
        },
        {
          code: "OPT-001",
          name: "Optativa de Especialidad I",
          credits: 3,
          area: "software",
          isElective: true,
          description: "Curso de profundización técnica de vanguardia a elegir de la oferta oficial: Inteligencia Artificial, Cloud Computing, Ciberseguridad, Desarrollo Móvil o IoT.",
          topics: ["Profundización técnica especializada", "Proyecto práctico aplicado", "Uso de herramientas de industria"],
          technologies: ["Según especialidad elegida"],
        },
      ],
    },
    {
      semNumber: 7,
      year: 4,
      title: "VII Ciclo (Cuarto Año)",
      courses: [
        {
          code: "EIF-215",
          name: "Gestión de Proyectos TI",
          credits: 4,
          area: "software",
          req: "EIF-212",
          unlockedBy: ["EIF-510"],
          description: "Gestión integral de proyectos de software basada en PMBOK y Agile/Scrum: estimación de costos y esfuerzo, gestión de riesgos, aseguramiento de valor y liderazgo de equipos.",
          topics: ["Estimación de esfuerzo y puntos de historia", "Gestión de cronogramas y presupuestos", "Identificación y mitigación de riesgos TI", "Habilidades blandas y liderazgo ágil"],
          technologies: ["Jira Software", "MS Project", "Trello"],
        },
        {
          code: "EIF-216",
          name: "Administración de Sistemas",
          credits: 4,
          area: "sistemas",
          req: "EIF-214",
          unlockedBy: ["EIF-510"],
          description: "Administración de servidores empresariales, virtualización, contenedores, servicios de directorio activo, automatización de infraestructura e infraestructura como código (IaC).",
          topics: ["Virtualización y contenedores Docker", "Servicios de red (DNS, DHCP, LDAP/Active Directory)", "Automatización con Ansible / Scripts", "Monitoreo de infraestructura y logs"],
          technologies: ["Linux Enterprise", "Docker", "Ansible", "Grafana / Prometheus"],
        },
        {
          code: "EIF-217",
          name: "Taller Profesional Preparatorio",
          credits: 3,
          area: "software",
          req: "EIF-213",
          unlockedBy: ["EIF-510"],
          description: "Integración de conocimientos técnicos en un proyecto tecnológico real con cliente, preparando al estudiante para su ingreso a la Práctica Profesional Supervisada (PPS).",
          topics: ["Diagnóstico y formulación de anteproyecto", "Diseño de arquitectura de solución", "Entrevistas con stakeholders", "Definición del plan de trabajo de PPS"],
          technologies: ["Full Stack", "DevOps", "Arquitectura TI"],
        },
        {
          code: "OPT-002",
          name: "Optativa de Especialidad II",
          credits: 3,
          area: "software",
          isElective: true,
          description: "Segunda materia de profundización profesional para consolidar el perfil de egreso en tecnologías emergentes o de alta demanda en el mercado internacional.",
          topics: ["Tecnologías emergentes", "Desarrollo avanzado de soluciones", "Proyecto integrador"],
          technologies: ["Según especialidad elegida"],
        },
      ],
    },
    {
      semNumber: 8,
      year: 4,
      title: "VIII Ciclo (Cuarto Año - Bloque de Graduación)",
      courses: [
        {
          code: "EIF-510",
          name: "Práctica Profesional Supervisada (PPS)",
          credits: 12,
          area: "software",
          req: "Todo el bloque de I a VII Ciclo aprobado",
          description: "Inserción laboral de tiempo completo durante un semestre (mínimo 480 horas efectivas) en una empresa u organización nacional o multinacional acreditada, ejecutando un proyecto tecnológico inédito.",
          topics: ["Desarrollo tecnológico empresarial", "Solución de problemas de industria", "Tutoría académica y empresarial", "Informe final y defensa profesional"],
          technologies: ["Entorno profesional de la empresa asignada"],
        },
      ],
    },
  ];

  // Electives official catalog
  const electiveCatalog: ElectiveOption[] = [
    {
      code: "EIF-401",
      name: "Inteligencia Artificial y Machine Learning",
      area: "Ciencia de Datos & IA",
      description: "Algoritmos supervisados y no supervisados, redes neuronales profundas, procesamiento del lenguaje natural (NLP) y desarrollo de modelos predictivos en producción.",
      skills: ["Python", "TensorFlow", "Scikit-Learn", "Hugging Face"],
    },
    {
      code: "EIF-402",
      name: "Arquitectura Cloud & DevOps",
      area: "Infraestructura & Cloud",
      description: "Diseño de sistemas distribuidos en la nube, infraestructura como código (Terraform), Kubernetes, monitoreo con Prometheus y observabilidad en AWS/Azure.",
      skills: ["AWS", "Terraform", "Kubernetes", "Docker", "CI/CD"],
    },
    {
      code: "EIF-403",
      name: "Ciberseguridad Defensiva y Análisis Forense",
      area: "Seguridad Informática",
      description: "Respuesta ante incidentes (CSIRT), análisis estático/dinámico de malware, seguridad en entornos cloud y recolección de evidencias digitales con validez forense.",
      skills: ["SIEM", "Splunk", "Wireshark", "Autopsy", "Blue Teaming"],
    },
    {
      code: "EIF-404",
      name: "Desarrollo de Aplicaciones Móviles Multiplataforma",
      area: "Ingeniería de Software",
      description: "Construcción de aplicaciones móviles de alto rendimiento para iOS y Android con Flutter y React Native, integración de sensores locales y sincronización offline-first.",
      skills: ["Flutter", "Dart", "React Native", "SQLite", "Firebase"],
    },
    {
      code: "EIF-405",
      name: "Computación Gráfica y Videojuegos",
      area: "Sistemas Multimedia",
      description: "Programación de shaders, física en tiempo real, pipeline de renderizado 3D y diseño de arquitectura orientada a videojuegos con motores líderes de industria.",
      skills: ["Unity / Unreal", "C# / C++", "OpenGL", "HLSL Shaders"],
    },
    {
      code: "EIF-406",
      name: "Internet de las Cosas (IoT) y Computación Ubicua",
      area: "Sistemas Embebidos",
      description: "Interconexión de sensores inteligentes, protocolos ligeros (MQTT, CoAP), microcontroladores ESP32/Raspberry Pi y arquitecturas Edge Computing.",
      skills: ["ESP32", "C / MicroPython", "MQTT", "Edge Computing"],
    },
  ];

  // Helper dictionary for knowledge areas
  const areaConfig: Record<KnowledgeArea, { label: string; badgeClass: string; borderClass: string; icon: React.ReactNode }> = {
    software: {
      label: "Ingeniería de Software",
      badgeClass: "bg-blue-50 text-blue-700 border-blue-200",
      borderClass: "hover:border-blue-400 focus:border-blue-400",
      icon: <Code2 className="w-3.5 h-3.5 text-blue-600" />,
    },
    sistemas: {
      label: "Sistemas y Redes",
      badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
      borderClass: "hover:border-emerald-400 focus:border-emerald-400",
      icon: <Network className="w-3.5 h-3.5 text-emerald-600" />,
    },
    datos: {
      label: "Gestión de Datos",
      badgeClass: "bg-purple-50 text-purple-700 border-purple-200",
      borderClass: "hover:border-purple-400 focus:border-purple-400",
      icon: <Database className="w-3.5 h-3.5 text-purple-600" />,
    },
    basicas: {
      label: "Ciencias Básicas",
      badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
      borderClass: "hover:border-amber-400 focus:border-amber-400",
      icon: <Cpu className="w-3.5 h-3.5 text-amber-600" />,
    },
    humanidades: {
      label: "Humanidades e Idiomas",
      badgeClass: "bg-slate-100 text-slate-700 border-slate-200",
      borderClass: "hover:border-slate-400 focus:border-slate-400",
      icon: <BookOpen className="w-3.5 h-3.5 text-slate-600" />,
    },
  };

  // Filtered semesters and courses based on search & active filters
  const filteredSemesters = useMemo(() => {
    return semesters
      .filter((sem) => {
        if (selectedYear === "all") return true;
        return sem.year === parseInt(selectedYear);
      })
      .map((sem) => {
        const matchingCourses = sem.courses.filter((course) => {
          // Area filter
          if (selectedArea !== "all" && course.area !== selectedArea) {
            return false;
          }
          // Search query filter
          if (searchQuery.trim() !== "") {
            const q = searchQuery.toLowerCase().trim();
            const matchCode = course.code.toLowerCase().includes(q);
            const matchName = course.name.toLowerCase().includes(q);
            const matchTopics = course.topics.some((t) => t.toLowerCase().includes(q));
            const matchTech = course.technologies?.some((tech) => tech.toLowerCase().includes(q));
            return matchCode || matchName || matchTopics || matchTech;
          }
          return true;
        });

        return {
          ...sem,
          courses: matchingCourses,
        };
      })
      .filter((sem) => sem.courses.length > 0);
  }, [semesters, selectedYear, selectedArea, searchQuery]);

  // Dynamic statistics
  const totalCoursesShown = useMemo(() => {
    return filteredSemesters.reduce((acc, sem) => acc + sem.courses.length, 0);
  }, [filteredSemesters]);

  const totalCreditsShown = useMemo(() => {
    return filteredSemesters.reduce(
      (acc, sem) => acc + sem.courses.reduce((sum, c) => sum + c.credits, 0),
      0
    );
  }, [filteredSemesters]);

  // Copy course code helper
  const handleCopyCode = (code: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    showToast(`Código ${code} copiado al portapapeles`);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // Find course by code helper (to navigate prerequisites)
  const findCourseByCode = (code: string): Course | null => {
    for (const sem of semesters) {
      const found = sem.courses.find((c) => c.code === code);
      if (found) return found;
    }
    return null;
  };

  // Download simulation
  const handleDownloadPlan = () => {
    showToast("Descargando Plan_de_Estudios_Bachillerato_Sistemas_UNA_2026.pdf...");
  };

  // FAQ Items
  const faqList = [
    {
      q: "¿Cuál es la diferencia principal entre el Bachillerato y la Licenciatura en la UNA?",
      a: "El Bachillerato (4 años / 8 ciclos) otorga el título universitario habilitante para ejercer profesionalmente en desarrollo, sistemas, redes y bases de datos con un 98% de inserción laboral inmediata. La Licenciatura (1 año adicional) profundiza en formulación de proyectos estratégicos de TI, alta gerencia tecnológica, arquitectura empresarial y el Trabajo Final de Graduación (TFG).",
    },
    {
      q: "¿Cómo funciona el requisito de Práctica Profesional Supervisada (PPS)?",
      a: "La PPS se realiza en el VIII ciclo (último semestre) a tiempo completo. El estudiante se vincula a una empresa del sector tecnológico o entidad pública durante 480 horas para ejecutar un proyecto real. La gran mayoría de estudiantes recibe una oferta formal de contratación en la misma empresa al culminar su PPS.",
    },
    {
      q: "¿Existen opciones de becas o asistencia socioeconómica?",
      a: "Sí. La UNA ofrece el sistema de Becas del Departamento de Bienestar Estudiantil, que incluye exoneración parcial o total de aranceles de matrícula, becas de residencia universitaria, apoyo de alimentación y becas por rendimiento académico y participación cultural o deportiva.",
    },
    {
      q: "¿Puedo convalidar materias si provengo de otra universidad pública o privada?",
      a: "Sí. El proceso de reconocimiento y equiparación de cursos se gestiona en las fechas fijadas por el calendario universitario ante la Subdirección de la Escuela de Informática, presentando los programas de estudio oficiales debidamente sellados por la institución de procedencia.",
    },
    {
      q: "¿Qué nivel de inglés se requiere y cómo se acredita en la carrera?",
      a: "El plan de estudios incluye dos cursos formales de inglés técnico (LIX-101 y LIX-102). Adicionalmente, antes de la graduación, el estudiante debe certificar el nivel intermedio de suficiencia en inglés mediante la prueba diagnóstica institucional del Departamento de Idiomas de la UNA o examen internacional avalado (TOEIC, TOEFL o IELTS).",
    },
  ];

  return (
    <div className="space-y-10 pb-20">
      {/* 1. HERO INSTITUCIONAL ELEVADO */}
      <section className="bg-gradient-to-br from-una-blue-dark via-una-blue to-slate-900 text-white pt-10 pb-16 px-4 sm:px-6 lg:px-8 border-b-4 border-una-red relative overflow-hidden">
        {/* Subtle background decorative grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto space-y-6 relative z-10">
          {/* Migas de pan institucionales */}
          <nav className="text-xs text-slate-300 flex items-center gap-2 flex-wrap" aria-label="Miga de pan">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <span>Inicio</span>
            </Link>
            <span className="text-slate-500">/</span>
            <span className="text-slate-300">Oferta Académica</span>
            <span className="text-slate-500">/</span>
            <span className="text-white font-semibold underline decoration-una-red decoration-2 underline-offset-4">
              Bachillerato en Ingeniería en Sistemas
            </span>
          </nav>

          {/* Hero Header Content */}
          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-una-red/25 border border-una-red/50 text-red-200 text-xs font-bold uppercase tracking-wide">
                <Award className="w-3.5 h-3.5 text-una-red" />
                Acreditación Oficial SINAES
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-medium">
                Código CONARE: <strong className="text-white font-mono">EIF-ISI-B-2026</strong>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-300 text-xs font-medium">
                <Sparkles className="w-3 h-3" />
                Malla Curricular 2026
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight leading-tight text-white">
              Bachillerato en Ingeniería en Sistemas de Información
            </h1>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-3xl">
              Formación universitaria de excelencia con más de 40 años liderando la innovación tecnológica en Costa Rica.
              Plan integral enfocado en ingeniería de software, arquitectura cloud, ciberseguridad, gestión de bases de datos
              y liderazgo de proyectos con una tasa de inserción laboral del <strong>98%</strong>.
            </p>

            {/* Quick Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={handleDownloadPlan}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-una-red hover:bg-una-red-dark text-white font-heading font-bold text-sm shadow-lg shadow-una-red/30 transition-all transform active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Descargar Malla Curricular (PDF)</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab("perfil");
                  document.getElementById("tabs-container")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white font-heading font-semibold text-sm border border-slate-700 hover:border-slate-500 transition-all"
              >
                <GraduationCap className="w-4 h-4 text-slate-300" />
                <span>Ver Perfil de Egreso</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab("admision");
                  document.getElementById("tabs-container")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-heading font-semibold text-sm border border-white/20 transition-all"
              >
                <Building2 className="w-4 h-4 text-amber-300" />
                <span>Requisitos de Admisión UNA</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FICHA TÉCNICA EJECUTIVA (Cards con margen negativo) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-card p-5 sm:p-7">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="pt-3 first:pt-0 md:pt-0 md:px-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
                <Clock className="w-4 h-4 text-una-red" />
                <span>Duración</span>
              </div>
              <div className="text-xl font-black font-heading text-una-blue">4 Años</div>
              <span className="text-[11px] text-slate-500">8 ciclos semestrales</span>
            </div>

            <div className="pt-3 md:pt-0 md:px-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
                <Layers className="w-4 h-4 text-blue-600" />
                <span>Carga Académica</span>
              </div>
              <div className="text-xl font-black font-heading text-una-blue">138 Créditos</div>
              <span className="text-[11px] text-slate-500">33 asignaturas + PPS</span>
            </div>

            <div className="pt-3 md:pt-0 md:px-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
                <Award className="w-4 h-4 text-emerald-600" />
                <span>Acreditación</span>
              </div>
              <div className="text-xl font-black font-heading text-emerald-600">SINAES Oficial</div>
              <span className="text-[11px] text-slate-500">Calidad certificada</span>
            </div>

            <div className="pt-3 md:pt-0 md:px-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
                <Building2 className="w-4 h-4 text-purple-600" />
                <span>Modalidad</span>
              </div>
              <div className="text-xl font-black font-heading text-una-blue">Presencial / Híbrida</div>
              <span className="text-[11px] text-slate-500">Campus Omar Dengo</span>
            </div>

            <div className="pt-3 md:pt-0 md:px-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
                <TrendingUp className="w-4 h-4 text-amber-600" />
                <span>Empleabilidad</span>
              </div>
              <div className="text-xl font-black font-heading text-amber-600">98% Inserción</div>
              <span className="text-[11px] text-slate-500">Estadística CONARE / OLiP</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NAVEGACIÓN PRINCIPAL DE CONTENIDOS (TABS) */}
      <section id="tabs-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-slate-200">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {[
              { id: "malla", label: "Malla Curricular Interactiva", icon: <BookOpen className="w-4 h-4" /> },
              { id: "perfil", label: "Perfil y Competencias", icon: <GraduationCap className="w-4 h-4" /> },
              { id: "laboral", label: "Campo Laboral y Empleabilidad", icon: <Briefcase className="w-4 h-4" /> },
              { id: "admision", label: "Admisión y Requisitos UNA", icon: <CheckCircle2 className="w-4 h-4" /> },
              { id: "faq", label: "Preguntas Frecuentes", icon: <HelpCircle className="w-4 h-4" /> },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-3 border-b-2 font-heading text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                    isActive
                      ? "border-una-red text-una-red bg-una-red/5 rounded-t-lg"
                      : "border-transparent text-slate-600 hover:text-una-blue hover:border-slate-300"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CONTENIDO DINÁMICO POR PESTAÑA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================================= */}
        {/* TAB 1: MALLA CURRICULAR INTERACTIVA */}
        {/* ========================================================================= */}
        {activeTab === "malla" && (
          <div className="space-y-8">
            {/* Barra de Control: Buscador y Filtros */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-black font-heading text-una-blue flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-una-red" />
                    <span>Plan de Estudios Semestral (Malla Oficial 2026)</span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Haz clic en cualquier curso para consultar temario, tecnologías utilizadas y materias que desbloquea.
                  </p>
                </div>

                {/* Input de Búsqueda en vivo */}
                <div className="relative w-full md:w-80">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Buscar curso (ej: Redes, EIF-201)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-9 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-una-red/20 focus:border-una-red transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Filtros: Año y Área de Conocimiento */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-3 border-t border-slate-100">
                {/* Filtro por Año */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-xs font-bold text-slate-500 mr-1">Año lectivo:</span>
                  {[
                    { id: "all", label: "Todos los años" },
                    { id: "1", label: "Año 1" },
                    { id: "2", label: "Año 2" },
                    { id: "3", label: "Año 3" },
                    { id: "4", label: "Año 4" },
                  ].map((btn) => (
                    <button
                      key={btn.id}
                      onClick={() => setSelectedYear(btn.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        selectedYear === btn.id
                          ? "bg-una-blue text-white shadow-sm"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>

                {/* Filtro por Área de Conocimiento */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-xs font-bold text-slate-500 mr-1">Área:</span>
                  {[
                    { id: "all", label: "Todas" },
                    { id: "software", label: "Software" },
                    { id: "sistemas", label: "Redes/Sistemas" },
                    { id: "datos", label: "Datos" },
                    { id: "basicas", label: "Básicas" },
                    { id: "humanidades", label: "Humanidades" },
                  ].map((area) => (
                    <button
                      key={area.id}
                      onClick={() => setSelectedArea(area.id)}
                      className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all border ${
                        selectedArea === area.id
                          ? "bg-una-red text-white border-una-red shadow-sm"
                          : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {area.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Barra informativa de resultados */}
              <div className="flex items-center justify-between text-xs text-slate-500 bg-slate-50 px-3.5 py-2 rounded-lg border border-slate-100 flex-wrap gap-2">
                <div>
                  Mostrando <strong>{totalCoursesShown}</strong> asignaturas visibles (<strong>{totalCreditsShown}</strong> créditos)
                  {(searchQuery || selectedYear !== "all" || selectedArea !== "all") && (
                    <span className="ml-2 text-una-red font-semibold">• Filtros activos</span>
                  )}
                </div>

                <button
                  onClick={() => setShowElectivesModal(true)}
                  className="text-xs font-bold text-una-blue hover:text-una-red flex items-center gap-1 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-una-gold" />
                  <span>Ver Catálogo de Optativas Oficiales</span>
                </button>
              </div>
            </div>

            {/* Grid de Semestres y Cursos */}
            {filteredSemesters.length === 0 ? (
              <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center space-y-3">
                <Search className="w-8 h-8 text-slate-400 mx-auto" />
                <h3 className="font-heading font-bold text-base text-slate-800">
                  No se encontraron cursos con los filtros seleccionados
                </h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Prueba cambiando el término de búsqueda o seleccionando "Todas las áreas" para ver el plan completo.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedArea("all");
                    setSelectedYear("all");
                  }}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold transition-colors"
                >
                  Restablecer Filtros
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredSemesters.map((sem) => {
                  const semesterCredits = sem.courses.reduce((acc, c) => acc + c.credits, 0);

                  return (
                    <div
                      key={sem.semNumber}
                      className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:border-slate-300 transition-all"
                    >
                      {/* Cabecera de Semestre */}
                      <div className="bg-slate-50/80 px-5 py-3.5 border-b border-slate-200 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-una-blue text-white text-xs font-black flex items-center justify-center">
                            {sem.semNumber}
                          </span>
                          <h3 className="font-heading font-black text-sm text-una-blue">
                            {sem.title}
                          </h3>
                        </div>
                        <span className="text-xs font-bold text-slate-600 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                          {semesterCredits} Créditos
                        </span>
                      </div>

                      {/* Lista de Cursos del Semestre */}
                      <div className="p-4 divide-y divide-slate-100 flex-1 space-y-2">
                        {sem.courses.map((course) => {
                          const areaInfo = areaConfig[course.area];
                          const isHighlighted = hoveredCourseCode === course.code;
                          const isReqOfHovered =
                            hoveredCourseCode &&
                            semesters
                              .flatMap((s) => s.courses)
                              .find((c) => c.code === hoveredCourseCode)
                              ?.req?.includes(course.code);

                          return (
                            <div
                              key={course.code}
                              onClick={() => {
                                if (course.isElective) {
                                  setShowElectivesModal(true);
                                } else {
                                  setSelectedCourse(course);
                                }
                              }}
                              onMouseEnter={() => setHoveredCourseCode(course.code)}
                              onMouseLeave={() => setHoveredCourseCode(null)}
                              className={`pt-3 first:pt-0 pb-1 cursor-pointer rounded-xl p-3 transition-all ${
                                isHighlighted
                                  ? "bg-red-50/70 border border-una-red/30 shadow-sm"
                                  : isReqOfHovered
                                  ? "bg-amber-50/80 border border-amber-300"
                                  : "hover:bg-slate-50/80 border border-transparent"
                              }`}
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div className="space-y-1.5 flex-1">
                                  {/* Encabezado del curso */}
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className="font-mono text-xs font-black text-una-red bg-una-red/10 px-2 py-0.5 rounded border border-una-red/20">
                                      {course.code}
                                    </span>
                                    <span
                                      className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full border ${areaInfo.badgeClass}`}
                                    >
                                      {areaInfo.icon}
                                      <span>{areaInfo.label}</span>
                                    </span>
                                  </div>

                                  {/* Título de la Asignatura */}
                                  <h4 className="font-bold text-sm text-slate-900 group-hover:text-una-blue">
                                    {course.name}
                                  </h4>

                                  {/* Prerrequisitos */}
                                  {course.req && (
                                    <div className="text-[11px] text-slate-500 flex items-center gap-1 flex-wrap">
                                      <span className="font-medium text-slate-400">Requisito:</span>
                                      <span
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          const prereqCourse = findCourseByCode(course.req!);
                                          if (prereqCourse) setSelectedCourse(prereqCourse);
                                        }}
                                        className="font-bold text-slate-700 hover:text-una-red underline decoration-dotted cursor-pointer"
                                      >
                                        {course.req}
                                      </span>
                                    </div>
                                  )}

                                  {/* Enlace para Optativas */}
                                  {course.isElective && (
                                    <span className="inline-flex items-center gap-1 text-[11px] text-una-red font-bold">
                                      <Sparkles className="w-3 h-3 text-una-gold" />
                                      Haz clic para ver asignaturas optativas disponibles
                                    </span>
                                  )}
                                </div>

                                {/* Columna de Créditos */}
                                <div className="text-right shrink-0">
                                  <span className="px-2.5 py-1 bg-slate-100 text-slate-800 rounded-lg text-xs font-black">
                                    {course.credits} cr
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: PERFIL Y COMPETENCIAS */}
        {/* ========================================================================= */}
        {activeTab === "perfil" && (
          <div className="space-y-10">
            {/* Banner de Introducción del Perfil */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-una-red">
                Modelo Educativo por Competencias
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-heading text-una-blue">
                Perfil de Salida del Profesional en Sistemas UNA
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed max-w-4xl">
                El graduado del Bachillerato en Ingeniería en Sistemas de Información de la Universidad Nacional es un
                profesional capacitado para analizar, diseñar, implementar, auditar y gestionar soluciones computacionales
                robustas, escalables y seguras, con una sólida base ética, capacidad de autoaprendizaje y liderazgo ágil.
              </p>
            </div>

            {/* Grid: Perfil de Ingreso vs Perfil de Egreso */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Perfil de Ingreso */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-lg text-una-blue">Perfil de Entrada Recomendado</h3>
                    <span className="text-xs text-slate-500">Cualidades y aptitudes del postulante</span>
                  </div>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>Razonamiento lógico-matemático y gusto por la resolución de problemas abstractos.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>Curiosidad intelectual hacia el funcionamiento del software, hardware y telecomunicaciones.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>Capacidad de trabajo colaborativo, comunicación asertiva y perseverancia ante retos complejos.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>Disposición para el aprendizaje continuo del idioma inglés técnico.</span>
                  </li>
                </ul>
              </div>

              {/* Perfil de Egreso */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-una-red flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-lg text-una-blue">Competencias de Egreso SINAES</h3>
                    <span className="text-xs text-slate-500">Capacidades demostradas al titularse</span>
                  </div>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-una-red mt-0.5 shrink-0" />
                    <span><strong>Ingeniería de Software:</strong> Diseñar y construir sistemas empresariales aplicando patrones arquitectónicos y pipelines de CI/CD.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-una-red mt-0.5 shrink-0" />
                    <span><strong>Arquitectura de Datos:</strong> Modelar y optimizar bases de datos relacionales y no relacionales para grandes volúmenes de información.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-una-red mt-0.5 shrink-0" />
                    <span><strong>Ciberseguridad y Redes:</strong> Implementar defensas perimetrales, controles de acceso y auditorías de seguridad bajo normativas internacionales.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-una-red mt-0.5 shrink-0" />
                    <span><strong>Liderazgo y Gestión TI:</strong> Dirigir equipos multidisciplinarios bajo marcos ágiles de trabajo (Scrum, Kanban).</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Stack Tecnológico Trabajado en la Carrera */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
              <div>
                <h3 className="font-heading font-black text-lg text-una-blue">
                  Ecosistema Tecnológico de Aprendizaje
                </h3>
                <p className="text-xs text-slate-500">
                  Herramientas, lenguajes y plataformas integradas en los laboratorios prácticos de la Escuela.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                {[
                  { name: "Python / AI", desc: "Algoritmia y ML", bg: "bg-blue-50 text-blue-700" },
                  { name: "Java / C#", desc: "POO Empresarial", bg: "bg-red-50 text-red-700" },
                  { name: "TypeScript / Web", desc: "Frontend & Fullstack", bg: "bg-amber-50 text-amber-800" },
                  { name: "PostgreSQL / NoSQL", desc: "Gestión de Datos", bg: "bg-purple-50 text-purple-700" },
                  { name: "Linux / Docker", desc: "DevOps & Cloud", bg: "bg-emerald-50 text-emerald-700" },
                  { name: "Git / CI-CD", desc: "Calidad y Versiones", bg: "bg-slate-100 text-slate-800" },
                ].map((tech) => (
                  <div key={tech.name} className={`p-3.5 rounded-xl border border-slate-200 ${tech.bg} text-center space-y-1`}>
                    <div className="font-heading font-bold text-xs sm:text-sm">{tech.name}</div>
                    <div className="text-[11px] opacity-80">{tech.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: CAMPO LABORAL Y EMPLEABILIDAD */}
        {/* ========================================================================= */}
        {activeTab === "laboral" && (
          <div className="space-y-8">
            {/* Estadísticas Clave CONARE */}
            <div className="bg-gradient-to-r from-una-blue via-slate-900 to-una-blue-dark text-white rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="max-w-3xl space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-una-gold">
                  Datos del Observatorio Laboral de Profesiones (CONARE / OLiP)
                </span>
                <h2 className="text-2xl sm:text-3xl font-black font-heading">
                  Alta Demanda Laboral y Oportunidades Globales
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Ingeniería en Sistemas se consolida de forma continua entre las tres carreras universitarias con mayor
                  índice de colocación laboral, mejores salarios de inicio y mayor proyección de teletrabajo nacional e internacional.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                  <span className="text-3xl font-black text-amber-400 font-heading block">98.2%</span>
                  <span className="text-xs font-bold text-white block mt-1">Tasa de Empleo Efectivo</span>
                  <span className="text-[11px] text-slate-300">Prácticamente nulo desempleo friccional</span>
                </div>

                <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                  <span className="text-3xl font-black text-emerald-400 font-heading block">&lt; 2 Meses</span>
                  <span className="text-xs font-bold text-white block mt-1">Tiempo Medio de Colocación</span>
                  <span className="text-[11px] text-slate-300">El 75% es contratado antes de graduarse</span>
                </div>

                <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                  <span className="text-3xl font-black text-blue-400 font-heading block">100%</span>
                  <span className="text-xs font-bold text-white block mt-1">Acreditada SINAES</span>
                  <span className="text-[11px] text-slate-300">Garantía de calidad académica formal</span>
                </div>
              </div>
            </div>

            {/* Roles Profesionales donde ejercen */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
              <div>
                <h3 className="font-heading font-black text-xl text-una-blue">
                  Puestos y Roles Ocupacionales Principales
                </h3>
                <p className="text-xs text-slate-500">
                  Posiciones en las que se desempeñan exitosamente nuestros bachilleres en el ecosistema TIC.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    title: "Ingeniero/a de Software (Full Stack)",
                    desc: "Diseño y programación de aplicaciones web, móviles y microservicios con arquitecturas modernas.",
                    icon: <Code2 className="w-5 h-5 text-blue-600" />,
                  },
                  {
                    title: "Arquitecto/a Cloud & DevOps",
                    desc: "Automatización de despliegues, pipelines de integración continua y administración de infraestructura en la nube.",
                    icon: <Network className="w-5 h-5 text-emerald-600" />,
                  },
                  {
                    title: "Ingeniero/a de Datos y BI",
                    desc: "Modelado de almacenes de datos, pipelines ETL y gobierno analítico para toma de decisiones corporativas.",
                    icon: <Database className="w-5 h-5 text-purple-600" />,
                  },
                  {
                    title: "Analista de Ciberseguridad",
                    desc: "Protección de infraestructura crítica, auditoría de vulnerabilidades y respuesta ante incidentes.",
                    icon: <ShieldCheck className="w-5 h-5 text-una-red" />,
                  },
                  {
                    title: "Líder Técnico de Proyectos (Scrum Master)",
                    desc: "Coordinación ágil de equipos de ingeniería, estimación de requerimientos y aseguramiento de entregables.",
                    icon: <Users className="w-5 h-5 text-amber-600" />,
                  },
                  {
                    title: "Consultor/a Tecnológico Independiente",
                    desc: "Desarrollo de startups, consultoría de transformación digital y emprendimientos de base tecnológica.",
                    icon: <Briefcase className="w-5 h-5 text-slate-700" />,
                  },
                ].map((role) => (
                  <div key={role.title} className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-slate-50">{role.icon}</div>
                      <h4 className="font-heading font-bold text-sm text-slate-900">{role.title}</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{role.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: ADMISIÓN Y REQUISITOS UNA */}
        {/* ========================================================================= */}
        {activeTab === "admision" && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-una-red">
                  Proceso de Ingreso a la Universidad Nacional
                </span>
                <h2 className="text-2xl font-black font-heading text-una-blue">
                  Guía de Admisión para Nuevos Postulantes
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  El ingreso a la carrera de Bachillerato en Ingeniería en Sistemas de Información se realiza anualmente
                  a través del Departamento de Registro y el Sistema de Admisión de la Universidad Nacional.
                </p>
              </div>

              {/* Ficha de Códigos Oficiales */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div>
                  <span className="text-xs text-slate-500 font-semibold block">Código de Carrera UNA</span>
                  <span className="text-lg font-black font-heading text-una-blue font-mono">410101</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-semibold block">Sede Central</span>
                  <span className="text-sm font-bold text-slate-800">Campus Omar Dengo, Heredia</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-semibold block">Período de Matrícula</span>
                  <span className="text-sm font-bold text-slate-800">Enero / Febrero de cada año</span>
                </div>
              </div>

              {/* Pasos de Admisión */}
              <div className="space-y-4 pt-2">
                <h3 className="font-heading font-black text-lg text-una-blue">
                  Etapas del Proceso de Admisión
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    {
                      step: "1",
                      title: "Inscripción en Línea",
                      desc: "Registro de postulación en la plataforma oficial de admisión de las universidades públicas (www.registro.una.cr).",
                    },
                    {
                      step: "2",
                      title: "Prueba de Aptitud (PAA)",
                      desc: "Aplicación del examen de admisión general de la UNA que evalúa razonamiento verbal y lógico-matemático.",
                    },
                    {
                      step: "3",
                      title: "Publicación de Cortes",
                      desc: "Publicación de la nota ponderada mínima de ingreso (históricamente en el rango de 620 a 660 puntos).",
                    },
                    {
                      step: "4",
                      title: "Matrícula e Inducción",
                      desc: "Selección de cursos de primer ciclo y participación en las jornadas de bienvenida de la Escuela de Informática.",
                    },
                  ].map((s) => (
                    <div key={s.step} className="p-4 rounded-xl border border-slate-200 bg-white space-y-2 relative">
                      <span className="w-7 h-7 rounded-lg bg-una-red text-white text-xs font-black flex items-center justify-center">
                        {s.step}
                      </span>
                      <h4 className="font-heading font-bold text-sm text-slate-900">{s.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requisitos para Obtención del Grado */}
              <div className="p-5 rounded-xl bg-red-50/60 border border-una-red/20 space-y-3">
                <div className="flex items-center gap-2 text-una-red font-heading font-bold text-sm">
                  <GraduationCap className="w-5 h-5" />
                  <span>Requisitos de Graduación del Bachillerato</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-una-red shrink-0" />
                    <span>Aprobar los 138 créditos del plan de estudios</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-una-red shrink-0" />
                    <span>Aprobar la Práctica Profesional Supervisada (480 horas)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-una-red shrink-0" />
                    <span>Cumplir las 150 horas de Trabajo Comunal Universitario (TCU)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-una-red shrink-0" />
                    <span>Certificar el nivel intermedio de idioma inglés</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: PREGUNTAS FRECUENTES (FAQ) */}
        {/* ========================================================================= */}
        {activeTab === "faq" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-una-red">
                  Orientación Estudiantil
                </span>
                <h2 className="text-2xl font-black font-heading text-una-blue">
                  Preguntas Frecuentes sobre el Bachillerato
                </h2>
                <p className="text-slate-600 text-sm">
                  Respuestas oficiales a las consultas más habituales de estudiantes activos y personas postulantes.
                </p>
              </div>

              <div className="divide-y divide-slate-200">
                {faqList.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="py-4">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between gap-4 text-left group"
                      >
                        <span className="font-heading font-bold text-sm sm:text-base text-slate-800 group-hover:text-una-red transition-colors">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-slate-400 group-hover:text-una-red transition-transform duration-200 shrink-0 ${
                            isOpen ? "rotate-180 text-una-red" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pl-2 border-l-2 border-una-red">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ========================================================================= */}
      {/* MODAL DE DETALLE DE ASIGNATURA */}
      {/* ========================================================================= */}
      {selectedCourse && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCourse(null)}
        >
          <div
            className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-7 space-y-5 animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-xs font-black text-una-red bg-una-red/10 px-2 py-0.5 rounded border border-una-red/20">
                    {selectedCourse.code}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                      areaConfig[selectedCourse.area].badgeClass
                    }`}
                  >
                    {areaConfig[selectedCourse.area].icon}
                    <span>{areaConfig[selectedCourse.area].label}</span>
                  </span>
                  <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                    {selectedCourse.credits} Créditos
                  </span>
                </div>
                <h3 className="font-heading font-black text-xl text-una-blue">
                  {selectedCourse.name}
                </h3>
              </div>

              <button
                onClick={() => setSelectedCourse(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-4 text-xs sm:text-sm">
              {/* Descripción */}
              <div className="space-y-1.5">
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-500">
                  Descripción Oficial de la Materia
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  {selectedCourse.description}
                </p>
              </div>

              {/* Temas Clave */}
              <div className="space-y-2">
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-500">
                  Ejes Temáticos Principales
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedCourse.topics.map((topic, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-una-red mt-1.5 shrink-0" />
                      <span className="text-xs">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tecnologías Asociadas */}
              {selectedCourse.technologies && selectedCourse.technologies.length > 0 && (
                <div className="space-y-1.5">
                  <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-500">
                    Tecnologías y Entornos de Práctica
                  </h4>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {selectedCourse.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Prerrequisitos y materias que desbloquea */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-600">Prerrequisito académico:</span>
                  {selectedCourse.req ? (
                    <button
                      onClick={() => {
                        const prereq = findCourseByCode(selectedCourse.req!);
                        if (prereq) setSelectedCourse(prereq);
                      }}
                      className="font-mono font-bold text-una-red hover:underline"
                    >
                      {selectedCourse.req}
                    </button>
                  ) : (
                    <span className="text-emerald-700 font-bold">Sin prerrequisito previo</span>
                  )}
                </div>

                {selectedCourse.unlockedBy && selectedCourse.unlockedBy.length > 0 && (
                  <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-200">
                    <span className="font-bold text-slate-600">Materia requisito para:</span>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {selectedCourse.unlockedBy.map((unlockedCode) => (
                        <button
                          key={unlockedCode}
                          onClick={() => {
                            const nextCourse = findCourseByCode(unlockedCode);
                            if (nextCourse) setSelectedCourse(nextCourse);
                          }}
                          className="font-mono font-bold text-blue-600 hover:text-blue-800 bg-blue-50 px-1.5 py-0.5 rounded text-[11px]"
                        >
                          {unlockedCode}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
              <button
                onClick={(e) => handleCopyCode(selectedCourse.code, e)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-una-blue transition-colors"
              >
                {copiedCode === selectedCourse.code ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600">Código copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar código de materia</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setSelectedCourse(null)}
                className="px-4 py-2 bg-una-blue hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL DE CATÁLOGO DE OPTATIVAS DE ESPECIALIDAD */}
      {/* ========================================================================= */}
      {showElectivesModal && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowElectivesModal(false)}
        >
          <div
            className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-7 space-y-5 animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal Optativas */}
            <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-bold">
                  <Sparkles className="w-3 h-3 text-una-gold" />
                  <span>Optativas de Especialidad I y II (VI y VII Ciclo)</span>
                </div>
                <h3 className="font-heading font-black text-xl text-una-blue">
                  Cursos Electivos Aprobados
                </h3>
                <p className="text-xs text-slate-500">
                  El estudiante selecciona dos asignaturas de esta lista para personalizar su perfil de egreso en tecnologías de vanguardia.
                </p>
              </div>

              <button
                onClick={() => setShowElectivesModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lista de Optativas */}
            <div className="space-y-3">
              {electiveCatalog.map((opt) => (
                <div
                  key={opt.code}
                  className="p-4 rounded-xl border border-slate-200 hover:border-una-red/40 hover:bg-slate-50/80 transition-all space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-black text-una-red bg-red-50 px-2 py-0.5 rounded">
                          {opt.code}
                        </span>
                        <span className="text-[11px] font-bold text-slate-500">
                          {opt.area}
                        </span>
                      </div>
                      <h4 className="font-heading font-bold text-sm text-slate-900 mt-1">
                        {opt.name}
                      </h4>
                    </div>
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-xs font-bold shrink-0">
                      3 cr
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {opt.description}
                  </p>

                  <div className="flex items-center gap-1.5 flex-wrap pt-1">
                    {opt.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 text-[11px] font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Modal Optativas */}
            <div className="flex items-center justify-end pt-3 border-t border-slate-100">
              <button
                onClick={() => setShowElectivesModal(false)}
                className="px-4 py-2 bg-una-blue hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
