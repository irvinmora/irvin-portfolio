export const portfolioData = {
  personal: {
    name: "Irvin Mora",
    role: "Desarrollador Web Full-Stack",
    description: "Especializado en crear soluciones web funcionales con PHP, JavaScript y bases de datos. Combino conocimientos técnicos con herramientas modernas para crear soluciones eficientes.",
    email: "irvinadonismoraparedes@gmail.com",
    phone: "+593 98 729 6574",
    whatsappLink: "https://wa.me/593987296574",
    github: "https://github.com/irvinmora",
    linkedin: "https://www.linkedin.com/in/irvin-adonis-mora-paredes-865770293",
    huggingFace: "https://huggingface.co/IRVINMORA",
  },
  skills: [
    { category: "Frontend", items: [
      { name: "HTML5", percentage: 90 },
      { name: "CSS3", percentage: 85 },
      { name: "JavaScript", percentage: 80 },
      { name: "React / Next.js", percentage: 75 }
    ]},
    { category: "Backend & DB", items: [
      { name: "PHP", percentage: 90 },
      { name: "MySQL", percentage: 90 },
      { name: "PostgreSQL", percentage: 70 },
      { name: "Python", percentage: 60 },
      { name: "phpMyAdmin", percentage: 85 }
    ]}
  ],
  tools: ["Git & GitHub", "VS Code", "Antigravity"],
  projects: [
    {
      id: 1,
      title: "Sistema de Limpieza",
      description: "Sistema completo para gestión de servicios de limpieza con PHP y MySQL.",
      technologies: ["PHP", "MySQL"],
      icon: "fa-broom",
      github: "https://github.com/irvinmora/sistema-limpieza"
    },
    {
      id: 2,
      title: "Warrior Web",
      description: "Aplicación web interactiva con temática de guerreros y JavaScript.",
      technologies: ["JavaScript", "HTML5"],
      icon: "fa-shield-alt",
      github: "https://github.com/irvinmora/warrior_web"
    },
    {
      id: 3,
      title: "Simulador IA",
      description: "Simulador interactivo de conceptos básicos de inteligencia artificial.",
      technologies: ["JavaScript", "AI"],
      icon: "fa-robot",
      github: "https://github.com/irvinmora/simulador_IA"
    },
    {
      id: 4,
      title: "Hugging Face",
      description: "Perfil en Hugging Face con experimentos en IA y machine learning.",
      technologies: ["AI/ML", "Models"],
      icon: "fa-brain",
      github: "https://huggingface.co/IRVINMORA"
    }
  ]
};
