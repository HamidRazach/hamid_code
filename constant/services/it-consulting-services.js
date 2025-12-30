// IT_servicesbannerData
export const IT_servicesbannerData = {
  title:
    "IT Consulting Services",
  description:
    "We design strategies that align every tech investment with real business goals, turning complexity into opportunity. From digital transformation to infrastructure optimization, our consultants deliver end-to-end solutions that improve performance, enhance security, and modernize operations.",
  breadcrumb: [
    { text: "Home", link: "/" },
    { text: "Services", link: "service" },
    { text: "IT consulting Services" },
  ],
  button: [
      {
        text: "Request a Quote",
        link: "/contact",
      },
  ],
  form: {
    title: "Book a Free",
    titleHighlight: "Consultation",
    fields: [
      {
        type: "text",
        name: "name",
        placeholder: "Full Name",
        required: true,
      },
      {
        type: "email",
        name: "email",
        placeholder: "Email",
        required: true,
      },
      {
        type: "tel",
        name: "phone",
        placeholder: "Number",
        required: true,
      },
      {
        type: "textarea",
        name: "description",
        placeholder: "Describe Your Project Need.",
        required: true,
        rows: 4,
      },
    ],
    privacyText: "By submitting this form, you agree to our",
    privacyLink: "/privacy-policy",
    privacyLinkText: "Privacy Policy",
    submitButtonText: "Get In Touch",
  },
  featured: {
    title: "Featured In",
    logos: [
      {
        src: "/images/clients/web-client/inc-logo.webp",
        alt: "digitalmindson",
        width: 94,
        height: 34,
      },
      {
        src: "/images/clients/web-client/forbes-logo.webp",
        alt: "digitalmindson",
        width: 114,
        height: 34,
      },
      {
        src: "/images/clients/web-client/yec-logo.webp",
        alt: "digitalmindson",
        width: 64,
        height: 34,
      },
      {
        src: "/images/clients/web-client/entrepreneur-logo.webp",
        alt: "digitalmindson",
        width: 180,
        height: 34,
      },
      {
        src: "/images/clients/web-client/yahoo-logo.webp",
        alt: "digitalmindson",
        width: 115,
        height: 34,
      },
      {
        src: "/images/clients/web-client/cms-logo.webp",
        alt: "digitalmindson",
        width: 157,
        height: 31,
      },
    ],
  },
};

// IT_serviceschannelData
export const IT_serviceschannelData = {
  image: {
    src: "/images/it-consulting-services/it-1.png",
    alt: "it services",
    width: 1000,
    height: 1000,
  },
  heading: "Modernization",
  highlighted: "& Transformation",
  description: `Refresh legacy systems, streamline operations, and unlock scalable growth. We connect every technology change to clear business outcomes and measurable milestones. From platform upgrades to workflow redesign, delivery stays fast, disciplined, and low-risk.`,
  button: {
    text: "Free Consultation",
    link: "/contact",
  },
};

// IT_servicesExpertData
export const IT_servicesExpertData = {
  topContent: {
    small: "Our Solutions",
    heading: "Types oF",
    highlighted: "IT Consultants",
    description: "Our IT consulting services cover strategy, infrastructure, software, and security experts who provide tailored solutions to optimize technology, enhance performance, and drive digital transformation for sustainable business growth.",
  },
  services: [
    {
      icon: "/images/it-consulting-services/1.png",
      title: "Strategy IT Consultant",
      description:
        "A Strategy IT Consultant focuses on aligning technology with business goals. They assess your current systems, identify opportunities for improvement, and design long-term strategies that support scalability and innovation.",
    },
    {
      icon: "/images/it-consulting-services/2.png",
      title: "Infrastructure Consultant",
      description:
        "Infrastructure Consultants ensure that your IT foundation networks, servers, storage, and hardware run smoothly and efficiently. They design and implement secure, high-performance infrastructure that supports day-to-day operations and future expansion.",
    },
    {
      icon: "/images/it-consulting-services/3.png",
      title: "Systems Integration Consultant",
      description:
        "These consultants specialize in connecting various technologies, applications, and platforms. A Systems Integration Consultant ensures seamless data flow and compatibility across all your digital tools, minimizing downtime and maximizing productivity.",
    },
    {
      icon: "/images/it-consulting-services/4.png",
      title: "Security Consultant",
      description:
        "A Security Consultant protects your organization from threats by designing strong cybersecurity frameworks. They conduct risk assessments, implement protection protocols, and monitor vulnerabilities to ensure business continuity and compliance.",
    },
    {
      icon: "/images/it-consulting-services/5.png",
      title: "Cloud & Infrastructure Consultant",
      description:
        "Cloud Consultants guide businesses in migrating to, managing, and optimizing cloud platforms. They help you choose the right cloud environment, streamline costs, and enhance accessibility without compromising data security.",
    },
     {
      icon: "/images/it-consulting-services/6.png",
      title: "Software Implementation Consultant",
      description:
        "A Software Implementation Consultant ensures that new systems and tools integrate successfully into your existing environment. They manage deployment, training, and troubleshooting to guarantee smooth transitions and user adoption.",
    },
  ],
};

