// HTB Academy Progress Variables
const HTB_GENERAL = 75;
const HTB_OFFENSIVE = 24;
const HTB_DEFENSIVE = 3;
const HTB_MACHINES = 162;

// Resume filename
export const RESUME_FILENAME = 'esteban_zarate.pdf';

export const translations = {
  en: {
    header: {
      title: 'Esteban Zárate',
      subtitle: 'Full Stack Developer & Cybersecurity Analyst',
      phone: 'Phone',
      location: 'Buenos Aires, Argentina'
    },
    nav: {
      about: 'About',
      education: 'Education',
      projects: 'Projects',
      skills: 'Skills',
      links: 'Links'
    },
    sections: {
      about: {
        title: 'About Esteban Zárate',
        content: `Passionate about development and cybersecurity, which allow me to satisfy my constant desire for learning, continue developing a creative and problem-solving mindset, aspects that I highlight about myself and enjoy continuing to perfect.

Currently expanding my skillset through continuous learning at Hack The Box Academy and various development courses. I enjoy tackling challenges that push the boundaries of what I know.`
      },
      education: {
        title: 'Education & Training',
        content: `
[Brigham Young University - Idaho]
  Bachelor of Applied Science - Software Development
  • HTML, CSS, JavaScript, Python, C#
  • Git & GitHub workflows

[Ensign College]
  Bachelor of Applied Science - Information Technology
  • PC Hardware Technician
  • Networking fundamentals
  • Windows administration

[Certifications]
  • TestOut Client Pro
  • TestOut PC Pro

[Hack The Box]
  Continuous hands-on cybersecurity training and practice
  • Academy Progress: General ${HTB_GENERAL}%, Offensive ${HTB_OFFENSIVE}%, Defensive ${HTB_DEFENSIVE}%
  • Practical Experience: ${HTB_MACHINES} machines solved

[Hack4u]
  • Offensive Python
  • Introduction to Hacking
  • Introduction to Linux

[Coderhouse]
  • Full Stack Web Development
  • React.js, Node.js, Express.js, MongoDB
  • Python & Django
  • React Native
        `.trim()
      },
      projects: {
        title: 'Projects',
        content: `
[Cyber Bloodline]
  Social network simulating a command line terminal
  https://github.com/n0m3l4c000nt35/cyber-bloodline

[Custom Kali Linux with HTBash]
  Guide for installing and customizing Kali Linux for pentesting and Hack The Box
  https://github.com/n0m3l4c000nt35/custom-kali-linux

[App Notes]
  Full stack notes application built with Next.js 15, React and MongoDB
  https://github.com/n0m3l4c000nt35/app-notes

[Urlfckr]
  Web crawler to discover subdomains and internal paths from websites
  https://github.com/n0m3l4c000nt35/urlfckr

[infosecmachines]
  Bash script to list and filter solved machines by S4vitar for Hack4u community
  https://github.com/n0m3l4c000nt35/infosecmachines
        `.trim()
      },
      skills: {
        title: 'Technical Skills',
        content: `
[Frontend Development]
  HTML • CSS • JavaScript • React.js • React Native

[Backend Development]
  Python • Django • Node.js • Express.js • C# • .NET

[Database]
  MongoDB • SQL

[Development Tools]
  Git • GitHub • Linux • Bash • Docker

[Security & Penetration Testing]
  Burpsuite • nmap • Metasploit • Wireshark
  Hydra • John the Ripper • Gobuster
        `.trim()
      },
      links: {
        title: 'Find Me Online',
        content: `
[GitHub]
  https://github.com/n0m3l4c000nt35

[Portfolio]
  https://n0m3l4c000nt35.github.io/portfolio/

[Blog]
  https://estebanzarate.gitbook.io/hackache/

[Hack The Box]
  https://app.hackthebox.com/profile/1089152

[LinkedIn]
  https://www.linkedin.com/in/esteban-zarate/

[Email]
  estebanzarateok@gmail.com

[Resume]
  /${RESUME_FILENAME}
        `.trim()
      }
    },
    footer: {
      madeBy: 'Made by'
    }
  },
  es: {
    header: {
      title: 'Esteban Zárate',
      subtitle: 'Desarrollador Full Stack & Analista de Ciberseguridad',
      phone: 'Teléfono',
      location: 'Buenos Aires, Argentina'
    },
    nav: {
      about: 'Sobre mí',
      education: 'Educación',
      projects: 'Proyectos',
      skills: 'Habilidades',
      links: 'Enlaces'
    },
    sections: {
      about: {
        title: 'Sobre Esteban Zárate',
        content: `Apasionado por el desarrollo y la ciberseguridad, los que me permiten satisfacer el constante deseo de aprendizaje, continuar desarrollando una mentalidad creativa y resolutiva, aspectos que destaco de mi persona y disfruto seguir perfeccionando.

Actualmente expandiendo mis habilidades mediante aprendizaje continuo en Hack The Box Academy y varios cursos de desarrollo. Disfruto enfrentar desafíos que empujan los límites de lo que sé.`
      },
      education: {
        title: 'Educación y Formación',
        content: `
[Brigham Young University - Idaho]
  Licenciatura en Ciencias Aplicadas - Desarrollo de Software
  • HTML, CSS, JavaScript, Python, C#
  • Flujos de trabajo con Git y GitHub

[Ensign College]
  Licenciatura en Ciencias Aplicadas - Tecnología de la Información
  • Técnico en Hardware de PC
  • Fundamentos de redes
  • Administración de sistemas Windows

[Certificaciones]
  • TestOut Client Pro
  • TestOut PC Pro

[Hack The Box]
  Formación y práctica continua en ciberseguridad
  • Progreso en Academia: General ${HTB_GENERAL}%, Ofensiva ${HTB_OFFENSIVE}%, Defensiva ${HTB_DEFENSIVE}%
  • Experiencia Práctica: ${HTB_MACHINES} máquinas resueltas

[Hack4u]
  • Python Ofensivo
  • Introducción al Hacking
  • Introducción a Linux

[Coderhouse]
  • Desarrollo Web Full Stack
  • React.js, Node.js, Express.js, MongoDB
  • Python y Django
  • React Native
        `.trim()
      },
      projects: {
        title: 'Proyectos',
        content: `
[Cyber Bloodline]
  Red social simulando una terminal de comandos
  https://github.com/n0m3l4c000nt35/cyber-bloodline
  
[Custom Kali Linux with HTBash]
  Guía para instalar y personalizar Kali Linux para pentesting y Hack The Box
  https://github.com/n0m3l4c000nt35/custom-kali-linux

[App Notes]
  Aplicación full stack de notas construida con Next.js 15, React y MongoDB
  https://github.com/n0m3l4c000nt35/app-notes

[Urlfckr]
  Web crawler para descubrir subdominios y rutas internas de sitios web
  https://github.com/n0m3l4c000nt35/urlfckr

[infosecmachines]
  Script en bash para listar y filtrar máquinas resueltas por S4vitar para la comunidad de Hack4u
  https://github.com/n0m3l4c000nt35/infosecmachines
        `.trim()
      },
      skills: {
        title: 'Habilidades Técnicas',
        content: `
[Desarrollo Frontend]
  HTML • CSS • JavaScript • React.js • React Native

[Desarrollo Backend]
  Python • Django • Node.js • Express.js • C# • .NET

[Base de Datos]
  MongoDB • SQL

[Herramientas de Desarrollo]
  Git • GitHub • Linux • Bash • Docker

[Security & Penetration Testing]
  Burpsuite • nmap • Metasploit • Wireshark
  Hydra • John the Ripper • Gobuster
        `.trim()
      },
      links: {
        title: 'Encontrame en Línea',
        content: `
[GitHub]
  https://github.com/n0m3l4c000nt35

[Portfolio]
  https://n0m3l4c000nt35.github.io/portfolio/

[Blog]
  https://estebanzarate.gitbook.io/hackache/

[Hack The Box]
  https://app.hackthebox.com/profile/1089152

[LinkedIn]
  https://www.linkedin.com/in/esteban-zarate/

[Email]
  estebanzarateok@gmail.com

[Currículum]
  /${RESUME_FILENAME}
        `.trim()
      }
    },
    footer: {
      madeBy: 'Hecho por'
    }
  }
};