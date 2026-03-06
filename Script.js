    function toggleMenu() {
        const menu = document.getElementById('nav-menu');
        menu.classList.toggle('active');
    }

    // Förbättrad funktion för att hantera tidslinjens synlighet
    function toggleTimeline(show) {
        const timeline = document.getElementById('timeline');
        const timelineBtn = document.getElementById('timeline-btn');
        const timelineBtnText = timelineBtn?.querySelector('span');
        const hideTimelineBtn = document.getElementById('hide-timeline-btn');
        const hideTimelineBtnText = hideTimelineBtn?.querySelector('span');
        const currentLang = document.documentElement.lang || 'sv';
        
        // Visa eller dölj baserat på parametern eller toggle om show är undefined
        const shouldShow = typeof show === 'boolean' ? show : timeline.classList.contains('hidden');
        timeline.classList.toggle('hidden', !shouldShow);
        
        // Uppdatera knapptexter
        const viewText = translations[currentLang].view_timeline;
        const hideText = translations[currentLang].hide_timeline;
        
        if (timelineBtnText) timelineBtnText.textContent = shouldShow ? hideText : viewText;
        if (hideTimelineBtnText) hideTimelineBtnText.textContent = shouldShow ? hideText : viewText;
        
        // Scrolla till tidslinjen när den visas
        if (shouldShow) {
            setTimeout(() => {
                timeline.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 10);
            
            // Trigger animations again when showing timeline
            const items = document.querySelectorAll(".timeline-item");
            items.forEach(item => item.classList.remove("fade-in"));
            setTimeout(() => {
                items.forEach(item => {
                    item.classList.add("fade-in");
                });
            }, 50);
        }
    }

    // Definiera translations-objektet globalt så det är tillgängligt för alla funktioner
    const translations = {
         sv: {
        // Header
        "about": "Om mig",
        "timeline": "Erfarenhet",
        "projects": "Projekt",
        "contact": "Kontakt",
        
        // Hero section
        "hero_title": "David Hillver",
        "hero_subtitle": "Systemvetenskapsstudent & Utvecklare",
        "hero_description": "Jag skapar innovativa lösningar med fokus på backendutveckling och databashantering.",
        "view_projects": "Visa Projekt",
        "contact_me": "Kontakta Mig",
        
        // About section
        "view_timeline": "Visa min utbildningsresa",
        "hide_timeline": "Dölj min utbildningsresa",

        "aboutTitle": "Om mig",
        "aboutSubtitle": "Systemvetenskapsstudent & Backend-utvecklare med fokus på databaslösningar",
        "aboutDescription": "Som systemvetenskapsstudent vid Örebro universitet kombinerar jag teknisk expertis med problemlösningsförmåga för att bygga effektiva backend-system. Min passion ligger i att skapa robusta databasarkitekturer och skalbara serverlösningar.",
        "aboutDescription2": "Med erfarenhet av flera programmeringsspråk och ramverk anpassar jag mig snabbt till nya tekniker samtidigt som jag upprätthåller rena och underhållbara kodstandarder.",
        "aboutDescription3": "Min approach kombinerar akademisk kunskap med praktisk implementering, vilket säkerställer att lösningar är både teoretiskt välgrundade och produktionsklara.",
        "aboutDescription4": "Denna webbplats innehåller ett urval av mina personliga projekt samt relevanta skolprojekt. Här ges även en översikt av min utbildningsresa och hur jag kontinuerligt har utvecklat mina färdigheter inom IT med sikte på framtida yrkesroller. Du kan bland annat se vilka kurser jag har läst, samt utforska en interaktiv tidslinje som illustrerar min väg genom utbildningen.",
        "education": "Systemvetenskap, Örebro Universitet",
        "location": "Örebro, Sverige",
        "specialization": "Backend & Databaser",
        "availability": "Tillgänglig",
        "location_label": "Plats",
        "education_label": "Utbildning",
        "specialization_label": "Specialisering",
        "tech_competence": "Teknisk Kompetens",
        "professional_profile": "Professionell Profil",
        "core_competencies": "Kärnkompetenser",
        
        // Kompetensbeskrivningar
        "backend_dev_title": "Backend-utveckling",
        "backend_dev_desc": "Bygger skalbara serverbaserade applikationer med fokus på prestanda och säkerhet",
        "database_design_title": "Databasdesign",
        "database_design_desc": "Utformar effektiva datalagringslösningar med optimal prestanda",
        "system_arch_title": "Systemarkitektur",
        "system_arch_desc": "Designar modulära system med tydliga gränssnitt och dokumentation",
        "agile_collab_title": "Agilt samarbete",
        "agile_collab_desc": "Erfaren av Scrum och andra agila arbetsmetoder i team",
        
        // Teknologitaggar
        "csharp_tag": "C#",
        "dotnet_tag": ".NET",
        "java_tag": "Java",
        "python_tag": "Python",
        "sql_tag": "SQL",
        "ef_tag": "Entity Framework",
        "normalization_tag": "Normalisering",
        "patterns_tag": "Mönster",
        "api_design_tag": "API-design",
        "scalability_tag": "Skalbarhet",
        "scrum_tag": "Scrum",
        "git_tag": "Git",
        "code_reviews_tag": "Code Reviews",

        //Intressen
        "interests": "Intressen",
        "coding": "Programmering",
        "training": "Träning",
        "football": "Fotboll",

        "download_cv": "Ladda ner CV (PDF)",

        "core_competencies_title": "Kärnkompetenser",
        "backend_development_title": "Backend-utveckling",
        "backend_development_description": "Skalbara serverlösningar med C# och .NET",
        "database_design_title": "Databasdesign", 
        "database_design_description": "SQL Server och databasoptimering",
        "system_architecture_title": "Systemarkitektur",
        "system_architecture_description": "Design av API:er och systemintegration",
        "agile_collaboration_title": "Agilt samarbete",
        "agile_collaboration_description": "Erfaren av Scrum och Git-arbetsflöden",

        "education_title": "Utbildning vid Örebro Universitet",
        "program_systemscience": "Systemvetenskapliga programmet - SSV1K",
        "program_engineering": "Civilingenjör, Datateknik - TDT2Y",
        "credits_180hp": "180 hp",
        "credits_300hp": "300 hp",
        "course_interaction": "Interaktionsdesign - IK208G",
        "course_scrum": "Systemutvecklingsprojekt med Scrum och Extreme Programming - IK207G",
        "course_softwarearch": "Mjukvaruarkitektur - IK210G",
        "course_reqmgt": "Kravhantering - IK205G",
        "course_websystems": "Webbsystem med .NET - IK204G",
        "course_database": "Databashantering med SQL Server - IK203G",
        "course_oop": "Objektorienterad programmering med C# - IK202G",
        "course_clientprog": "Klientprogrammering för webbsystem - IK201G",
        "course_business": "Företagsekonomi, grundkurs - FE108G",
        "course_informatics": "Informatik med systemvetenskaplig inriktning, grundkurs - IK100G",
        "course_dbtech": "Databasteknik för civilingenjörer - DT504G",
        "course_mathdiscrete": "Diskret matematik och logik - MA501G",
        "course_mathfunctions": "Funktioner och derivator - MA502G",
        "course_engintro": "Introduktion till ingenjörsarbete inom datateknik - DT502G",
        "course_mathintro": "Introduktionskurs i matematik för civilingenjörsstudenter - MA001G",
        
        // Timeline section
        "timeline_title": "Min Utbildningsresa",
        "timeline_2021_1": "Började på civilingenjörsprogrammet och lärde mig grunderna i programmering.",
        "timeline_2021_2": "Läste Python, C och SQL samt grundläggande nätverkslära.",
        "timeline_2021_3": "Mitt första projekt. Ett grupparbete där uppgiften var att skapa ett dataspel med python och pygame.",
        "timeline_2023_1": "Första objektorienterade projektet jag gjort som gick ut på att vi som grupp skulle skapa ett administrativt system för organisationen MIB.",
        "timeline_2023_2": "Bytte till systemvetenskapsprogrammet och fokuserade mer på programmering.",
        "timeline_2023_3": "Lärde mig SQL och objektorienterad programmering i Java.",
        "timeline_2024_1": "Fördjupade mig inom front-end utveckling (HTML, CSS, JavaScript, Vue.js) och back-end med C# och SQL.",
        "timeline_2024_2": "Började även arbeta med .NET.",
        "timeline_2024_3": "Byggde en påhittad konsultsida med HTML,CSS och Vue.js",
        "timeline_2025_1": "Hemsida som hanterar CV:n och Projekt där man kan se olika användares CV:n och Projekt de deltagit i",
        "timeline_2025_2": "Fördjupade utveckling av applikationer och utvecklade en hemsida som hanterar personers CV:n och projekt där man som användare kan söka efter andra användare och deras CV:n och se projekt de deltagit i",
        "github": "Visa på GitHub",

        "timeline_title_text": "Min Utbildningsresa",
        "timeline_subtitle": "Min utveckling från nybörjare till systemvetenskapsstudent",
        
        // Year labels
        "year_2021": "2021",
        "year_2023": "2023",
        "year_2024": "2024",
        "year_2025": "2025",
        
        // 2021
        "timeline_2021_title": "Början på min resa",
        "timeline_2021_project_title": "Mitt första programmeringsprojekt",
        "c_tag": "C",
        
        // 2023
        "timeline_2023_title": "Objektorientering och Java",
        "timeline_2023_project_title": "Administrativt system för MIB",
        "oop_tag": "OOP",
        "team_project_tag": "Grupparbete",
        
        // 2024
        "timeline_2024_title": "Fullstack-utveckling",
        "timeline_2024_project_title": "CV-Websida",
        "vue_tag": "Vue.js",
        "fullstack_tag": "Fullstack",
        
        // 2025
        "timeline_2025_title": "Professionella projekt",
        "timeline_2025_project_title": "CV-hanteringssystem",
        "professional_project_tag": "Professionellt projekt",

        "timeline_2024_consutl": "Konsultsida",
        "timeline_2024_consut2": "Byggde en påhittad Konsulthemsida med HTML, CSS och Vue.js.",
        "timeline_2024_consut3": "Första objektorienterade projektet - ett administrativt system för organisationen MIB.",
        "timeline_2024_consut4":"Hemsida för hantering av CV:n och projekt där användare kan söka efter andra användare och deras erfarenheter",
        
        // Common
        "project_tag": "Gruppprojekt",
        "github": "Visa på GitHub",
        
        // Projects section
        "projects_title": "Mina Projekt",
        "project_name_1": "Podcast biblotek",
        "project_name_1:1": "Podcast biblotek",
        "project_1_description": "Ett projekt där uppgiften var att skapa en egen påhittad konsultsida. Projekten som finns med i portföljen på denna sida har jag även skapat själv.",
        "project_1_github": "Källkod",
        "project_2_name": "Hattmakarna",
        "project_2_description":"Ett projekt skapat med ASP.NET som gick ut på att skapa en hemsida för ett företag som tillverkade och sålde hattar, där hemsidans funktion var att hantera kunder, ordrar samt personal. Hemsidan utvecklades genom att tillämpa arbetsmetoderna Scrum, eXtreme Programming och andra agila metoder.",
        "projects_title": "Mina Projekt",
        "projects_subtitle": "Akademiska framsteg och personliga kreationer",
        "school_projects_title": "Skolprojekt",
        "personal_projects_title": "Personliga projekt",
        "school_project_tag": "Skolprojekt",
        "personal_project_tag": "Personligt",
        "view_project": "Visa projekt",
        "view_all": "Se alla",
        "project_1_name": "Personlig Hemsida",
        "project_1_description": "En responsiv portfolio-webbplats som visar upp mina projekt och färdigheter.",
        "project_2_name": "Hatmakarna",
        "project_2_description": "En e-handelsplattform för ett hattföretag, utvecklad med ASP.NET och Scrum-metodik.",
        "podcast_project_description": "En fullstack-webbapplikation för att hantera och upptäcka podcasts, byggd med C#",
        "timeline_2024_project_title": "Konsultsida",
        "project_podcast_title": "Podcastbibliotek",
        "project_podcast_description": "En applikation som agerar som ett bibliotek för dina favoritpodcasts.",
        "project_cv_title": "CV-Webbplats",
        "project_cv_description": "En fullstack-webbapplikation för att hantera CV:n och projekt.",
        "school_project_tag": "Skolprojekt",
        "view_project": "Visa projekt",

        "project_ai_car_analysis_name": "AI Bilskadeanalys",
"tech_blazor": "Blazor",
"tech_dotnet": ".NET",
"tech_openai": "OpenAI",
"tech_vite": "Vite",
"tech_react": "React",
"tech_threejs": "Three.js",
"tech_claude_api": "Claude API",
"tech_aspnet_core": "ASP.NET Core",
"tech_postgresql": "PostgreSQL",
"personal_project_tag": "Personligt Projekt",
"ongoing_badge": "Pågående",
"project_year_2024": "2024",
"project_constructai_stackline": "Vite + React | Three.js | Claude API",
"project_constructai_description": "AI-driven plattform för att generera husdesign, planlösningar och 3D-modeller från användarinput.",
"project_ai_car_analysis_description": "App för AI-analys av bilskador med kostnadsestimering och verkstadssökning. Integrerar OpenAI, Google Maps och Cloudinary. Kontakta mig via mail för åtkomst till demo.",
"view_project": "Visa projekt",
"alt_tech_blazor": "Blazor",
"alt_tech_dotnet": ".NET",

        
        // Contact section
        "contactInfo": "Kontakt Information",
        "contactDesc": "Ständigt på jakt efter nästa lärorika projekt – hör av dig!",
        "contact_email": "Email",
        "contact_linkedin": "LinkedIn",
        "contact_github": "GitHub",
        "ContactPhone":"Telefon",

        // Section overlines & headings
        "about_heading": "Systemvetare med<br>passion för backend.",
        "projects_label": "Projekt &amp; Portfolio",
        "projects_heading": "Vad jag<br>har byggt.",
        "projects_subtext": "Verkliga system med fokus på arkitekturell kvalitet, skalbarhet och AI-integration.",
        "details_btn": "Detaljer →",
        "timeline_label": "Utbildningsresa",
        "contact_heading": "Låt oss<br>ta ett samtal.",

        // Contact card labels
        "contact_email_label": "Email",
        "contact_linkedin_label": "LinkedIn",
        "contact_github_label": "GitHub",

        // Hero stats
        "stat_projects": "Projekt",
        "stat_university": "Universitet",
        "stat_graduation": "Examen",

        // GitHub section
        "gh_contrib_title": "GitHub Bidrag",
        "gh_activity_title": "Senaste aktivitet",
        "gh_no_events": "Inga publika händelser de senaste dagarna",
        "gh_rate_limit": "GitHub API-limit nådd, försök igen senare",
        "gh_stat_repos": "repos",
        "gh_stat_followers": "följare",
        "gh_stat_following": "följer",
        "gh_push_text": "Pushade {n} commits till",
        "gh_push_single": "Pushade 1 commit till",
        "gh_create_text": "Skapade {ref} i",
        "gh_pr_text": "Pull request i",
        "gh_starred_text": "Starred",
        "gh_forked_text": "Forked",
        "gh_time_min": "{n} min sedan",
        "gh_time_hours": "{n} tim sedan",
        "gh_time_yesterday": "igår",
        "gh_time_days": "{n} dagar sedan",

        // Detail page labels
        "detail_back": "Tillbaka till projekt",
        "detail_architecture": "Arkitektur",
        "detail_problem": "Problem",
        "detail_solution": "Lösning",
        "detail_screenshots": "Screenshots",
        "detail_no_screenshots": "Screenshots inte tillgängliga",
        "detail_contact_note": "Kontakta mig via email for tillgang och demo.",
"detail_tech_stack": "Teknikstack",
"detail_casestudy": "Fallstudie",
"detail_cs_problem": "Problem",
"detail_cs_decision": "Beslut",
"detail_cs_result": "Resultat",
"detail_cs_lessons": "Lärdomar",
"ongoing_banner": "Projektet är under aktiv utveckling.",

        // Footer
        "copyright": "© 2025 David Hillver. Alla rättigheter förbehållna."
    },
    en: {
        // Header
        "about": "About",
        "timeline": "Experience",
        "projects": "Projects",
        "contact": "Contact",
        
        // Hero section
        "hero_title": "David Hillver",
        "hero_subtitle": "B.Sc in Information Systems Student & Developer",
        "hero_description": "I create innovative solutions with focus on backend development and database management.",
        "view_projects": "View Projects",
        "contact_me": "Contact Me",
        
        // About section
        "view_timeline": "Show my education journey",
        "hide_timeline": "Hide my education journey",

        "aboutTitle": "About me",
        "aboutSubtitle": "Computer Science Student & Backend Developer specializing in database solutions",
        "aboutDescription": "As a Computer Science student at Örebro University, I combine technical expertise with problem-solving skills to build efficient backend systems. My passion lies in creating robust database architectures and scalable server solutions.",
        "aboutDescription2": "With experience across multiple programming languages and frameworks, I adapt quickly to new technologies while maintaining clean, maintainable code standards.",
        "aboutDescription3": "My approach combines academic knowledge with practical implementation, ensuring solutions are both theoretically sound and production-ready.",
        "aboutDescription4": "This website showcases a selection of my personal projects as well as relevant school projects. It also provides an overview of my educational journey and how I have continuously developed my skills in IT with a focus on future professional roles. You can explore the courses I have completed, as well as an interactive timeline illustrating my academic path.",
        "education": "B.Sc in Information Systems , Örebro University",
        "location": "Örebro, Sweden",
        "specialization": "Backend & Databases",
        "availability": "Available",
        "location_label": "Location",
        "education_label": "Education",
        "specialization_label": "Specialization",
        "tech_competence": "Technical Competencies",
        "professional_profile": "Professional Profile",
        "core_competencies": "Core Competencies",
        
        // Skill descriptions
      
        "core_competencies_title": "Core Competencies",
        "backend_development_title": "Backend Development",
        "backend_development_description": "Scalable server solutions with C# and .NET",
        "database_design_title": "Database Design",
        "database_design_description": "SQL Server and database optimization", 
        "system_architecture_title": "System Architecture",
        "system_architecture_description": "API design and system integration",
        "agile_collaboration_title": "Agile Collaboration",
        "agile_collaboration_description": "Experience with Scrum and Git workflows",
        
        // Technology tags
        "csharp_tag": "C#",
        "dotnet_tag": ".NET",
        "java_tag": "Java",
        "python_tag": "Python",
        "sql_tag": "SQL",
        "ef_tag": "Entity Framework",
        "normalization_tag": "Normalization",
        "patterns_tag": "Patterns",
        "api_design_tag": "API Design",
        "scalability_tag": "Scalability",
        "scrum_tag": "Scrum",
        "git_tag": "Git",
        "code_reviews_tag": "Code Reviews",

        //Intressts:
        "interests": "Interests",
        "coding": "Programming",
        "training": "Training",
        "football": "Football",

        "core_competencies_title": "Core Competencies",
        "backend_dev_title": "Backend Development",
        "backend_dev_desc": "Scalable server solutions with C# and .NET",
        "database_design_title": "Database Design",
        "database_design_desc": "SQL Server and database optimization",
        "system_arch_title": "System Architecture",
        "system_arch_desc": "API design and system integration",
        "agile_collab_title": "Agile Collaboration",
        "agile_collab_desc": "Experience with Scrum and Git workflows",

        "download_cv": "Download CV (PDF)",

        "education_title": "Education at Örebro University",
        "program_systemscience": "Information Systems Programme - SSV1K",
        "program_engineering": "M.Sc in Computer Science - TDT2Y",
        "credits_180hp": "180 ECTS",
        "credits_300hp": "300 ECTS",
        "course_interaction": "Interaction Design - IK208G",
        "course_scrum": "System Development Project with Scrum and Extreme Programming - IK207G",
        "course_softwarearch": "Software Architecture - IK210G",
        "course_reqmgt": "Requirements Management - IK205G",
        "course_websystems": "Web Systems with .NET - IK204G",
        "course_database": "Database Management with SQL Server - IK203G",
        "course_oop": "Object-Oriented Programming with C# - IK202G",
        "course_clientprog": "Client Programming for Web Systems - IK201G",
        "course_business": "Business Administration, Basic Course - FE108G",
        "course_informatics": "Informatics with Systems Science Orientation, Basic Course - IK100G",
        "course_dbtech": "Database Technology for Engineers - DT504G",
        "course_mathdiscrete": "Discrete Mathematics and Logic - MA501G",
        "course_mathfunctions": "Functions and Derivatives - MA502G",
        "course_engintro": "Introduction to Engineering in Computer Science - DT502G",
        "course_mathintro": "Introduction to Mathematics for Engineering Students - MA001G",
        
        // Timeline section
        "timeline_title": "My Education Journey",
        "timeline_2021_1": "Started the Master of Science in Engineering programme and learned the basics of programming.",
        "timeline_2021_2": "Studied Python, C and SQL as well as basic networking.",
        "timeline_2021_3": "My first project. A group assignment where the task was to create a video game with python and pygame.",
        "timeline_2023_1": "First object-oriented project where our group was tasked with creating an administrative system for the MIB organization.",
        "timeline_2023_2": "Switched to the Information Systems programme and focused more on programming.",
        "timeline_2023_3": "Learned SQL and object-oriented programming in Java.",
        "timeline_2024_1": "Deepened my knowledge in front-end development (HTML, CSS, JavaScript, Vue.js) and back-end with C# and SQL.",
        "timeline_2024_2": "Started working with .NET.",
        "timeline_2024_3": "Built a fictional consulting website with HTML, CSS and Vue.js",
        "timeline_2025_1": "Website that handles CVs and Projects where you can see different users' CVs and Projects they have participated in",
        "timeline_2025_2": "Advanced application development and created a website that manages people's CVs and projects where users can search for other users and their CVs and see projects they have participated in",
        "github": "View on GitHub",

        "timeline_title_text": "My Education Journey",
        "timeline_subtitle": "My development from beginner to Computer Science student",
        
        // Year labels
        "year_2021": "2021",
        "year_2023": "2023",
        "year_2024": "2024",
        "year_2025": "2025",
        
        // 2021
        "timeline_2021_title": "Beginning of my journey",
        "timeline_2021_project_title": "My first programming project",
        "c_tag": "C",
        
        // 2023
        "timeline_2023_title": "Object Orientation and Java",
        "timeline_2023_project_title": "Administrative system for MIB",
        "oop_tag": "OOP",
        "team_project_tag": "Team project",
        
        // 2024
        "timeline_2024_title": "Fullstack Development",
        "timeline_2024_project_title": "CV Website",
        "vue_tag": "Vue.js",
        "fullstack_tag": "Fullstack",
        
        // 2025
        "timeline_2025_title": "Professional Projects",
        "timeline_2025_project_title": "CV Management System",
        "professional_project_tag": "Professional project",

        "timeline_2024_consutl": "Consulting Website",
        "timeline_2024_consut2": "Built a fictional consulting website with HTML, CSS and Vue.js.",
        "timeline_2024_consut3": "First object-oriented project - an administrative system for the MIB organization.",
        "timeline_2024_consut4":"Website for managing CVs and projects where users can search for other users and their experiences",
        
        // Common
        "project_tag": "Group project",
        "github": "View on GitHub",
        
        // Projects section
        "projects_title": "My Projects",
        "project_name_1": "Podcast library",
        "project_name_1:1": "Podcast library",
        "project_1_description": "A project where the task was to create your own fictional consulting site. The projects featured in the portfolio on this site were also created by me.",
        "project_1_github": "Source code",
        "project_2_name": "Hattmakarna",
        "project_2_description":"A project created with ASP.NET where the goal was to create a website for a company that manufactures and sells hats, with functionality to manage customers, orders and staff. The website was developed using Scrum, eXtreme Programming and other agile methodologies.",
        "projects_title": "My Projects",
        "projects_subtitle": "Academic progress and personal creations",
        "school_projects_title": "School Projects",
        "personal_projects_title": "Personal Projects",
        "school_project_tag": "School Project",
        "personal_project_tag": "Personal",
        "view_project": "View project",
        "view_all": "View all",
        "project_1_name": "Personal Website",
        "project_1_description": "A responsive portfolio website showcasing my projects and skills.",
        "project_2_name": "The Hatters",
        "project_2_description": "An e-commerce platform for a hat company, developed with ASP.NET and Scrum methodology.",
        "podcast_project_description": "A full-stack web application for managing and discovering podcasts, built with C#",
        "timeline_2024_project_title": "Consulting Website",
        "project_podcast_title": "Podcast Library",
        "project_podcast_description": "An application that serves as a library for your favorite podcasts.",
        "project_cv_title": "CV Website",
        "project_cv_description": "A full-stack web application for managing CVs and projects.",
        "school_project_tag": "School Project",
        "view_project": "View project",


        "project_ai_car_analysis_name": "AI Car Damage Analysis",
"tech_blazor": "Blazor",
"tech_dotnet": ".NET",
"tech_openai": "OpenAI",
"tech_vite": "Vite",
"tech_react": "React",
"tech_threejs": "Three.js",
"tech_claude_api": "Claude API",
"tech_aspnet_core": "ASP.NET Core",
"tech_postgresql": "PostgreSQL",
"personal_project_tag": "Personal Project",
"ongoing_badge": "Ongoing",
"project_year_2024": "2024",
"project_constructai_stackline": "Vite + React | Three.js | Claude API",
"project_constructai_description": "AI-driven platform for generating home design, floor plans and 3D models from user input.",
"project_ai_car_analysis_description": "App for AI analysis of car damage with cost estimation and workshop search. Integrates OpenAI, Google Maps and Cloudinary. Contact me via mail for demo access.",
"view_project": "View project",
"alt_tech_blazor": "Blazor",
"alt_tech_dotnet": ".NET",

        
        // Contact section
        "contactInfo": "Contact Information",
        "contactDesc": "Always looking for the next learning project - get in touch!",
        "contact_email": "Email",
        "contact_linkedin": "LinkedIn",
        "contact_github": "GitHub",
        "ContactPhone":"Phone",

        // Section overlines & headings
        "about_heading": "Systems scientist with<br>a passion for backend.",
        "projects_label": "Projects &amp; Portfolio",
        "projects_heading": "What I've<br>built.",
        "projects_subtext": "Real-world systems focused on architectural quality, scalability and AI integration.",
        "details_btn": "Details →",
        "timeline_label": "Education Journey",
        "contact_heading": "Let's have<br>a conversation.",

        // Contact card labels
        "contact_email_label": "Email",
        "contact_linkedin_label": "LinkedIn",
        "contact_github_label": "GitHub",

        // Hero stats
        "stat_projects": "Projects",
        "stat_university": "University",
        "stat_graduation": "Graduation",

        // GitHub section
        "gh_contrib_title": "GitHub Contributions",
        "gh_activity_title": "Recent Activity",
        "gh_no_events": "No public events in the last few days",
        "gh_rate_limit": "GitHub API rate limit reached, try again later",
        "gh_stat_repos": "repos",
        "gh_stat_followers": "followers",
        "gh_stat_following": "following",
        "gh_push_text": "Pushed {n} commits to",
        "gh_push_single": "Pushed 1 commit to",
        "gh_create_text": "Created {ref} in",
        "gh_pr_text": "Pull request in",
        "gh_starred_text": "Starred",
        "gh_forked_text": "Forked",
        "gh_time_min": "{n} min ago",
        "gh_time_hours": "{n} hrs ago",
        "gh_time_yesterday": "yesterday",
        "gh_time_days": "{n} days ago",

	        // Detail page labels
	        "detail_back": "Back to projects",
	        "detail_architecture": "Architecture",
	        "detail_problem": "Problem",
	        "detail_solution": "Solution",
	        "detail_screenshots": "Screenshots",
	        "detail_no_screenshots": "Screenshots not available",
	        "detail_contact_note": "Contact me via email for access and demo.",
	        "detail_tech_stack": "Tech Stack",
	        "detail_casestudy": "Case Study",
	        "detail_cs_problem": "Problem",
	        "detail_cs_decision": "Decision",
	        "detail_cs_result": "Result",
	        "detail_cs_lessons": "Lessons Learned",
	        "ongoing_banner": "Project under active development.",

        // Footer
        "copyright": "© 2025 David Hillver. All rights reserved."
    }
    };

    document.addEventListener("DOMContentLoaded", () => {
        // Timeline animation observer
        const items = document.querySelectorAll(".timeline-item");
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                    observer.unobserve(entry.target);
                }
            });
        });
        items.forEach(item => observer.observe(item));

        // Timeline toggle functionality
        const timelineBtn = document.getElementById('timeline-btn');
        if (timelineBtn) {
            timelineBtn.addEventListener('click', () => toggleTimeline());
        }

        // Hide timeline button functionality
        const hideTimelineBtn = document.getElementById('hide-timeline-btn');
        if (hideTimelineBtn) {
            hideTimelineBtn.addEventListener('click', function() {
                toggleTimeline(false);
                // Scrolla tillbaka till projektsektionen
                setTimeout(() => {
                    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                }, 10);
            });
        }

        // Language switching functionality
        const langSv = document.getElementById("lang-sv");
        const langEn = document.getElementById("lang-en");
        const langSvMobile = document.getElementById("lang-sv-mobile");
        const langEnMobile = document.getElementById("lang-en-mobile");

        function changeLanguage(lang) {
            // Update all elements with data-i18n attribute
            document.querySelectorAll("[data-i18n]").forEach(element => {
                const key = element.getAttribute("data-i18n");
                if (translations[lang] && translations[lang][key]) {
                    if (element.tagName === "INPUT" && element.hasAttribute("placeholder")) {
                        element.setAttribute("placeholder", translations[lang][key]);
                    } else {
                        // Use innerHTML so translations can contain <br> tags
                        element.innerHTML = translations[lang][key];
                    }
                }
            });

            // Update document language attribute
            document.documentElement.lang = lang;
            
            // Save language preference
            localStorage.setItem("language", lang);
            
            // Update button active states
            const buttons = [langSv, langEn, langSvMobile, langEnMobile];
            buttons.forEach(btn => {
                if (btn) {
                    if (btn.id.includes(lang) || (lang === 'sv' && btn.id.includes('sv')) || 
                        (lang === 'en' && btn.id.includes('en'))) {
                        btn.classList.add("active");
                    } else {
                        btn.classList.remove("active");
                    }
                }
            });

            // Update timeline button texts
            const timelineSection = document.getElementById('timeline');
            const timelineBtn = document.getElementById('timeline-btn');
            const hideTimelineBtn = document.getElementById('hide-timeline-btn');
            
            if (timelineBtn) {
                const span = timelineBtn.querySelector('span');
                span.textContent = timelineSection.classList.contains('hidden') ? 
                    translations[lang].view_timeline : 
                    translations[lang].hide_timeline;
            }
            
            if (hideTimelineBtn) {
                const span = hideTimelineBtn.querySelector('span');
                span.textContent = timelineSection.classList.contains('hidden') ? 
                    translations[lang].view_timeline : 
                    translations[lang].hide_timeline;
            }

            // Re-render GitHub activity feed with new language
            window.renderGhActivity?.();
        }

        // Initialize with saved language or default to Swedish
        const savedLang = localStorage.getItem("language") || "sv";
        changeLanguage(savedLang);

        // Event listeners for language buttons
        langSv?.addEventListener("click", () => changeLanguage("sv"));
        langEn?.addEventListener("click", () => changeLanguage("en"));
        langSvMobile?.addEventListener("click", () => changeLanguage("sv"));
        langEnMobile?.addEventListener("click", () => changeLanguage("en"));

        // Mobile menu functionality
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuClose = document.getElementById('mobile-menu-close');

        if (mobileMenuButton && mobileMenu && mobileMenuClose) {
            mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.remove('translate-x-full');
            });

            mobileMenuClose.addEventListener('click', function() {
                mobileMenu.classList.add('translate-x-full');
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                }, 300);
            });
        }
    });
