import type { Education } from "./types";

export const education: Education = {
  institution: "Moi University",
  school: "School of Engineering",
  degree: "Bachelor of Engineering (B.Eng.) in Electrical & Electronics Engineering",
  location: "Eldoret, Kenya",
  startYear: 2021,
  endYear: 2026,
  graduationYear: 2026,
  classification: "First-Class Honours",
  classificationPlaceholder: true,
  coursework: [
    {
      category: "Power & Energy",
      modules: [
        "Electrical Machines",
        "Power Systems",
        "Power Electronics",
        "Renewable Energy",
        "Electrical Measurements",
      ],
    },
    {
      category: "Electronics & Embedded Systems",
      modules: [
        "Analog Electronics",
        "Digital Electronics",
        "Microprocessors",
        "Microcontrollers",
        "Embedded Systems",
        "Electronic Circuit Design",
      ],
    },
    {
      category: "Control & Automation",
      modules: [
        "Control Engineering",
        "Instrumentation",
        "Industrial Automation",
        "Electrical Drives",
      ],
    },
    {
      category: "Communications",
      modules: [
        "Signals & Systems",
        "Digital Signal Processing",
        "Communication Systems",
        "Electromagnetic Fields",
      ],
    },
    {
      category: "Engineering Foundations",
      modules: [
        "Engineering Mathematics",
        "Circuit Theory",
        "Numerical Methods",
        "Computer Programming",
        "Engineering Drawing",
        "Engineering Design",
        "Probability & Statistics",
        "Engineering Ethics",
      ],
    },
  ],
  highlights: [
    "Five-year engineering programme combining theory, laboratory work and supervised industrial training.",
    "Final-year project focused on IoT-based condition monitoring for distribution transformers.",
    "Consistent practical exposure across machines, electronics, control, instrumentation and embedded laboratories.",
  ],
};
