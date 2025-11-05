
function tema() {
    const html = document.documentElement;
    const icon = document.querySelector("#theme i");

    // Verifica qual tema está ativo
    if (html.getAttribute("data-theme") === "dark") {
        // Muda para claro
        html.removeAttribute("data-theme");
        localStorage.setItem("tema", "light"); // salva no localStorage
        icon.classList.replace("fa-sun", "fa-moon");
    } else {
        // Muda para escuro
        html.setAttribute("data-theme", "dark");
        localStorage.setItem("tema", "dark");
        icon.classList.replace("fa-moon", "fa-sun");
    }
}

// Quando o site carrega, verifica o tema salvo
window.onload = function () {
    const temaSalvo = localStorage.getItem("tema");
    const html = document.documentElement;
    const icon = document.querySelector("#theme i");

    if (temaSalvo === "dark") {
        html.setAttribute("data-theme", "dark");
        icon.classList.replace("fa-moon", "fa-sun");
    }
}


const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // impede o recarregamento da página

    // agora pegamos os valores dentro do evento
    const nome = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const assunto = document.getElementById("assunto").value.trim();

    // verificação simples
    if (!nome || !email || !assunto) {
      alert("Por favor, preencha todos os campos!");
      return; // interrompe o envio
    }

    // Exibe no console
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Assunto:", assunto);

    alert("Mensagem enviada com sucesso!");

    // limpa o formulário
    form.reset();
});

const translations = {
    "pt": {
        "list-inicio": "Início",
        "list-sobre": "Sobre",
        "list-habilidades": "Habilidades",
        "list-projetos": "Projetos",
        "list-contato": "Contato",
        "title-banner": "Olá, eu sou <br> <span id=\"digitar\"></span>",
        "desc-dev-p": "Desenvolvedor Full Stack",
        "hero-cta": "Conheça meu trabalho",
        "hero-contact": "Entre em contato",
        "title-about": "Sobre mim",
        "desc-p-about1": "Sou estudante de Desenvolvimento de Sistemas, apaixonado por programação. Estou sempre em busca de aprender novas ferramentas e aprimorar minhas habilidades em front-end e back-end.",
        "desc-p-about2": "Meu objetivo é crescer como desenvolvedor, conquistar uma vaga de estágio na área de T.I e, ao longo da minha trajetória, contribuir para projetos que unem criatividade, funcionalidade e impacto real.",
        "stat-projects": "Projetos",
        "stat-years": "Anos",
        "stat-satisfaction": "Satisfação",
        "habilidade": "Habilidades",
        "avancado": "Avançado",
        "intermediario": "Intermediário",
        "em-aprendizado": "Em aprendizado",
        "basico": "Básico",
        "title-project": "Projetos",
        "title1": "Itens de uma lista",
        "desc-1": "Aplicação simples e funcional desenvolvida em JavaScript para gerenciar tarefas do dia a dia. Permite adicionar, remover e visualizar itens.",
        "title2": "Tela de login Spotify",
        "desc-2": "Projeto inspirado na interface de autenticação recriada com base no Spotify, utilizando HTML e CSS. Foco em design e usabilidade.",
        "title3": "Calculadora de IMC",
        "desc-3": "Ferramenta interativa que calcula o Índice de Massa Corporal (IMC) de forma rápida e precisa. Desenvolvida durante um curso na Udemy",
        "ver-mais": "Ver mais",
        "ver-menos": "Ver menos",
        "redes-sociais-title": "Redes Sociais",
        "instagram-series-title": "Minissérie sobre T.I",
        "instagram-series-desc": "Conteúdo educativo sobre tecnologia, programação e carreira em T.I. no Instagram",
        "view-series": "Ver Minissérie",
        "instagram-desc": "Dicas de programação e carreira",
        "linkedin-desc": "Networking profissional",
        "github-desc": "Projetos e código aberto",
        "education-title": "Formação Acadêmica",
        "edu1-title": "Técnico em Informática",
        "edu1-institution": "Colégio Cotemig Floresta - Tarde",
        "edu1-desc": "Formação em andamento. Data prevista de conclusão: Dez, 2026",
        "edu2-title": "Técnico em Desenvolvimento de Sistemas",
        "edu2-institution": "Proz Educação Venda Nova - Noite",
        "edu2-desc": "Formação em andamento. Data prevista de conclusão: Abr, 2027",
        "contact-title": "Entre em contato",
        "form-name": "Nome",
        "form-email": "Email",
        "form-message": "Mensagem",
        "form-submit": "Enviar Mensagem",
        "footer-lyrics": "© 2025 Gustavo Soares. Todos os direitos reservados.",
        "all-projects-title": "Todos os Projetos",
        "title4": "Agendamento de Consulta",
        "desc-4": " Sistema web desenvolvido em PHP e MySQL que permite o agendamento de consultas de forma prática e eficiente. Inclui validação de dados e exibição dinâmica das informações cadastradas.",
        "title5": "SlideShow",
        "desc-5": "Projeto visual e interativo que exibe imagens de forma dinâmica por meio de transições automáticas e controles manuais. Desenvolvido com HTML, CSS e JavaScript puro.",
        "title6": "Reprodução de site - Starbucks",
        "desc-6": "  Projeto inspirado no site oficial da Starbucks, recriado para fins de estudo. Foco em responsividade, design moderno e organização de layout com HTML e CSS."
    },
    "en": {
        "list-inicio": "Home",
        "list-sobre": "About",
        "list-habilidades": "Skills",
        "list-projetos": "Projects",
        "list-contato": "Contact",
        "title-banner": "Hi, I'm <br> <span id=\"digitar\"></span>",
        "desc-dev-p": "Full Stack Developer",
        "hero-cta": "See my work",
        "hero-contact": "Get in touch",
        "title-about": "About Me",
        "desc-p-about1": "I am a Systems Development student, passionate about programming. I am always looking to learn new tools and improve my front-end and back-end skills.",
        "desc-p-about2": "My goal is to grow as a developer, secure an internship in the IT area, and throughout my journey, contribute to projects that combine creativity, functionality, and real impact.",
        "stat-projects": "Projects",
        "stat-years": "Years",
        "stat-satisfaction": "Satisfaction",
        "habilidade": "Skills",
        "avancado": "Advanced",
        "intermediario": "Intermediate",
        "em-aprendizado": "Learning",
        "basico": "Basic",
        "title-project": "Projects",
        "title1": "List Items",
        "desc-1": "  A simple and functional JavaScript application designed to manage daily tasks. It allows users to add, remove, and view items dynamically.",
        "title2": "Spotify login screen",
        "desc-2": "Spotify-inspired authentication interface recreated with HTML, CSS, and responsive animations. Focused on design and user experience.",
        "title3": "BMI Calculator",
        "desc-3": "An interactive tool that calculates the Body Mass Index (BMI) quickly and accurately. Developed during a course on the Udemy platform.",
        "ver-mais": "See more",
        "ver-menos": "See less",
        "redes-sociais-title": "Social Networks",
        "instagram-series-title": "IT Mini-Series",
        "instagram-series-desc": "Educational content about technology, programming, and IT careers on Instagram",
        "view-series": "Watch Mini-Series",
        "instagram-desc": "Programming and career tips",
        "linkedin-desc": "Professional networking",
        "github-desc": "Open source projects",
        "education-title": "Education",
        "edu1-title": "Computer Technician",
        "edu1-institution": "Cotemig Floresta High School - Afternoon",
        "edu1-desc": "Ongoing education. Expected graduation: Dec, 2026",
        "edu2-title": "Systems Development Technician",
        "edu2-institution": "Proz Educação Venda Nova - Evening",
        "edu2-desc": "Ongoing education. Expected graduation: Apr, 2027",
        "contact-title": "Contact Me",
        "form-name": "Name",
        "form-email": "Email",
        "form-message": "Message",
        "form-submit": "Send Message",
        "footer-lyrics": "© 2025 Gustavo Soares. All rights reserved.",
        "all-projects-title": "All Projects",
        "title4": "Appointment Scheduling",
        "desc-4": "Web system developed with PHP and MySQL that allows scheduling appointments in a practical and efficient way. Includes data validation and dynamic display of registered information.",
        "title5": "SlideShow",
        "desc-5": "Visual and interactive project that displays images dynamically through automatic transitions and manual controls. Built with pure HTML, CSS, and JavaScript.",
        "title6": "Website Replica - Starbucks",
        "desc-6": "Project inspired by the official Starbucks website, recreated for study purposes. Focused on responsiveness, modern design, and layout organization using HTML and CSS."
    }
};