// IT_servicesWhyChooseData
export const IT_servicesWhyChooseData = {
  heading: {
    title: "IT Support",
    highlight: "Consultant",
    description:
      "By proactively managing IT systems, they help businesses maintain optimal performance, reduce downtime, and enhance productivity. Additionally, IT Support Consultants often guide employees in using technology effectively, improving overall workflow efficiency.",
  },
  content: {
    title: "Reliable IT",
    highlight: "Support Consulting",
    description:
      "An IT Support Consultant provides day-to-day technical assistance, system maintenance, and performance monitoring. Their goal is to minimize downtime, resolve technical issues quickly, and keep operations running efficiently.",
    list: [
      "Technical Assistance",
      "System Maintenance",
      "Performance Monitoring",
      "Downtime Reduction",
    ],
    image: {
      src: "/images/it-consulting-services/it-2.png",
      alt: "it services",
      width: 1000,
      height: 1001,
    },
  },
};

// IT_servicesWebsiteData
export const IT_servicesWebsiteData = {
  image: {
    src: "/images/it-consulting-services/it-3.png",
    alt: "it services",
    width: 589,
    height: 680,
  },
  content: {
    title: "Principal",
    highlight: "IT Consultant",
    description:
      "The Principal IT Consultant serves as a senior advisor and project leader, overseeing complex technical initiatives. They combine strategic planning with hands-on experience to deliver successful, large-scale technology transformations.",
    list: [
      "Strategic Planning",
      "Project Leadership",
      "Technical Expertise",
      "Technology Transformation",
    ],
  },
};

// IT_servicesProductsData
export const IT_servicesProductsData = {
  sectionClass: "product_sec",
  small: "IT Project Oversight",
  heading: "IT Project",
  highlighted: "Management",
  afterHighlight: "Consultant",
  description:
    "An IT Project Management Consultant ensures every project stays on track, on time, and within budget. They coordinate teams, manage timelines, and oversee quality assurance from start to finish.",
  button: {
    text: "Free Consultation",
    link: "/contact",
  },
  image: {
    src: "/images/it-consulting-services/it-4.png",
    alt: "it services",
    width: 1136,
    height: 980,
  },
};

// IT_servicesBrandData
export const IT_servicesBrandData = {
  small: "IT consulting company",
  heading: "Key Roles of an",
  highlighted: "IT Consultant",
  description:
    "IT Consultants analyze business needs, design technology solutions, and implement systems that enhance efficiency. They provide expert guidance, ensure security, and align IT strategies with organizational goals for sustainable growth.",
  items: [
    {
      title: "Strategy & Transformation Lead",
      text: "Guides the organization’s technology direction, linking business goals with clear roadmaps. This role assesses current capabilities, prioritizes initiatives, and shapes a scalable plan for growth through IT strategy consulting and executive alignment.",
    },
    {
      title: "Solutions Architect",
      text: "Designs end-to-end solutions that fit your operations, budget, and timeline. From system integration to platform selection, this role ensures every component works together seamlessly and securely, exactly what a leading IT consulting firm delivers.",
    },
      {
      title: "Project Delivery Manager",
      text: "Owns execution. Plans the work, manages resources, tracks risks, and keeps projects on time and on budget. As part of a trusted IT consulting company, this role turns complex requirements into reliable outcomes.",
    },
    {
      title: "Security & Risk Advisor",
      text: "Builds resilient defenses and compliance practices. Conducts risk assessments, implements controls, and leads response planning, helping your business stay protected while meeting regulatory expectations with expert IT consulting services.",
    },
    {
      title: "Cloud & Infrastructure Lead",
      text: "Optimizes networks, servers, and cloud environments for performance and cost. This role manages migrations, scaling, and reliability so your core systems stay fast, stable, and ready for growth core to modern IT consultancy services.",
    },
    {
      title: "Support & Service Manager",
      text: " Keeps day-to-day operations running smoothly. Coordinates the IT support consultant team, sets SLAs, and drives continual improvement so users get quick resolutions and your technology delivers consistent value.",
    },
  ],
};

