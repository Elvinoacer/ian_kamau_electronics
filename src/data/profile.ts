import type { Profile, FocusArea } from "./types";

export const profile: Profile = {
  fullName: "Ian Kamau",
  shortName: "Ian",
  professionalTitle: "Graduate Electrical & Electronics Engineer",
  headline:
    "Electrical & Electronics Engineering Graduate focused on Embedded Systems, Power Systems & Industrial Automation",
  summary:
    "Moi University engineering graduate interested in practical electrical, embedded and automation systems.",
  about: [
    "I am an Electrical & Electronics Engineering graduate from Moi University with strong interest in embedded systems, electrical power, industrial automation and intelligent monitoring systems.",
    "My university training exposed me to electrical machines, analogue and digital electronics, instrumentation, control systems, telecommunications, microcontrollers, power systems and engineering mathematics. I enjoy projects where software, electronics and physical systems meet.",
    "I approach engineering by first understanding the problem and its constraints, then breaking it into measurable requirements, designing a practical solution, testing assumptions and improving the system through iteration.",
    "I am currently looking for an environment where I can learn from experienced engineers, work on real infrastructure and technical products, and steadily grow toward professional engineering responsibility.",
  ],
  location: "Kenya",
  availability:
    "Open to graduate engineering, trainee, research and technical opportunities in Kenya and beyond.",
  graduationYear: 2026,
  graduationYearPlaceholder: true,
  cvUrl: "/cv/Ian-Kamau-CV.pdf",
  links: [
    {
      platform: "linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/ian-kamau",
      placeholder: true,
    },
    {
      platform: "github",
      label: "GitHub",
      url: "https://github.com/iankamau",
      placeholder: true,
    },
    {
      platform: "email",
      label: "Email",
      url: "mailto:ian.kamau@example.com",
      placeholder: true,
    },
  ],
};

export const focusAreas: FocusArea[] = [
  {
    title: "Embedded Systems",
    description:
      "Building systems where sensors, electronics and software interact with the physical world.",
    keywords: ["ESP32", "Arduino", "Microcontrollers", "IoT"],
    interests: [
      "Microcontrollers",
      "ESP32 / Arduino",
      "Sensors",
      "Serial communication",
      "IoT",
      "Hardware/software integration",
      "Embedded C/C++",
    ],
  },
  {
    title: "Power & Energy Systems",
    description:
      "Understanding how electrical energy is generated, converted, distributed, monitored and used efficiently.",
    keywords: ["Power Systems", "Electrical Machines", "Renewable Energy"],
    interests: [
      "Electrical machines",
      "Distribution systems",
      "Renewable energy",
      "Energy monitoring",
      "Power electronics",
      "Electrical protection fundamentals",
    ],
  },
  {
    title: "Control & Automation",
    description:
      "Designing systems that can measure, decide and respond reliably.",
    keywords: ["Control Systems", "PLC", "Instrumentation"],
    interests: [
      "PLC fundamentals",
      "Process control",
      "Feedback systems",
      "PID control",
      "Motor control",
      "Instrumentation",
    ],
  },
  {
    title: "Electronics & Instrumentation",
    description:
      "Turning physical signals into measurable, useful engineering information.",
    keywords: ["Analog Circuits", "Digital Circuits", "Measurement"],
    interests: [
      "Analog circuits",
      "Digital circuits",
      "Signal conditioning",
      "Measurement",
      "Sensors",
      "PCB design",
      "Test equipment",
    ],
  },
];

export const philosophy =
  "Understand the system. Measure what matters. Design within constraints. Test assumptions. Document decisions. Improve through iteration.";

export const philosophyExpanded =
  "I believe engineering starts with correctly understanding the problem. A good solution must respect physical constraints, safety, reliability, cost and maintainability. I prefer to build from measurable requirements, test assumptions early and use evidence rather than intuition alone when evaluating results.";

export const leadership: string[] = [
  "Collaborated in a four-member engineering team to design and test an embedded energy-monitoring prototype. I focused on microcontroller integration, sensor testing and system debugging while coordinating interfaces with the power-measurement and dashboard components.",
  "During laboratory work, I frequently worked in small technical teams where clear role allocation, shared measurements and accurate documentation were necessary to complete experiments within limited lab time.",
];