let currentLang = localStorage.getItem("idioma") || "pt";

const langToggle = document.getElementById("lang-toggle");
langToggle.addEventListener("click", () => {
    currentLang = currentLang === "pt" ? "en" : "pt";
    localStorage.setItem("idioma", currentLang);
    document.getElementById("lang-text").textContent = currentLang.toUpperCase();
    updateTranslations();
});

function updateTranslations() {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach(el => {
        const key = el.getAttribute("data-translate");
        if (translations[currentLang][key]) {
            if (key === "title-banner") {
                el.innerHTML = translations[currentLang][key];
                setTimeout(() => {
                    digitar();
                }, 100);
            } else {
                el.textContent = translations[currentLang][key];
            }
        }
    });

    const placeholders = document.querySelectorAll("[data-translate-placeholder]");
    placeholders.forEach(el => {
        const key = el.getAttribute("data-translate-placeholder");
        if (translations[currentLang][key]) {
            el.placeholder = translations[currentLang][key];
        }
    });
}

const texto = "Gustavo Soares";
let i = 0;
let digitando = false; // controla se já está digitando
let timeoutAtual; // guarda o timeout para poder limpar

function digitar() {
    if (digitando) return; // evita que o efeito seja reiniciado
    digitando = true;

    const elemento = document.getElementById("digitar");
    if (elemento) {
        elemento.innerHTML = "";
        i = 0;

        function escrever() {
            if (i < texto.length) {
                elemento.innerHTML += texto.charAt(i);
                i++;
                timeoutAtual = setTimeout(escrever, 150);
            } else {
                digitando = false; // terminou de digitar
            }
        }
        escrever();
    }
}

// se quiser forçar reiniciar de forma segura:
function reiniciarDigitacao() {
    clearTimeout(timeoutAtual);
    digitando = false;
    digitar();
}

window.addEventListener('load', () => {
    document.getElementById("lang-text").textContent = currentLang.toUpperCase();
    updateTranslations();

    setTimeout(() => {
        digitar();
    }, 500);
});


document.addEventListener('DOMContentLoaded', () => {
    const hiddenProjects = document.getElementById('hidden-projects');
    const toggleBtn = document.getElementById('toggleBtn');
  
    hiddenProjects.style.display = 'none';
  
    toggleBtn.addEventListener('click', () => {
      const isHidden = hiddenProjects.style.display === 'none';
  
      if (isHidden) {
        hiddenProjects.style.display = 'grid';
        toggleBtn.textContent = 'ver menos';
      } else {
        hiddenProjects.style.display = 'none';
        toggleBtn.textContent = 'ver mais';
      }
    });
  });
  