// IT_servicesCraftData
export const IT_servicesCraftData = {
  heading: "Why choose Moja for",
  highlighted: "IT Consulting",
  paragraphs: [
    "We combine senior consulting experience with hands-on delivery. You get pragmatic guidance, clear communication, and solutions your teams can run confidently after go-live. Our approach is transparent, vendor-neutral, and focused on long-term value.",
    "Technology should simplify, strengthen, and scale your business. As a trusted IT consulting partner, we align your technology investments with clear commercial goals—so every project improves performance, lowers risk, and moves you forward.",
  ],
  button: {
    text: "Free Consultation",
    link: "/contact",
  },
};

// IT_servicesRewriteData 
export const IT_servicesRewriteData = {
  smallText: "Why Choose",
  heading: "Strategy-led technology that",
  highlighted: "delivers results",
  image: {
    src: "/images/it-consulting-services/it-5.png",
    alt: "it services",
    width: 1184,
    height: 764,
  },
  items: [
    {
      title: "Outcome-Driven Strategies & Measurable KPIs",
      description:
        "We design clear, results-oriented roadmaps that align technology initiatives with your business objectives, ensuring measurable impact and sustainable growth.",
    },
    {
      title: "Secure, Scalable Platforms & Seamless Integrations",
      description:
        "Our solutions are built for performance, security, and flexibility, empowering your organization to scale efficiently while maintaining complete data integrity.",
    },
    {
      title: "Accelerated Execution with Strategic Governance",
      description:
        "We combine speed with structure, ensuring disciplined project management, risk control, and timely delivery—turning strategy into tangible success.",
    },
  ],
};

// woocomerenceTestimonialData
export const woocomerenceTestimonialData = {
  smallHeading: "Testimonials",
  heading: (
    <>
      Hear <span>From Our</span> Esteemed Clients
    </>
  ),
  clutchImg: {
    src: "/images/Shopify_services/cl.webp",
    alt: "clutch",
    link: "#",
  },
  testimonials: [
    {
      id: 1,
      name: "Tobias McDonald",
      company: "GMB",
      text: "I worked with Digitalmindson few months back. I needed a website on urgent basis. I know it takes a lot of time to create a website and make it live. But these guys did it within two weeks. From content creation to the final launch, there were hardly any glitches. I would recommend them to anyone looking for a website!",
      img: "/images/Shopify_services/profile/test_1.webp",
    },
    {
      id: 2,
      name: "Tom Richards",
      company: "Bark",
      text: "We needed a reliable app partner, and Digitalmindson exceeded every expectation. Our enterprise app runs smoothly, and their support team is always ready to help. They’re now our go-to for all development needs.",
      img: "/images/Shopify_services/profile/test_2.webp",
    },
    {
      id: 3,
      name: "Roger Smith",
      company: "GMB",
      text: "We came to Digitalmindson with nothing but an idea and some rough sketches. I was worried about communicating the ‘vibe’ of our brand, but they got it right away. Throughout the project, they were super organized, kept us updated with regular check-ins, and were happy to incorporate our feedback.",
      img: "/images/Shopify_services/profile/test_3.webp",
    },
    {
      id: 4,
      name: "Albert James",
      company: "Bark",
      text: "Digitalmindson really impressed us with their AI/ML expertise! They took our ideas and turned them into something smarter than we imagined. The team was easy to communicate with, quick on updates, and delivered a solution that just works. If you’re looking for reliable app developers who know their AI game, they’re worth a call!",
      img: "/images/Shopify_services/profile/test_4.webp",
    },
    {
      id: 5,
      name: "William Harris",
      company: "Bark",
      text: "From the first meeting, Digitalmindson showed a commitment to understanding our vision and goals, taking the time to map out a roadmap for the app that aligned with our values and requirements. We look forward to future projects together!",
      img: "/images/Shopify_services/profile/test_5.webp",
    },
    {
      id: 6,
      name: "Jessica Gomez",
      company: "Bark",
      text: "From our initial call to the final product launch, the Digitalmindson team was outstanding. They built a custom social networking app that’s both scalable and visually stunning. We couldn’t be happier with the result!",
      img: "/images/Shopify_services/profile/test_6.webp",
    },
    {
      id: 7,
      name: "Sarah Thompson",
      company: "Bark",
      text: "Digitalmindson turned our concept into a powerful, user-friendly app that our customers love. Their team was incredibly responsive, and they delivered on time, even with tight deadlines. Can’t recommend them enough!",
      img: "/images/Shopify_services/profile/test_7.webp",
    },
    {
      id: 8,
      name: "Michael Lee",
      company: "Bark",
      text: "Working with Digitalmindson was a game-changer. They understood our need for a high-performance e-commerce app and delivered beyond our expectations. The quality and attention to detail are unmatched.",
      img: "/images/Shopify_services/profile/test_8.webp",
    },
  ],
};