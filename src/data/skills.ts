import type { SkillGroup } from "./types";

export const proficiencyLabels: Record<string, string> = {
  strong: "Strong",
  "working-knowledge": "Working Knowledge",
  "academic-exposure": "Academic Exposure",
  "currently-learning": "Currently Learning",
  "currently-developing": "Currently Developing",
};

export const skillGroups: SkillGroup[] = [
  {
    id: "electrical",
    title: "Electrical Engineering",
    description:
      "Core power and machines training from university coursework and laboratory work.",
    skills: [
      { name: "Circuit analysis", proficiency: "strong" },
      { name: "Three-phase systems", proficiency: "working-knowledge" },
      { name: "Electrical machines", proficiency: "working-knowledge" },
      { name: "Power systems fundamentals", proficiency: "working-knowledge" },
      {
        name: "Electrical installation principles",
        proficiency: "academic-exposure",
      },
      { name: "Power electronics", proficiency: "working-knowledge" },
      { name: "Protection fundamentals", proficiency: "academic-exposure" },
      { name: "Renewable energy systems", proficiency: "working-knowledge" },
    ],
  },
  {
    id: "electronics",
    title: "Electronics",
    description:
      "Analog and digital circuit work, sensor interfacing and measurement.",
    skills: [
      { name: "Analog circuit design", proficiency: "working-knowledge" },
      { name: "Digital electronics", proficiency: "strong" },
      { name: "Sensor interfacing", proficiency: "strong" },
      { name: "Signal conditioning", proficiency: "working-knowledge" },
      { name: "Electronic troubleshooting", proficiency: "working-knowledge" },
      { name: "PCB design", proficiency: "currently-developing" },
      { name: "Oscilloscope use", proficiency: "working-knowledge" },
    ],
  },
  {
    id: "embedded",
    title: "Embedded Systems",
    description:
      "Microcontroller-based prototypes combining sensing, control and communication.",
    skills: [
      { name: "Arduino", proficiency: "strong" },
      { name: "ESP32", proficiency: "strong" },
      { name: "Microcontroller fundamentals", proficiency: "strong" },
      { name: "Embedded C/C++", proficiency: "working-knowledge" },
      { name: "Serial communication", proficiency: "working-knowledge" },
      { name: "MQTT / IoT protocols", proficiency: "working-knowledge" },
      { name: "Sensor integration", proficiency: "strong" },
    ],
  },
  {
    id: "control",
    title: "Control & Automation",
    description:
      "Feedback systems, motor control and instrumentation fundamentals.",
    skills: [
      { name: "Feedback systems", proficiency: "working-knowledge" },
      { name: "PID fundamentals", proficiency: "working-knowledge" },
      { name: "PLC concepts", proficiency: "academic-exposure" },
      { name: "Ladder logic", proficiency: "academic-exposure" },
      { name: "Motor control", proficiency: "working-knowledge" },
      { name: "Instrumentation", proficiency: "working-knowledge" },
    ],
  },
  {
    id: "software",
    title: "Engineering Software",
    description:
      "Tools used across coursework, laboratory work and project development.",
    skills: [
      { name: "MATLAB", proficiency: "working-knowledge" },
      { name: "Simulink", proficiency: "working-knowledge" },
      { name: "Proteus", proficiency: "working-knowledge" },
      { name: "LTspice", proficiency: "working-knowledge" },
      { name: "AutoCAD Electrical", proficiency: "academic-exposure" },
      { name: "KiCad", proficiency: "currently-learning" },
      { name: "Arduino IDE", proficiency: "strong" },
      { name: "TIA Portal", proficiency: "academic-exposure" },
      { name: "ETAP", proficiency: "academic-exposure" },
    ],
  },
  {
    id: "programming",
    title: "Programming",
    description: "Languages used for firmware, analysis and scripting.",
    skills: [
      { name: "C", proficiency: "working-knowledge" },
      { name: "C++", proficiency: "working-knowledge" },
      { name: "Python", proficiency: "working-knowledge" },
      { name: "MATLAB", proficiency: "working-knowledge" },
      { name: "Git (basics)", proficiency: "working-knowledge" },
      { name: "Scripting (basics)", proficiency: "working-knowledge" },
    ],
  },
];

export const opportunityTypes = [
  "Graduate Electrical Engineer",
  "Graduate Trainee",
  "Junior Electrical Engineer",
  "Embedded Systems Engineer",
  "Automation Engineer",
  "Renewable Energy Engineer",
  "Technical Assistant",
  "Research Assistant",
  "Engineering Internship",
];
