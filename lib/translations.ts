export const translations = {
  es: {
    // Navigation
    nav: {
      home: "Inicio",
      contact: "Contacto",
      mods: "Mods",
      tutorial: "Tutorial",
      language: "Idioma",
    },
    // Hero
    hero: {
      title: "Canvas Modloader para Sky",
      subtitle:
        "Descarga Canvas y LibTSM para personalizar tu experiencia en Sky: Children of the Light sin necesidad de root",
      cta: "Descargar ahora",
      stats: {
        mods: "Mods Disponibles",
        downloads: "Descargas",
        users: "Usuarios Activos",
      },
    },
    // Mods section
    mods: {
      title: "Descarga Canvas",
      subtitle:
        "Todo lo que necesitas para ejecutar mods en Sky: Children of the Light",
      search: "Buscar mods...",
      download: "Descargar",
      downloads: "descargas",
      version: "Versión",
      updated: "Actualizado",
      allCategories: "Todas",
      categories: {
        ui: "Interfaz",
        gameplay: "Jugabilidad",
        cosmetics: "Cosméticos",
        audio: "Audio",
        performance: "Rendimiento",
      },
    },
    // Features section
    features: {
      title: "¿Por qué Canvas?",
      subtitle: "Modloader ligero y modular para Sky: Children of the Light",
      safety: {
        title: "Sin Root",
        description:
          "Canvas no requiere permisos elevados ni habilidades de programación específicas.",
      },
      easy: {
        title: "Modular",
        description:
          "Carga plugins existentes o crea los tuyos. Sistema completamente extensible.",
      },
      free: {
        title: "100% Gratis",
        description:
          "Canvas y LibTSM son completamente gratuitos y de código abierto.",
      },
      community: {
        title: "Ligero",
        description:
          "Solo ~15 MB de almacenamiento. Se conecta a Sky en tiempo de ejecución como puente.",
      },
    },
    // Contact
    contact: {
      title: "Contáctanos",
      subtitle: "¿Tienes preguntas o sugerencias? ¡Nos encantaría escucharte!",
      form: {
        name: "Nombre",
        namePlaceholder: "Tu nombre",
        email: "Correo electrónico",
        emailPlaceholder: "tu@email.com",
        subject: "Asunto",
        subjectPlaceholder: "¿En qué podemos ayudarte?",
        message: "Mensaje",
        messagePlaceholder: "Escribe tu mensaje aquí...",
        send: "Enviar Mensaje",
        sending: "Enviando...",
      },
      success: "¡Mensaje enviado con éxito! Te responderemos pronto.",
      validation: {
        nameRequired: "El nombre es requerido",
        emailRequired: "El correo electrónico es requerido",
        emailInvalid: "Ingresa un correo electrónico válido",
        subjectRequired: "El asunto es requerido",
        messageRequired: "El mensaje es requerido",
      },
      info: {
        title: "Otras formas de contacto",
        discord: "Únete a nuestra comunidad de Discord",
        email: "Soporte por correo",
        social: "Síguenos en redes sociales",
        instagram: "Contáctame en Instagram",
      },
    },
    // Credits
    credits: {
      badge: "Créditos",
      title: "Reconocimientos",
      description:
        "Este sitio distribuye herramientas creadas por desarrolladores talentosos. Todos los créditos van a los creadores originales.",
      canvas:
        "Modloader ligero y extensible que permite cargar plugins personalizados en Sky",
      libtsm:
        "Port de Android de That Sky Mod, una biblioteca de modificación completa para el juego",
      repository: "Repositorio Oficial de GitHub",
      repoDescription:
        "Todos los archivos se distribuyen desde el repositorio oficial de ThatskyMod. Este sitio solo proporciona una interfaz amigable para descargarlos.",
      creator: "Creador",
      community: {
        title: "Gracias a la Comunidad",
        message:
          "Este proyecto existe gracias al apoyo y la pasión de nuestra increíble comunidad. Cada descarga, cada comentario y cada sugerencia nos impulsa a seguir mejorando.",
      },
    },
    // Tutorial
    tutorial: {
      title: "Cómo Instalar Canvas",
      subtitle:
        "Guía completa paso a paso para instalar Canvas y comenzar a usar mods en Sky: Children of the Light",
      videoTitle: "Video Tutorial",
      videoDescription:
        "Mira este video tutorial para una guía visual de instalación",
      prerequisites: {
        title: "Requisitos Previos",
        android: "Android 5.0 o superior",
        storage: "Al menos 100 MB de espacio libre",
        sky: "Sky: Children of the Light instalado",
        sources: "Permitir instalación de fuentes desconocidas",
      },
      steps: {
        title: "Pasos de Instalación",
        step1: {
          title: "Descargar Canvas APK",
          description:
            "Descarga la última versión de Canvas desde la página principal. El archivo APK se guardará en tu carpeta de Descargas.",
        },
        step2: {
          title: "Habilitar Fuentes Desconocidas",
          description:
            "Ve a Configuración → Seguridad → Habilita 'Fuentes desconocidas' o 'Instalar aplicaciones desconocidas' para tu navegador.",
        },
        step3: {
          title: "Instalar Canvas",
          description:
            "Abre el archivo APK descargado y sigue las instrucciones en pantalla para instalar Canvas en tu dispositivo.",
        },
        step4: {
          title: "Descargar LibTSM",
          description:
            "Descarga LibTSM desde la página principal. Este es el mod principal que agregarás a Canvas.",
        },
        step5: {
          title: "Abrir Canvas y Agregar Mods",
          description:
            "Abre Canvas y toca el botón 'Agregar Mod' (+) para importar el archivo LibTSM que descargaste. Selecciona los mods que deseas activar.",
        },
        step6: {
          title: "Iniciar el Juego",
          description:
            "Toca el botón 'Live' en Canvas para abrir Sky: Children of the Light con los mods activados. ¡Disfruta de tu experiencia personalizada!",
        },
      },
      troubleshooting: {
        title: "Solución de Problemas",
        issue1: {
          title: "No puedo instalar el APK",
          solution:
            "Asegúrate de haber habilitado 'Fuentes desconocidas' en la configuración de tu dispositivo. Si el problema persiste, intenta descargar el archivo nuevamente.",
        },
        issue2: {
          title: "Canvas no inicia Sky",
          solution:
            "Verifica que tienes la versión más reciente de Sky instalada. Intenta desinstalar y reinstalar Canvas si el problema continúa.",
        },
        issue3: {
          title: "Los mods no se cargan",
          solution:
            "Asegúrate de que los archivos de mods estén en la carpeta correcta. Revisa que LibTSM esté instalado si estás usando mods que lo requieren.",
        },
        issue4: {
          title: "El juego se cierra inesperadamente",
          solution:
            "Algunos mods pueden no ser compatibles entre sí. Intenta desactivar los mods uno por uno para identificar cuál causa el problema.",
        },
      },
      faq: {
        title: "Preguntas Frecuentes",
        q1: {
          question: "¿Es seguro usar Canvas?",
          answer:
            "Canvas es de código abierto y no requiere root. Sin embargo, usar mods puede violar los términos de servicio del juego. Úsalo bajo tu propio riesgo.",
        },
        q2: {
          question: "¿Me pueden banear por usar Canvas?",
          answer:
            "Existe riesgo de baneo al usar cualquier modificación del juego. Recomendamos usar mods de manera responsable y no abusar de ellos en el juego.",
        },
        q3: {
          question: "¿Canvas funciona en iOS?",
          answer:
            "No, Canvas solo está disponible para Android. No hay planes actuales para una versión iOS.",
        },
        q4: {
          question: "¿Cómo actualizo Canvas?",
          answer:
            "Descarga la última versión desde nuestro sitio web e instálala sobre la versión anterior. Tus configuraciones y plugins se mantendrán.",
        },
        q5: {
          question: "¿Dónde puedo encontrar más mods?",
          answer:
            "Puedes encontrar mods adicionales en la comunidad de Discord y en el repositorio oficial de GitHub. LibTSM incluye muchas funciones integradas.",
        },
      },
      warning: {
        title: "⚠️ Advertencia Importante",
        message:
          "El uso de mods puede resultar en un baneo de tu cuenta. The Sky Mods y los desarrolladores de Canvas no se hacen responsables de cualquier consecuencia derivada del uso de estas herramientas. Usa bajo tu propio riesgo.",
      },
    },
    // Footer
    footer: {
      description:
        "Tu fuente confiable de mods para Sky: Children of the Light. Mejora tu experiencia de juego con seguridad.",
      links: {
        title: "Enlaces",
        home: "Inicio",
        mods: "Mods",
        contact: "Contacto",
        about: "Sobre Nosotros",
      },
      legal: {
        title: "Legal",
        privacy: "Privacidad",
        terms: "Términos",
        disclaimer: "Descargo",
      },
      copyright: "Todos los derechos reservados.",
      disclaimer: "The Sky Mods no está afiliado con thatgamecompany.",
    },
    // 404 Page
    notFound: {
      title: "¡Oops! Te has perdido en las nubes",
      description:
        "Parece que esta página ha volado hacia el horizonte. No te preocupes, podemos ayudarte a encontrar el camino de regreso.",
      backHome: "Volver al Inicio",
    },
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      contact: "Contact",
      mods: "Mods",
      tutorial: "Tutorial",
      language: "Language",
    },
    // Hero
    hero: {
      title: "Canvas Modloader for Sky",
      subtitle:
        "Download Canvas and LibTSM to customize your Sky: Children of the Light experience without root access",
      cta: "Download now",
      stats: {
        mods: "Available Mods",
        downloads: "Downloads",
        users: "Active Users",
      },
    },
    // Mods section
    mods: {
      title: "Download Canvas",
      subtitle: "Everything you need to run mods on Sky: Children of the Light",
      search: "Search mods...",
      download: "Download",
      downloads: "downloads",
      version: "Version",
      updated: "Updated",
      allCategories: "All",
      categories: {
        ui: "Interface",
        gameplay: "Gameplay",
        cosmetics: "Cosmetics",
        audio: "Audio",
        performance: "Performance",
      },
    },
    // Features section
    features: {
      title: "Why Canvas?",
      subtitle:
        "Lightweight and modular modloader for Sky: Children of the Light",
      safety: {
        title: "No Root",
        description:
          "Canvas doesn't require elevated privileges or specific programming skills.",
      },
      easy: {
        title: "Modular",
        description:
          "Load existing plugins or write your own. Completely extensible system.",
      },
      free: {
        title: "100% Free",
        description: "Canvas and LibTSM are completely free and open source.",
      },
      community: {
        title: "Lightweight",
        description:
          "Only ~15 MB of storage. Hooks into Sky at runtime acting as a bridge.",
      },
    },
    // Contact
    contact: {
      title: "Contact Us",
      subtitle: "Have questions or suggestions? We'd love to hear from you!",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "you@email.com",
        subject: "Subject",
        subjectPlaceholder: "How can we help you?",
        message: "Message",
        messagePlaceholder: "Write your message here...",
        send: "Send Message",
        sending: "Sending...",
      },
      success: "Message sent successfully! We'll get back to you soon.",
      validation: {
        nameRequired: "Name is required",
        emailRequired: "Email is required",
        emailInvalid: "Please enter a valid email",
        subjectRequired: "Subject is required",
        messageRequired: "Message is required",
      },
      info: {
        title: "Other ways to reach us",
        discord: "Join our Discord community",
        email: "Email support",
        social: "Follow us on social media",
        instagram: "Contact me on Instagram",
      },
    },
    // Credits
    credits: {
      badge: "Credits",
      title: "Acknowledgments",
      description:
        "This site distributes tools created by talented developers. All credit goes to the original creators.",
      canvas:
        "Lightweight and extensible modloader that allows loading custom plugins in Sky",
      libtsm:
        "Android port of That Sky Mod, a complete modification library for the game",
      repository: "Official GitHub Repository",
      repoDescription:
        "All files are distributed from the official ThatskyMod repository. This site only provides a user-friendly interface to download them.",
      creator: "Creator",
      community: {
        title: "Thanks to the Community",
        message:
          "This project exists thanks to the support and passion of our incredible community. Every download, every comment, and every suggestion drives us to keep improving.",
      },
    },
    // Tutorial
    tutorial: {
      title: "How to Install Canvas",
      subtitle:
        "Complete step-by-step guide to install Canvas and start using mods on Sky: Children of the Light",
      videoTitle: "Video Tutorial",
      videoDescription:
        "Watch this video tutorial for a visual installation guide",
      prerequisites: {
        title: "Prerequisites",
        android: "Android 5.0 or higher",
        storage: "At least 100 MB of free space",
        sky: "Sky: Children of the Light installed",
        sources: "Allow installation from unknown sources",
      },
      steps: {
        title: "Installation Steps",
        step1: {
          title: "Download Canvas APK",
          description:
            "Download the latest version of Canvas from the main page. The APK file will be saved to your Downloads folder.",
        },
        step2: {
          title: "Enable Unknown Sources",
          description:
            "Go to Settings → Security → Enable 'Unknown sources' or 'Install unknown apps' for your browser.",
        },
        step3: {
          title: "Install Canvas",
          description:
            "Open the downloaded APK file and follow the on-screen instructions to install Canvas on your device.",
        },
        step4: {
          title: "Download LibTSM",
          description:
            "Download LibTSM from the main page. This is the main mod you'll add to Canvas.",
        },
        step5: {
          title: "Open Canvas and Add Mods",
          description:
            "Open Canvas and tap the 'Add Mod' button (+) to import the LibTSM file you downloaded. Select the mods you want to activate.",
        },
        step6: {
          title: "Launch the Game",
          description:
            "Tap the 'Live' button in Canvas to open Sky: Children of the Light with the activated mods. Enjoy your customized experience!",
        },
      },
      troubleshooting: {
        title: "Troubleshooting",
        issue1: {
          title: "Can't install APK",
          solution:
            "Make sure you've enabled 'Unknown sources' in your device settings. If the problem persists, try downloading the file again.",
        },
        issue2: {
          title: "Canvas won't launch Sky",
          solution:
            "Verify that you have the latest version of Sky installed. Try uninstalling and reinstalling Canvas if the problem continues.",
        },
        issue3: {
          title: "Mods won't load",
          solution:
            "Make sure mod files are in the correct folder. Check that LibTSM is installed if you're using mods that require it.",
        },
        issue4: {
          title: "Game crashes unexpectedly",
          solution:
            "Some mods may not be compatible with each other. Try disabling mods one by one to identify which one is causing the issue.",
        },
      },
      faq: {
        title: "Frequently Asked Questions",
        q1: {
          question: "Is Canvas safe to use?",
          answer:
            "Canvas is open source and doesn't require root. However, using mods may violate the game's terms of service. Use at your own risk.",
        },
        q2: {
          question: "Can I get banned for using Canvas?",
          answer:
            "There is a risk of being banned when using any game modification. We recommend using mods responsibly and not abusing them in the game.",
        },
        q3: {
          question: "Does Canvas work on iOS?",
          answer:
            "No, Canvas is only available for Android. There are no current plans for an iOS version.",
        },
        q4: {
          question: "How do I update Canvas?",
          answer:
            "Download the latest version from our website and install it over the old version. Your settings and plugins will be preserved.",
        },
        q5: {
          question: "Where can I find more mods?",
          answer:
            "You can find additional mods in the Discord community and the official GitHub repository. LibTSM includes many built-in features.",
        },
      },
      warning: {
        title: "⚠️ Important Warning",
        message:
          "Using mods may result in your account being banned. The Sky Mods and Canvas developers are not responsible for any consequences arising from the use of these tools. Use at your own risk.",
      },
    },
    // Footer
    footer: {
      description:
        "Your trusted source for Sky: Children of the Light mods. Enhance your gaming experience safely.",
      links: {
        title: "Links",
        home: "Home",
        mods: "Mods",
        contact: "Contact",
        about: "About Us",
      },
      legal: {
        title: "Legal",
        privacy: "Privacy",
        terms: "Terms",
        disclaimer: "Disclaimer",
      },
      copyright: "All rights reserved.",
      disclaimer: "The Sky Mods is not affiliated with thatgamecompany.",
    },
    // 404 Page
    notFound: {
      title: "Oops! You're lost in the clouds",
      description:
        "Looks like this page has flown towards the horizon. Don't worry, we can help you find your way back.",
      backHome: "Back to Home",
    },
  },
};

export type Language = "es" | "en";
export type Locale = Language; // Alias for consistency with i18n config
export type Translations = typeof translations;

// Helper function to get translations for server components
export function getTranslations(locale: Locale) {
  return translations[locale] || translations.es;
}
