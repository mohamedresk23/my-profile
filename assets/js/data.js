/*
 * All portfolio content lives here. Edit this file to update the site.
 * Every visible string exists in English (en) and Arabic (ar).
 * Leave a link empty ("") to hide it.
 */
window.PROFILE = {
  links: {
    email: "mohamedalshahat2025@gmail.com",
    phone: "+201227670995",
    phoneDisplay: "+20 122 767 0995",
    github: "https://github.com/mohamedresk23",
    linkedin: ""
  },

  // Used to compute "years building for the web" automatically.
  careerStart: "2023-05-01",

  en: {
    meta: {
      title: "Mohamed Al-Shahat — Frontend Tech Lead",
      description: "Frontend Tech Lead building e-commerce storefronts and web apps with React, Next.js, Twig and Liquid."
    },
    ui: {
      skip: "Skip to content",
      menu: "Open menu",
      closeMenu: "Close menu",
      langSwitch: "عربي",
      langLabel: "Switch to Arabic",
      themeLabel: "Toggle dark mode",
      close: "Dismiss",
      copy: "Copy email",
      copied: "Email copied to clipboard.",
      copyFail: "Couldn't copy. Select the address and copy it manually.",
      backToTop: "Back to top",
      present: "Current role",
      showing: (n) => `Showing ${n} project${n === 1 ? "" : "s"}`,
      demoData: "Demo data",
      addToCart: "Add to cart",
      cart: "Cart",
      cartItems: (n) => `${n} item${n === 1 ? "" : "s"} in cart`,
      previewLabel: "Storefront preview",
      replay: "Type this template",
      builtWith: "Built with HTML, CSS & vanilla JavaScript."
    },
    nav: [
      { id: "about", label: "About" },
      { id: "experience", label: "Experience" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "contact", label: "Contact" }
    ],
    hero: {
      eyebrow: "Frontend Tech Lead · React & Next.js",
      first: "Mohamed",
      last: "Al-Shahat",
      tagline: "I build e-commerce storefronts and web apps — and lead the frontend team that ships them.",
      ctaPrimary: "View projects",
      ctaSecondary: "Get in touch",
      location: "Mansoura, Egypt",
      languages: "Arabic · English"
    },
    stats: [
      { key: "years", suffix: "+", label: "years building for the web" },
      { value: 3, label: "e-commerce platforms — Salla, Zid & Shary" },
      { value: 9, label: "selected projects shipped" }
    ],
    demoProducts: [
      { name: "Linen Tote", price: "SAR 89" },
      { name: "Ceramic Mug", price: "SAR 45" },
      { name: "Desk Lamp", price: "SAR 160" }
    ],
    about: {
      kicker: "About",
      title: "Storefronts, dashboards, and the team behind them.",
      body: "Frontend developer and team lead with experience delivering e-commerce storefronts and web applications. I coordinate frontend teams, develop custom themes for Salla, Zid and Shary using Twig and Liquid, and build React and Next.js applications with API integrations. I care about responsive interfaces, maintainable code and effective team collaboration.",
      facts: [
        { icon: "pin", label: "Based in", value: "Mansoura, Egypt" },
        { icon: "cap", label: "Education", value: "B.Sc. studies, Statistics & Computer Science — Mansoura University (2018–2023)" },
        { icon: "globe", label: "Languages", value: "Arabic · English" },
        { icon: "store", label: "Focus", value: "E-commerce themes & React / Next.js apps" }
      ]
    },
    experience: {
      kicker: "Experience",
      title: "Where I've been building.",
      items: [
        {
          company: "AZZRK",
          role: "Frontend Tech Lead",
          period: "Dec 2023 — Present",
          current: true,
          points: [
            "Lead and follow up with the frontend team to deliver e-commerce projects on Salla, Zid and Shary, using Twig and Liquid template technologies.",
            "Coordinate development tasks, review implementation progress, and support the team in resolving frontend issues and meeting project requirements.",
            "Develop and oversee projects using React and Next.js, integrating frontend applications with backend APIs.",
            "Build and customize responsive e-commerce themes using JavaScript, Sass, Tailwind CSS and platform-specific templates."
          ],
          tags: ["Salla", "Zid", "Shary", "Twig", "Liquid", "React", "Next.js", "Tailwind CSS"]
        },
        {
          company: "ALFINTICH",
          role: "Frontend Development Intern",
          period: "May 2023 — Aug 2023",
          current: false,
          points: [
            "Developed features for desktop and mobile web interfaces using JavaScript and Vue.js.",
            "Connected frontend interfaces with backend systems and refined layouts for usability and performance."
          ],
          tags: ["Vue.js", "JavaScript", "REST APIs"]
        }
      ]
    },
    skills: {
      kicker: "Skills",
      title: "The toolkit.",
      groups: [
        { icon: "code", title: "Frontend", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Vue.js", "Pinia", "Vuex"] },
        { icon: "palette", title: "Styling & Templates", items: ["Tailwind CSS", "Bootstrap", "Sass", "Twig", "Liquid"] },
        { icon: "wrench", title: "Tools & Integration", items: ["Git", "GitHub", "Figma", "Adobe XD", "Firebase", "REST API integration"] },
        { icon: "users", title: "Professional", items: ["Team coordination", "Problem-solving", "Communication", "Time management"] }
      ]
    },
    projects: {
      kicker: "Projects",
      title: "Selected work.",
      filters: [
        { id: "all", label: "All" },
        { id: "react", label: "React" },
        { id: "next", label: "Next.js" },
        { id: "vue", label: "Vue.js" },
        { id: "html", label: "HTML / CSS" }
      ],
      items: [
        {
          id: "collect-s",
          featured: true,
          visual: "collect",
          cat: "react",
          name: "Collect-S",
          type: "Multi-vendor E-commerce",
          desc: "A multi-vendor e-commerce platform made of three products: a customer-facing store, a vendor dashboard for managing sellers' operations, and an admin dashboard for platform administration.",
          tags: ["React"],
          link: ""
        },
        {
          id: "madarek",
          featured: true,
          visual: "book",
          cat: "next",
          name: "Madarek for Reading",
          nameAlt: "مدارك للقراءة",
          type: "Children's Reading Platform",
          desc: "A children's reading platform that presents stories and books through a public website, supported by an admin dashboard for managing platform content.",
          tags: ["Next.js"],
          link: ""
        },
        {
          id: "basic-ecommerce",
          cat: "html",
          name: "Basic E-commerce",
          type: "Storefront",
          desc: "A responsive e-commerce frontend with a product-focused shopping interface.",
          tags: ["HTML", "CSS", "JavaScript"],
          link: ""
        },
        {
          id: "todo",
          cat: "vue",
          name: "ToDoApp",
          type: "Productivity",
          desc: "A task-management application to organize and track to-do items.",
          tags: ["Vue.js"],
          link: ""
        },
        {
          id: "landings",
          cat: "html",
          name: "Template-3 · Foly · Bondi",
          type: "Websites & landing pages",
          desc: "Responsive website and landing-page layouts built with reusable styling and mobile-friendly design.",
          tags: ["HTML", "CSS", "Bootstrap"],
          link: ""
        },
        {
          id: "practice",
          cat: "html",
          name: "SpecialDesing · Final Project",
          type: "Frontend practice",
          desc: "Responsive frontend projects focused on page layouts and interface interactions.",
          tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
          link: ""
        }
      ]
    },
    contact: {
      kicker: "Contact",
      title: "Have a storefront or web app in mind?",
      body: "I'm happy to talk about frontend roles, e-commerce themes and React or Next.js projects.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn"
    },
    footer: {
      name: "Mohamed Al-Shahat Abdul-Aziz"
    }
  },

  ar: {
    meta: {
      title: "محمد الشحات — قائد تقني للواجهات الأمامية",
      description: "قائد تقني للواجهات الأمامية يبني متاجر إلكترونية وتطبيقات ويب باستخدام React و Next.js و Twig و Liquid."
    },
    ui: {
      skip: "انتقل إلى المحتوى",
      menu: "افتح القائمة",
      closeMenu: "أغلق القائمة",
      langSwitch: "EN",
      langLabel: "Switch to English",
      themeLabel: "تبديل الوضع الداكن",
      close: "إغلاق",
      copy: "انسخ البريد الإلكتروني",
      copied: "تم نسخ البريد الإلكتروني.",
      copyFail: "تعذّر النسخ. حدّد العنوان وانسخه يدويًا.",
      backToTop: "العودة للأعلى",
      present: "الوظيفة الحالية",
      showing: (n) => (n === 1 ? "يُعرض مشروع واحد" : n === 2 ? "يُعرض مشروعان" : `يُعرض ${n} مشاريع`),
      demoData: "بيانات تجريبية",
      addToCart: "أضف للسلة",
      cart: "السلة",
      cartItems: (n) => `عدد المنتجات في السلة: ${n}`,
      previewLabel: "معاينة المتجر",
      replay: "اكتب هذا القالب",
      builtWith: "صُمّم باستخدام HTML و CSS و JavaScript."
    },
    nav: [
      { id: "about", label: "نبذة" },
      { id: "experience", label: "الخبرة" },
      { id: "skills", label: "المهارات" },
      { id: "projects", label: "المشاريع" },
      { id: "contact", label: "تواصل" }
    ],
    hero: {
      eyebrow: "قائد تقني للواجهات الأمامية · React و Next.js",
      first: "محمد",
      last: "الشحات",
      tagline: "أبني متاجر إلكترونية وتطبيقات ويب، وأقود فريق الواجهات الأمامية الذي يُطلقها.",
      ctaPrimary: "شاهد المشاريع",
      ctaSecondary: "تواصل معي",
      location: "المنصورة، مصر",
      languages: "العربية · الإنجليزية"
    },
    stats: [
      { key: "years", suffix: "+", label: "سنوات في بناء الويب" },
      { value: 3, label: "منصات تجارة إلكترونية: سلة وزد وشاري" },
      { value: 9, label: "مشاريع مختارة" }
    ],
    demoProducts: [
      { name: "حقيبة كتان", price: "89 ر.س" },
      { name: "كوب سيراميك", price: "45 ر.س" },
      { name: "مصباح مكتب", price: "160 ر.س" }
    ],
    about: {
      kicker: "نبذة",
      title: "متاجر، ولوحات تحكم، والفريق الذي يبنيها.",
      body: "مطوّر واجهات أمامية وقائد فريق، أسلّم متاجر إلكترونية وتطبيقات ويب. أنسّق فرق الواجهات الأمامية، وأطوّر قوالب مخصّصة لمنصات سلة وزد وشاري باستخدام Twig و Liquid، وأبني تطبيقات React و Next.js مرتبطة بواجهات API. أهتم بالواجهات المتجاوبة، والكود القابل للصيانة، والتعاون الفعّال داخل الفريق.",
      facts: [
        { icon: "pin", label: "المقر", value: "المنصورة، مصر" },
        { icon: "cap", label: "التعليم", value: "دراسة بكالوريوس الإحصاء وعلوم الحاسب — كلية العلوم، جامعة المنصورة (2018–2023)" },
        { icon: "globe", label: "اللغات", value: "العربية · الإنجليزية" },
        { icon: "store", label: "التركيز", value: "قوالب المتاجر الإلكترونية وتطبيقات React و Next.js" }
      ]
    },
    experience: {
      kicker: "الخبرة",
      title: "أين عملت وماذا بنيت.",
      items: [
        {
          company: "AZZRK",
          role: "قائد تقني للواجهات الأمامية",
          period: "ديسمبر 2023 — حتى الآن",
          current: true,
          points: [
            "أقود فريق الواجهات الأمامية وأتابعه لتسليم مشاريع التجارة الإلكترونية على سلة وزد وشاري باستخدام تقنيات القوالب Twig و Liquid.",
            "أنسّق مهام التطوير، وأراجع تقدّم التنفيذ، وأدعم الفريق في حل مشكلات الواجهات وتحقيق متطلبات المشاريع.",
            "أطوّر مشاريع React و Next.js وأشرف عليها، وأربط تطبيقات الواجهة بواجهات API الخلفية.",
            "أبني قوالب متاجر متجاوبة وأخصّصها باستخدام JavaScript و Sass و Tailwind CSS وقوالب كل منصة."
          ],
          tags: ["سلة", "زد", "شاري", "Twig", "Liquid", "React", "Next.js", "Tailwind CSS"]
        },
        {
          company: "ALFINTICH",
          role: "متدرّب تطوير واجهات أمامية",
          period: "مايو 2023 — أغسطس 2023",
          current: false,
          points: [
            "طوّرت ميزات لواجهات الويب على سطح المكتب والجوال باستخدام JavaScript و Vue.js.",
            "ربطت الواجهات بالأنظمة الخلفية وحسّنت التخطيطات من حيث سهولة الاستخدام والأداء."
          ],
          tags: ["Vue.js", "JavaScript", "REST APIs"]
        }
      ]
    },
    skills: {
      kicker: "المهارات",
      title: "أدواتي.",
      groups: [
        { icon: "code", title: "الواجهات الأمامية", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Vue.js", "Pinia", "Vuex"] },
        { icon: "palette", title: "التنسيق والقوالب", items: ["Tailwind CSS", "Bootstrap", "Sass", "Twig", "Liquid"] },
        { icon: "wrench", title: "الأدوات والتكامل", items: ["Git", "GitHub", "Figma", "Adobe XD", "Firebase", "ربط REST API"] },
        { icon: "users", title: "مهارات مهنية", items: ["تنسيق الفريق", "حل المشكلات", "التواصل", "إدارة الوقت"] }
      ]
    },
    projects: {
      kicker: "المشاريع",
      title: "أعمال مختارة.",
      filters: [
        { id: "all", label: "الكل" },
        { id: "react", label: "React" },
        { id: "next", label: "Next.js" },
        { id: "vue", label: "Vue.js" },
        { id: "html", label: "HTML / CSS" }
      ],
      items: [
        {
          id: "collect-s",
          featured: true,
          visual: "collect",
          cat: "react",
          name: "Collect-S",
          type: "تجارة إلكترونية متعددة البائعين",
          desc: "منصة تجارة إلكترونية متعددة البائعين تتكوّن من ثلاثة منتجات: متجر للعملاء، ولوحة تحكم للبائعين لإدارة عملياتهم، ولوحة تحكم إدارية لإدارة المنصة.",
          tags: ["React"],
          link: ""
        },
        {
          id: "madarek",
          featured: true,
          visual: "book",
          cat: "next",
          name: "مدارك للقراءة",
          nameAlt: "Madarek for Reading",
          type: "منصة قراءة للأطفال",
          desc: "منصة قراءة للأطفال تعرض القصص والكتب عبر موقع عام، مدعومة بلوحة تحكم لإدارة محتوى المنصة.",
          tags: ["Next.js"],
          link: ""
        },
        {
          id: "basic-ecommerce",
          cat: "html",
          name: "Basic E-commerce",
          type: "واجهة متجر",
          desc: "واجهة متجر إلكتروني متجاوبة بتجربة تسوّق تركّز على المنتجات.",
          tags: ["HTML", "CSS", "JavaScript"],
          link: ""
        },
        {
          id: "todo",
          cat: "vue",
          name: "ToDoApp",
          type: "إدارة المهام",
          desc: "تطبيق لإدارة المهام يساعد على تنظيم قائمة المهام ومتابعتها.",
          tags: ["Vue.js"],
          link: ""
        },
        {
          id: "landings",
          cat: "html",
          name: "Template-3 · Foly · Bondi",
          type: "مواقع وصفحات هبوط",
          desc: "تصاميم مواقع وصفحات هبوط متجاوبة بأنماط قابلة لإعادة الاستخدام وتصميم ملائم للجوال.",
          tags: ["HTML", "CSS", "Bootstrap"],
          link: ""
        },
        {
          id: "practice",
          cat: "html",
          name: "SpecialDesing · Final Project",
          type: "مشاريع تدريبية",
          desc: "مشاريع واجهات متجاوبة تركّز على تخطيط الصفحات والتفاعلات.",
          tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
          link: ""
        }
      ]
    },
    contact: {
      kicker: "تواصل",
      title: "عندك فكرة متجر أو تطبيق ويب؟",
      body: "يسعدني الحديث عن وظائف الواجهات الأمامية، وقوالب المتاجر الإلكترونية، ومشاريع React و Next.js.",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "الهاتف",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn"
    },
    footer: {
      name: "محمد الشحات عبد العزيز"
    }
  }
};
