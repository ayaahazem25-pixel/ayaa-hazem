export const portfolioData = {
  en: {
    nav: {
      brand: "Aya Shawky",
      roleBadge: ".NET Full Stack Dev",
      about: "About",
      skills: "Architecture & Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education & Tracks",
      certifications: "Certifications",
      contact: "Contact",
      downloadCV: "Download CV",
      hireMe: "Contact Me"
    },
    hero: {
      statusBadge: "Open to Junior Full Stack & QA / BA Roles",
      greeting: "Hello, I'm",
      name: "Aya Hazem Shawky",
      title: "Junior Full Stack .NET Web Developer | MIS Student",
      summary: "Aspiring Full Stack .NET Developer with a solid foundation in Management Information Systems (MIS). Skilled in crafting robust, performant web applications using C#, .NET, React, and SQL Server, reinforced by practical experience in Software Testing (QA) and Business Analysis (BA). Currently sharpening technical mastery through prestigious ITI and DEPI tracks.",
      ctaPrimary: "Contact Me",
      ctaSecondary: "Download CV",
      ctaGithub: "GitHub Profile",
      locationLabel: "Location",
      locationValue: "Cairo, Egypt",
      phoneLabel: "Phone",
      phoneValue: "+20 01010413300",
      emailLabel: "Email",
      emailValue: "ayahazem25@gmail.com",
      linkedinLabel: "LinkedIn",
      linkedinUrl: "https://www.linkedin.com/in/ayaa-hazem-590901320",
      stats: [
        { value: "4+", label: "Intensive Tech Tracks" },
        { value: "Full Stack", label: ".NET & React Focus" },
        { value: "QA & BA", label: "Testing & Architecture" },
        { value: "Very Good", label: "MIS Academic Standing" }
      ]
    },
    skills: {
      badge: "Core Competencies",
      title: "Architecture & Technical Stack",
      subtitle: "Categorized overview of backend infrastructure, modern frontend engineering, relational databases, and quality assurance methodologies.",
      categories: {
        backend: "Backend & Core",
        frontend: "Frontend & UI",
        database: "Database & Analytics",
        qaba: "QA, BA & Tools"
      },
      items: [
        // Backend
        { name: "C#", level: 85, category: "backend", desc: "Object-Oriented Programming, Generics, Collections, Exception Handling" },
        { name: ".NET / ASP.NET Core", level: 80, category: "backend", desc: "Web APIs, MVC architecture, Routing, Middleware, Dependency Injection" },
        { name: "Object-Oriented Programming (OOP)", level: 90, category: "backend", desc: "Encapsulation, Inheritance, Polymorphism, Abstraction, Clean Code" },
        { name: "RESTful Web APIs", level: 85, category: "backend", desc: "HTTP verbs, Status Codes, JSON payloads, Endpoint architecture" },
        { name: "LINQ & Entity Framework", level: 75, category: "backend", desc: "Data queries, filtering, lambda expressions, ORM relationships" },
        // Frontend
        { name: "React", level: 85, category: "frontend", desc: "Functional components, Hooks (useState, useEffect, useMemo), Props, State flow" },
        { name: "JavaScript (ES6+)", level: 85, category: "frontend", desc: "Async/Await, Promises, Closures, Array methods, DOM manipulation" },
        { name: "HTML5 & Semantic Web", level: 95, category: "frontend", desc: "Accessible tags, SEO structure, Clean document hierarchy" },
        { name: "CSS3 & Tailwind CSS", level: 90, category: "frontend", desc: "Flexbox, CSS Grid, Utility-first styling, Responsive design, Dark mode" },
        { name: "Responsive UI/UX", level: 90, category: "frontend", desc: "Mobile-first approach, Cross-browser compatibility, Micro-interactions" },
        // Database & Analytics
        { name: "SQL Server (T-SQL)", level: 85, category: "database", desc: "Complex queries, Joins, Constraints, Indexing, Triggers, Views" },
        { name: "Relational Database Design", level: 85, category: "database", desc: "ERD modeling, 1NF-3NF Normalization, Schema integrity" },
        { name: "Power BI", level: 80, category: "database", desc: "Interactive dashboards, DAX queries, Visual storytelling" },
        { name: "Tableau", level: 75, category: "database", desc: "Visual data exploration, KPI tracking, Metric charts" },
        { name: "SPSS", level: 75, category: "database", desc: "Statistical hypothesis testing, Variance, Descriptive analytics" },
        // QA, BA & Tools
        { name: "Software Testing (QA)", level: 90, category: "qaba", desc: "Functional testing, Test cases design, Test suites, Traceability" },
        { name: "Bug Reporting & Metrics", level: 90, category: "qaba", desc: "Defect lifecycles, Severity & Priority matrix, Detailed steps to reproduce" },
        { name: "Business Analysis (BA)", level: 85, category: "qaba", desc: "Requirements gathering, User stories, Process workflows, BRD understanding" },
        { name: "Git & GitHub", level: 85, category: "qaba", desc: "Version control, Branching workflows, PR reviews, Collaboration" },
        { name: "Visual Studio & VS Code", level: 90, category: "qaba", desc: "Debugging, Solution architecture, Extensions, Diagnostics" },
        { name: "VMware", level: 75, category: "qaba", desc: "Virtual environment deployment, OS emulation, Lab configuration" }
      ]
    },
    projects: {
      badge: "Practical Engineering",
      title: "Featured Projects & Case Studies",
      subtitle: "Hands-on projects showcasing full stack architecture, database models, API concepts, and comprehensive QA testing frameworks.",
      viewDetails: "Examine Architecture",
      hideDetails: "Collapse Details",
      liveDemo: "Live Preview",
      codeRepo: "View Repository",
      items: [
        {
          id: "ecommerce-testing",
          title: "Full Stack & E-Commerce Testing Case Study",
          category: "QA & System Architecture",
          subtitle: "End-to-end requirement analysis, relational schema mapping, and functional test suite design.",
          featured: true,
          overview: "A comprehensive case study demonstrating the engineering rigor of a full stack commerce platform. Covers user authentication, shopping cart workflows, catalog searches, order lifecycle, and payment simulation.",
          techStack: ["C#", "SQL Server", "Test Plan", "Bug Tracking", "Requirement Traceability", "REST API Spec"],
          architecture: {
            layers: "Client (React) ➔ RESTful API Gateway (.NET) ➔ Business Logic Layer ➔ SQL Server RDBMS",
            database: "Normalized relational model handling Users, Roles, Products, Categories, Orders, and OrderItems with foreign key constraints.",
            testingScope: "120+ Functional test cases executed with Severity & Priority classifications, Edge case validation, and boundary value analysis."
          },
          highlights: [
            "Designed exhaustive test cases covering checkout edge cases, invalid stock states, and session expirations.",
            "Structured defect reports documenting Expected vs. Actual results, logs, and Severity (Blocker/Critical/Minor).",
            "Defined relational schema diagrams and ER models for high-concurrency order operations.",
            "Formulated Business Analysis requirements (Functional & Non-Functional Specifications)."
          ]
        },
        {
          id: "frontend-webapps",
          title: "Dynamic Modern Web Applications",
          category: "Frontend & Full Stack Integration",
          subtitle: "Responsive, component-driven client applications powered by React and Tailwind CSS.",
          featured: true,
          overview: "A suite of responsive web interfaces emphasizing modern UI/UX design patterns, seamless state management, and asynchronous data fetching compatible with .NET REST API backends.",
          techStack: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Lucide Icons", "REST APIs", "Vite"],
          architecture: {
            layers: "Modular Component Architecture ➔ React Context State ➔ Fetch/Axios Service Layer ➔ Web API Endpoints",
            database: "Client-side cached state with optimistic updates and local storage persistence.",
            testingScope: "UI responsiveness verification across 5 standard viewport breakpoints and dark/light contrast auditing."
          },
          highlights: [
            "Built modular, accessible UI components with zero external CSS overhead using Tailwind CSS.",
            "Implemented dynamic search, category filtering, and instant feedback validation forms.",
            "Integrated seamless Dark/Light theme switching and bilingual RTL/LTR layout handling.",
            "Optimized asset loading and bundle sizes for fast First Contentful Paint (FCP)."
          ]
        },
        {
          id: "mis-analytics-db",
          title: "Enterprise MIS Data & Analytics Dashboard",
          category: "Database & Business Intelligence",
          subtitle: "Relational database schema modeling and interactive business intelligence reporting.",
          featured: false,
          overview: "Designed for organizational decision-makers to track sales performance, inventory turnover, and operational KPIs using structured SQL Server databases and Power BI visualization models.",
          techStack: ["SQL Server", "T-SQL", "Power BI", "Tableau", "SPSS", "Data Modeling"],
          architecture: {
            layers: "Transactional Database (OLTP) ➔ ETL Queries (T-SQL) ➔ Dimensional Star Schema ➔ Power BI Dashboards",
            database: "Star schema with centralized fact tables for transactions and dimension tables for customers, products, and dates.",
            testingScope: "Query execution plan analysis, index optimization, and data consistency verification."
          },
          highlights: [
            "Authored complex T-SQL queries leveraging window functions, CTEs, and aggregated reporting views.",
            "Transformed raw organizational metrics into executive Power BI visual dashboards.",
            "Conducted statistical hypothesis tests using SPSS to extract predictive business insights.",
            "Ensured strict relational referential integrity through foreign keys and cascading rules."
          ]
        }
      ]
    },
    experience: {
      badge: "Career Journey",
      title: "Professional Experience",
      subtitle: "Hands-on work experience highlighting communication, analytical troubleshooting, client management, and practical problem solving.",
      items: [
        {
          role: "Sales Representative",
          company: "Limitless & Future Supplies",
          period: "2025 – 2026",
          type: "Customer Engagement & Operations",
          description: "Spearheaded client communications, account relationships, and transaction tracking in a dynamic supply distribution environment.",
          responsibilities: [
            "Mastered persuasive negotiation and customer relationship management (CRM) strategies.",
            "Accurately tracked customer orders, requirements, and delivery status logs.",
            "Collaborated cross-functionally with logistics and management to resolve service bottlenecks."
          ],
          skillsGained: ["Client Management", "Negotiation", "Data Tracking", "Active Listening", "Problem Resolution"]
        },
        {
          role: "Solar Energy Installation Assistant",
          company: "Technical Field Services",
          period: "2022 – 2026",
          type: "Technical & Field Operations",
          description: "Contributed to on-site solar energy installation, electrical safety compliance, hardware assembly, and diagnostic testing.",
          responsibilities: [
            "Assisted in technical troubleshooting, wiring inspection, and solar panel array alignment.",
            "Strictly enforced safety compliance and operational protocols in challenging outdoor environments.",
            "Demonstrated strong teamwork, physical coordination, and rapid technical problem-solving."
          ],
          skillsGained: ["Technical Troubleshooting", "Safety Compliance", "Field Assembly", "Teamwork Under Pressure"]
        }
      ]
    },
    education: {
      badge: "Academic & Professional Growth",
      title: "Education & Intensive Training Tracks",
      subtitle: "Formal academic degree in MIS coupled with rigorous government and technology institute development tracks.",
      university: {
        degree: "Bachelor of Commerce in Management Information Systems (MIS)",
        institution: "Helwan University, Egypt",
        graduation: "Expected Graduation: 2027",
        grade: "Grade: Very Good",
        highlights: "Focusing on systems analysis, database design, software engineering methodologies, business intelligence, and organizational management."
      },
      tracksTitle: "Intensive Professional Tracks",
      tracks: [
        {
          name: "Information Technology Institute (ITI)",
          track: "C# / .NET & React Track",
          org: "Ministry of Communications and Information Technology (MCIT)",
          desc: "Rigorous full-stack training covering C# language fundamentals, Object-Oriented Programming (OOP), ASP.NET Web APIs, relational databases, and modern React component development."
        },
        {
          name: "Digital Egypt Pioneers Initiative (DEPI)",
          track: "Full Stack Web Development Track",
          org: "Ministry of Communications and Information Technology (MCIT)",
          desc: "Comprehensive national initiative emphasizing end-to-end web engineering, frontend frameworks, backend service design, and modern version control workflows."
        },
        {
          name: "MCIT Specialized Training",
          track: "Data Analysis, Software Testing & Business Analysis",
          org: "MCIT Egypt",
          desc: "Deep-dive into practical software quality assurance (Test Cases, Bug Life Cycle), Business Analysis (BRD, Use Cases), and data analytics tools (Power BI, SPSS)."
        },
        {
          name: "Cybersecurity Training",
          track: "Penetration Testing & Security Fundamentals",
          org: "Specialized Training Program",
          desc: "Studied security basics, common web vulnerabilities (OWASP Top 10), secure coding principles, and network security foundations."
        }
      ]
    },
    certifications: {
      badge: "Accreditations",
      title: "Certifications & Recognized Programs",
      subtitle: "Formal training and credentials completed with leading financial, governmental, and technological institutions.",
      items: [
        { name: "Digital Egypt Pioneers Initiative (DEPI)", issuer: "MCIT Egypt", category: "Full Stack Development" },
        { name: "Information Technology Institute (ITI)", issuer: "MCIT Egypt", category: "C# .NET & React" },
        { name: "Data Analysis & QA/BA Specialization", issuer: "MCIT Egypt", category: "Data & Quality Assurance" },
        { name: "Commercial International Bank (CIB) Training", issuer: "CIB Egypt", category: "Banking Systems & FinTech" },
        { name: "Bank of Egypt Training Program", issuer: "Banque Misr", category: "Financial Operations & Services" },
        { name: "The Egyptian Exchange (EGX) Training", issuer: "EGX Egypt", category: "Financial Markets & Information Systems" }
      ]
    },
    contact: {
      badge: "Get in Touch",
      title: "Let's Build Something Great",
      subtitle: "I am actively seeking Junior Full Stack .NET Developer, Software QA / Testing, and Business Analyst opportunities. Feel free to reach out directly!",
      form: {
        nameLabel: "Your Name",
        namePlaceholder: "e.g. John Doe",
        emailLabel: "Your Email",
        emailPlaceholder: "e.g. john@example.com",
        subjectLabel: "Subject",
        subjectPlaceholder: "e.g. Job Opportunity / Project Discussion",
        messageLabel: "Message",
        messagePlaceholder: "Write your message here...",
        submitBtn: "Send Message",
        sending: "Sending...",
        successTitle: "Message Sent Successfully!",
        successDesc: "Thank you for reaching out, Aya will get back to you promptly."
      },
      directChannels: "Direct Channels",
      quickConnect: [
        { label: "Email", value: "ayahazem25@gmail.com", href: "mailto:ayahazem25@gmail.com" },
        { label: "Phone", value: "+20 01010413300", href: "tel:+2001010413300" },
        { label: "WhatsApp", value: "+20 101 041 3300", href: "https://wa.me/201010413300" },
        { label: "LinkedIn", value: "ayaa-hazem", href: "https://www.linkedin.com/in/ayaa-hazem-590901320" }
      ]
    },
    footer: {
      rights: "All rights reserved.",
      developedWith: "Engineered with React, Tailwind CSS, and .NET Developer passion.",
      backToTop: "Back to Top"
    }
  },
  ar: {
    nav: {
      brand: "آية حازم شوقي",
      roleBadge: "مطورة دوت نت وفول ستاك",
      about: "عن المطور",
      skills: "المهارات والمعمارية",
      projects: "المشاريع",
      experience: "الخبرات",
      education: "التعليم والتدريب",
      certifications: "الشهادات",
      contact: "تواصل معي",
      downloadCV: "تحميل السيرة الذاتية",
      hireMe: "تواصل معي"
    },
    hero: {
      statusBadge: "متاحة لفرص العمل في تطوير الويب (Full Stack) واختبار البرمجيات (QA)",
      greeting: "مرحباً، أنا",
      name: "آية حازم شوقي",
      title: "مطورة ويب دوت نت وفول ستاك | طالبة نظم معلومات إدارية",
      summary: "مطورة ويب شغوفة بتقنيات .NET و Full Stack ولدي أساس أكاديمي قوي في نظم المعلومات الإدارية (MIS). متمرسة في بناء تطبيقات ويب متطورة وقوية باستخدام C# و .NET و React و SQL Server، مدعومة بخبرة عملية في اختبار البرمجيات (Software Testing) وتحليل الأعمال (Business Analysis). أواصل صقل مهاراتي التقنية من خلال برامج معهد تكنولوجيا المعلومات (ITI) ومبادرة رواد مصر الرقمية (DEPI).",
      ctaPrimary: "تواصل معي",
      ctaSecondary: "تحميل السيرة الذاتية",
      ctaGithub: "حساب جيت هاب",
      locationLabel: "الموقع",
      locationValue: "القاهرة، مصر",
      phoneLabel: "الهاتف",
      phoneValue: "+20 01010413300",
      emailLabel: "البريد الإلكتروني",
      emailValue: "ayahazem25@gmail.com",
      linkedinLabel: "لينكد إن",
      linkedinUrl: "https://www.linkedin.com/in/ayaa-hazem-590901320",
      stats: [
        { value: "+4", label: "مسارات تدريبية مكثفة" },
        { value: "Full Stack", label: "تركيز على .NET و React" },
        { value: "QA & BA", label: "اختبار وتحليل النظم" },
        { value: "جيد جداً", label: "تقدير أكاديمي في MIS" }
      ]
    },
    skills: {
      badge: "القدرات التقنية",
      title: "المعمارية والمهارات البرمجية",
      subtitle: "نظرة تفصيلية مصنفة تغطي تقنيات الواجهة الخلفية، هندسة الواجهات الأمامية، قواعد البيانات العلاقية، ومنهجيات ضمان الجودة.",
      categories: {
        backend: "الباك إند والأساسيات",
        frontend: "الفرونت إند والواجهات",
        database: "قواعد البيانات والتحليلات",
        qaba: "اختبار البرمجيات والأدوات"
      },
      items: [
        // Backend
        { name: "C#", level: 85, category: "backend", desc: "البرمجة كائنية التوجه، الكولكشنز، معالجة الاستثناءات، الكود النظيف" },
        { name: ".NET / ASP.NET Core", level: 80, category: "backend", desc: "بناء واجهات Web APIs، معمارية MVC، حقن التبعيات (DI)، الميدلوير" },
        { name: "البرمجة الكائنية (OOP)", level: 90, category: "backend", desc: "التغليف، التوريث، تعدد الأشكال، التجريد، ومبادئ SOLID" },
        { name: "RESTful Web APIs", level: 85, category: "backend", desc: "بروتوكولات HTTP، بنية JSON، معايير الأمان والاستجابة" },
        { name: "LINQ & Entity Framework", level: 75, category: "backend", desc: "استعلامات البيانات المتقدمة، تعبيرات Lambda، وربط الجداول" },
        // Frontend
        { name: "React", level: 85, category: "frontend", desc: "المكونات الوظيفية، الخطافات (Hooks)، إدارة الحالة، وتدفق البيانات" },
        { name: "JavaScript (ES6+)", level: 85, category: "frontend", desc: "البرمجة غير المتزامنة Async/Await، الوعود Promises، وربط DOM" },
        { name: "HTML5 والهيكلة الدلالية", level: 95, category: "frontend", desc: "بناء هيكل قياسي، تحسين محركات البحث، والتوافقية الشاملة" },
        { name: "CSS3 & Tailwind CSS", level: 90, category: "frontend", desc: "تصميم متجاوب بالكامل، فليكس بوكس وجريد، ودعم الوضع الداكن" },
        { name: "تصميم واجهات المستخدم UI/UX", level: 90, category: "frontend", desc: "تجربة مستخدم تفاعلية، متوافقة مع الهواتف الذكية والشاشات الكبيرة" },
        // Database & Analytics
        { name: "SQL Server (T-SQL)", level: 85, category: "database", desc: "كتابة الاستعلامات المعقدة، الربط Joins، الفهارس، الإجراءات المخزنة" },
        { name: "تصميم قواعد البيانات العلاقية", level: 85, category: "database", desc: "مخططات ERD، تسوية البيانات (Normalization)، سلامة البيانات" },
        { name: "Power BI", level: 80, category: "database", desc: "بناء لوحات تحكم تفاعلية، استعلامات DAX، وتمثيل البيانات المرئي" },
        { name: "Tableau", level: 75, category: "database", desc: "استكشاف البيانات التفاعلي، متابعة مؤشرات الأداء والتقارير" },
        { name: "SPSS", level: 75, category: "database", desc: "التحليل الإحصائي، اختبارات الفرضيات، وتحليل التباين" },
        // QA, BA & Tools
        { name: "اختبار البرمجيات (QA)", level: 90, category: "qaba", desc: "الاختبار الوظيفي، تصميم حالات الاختبار (Test Cases)، تغطية المتطلبات" },
        { name: "توثيق وتتبع الأخطاء (Bug Reporting)", level: 90, category: "qaba", desc: "مصفوفة الشدة والأولوية (Severity/Priority)، دورة حياة العيب، خطوات إعادة الإنتاج" },
        { name: "تحليل الأعمال (BA)", level: 85, category: "qaba", desc: "جمع المتطلبات، كتابة قصص المستخدم، مخططات سير العمل، وثيقة BRD" },
        { name: "Git & GitHub", level: 85, category: "qaba", desc: "إدارة الإصدارات، التفرع والدمج، والمراجعات التعاونية" },
        { name: "Visual Studio & VS Code", level: 90, category: "qaba", desc: "التصحيح المتقدم للشيفرات البرمجية، إدارة المشاريع والحلول" },
        { name: "VMware", level: 75, category: "qaba", desc: "إعداد البيئات الافتراضية واختبار الأنظمة المعزولة" }
      ]
    },
    projects: {
      badge: "التطبيقات العملية",
      title: "أبرز المشاريع ودراسات الحالة",
      subtitle: "مشاريع عملية توضح فهم المعمارية المتكاملة، نمذجة قواعد البيانات، مفاهيم واجهات البرمجة، وأطر اختبار الجودة الشاملة.",
      viewDetails: "فحص المعمارية والتفاصيل",
      hideDetails: "إغلاق التفاصيل",
      liveDemo: "معاينة حية",
      codeRepo: "مستودع الكود",
      items: [
        {
          id: "ecommerce-testing",
          title: "دراسة حالة متكاملة: متجر إلكتروني واختبار النظم",
          category: "ضمان الجودة ومعمارية النظم",
          subtitle: "تحليل متطلبات كامل، تخطيط هيكل البيانات، وتصميم أجنحة حالات الاختبار الوظيفية.",
          featured: true,
          overview: "دراسة هندسية متكاملة توضح بناء منصة تجارة إلكترونية، تشمل دورات تسجيل المستخدمين، إدارة السلة، كتالوج المنتجات، مراحل الطلبات، ومحاكاة عمليات الدفع.",
          techStack: ["C#", "SQL Server", "خطة الاختبار", "تتبع الأخطاء", "مصفوفة المتطلبات", "مواصفات REST API"],
          architecture: {
            layers: "واجهة المستخدم (React) ➔ بوابة API (.NET) ➔ طبقة منطق الأعمال ➔ قاعدة بيانات SQL Server",
            database: "نموذج علائقي موحد يشمل المستخدمين، الأدوار، المنتجات، الفئات، والطلبات مع قيود المفاتيح الأجنبية.",
            testingScope: "تنفيذ أكثر من 120 حالة اختبار وظيفية مع تصنيف الشدة والأولوية، وفحص القيم الحدية والسيناريوهات الاستثنائية."
          },
          highlights: [
            "تصميم حالات اختبار تغطي حالات الدفع المعقدة، نفاد المخزون، وانتهاء الجلسات.",
            "توثيق تقارير العيوب بمقارنة النتائج المتوقعة مع الفعلية وتحديد درجة الخطورة بدقة.",
            "بناء مخططات الكيانات والعلاقات (ERD) لتحمل العمليات المتزامنة بكفاءة.",
            "صياغة وثائق تحليل الأعمال ومواصفات المتطلبات الوظيفية وغير الوظيفية."
          ]
        },
        {
          id: "frontend-webapps",
          title: "تطبيقات ويب عصرية وتفاعلية",
          category: "واجهات المستخدم وتكامل الأنظمة",
          subtitle: "تطبيقات قائمة على المكونات المتجاوبة باستخدام React ومكتبة Tailwind CSS.",
          featured: true,
          overview: "مجموعة من واجهات الويب العصرية التي تركز على أنماط تجربة المستخدم الحديثة، إدارة الحالة بسلاسة، واستدعاء البيانات غير المتزامن المتوافق مع واجهات .NET الخلفية.",
          techStack: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Lucide Icons", "REST APIs", "Vite"],
          architecture: {
            layers: "معمارية المكونات المعيارية ➔ حالة React Context ➔ طبقة الخدمات والطلبات ➔ نقاط API",
            database: "حفظ ومزامنة الحالة على جهة العميل مع دعم التخزين المحلي (Local Storage).",
            testingScope: "اختبار استجابة الواجهات عبر 5 أحجام شاشات مختلفة ومراجعة تباين الألوان في الوضعين الفاتح والداكن."
          },
          highlights: [
            "بناء مكونات تفاعلية قابلة لإعادة الاستخدام مع أداء عالي وسرعة تحميل فائقة.",
            "تطبيق ميزات البحث الفوري، الفلترة حسب التصنيف، ونماذج التحقق التفاعلية.",
            "دعم كامل وسلس للتبديل بين اللغتين العربية والإنجليزية مع اتجاه النصوص (RTL/LTR).",
            "تحسين الأداء لسرعة العرض الأول للمحتوى (FCP)."
          ]
        },
        {
          id: "mis-analytics-db",
          title: "لوحة تحليلات وبيانات نظم المعلومات الإدارية",
          category: "قواعد البيانات وذكاء الأعمال",
          subtitle: "نمذجة قواعد البيانات العلاقية وتطوير لوحات متابعة مؤشرات الأداء التفاعلية.",
          featured: false,
          overview: "نظام مصمم لتمكين متخذي القرار في المؤسسات من متابعة حركة المبيعات، ومعدل دوران المخزون، ومؤشرات الأداء التشغيلية عبر SQL Server ولوحات Power BI.",
          techStack: ["SQL Server", "T-SQL", "Power BI", "Tableau", "SPSS", "نمذجة البيانات"],
          architecture: {
            layers: "قاعدة بيانات المعاملات ➔ استعلامات الاستخراج والتحويل T-SQL ➔ نموذج Star Schema ➔ لوحات Power BI",
            database: "نموذج نجمي متقدم يفصل جداول الحقائق والمعاملات عن الجداول الوصفية للعملاء والتاريخ.",
            testingScope: "تحليل خطط تنفيذ الاستعلامات، تحسين الفهارس، ومطابقة دقة البيانات المجمعة."
          },
          highlights: [
            "كتابة استعلامات T-SQL معقدة باستخدام الدوال التحليلية والـ Common Table Expressions.",
            "تحويل البيانات الأولية للمؤسسة إلى لوحات تقارير تنفيذية تفاعلية ببرنامج Power BI.",
            "إجراء اختبارات الفرضيات الإحصائية ببرنامج SPSS لاستخراج رؤى مستقبلية للأعمال.",
            "تطبيق قيود التكامل المرجعي وحماية ترابط السجلات بدقة."
          ]
        }
      ]
    },
    experience: {
      badge: "المسار المهني",
      title: "الخبرات العملية",
      subtitle: "خبرات ميدانية تعكس مهارات التواصل، الحل التحليلي للمشكلات، إدارة علاقات العملاء، والعمل الجماعي.",
      items: [
        {
          role: "ممثلة مبيعات وتواصل",
          company: "Limitless & Future Supplies",
          period: "2025 – 2026",
          type: "خدمة العملاء والعمليات",
          description: "قيادة التواصل مع العملاء، إدارة الحسابات، ومتابعة سجلات التوريد في بيئة عمل تجارية ديناميكية.",
          responsibilities: [
            "إتقان استراتيجيات التفاوض الفعال وبناء علاقات ثقة مستدامة مع العملاء.",
            "التوثيق الدقيق للطلبات والاحتياجات ومتابعة سير التوريدات مع الإدارات المختلفة.",
            "التنسيق مع فرق اللوجستيات لمعالجة أي عقبات وضمان رضا العميل."
          ],
          skillsGained: ["إدارة علاقات العملاء", "التفاوض والإقناع", "تتبع البيانات", "حل المشكلات", "التواصل الفعال"]
        },
        {
          role: "مساعدة تركيبات أنظمة الطاقة الشمسية",
          company: "الخدمات الميدانية الفنية",
          period: "2022 – 2026",
          type: "العمليات الفنية والميدانية",
          description: "المشاركة في أعمال التركيب الميداني لأنظمة الطاقة، وتطبيق معايير السلامة المهنية، والتجميع والفحص الفني.",
          responsibilities: [
            "المساعدة في استكشاف الأعطال الفنية وإصلاحها، وفحص التوصيلات وضبط زوايا الألواح.",
            "الالتزام الصارم بمعايير وبروتوكولات السلامة في مواقع العمل الخارجية.",
            "إظهار مرونة عالية في حل المشكلات الفنية الطارئة والعمل بروح الفريق الواحد."
          ],
          skillsGained: ["استكشاف الأعطال الفنية", "معايير السلامة", "التركيب الميداني", "العمل تحت الضغط"]
        }
      ]
    },
    education: {
      badge: "التعليم والتطوير المستمر",
      title: "المؤهل الأكاديمي والمسارات التدريبية",
      subtitle: "مؤهل جامعي في نظم المعلومات الإدارية مقترن ببرامج تدريبية مكثفة من كبرى المعاهد والمبادرات التكنولوجية في مصر.",
      university: {
        degree: "بكالوريوس التجارة في نظم المعلومات الإدارية (MIS)",
        institution: "جامعة حلوان، مصر",
        graduation: "سنة التخرج المتوقعة: 2027",
        grade: "التقدير: جيد جداً",
        highlights: "دراسة شاملة لتحليل النظم، تصميم قواعد البيانات، هندسة البرمجيات، ذكاء الأعمال، وإدارة المنظمات والبيانات."
      },
      tracksTitle: "المسارات التدريبية الاحترافية المكثفة",
      tracks: [
        {
          name: "معهد تكنولوجيا المعلومات (ITI)",
          track: "مسار تطوير الويب C# / .NET & React",
          org: "وزارة الاتصالات وتكنولوجيا المعلومات (MCIT)",
          desc: "تدريب مكثف على مفاهيم لغة C#، البرمجة الكائنية، بناء واجهات ASP.NET Web APIs، قواعد البيانات، وتطوير الواجهات التفاعلية بـ React."
        },
        {
          name: "مبادرة رواد مصر الرقمية (DEPI)",
          track: "مسار تطوير الويب المتكامل Full Stack",
          org: "وزارة الاتصالات وتكنولوجيا المعلومات (MCIT)",
          desc: "مبادرة وطنية شاملة لتأهيل الكفاءات في هندسة الويب المتكاملة، أطر العمل الحديثة للواجهات الأمامية والخلفية، وإدارة المستودعات."
        },
        {
          name: "تدريب وزارة الاتصالات المتخصص (MCIT)",
          track: "تحليل البيانات، اختبار البرمجيات، وتحليل الأعمال",
          org: "وزارة الاتصالات وتكنولوجيا المعلومات",
          desc: "دراسة عملية لأسس ضمان جودة البرمجيات (Test Cases، تتبع الأخطاء)، تحليل الأعمال (وثيقة المتطلبات BRD)، وأدوات تحليل البيانات (Power BI, SPSS)."
        },
        {
          name: "تدريب الأمن السيبراني",
          track: "أساسيات اختبار الاختراق وأمان التطبيقات",
          org: "برنامج تدريبي متخصص",
          desc: "التعرف على أسس أمن المعلومات، الثغرات الشائعة لتطبيقات الويب (OWASP Top 10)، مبادئ البرمجة الآمنة، وحماية الشبكات."
        }
      ]
    },
    certifications: {
      badge: "الاعتمادات والشهادات",
      title: "الشهادات والبرامج التدريبية المعتمدة",
      subtitle: "شهادات ودورات تدريبية تم إنجازها بنجاح بالتعاون مع كبرى المؤسسات المصرفية والمالية والتكنولوجية.",
      items: [
        { name: "مبادرة رواد مصر الرقمية (DEPI)", issuer: "وزارة الاتصالات وتكنولوجيا المعلومات", category: "تطوير الويب المتكامل" },
        { name: "معهد تكنولوجيا المعلومات (ITI)", issuer: "معهد ITI - وزارة الاتصالات", category: "C# .NET & React" },
        { name: "التدريب المتخصص في تحليل البيانات واختبار النظم", issuer: "وزارة الاتصالات MCIT", category: "البيانات واختبار الجودة" },
        { name: "التدريب الميداني بالبنك التجاري الدولي (CIB)", issuer: "CIB مصر", category: "الأنظمة المصرفية والتكنولوجيا المالية" },
        { name: "البرنامج التدريبي لبنك مصر", issuer: "بنك مصر", category: "العمليات المصرفية والمالية" },
        { name: "التدريب التدريبي بالبورصة المصرية (EGX)", issuer: "البورصة المصرية", category: "الأسواق المالية ونظم التداول" }
      ]
    },
    contact: {
      badge: "تواصل معي",
      title: "لنبدأ العمل معاً",
      subtitle: "أنا مهتمة وجاهزة للالتحاق بفرص عمل كمطورة دوت نت وفول ستاك (Junior Full Stack .NET)، أو في مجالات اختبار البرمجيات (QA) وتحليل الأعمال (BA). يسعدني تواصلكم المباشر!",
      form: {
        nameLabel: "الاسم الكريم",
        namePlaceholder: "مثال: أحمد محمد",
        emailLabel: "البريد الإلكتروني",
        emailPlaceholder: "مثال: name@example.com",
        subjectLabel: "الموضوع",
        subjectPlaceholder: "مثال: فرصة عمل / مناقشة مشروع",
        messageLabel: "الرسالة",
        messagePlaceholder: "اكتب رسالتك بالتفصيل هنا...",
        submitBtn: "إرسال الرسالة",
        sending: "جاري الإرسال...",
        successTitle: "تم استلام رسالتك بنجاح!",
        successDesc: "شكراً لاهتمامك وتواصلك، ستقوم آية بالرد عليك في أقرب وقت ممكن."
      },
      directChannels: "قنوات الاتصال المباشرة",
      quickConnect: [
        { label: "البريد الإلكتروني", value: "ayahazem25@gmail.com", href: "mailto:ayahazem25@gmail.com" },
        { label: "الهاتف", value: "+20 01010413300", href: "tel:+2001010413300" },
        { label: "واتساب", value: "+20 101 041 3300", href: "https://wa.me/201010413300" },
        { label: "لينكد إن", value: "ayaa-hazem", href: "https://www.linkedin.com/in/ayaa-hazem-590901320" }
      ]
    },
    footer: {
      rights: "جميع الحقوق محفوظة.",
      developedWith: "تم التطوير باستخدام React و Tailwind CSS بشغف هندسة برمجيات .NET.",
      backToTop: "العودة للأعلى"
    }
  }
};