export const references = [
  {
    name: "Dr. / Eng. [Name]",
    role: "[Role — Final-Year Project Supervisor]",
    organization: "[Department / Organization]",
    quote: "Verified testimonial will appear here.",
    contactAvailableOnRequest: true,
    verified: false,
  },
  {
    name: "Eng. [Name]",
    role: "[Role — Industrial Attachment Supervisor]",
    organization: "[Department / Organization]",
    quote: "Verified testimonial will appear here.",
    contactAvailableOnRequest: true,
    verified: false,
  },
];

export const interests = [
  "Embedded Systems",
  "Power Systems",
  "Industrial Automation",
  "Renewable Energy",
];

export const currentlyLearning = [
  {
    topic: "PLC Programming & Siemens TIA Portal",
    description:
      "Working through ladder logic, function blocks and basic HMI design to build a foundation for industrial automation work.",
    status: "In progress",
  },
  {
    topic: "PCB Design with KiCad",
    description:
      "Learning schematic capture, footprints, layout rules and basic design-for-manufacture considerations for two-layer boards.",
    status: "In progress",
  },
  {
    topic: "Solar PV System Design",
    description:
      "Studying system sizing, battery bank design, charge controllers and protection for small off-grid installations.",
    status: "In progress",
  },
  {
    topic: "Advanced ESP32 Development",
    description:
      "Exploring low-power modes, MQTT-based telemetry patterns, and OTA updates for more reliable IoT prototypes.",
    status: "In progress",
  },
  {
    topic: "Python for Engineering Analysis",
    description:
      "Using Python for sensor data processing, plotting and automating repetitive engineering calculations.",
    status: "In progress",
  },
  {
    topic: "Industrial Communication Protocols",
    description:
      "Learning Modbus, CAN and SCADA fundamentals to understand how industrial equipment exchanges data.",
    status: "Early stage",
  },
];

export const timeline = [
  {
    year: "2021",
    title: "Engineering Foundation",
    description:
      "Joined Moi University and began developing strong foundations in mathematics, physics, programming and circuit theory.",
  },
  {
    year: "2022",
    title: "Electronics & Electrical Systems",
    description:
      "Expanded into analog electronics, digital electronics, electrical machines and measurement.",
  },
  {
    year: "2023",
    title: "Embedded & Control Systems",
    description:
      "Worked with microcontrollers, control theory, sensors, instrumentation and engineering simulations.",
  },
  {
    year: "2024",
    title: "Applied Engineering Projects",
    description:
      "Started integrating electronics, software and electrical systems through practical academic projects.",
  },
  {
    year: "2025",
    title: "Industrial Attachment",
    description:
      "Gained supervised exposure to operational engineering environments and equipment.",
  },
  {
    year: "2026",
    title: "Final-Year Engineering Project",
    description:
      "Completed a major engineering project and prepared for graduate engineering roles.",
  },
];

export const labs = [
  {
    id: "electrical-machines",
    title: "Electrical Machines Laboratory",
    work: [
      "Induction motors",
      "DC machines",
      "Transformers",
      "Load testing",
      "Efficiency estimation",
      "Speed/torque relationships",
      "Three-phase measurements",
    ],
  },
  {
    id: "electronics",
    title: "Electronics Laboratory",
    work: [
      "Transistor circuits",
      "Operational amplifiers",
      "Rectifiers",
      "Filters",
      "Oscillators",
      "Digital logic",
      "Waveform analysis",
    ],
  },
  {
    id: "control-systems",
    title: "Control Systems Laboratory",
    work: [
      "System response",
      "Transfer functions",
      "PID behaviour",
      "Feedback",
      "Stability analysis",
      "MATLAB/Simulink simulation",
    ],
  },
  {
    id: "instrumentation",
    title: "Instrumentation Laboratory",
    work: [
      "Sensor calibration",
      "Measurement error",
      "Transducers",
      "Signal conditioning",
      "Data acquisition",
    ],
  },
  {
    id: "embedded-systems",
    title: "Embedded Systems Laboratory",
    work: [
      "Microcontroller programming",
      "GPIO",
      "ADC",
      "Timers",
      "UART",
      "I2C",
      "SPI",
      "Sensor integration",
    ],
  },
  {
    id: "power-systems",
    title: "Power Systems Laboratory",
    work: [
      "Transmission/distribution concepts",
      "Fault analysis",
      "Three-phase systems",
      "Protection fundamentals",
      "Load characteristics",
    ],
  },
];
