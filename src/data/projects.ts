import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "transformer-monitoring",
    title: "IoT-Based Distribution Transformer Health Monitoring System",
    subtitle:
      "Low-cost sensing and telemetry for early visibility of transformer operating conditions",
    type: "final-year-project",
    featured: true,
    year: 2026,
    duration: "5 months",
    role: "System Design, Embedded Development & Testing",
    teamSize: 2,
    categories: ["Embedded Systems", "Power", "IoT"],
    image: "/images/transformer.jpg",
    imageAlt: "Distribution transformer installed in an electrical substation",
    status: "Final-Year Engineering Project",
    statusPlaceholder: true,
    problem:
      "Traditional transformer inspection depends on periodic physical checks. In environments with many distributed assets, emerging faults — gradual overheating, abnormal loading or other developing operating conditions — may remain unnoticed between inspections.",
    objective:
      "Investigate whether low-cost sensing and telemetry can provide continuous visibility into selected transformer health indicators, and transmit that data to a remote dashboard for early warning of abnormal conditions.",
    solution:
      "A low-cost monitoring prototype that measures key transformer operating parameters (temperature, load current and input/output voltage where safe), applies threshold logic locally, and transmits measurements over Wi-Fi using MQTT to a dashboard that stores history and raises warnings when parameters move outside expected limits.",
    requirements: [
      "Measure transformer temperature.",
      "Measure load current.",
      "Measure input/output voltage where safe and appropriate.",
      "Detect abnormal threshold conditions.",
      "Transmit measurements remotely.",
      "Store and visualize historical readings.",
      "Generate a warning when parameters move outside expected limits.",
      "Evaluate measurement accuracy and communication reliability.",
    ],
    constraints: [
      "Student budget — commercial transformer monitors were outside scope.",
      "Mains sensing had to be done safely with proper isolation.",
      "Sensor accuracy limited by low-cost components.",
      "Wi-Fi coverage assumed available at the test site.",
      "Five-month timeline including design, build and testing.",
    ],
    hardware: [
      "ESP32 microcontroller",
      "Current transformer / Hall-effect current sensor",
      "Temperature sensor (DS18B20-class digital probe)",
      "Voltage sensing circuit with isolation",
      "Relay / protection interface",
      "Regulated power supply",
      "Test load bank",
      "Prototype enclosure",
    ],
    software: [
      "Embedded C/C++ (Arduino framework)",
      "MQTT client",
      "Python backend for ingestion & storage",
      "Lightweight web dashboard",
      "MATLAB for offline analysis",
    ],
    engineeringConcepts: [
      "Sensor calibration against reference instruments",
      "Signal conditioning and filtering",
      "Sampling strategy and transmission intervals",
      "Threshold logic for warnings",
      "Isolation and safe sensing practice",
      "Telemetry reliability and recovery",
    ],
    contribution: [
      "System architecture and block diagram design.",
      "ESP32 firmware development — sensing, sampling, threshold logic, MQTT transmission.",
      "Sensor calibration experiments against reference instruments.",
      "Dashboard data model and visualization design.",
      "Test programme design, execution and documentation.",
    ],
    designDecisions: [
      "ESP32 chosen over Arduino Uno for integrated Wi-Fi, dual-core processing and low cost.",
      "MQTT chosen over plain HTTP for lightweight publish/subscribe telemetry and lower bandwidth use.",
      "Digital temperature sensor chosen over thermistor for simpler calibration and noise immunity.",
      "Non-invasive current transformer chosen so load measurement does not interrupt the primary circuit.",
      "Threshold logic implemented on the device so warnings still trigger locally if the network drops.",
    ],
    testing: [
      "No-load test — baseline readings with no load connected.",
      "Increasing load test — behaviour under stepped load.",
      "Repeated measurement test — checking consistency across cycles.",
      "Communication interruption test — verifying recovery after Wi-Fi loss.",
      "Threshold alert test — confirming warnings trigger at set limits.",
      "Sensor comparison — prototype readings vs reference instruments.",
      "System restart recovery — checking state and telemetry resume after power loss.",
    ],
    results: [
      "Prototype provided continuous visibility of temperature, current and voltage on the test rig.",
      "Warnings triggered reliably when simulated conditions crossed configured thresholds.",
      "Telemetry recovered automatically after communication interruptions.",
      "Measurement error quantified against reference instruments (values pending final test data).",
    ],
    metrics: [
      {
        label: "Temperature measurement error",
        value: "±1.5°C",
        verified: false,
      },
      { label: "Current measurement error", value: "<5%", verified: false },
      { label: "Telemetry update interval", value: "5 s", verified: false },
      {
        label: "Successful packet delivery during test",
        value: "97%",
        verified: false,
      },
      { label: "Alert trigger latency", value: "<10 s", verified: false },
    ],
    challenges: [
      "Noise on current-sensor readings required filtering before usable RMS values could be computed.",
      "Early prototype lost telemetry after router restarts until an auto-reconnect routine was added.",
      "Voltage sensing first attempted without sufficient isolation — redesigned with proper isolation components before any mains-adjacent testing.",
      "Dashboard initially stored data in memory only; persistence added after restart data loss during testing.",
    ],
    iterations: [
      "v1 — basic single-sensor temperature logging over serial.",
      "v2 — added current sensing and MQTT transmission.",
      "v3 — added threshold logic, local warning LED and reconnect handling.",
      "v4 — persistent storage, dashboard history and alert log.",
    ],
    lessons: [
      "Monitoring is not only about collecting data — reliability requires calibration, safe sensing, signal conditioning, communication recovery, meaningful thresholds and clear interpretation of the measurements.",
      "Designing the test programme early made evaluation honest instead of anecdotal.",
      "Communication failures are a first-class engineering case, not an afterthought.",
    ],
    futureImprovements: [
      "GSM/LTE fallback for sites without Wi-Fi",
      "LoRa communication for long-range, low-bandwidth sites",
      "Vibration sensing",
      "Oil condition sensing",
      "Predictive maintenance models",
      "Industrial-grade enclosure",
      "Backup power for the monitoring node",
      "Utility-scale deployment architecture",
      "Improved electrical isolation",
      "Secure telemetry (TLS + device authentication)",
    ],
    verified: false,
  },
  {
    slug: "smart-energy-monitor",
    title: "Smart Energy Monitoring System",
    subtitle: "Real-time electricity consumption visibility for households and small facilities",
    type: "team",
    featured: true,
    year: 2024,
    duration: "3 months",
    role: "Embedded development, sensor testing & debugging",
    teamSize: 4,
    categories: ["Embedded Systems", "Energy"],
    image: "/images/energy-meter.jpg",
    imageAlt: "Digital electricity energy meter with live consumption readout",
    status: "Prototype",
    statusPlaceholder: true,
    problem:
      "Households and small facilities often lack detailed visibility into real-time electricity consumption — utility bills only arrive monthly, giving no feedback about which loads drive cost.",
    objective:
      "Develop a microcontroller-based energy monitor capable of measuring current, voltage and estimated power consumption, and displaying readings through a local or web dashboard.",
    solution:
      "An ESP32-based monitor samples voltage and current through sensing circuits, computes RMS values and estimated real power, and publishes readings over MQTT to a lightweight dashboard showing live values and daily consumption trends.",
    constraints: [
      "Low component budget.",
      "Sensing had to stay within safe microcontroller ADC ranges.",
      "No reference power analyser available — calibration used a clamp meter and known resistive loads.",
    ],
    hardware: [
      "ESP32",
      "Current sensor (Hall-effect / CT)",
      "Voltage sensor (step-down + conditioning)",
      "Power supply",
      "Breadboard prototype",
    ],
    software: ["C/C++ (Arduino framework)", "MQTT", "Dashboard", "MATLAB/Python for analysis"],
    engineeringConcepts: [
      "RMS measurement",
      "Sensor calibration",
      "ADC sampling",
      "Power calculation",
      "Serial debugging",
      "IoT communication",
    ],
    contribution: [
      "Microcontroller integration and firmware architecture.",
      "Sensor testing and calibration procedure.",
      "System debugging across sensing, firmware and dashboard interfaces.",
      "Coordinated interfaces with the power-measurement and dashboard components owned by teammates.",
    ],
    testing: [
      "Measured known resistive loads and compared computed power against manual V×I calculations.",
      "Logged 24-hour consumption profile of a student room to validate long-run stability.",
      "Compared current readings against a reference clamp meter at multiple load levels.",
    ],
    results: [
      "Prototype reported live current, voltage and estimated power within the calibrated range of the reference instruments.",
      "Dashboard trend made individual appliance loads identifiable.",
    ],
    metrics: [
      { label: "Voltage measurement error", value: "<3%", verified: false },
      { label: "Current measurement error", value: "<5%", verified: false },
      { label: "Sampling rate", value: "1 kHz", verified: false },
      { label: "Dashboard update interval", value: "2 s", verified: false },
    ],
    challenges: [
      "ADC clipping at high loads until the conditioning circuit was re-biased.",
      "Noise on the current channel produced unstable RMS readings until a filtering stage was added.",
    ],
    lessons: [
      "Calibration discipline matters more than sensor choice at prototype scale.",
      "Working across a four-member team required explicit interface agreements — sensing, firmware and dashboard could not be integrated otherwise.",
    ],
    futureImprovements: [
      "Proper energy-grade metering IC for accuracy",
      "PCB version replacing breadboard prototype",
      "Historical cost estimation from tariff data",
      "Multi-circuit monitoring",
    ],
    verified: false,
  },
  {
    slug: "solar-monitoring",
    title: "Solar PV Monitoring Prototype",
    subtitle: "Generation and battery status visibility for small off-grid solar systems",
    type: "academic",
    featured: true,
    year: 2024,
    duration: "2 months",
    role: "Design, build & measurement",
    teamSize: 2,
    categories: ["Renewable Energy", "Instrumentation"],
    image: "/images/solar.jpg",
    imageAlt: "Solar photovoltaic array during installation",
    status: "Academic Project",
    statusPlaceholder: true,
    problem:
      "Small solar systems often provide limited visibility into energy generation and battery status — users discover problems only when the system fails to deliver power.",
    objective:
      "Measure PV voltage/current, battery voltage and load consumption, and display system status so a small off-grid installation can be understood and maintained.",
    solution:
      "An ESP32 node measures panel and battery parameters, estimates battery state from voltage profiles, and pushes readings to a dashboard showing daily generation, peak output and consumption.",
    constraints: [
      "No commercial charge-controller telemetry available — monitoring added externally.",
      "Battery state-of-charge estimation limited to voltage-based heuristics (no coulomb counting).",
      "Outdoor enclosure challenges for the sensing node.",
    ],
    hardware: [
      "ESP32",
      "Voltage divider sensing (PV & battery)",
      "Shunt / Hall-effect current sensing",
      "12 V battery & small PV panel (test setup)",
    ],
    software: ["C/C++ (Arduino framework)", "ESP32 local dashboard", "Python data logging"],
    engineeringConcepts: [
      "Voltage sensing",
      "Current measurement",
      "Battery state estimation",
      "Daily energy integration",
      "Remote data collection",
    ],
    testing: [
      "Logged full-day generation profiles under clear and cloudy conditions.",
      "Compared integrated daily energy against manual multimeter spot-checks.",
      "Tracked battery voltage across charge/discharge cycles.",
    ],
    results: [
      "Daily energy generated, peak panel output, battery voltage profile and load energy usage were visualized on a single status page.",
      "Voltage-based battery estimation gave usable trend information even though absolute state-of-charge remained approximate.",
    ],
    metrics: [
      { label: "Daily energy logging resolution", value: "1 min", verified: false },
      { label: "Battery voltage accuracy", value: "±0.1 V", verified: false },
      { label: "Peak panel power captured", value: "78% of nameplate", verified: false },
    ],
    challenges: [
      "Voltage-based state-of-charge estimation drifted under load — documented as a limitation rather than hidden.",
      "Sensor node heating in the enclosure affected temperature-compensated readings midday.",
    ],
    lessons: [
      "Energy balance (generation vs consumption) is the most useful single view for a small off-grid system.",
      "Every estimate should be labelled with its method — users otherwise treat approximations as measurements.",
    ],
    futureImprovements: [
      "Coulomb counting for battery state",
      "MPPT charge controller integration",
      "LoRa link for remote sites",
      "Weather-normalized generation analysis",
    ],
    verified: false,
  },
  {
    slug: "motor-speed-control",
    title: "DC Motor Speed Control",
    subtitle: "PWM and closed-loop feedback control of a DC motor",
    type: "academic",
    featured: false,
    year: 2023,
    duration: "6 weeks",
    role: "Design, implementation & testing",
    teamSize: 2,
    categories: ["Control Systems", "Power Electronics"],
    image: "/images/motor.jpg",
    imageAlt: "Industrial DC motor coupled to a test bench",
    status: "Laboratory / Academic Project",
    statusPlaceholder: true,
    problem:
      "Open-loop motor speed varies with load — a control system is required to hold a commanded speed under changing mechanical load.",
    objective:
      "Design and test a motor speed control system using PWM drive and feedback, and characterize the control response.",
    solution:
      "A PWM H-bridge drive with an encoder/feedback measurement feeding a PI control loop implemented on a microcontroller, tuned experimentally to balance response speed against overshoot.",
    constraints: [
      "Laboratory time slots limited tuning iterations.",
      "Feedback sensor resolution limited very low-speed control quality.",
      "Drive stage had to be protected against back-EMF transients.",
    ],
    hardware: [
      "DC motor with encoder",
      "H-bridge motor driver (MOSFET)",
      "Microcontroller (Arduino-class)",
      "Bench power supply",
    ],
    software: ["C/C++ (Arduino framework)", "MATLAB/Simulink for modelling"],
    engineeringConcepts: [
      "PWM",
      "Motor characteristics",
      "Feedback",
      "Sensor measurement",
      "Control response",
      "Transient behaviour",
      "Efficiency",
    ],
    testing: [
      "Open-loop speed vs duty cycle characterization.",
      "Step-response tests for commanded speed changes.",
      "Load disturbance tests (braking resistance) at fixed command.",
      "Controller tuning notes recorded across gain settings.",
    ],
    results: [
      "Closed-loop control held speed under load disturbance where open-loop speed dropped measurably.",
      "Speed vs duty cycle curve and step-response behaviour documented as plots.",
    ],
    metrics: [
      { label: "Steady-state error (closed loop)", value: "<2%", verified: false },
      { label: "Step response settling", value: "<0.8 s", verified: false },
      { label: "PWM frequency", value: "20 kHz", verified: false },
    ],
    challenges: [
      "Initial gains caused oscillation; tuning required many lab sessions.",
      "Encoder noise at low speed caused integrator wind-up until the loop was clamped.",
    ],
    lessons: [
      "Simulation (MATLAB/Simulink) gave a good starting point, but real motor behaviour — friction, backlash, sensor noise — dominated final tuning.",
      "Documenting the tuning process made the result reproducible rather than lucky.",
    ],
    futureImprovements: [
      "Full PID with anti-windup structure",
      "Current-loop inner control",
      "Velocity + position cascade control",
    ],
    verified: false,
  },
  {
    slug: "environmental-monitoring",
    title: "Environmental Monitoring Node",
    subtitle: "Low-cost distributed sensing for indoor environmental conditions",
    type: "personal",
    featured: false,
    year: 2023,
    duration: "4 weeks",
    role: "Design & build",
    teamSize: 1,
    categories: ["IoT", "Embedded Systems"],
    image: "/images/esp32.jpg",
    imageAlt: "ESP32 microcontroller prototype wired on a breadboard",
    status: "Prototype",
    statusPlaceholder: true,
    problem:
      "Understanding room-level environmental conditions (temperature, humidity, light) over time requires either expensive logging equipment or manual spot measurements.",
    objective:
      "Demonstrate low-cost distributed sensing and remote data collection using commodity sensors and a microcontroller node.",
    solution:
      "A compact ESP32 node reads temperature, humidity and light sensors, sleeps between samples to conserve power, and publishes readings over MQTT to a shared dashboard — extensible to multiple nodes.",
    constraints: [
      "Very low budget — commodity sensors only.",
      "Battery operation desired, constraining sample rate and radio use.",
      "No calibration-grade reference instruments available.",
    ],
    hardware: [
      "ESP32",
      "DHT22 temperature/humidity sensor",
      "LDR-based light sensing circuit",
      "USB power / battery option",
    ],
    software: ["C/C++ (Arduino framework)", "MQTT", "Node-RED style dashboard"],
    engineeringConcepts: [
      "Sensor selection",
      "Calibration",
      "Sampling strategy",
      "Power consumption",
      "Communication",
      "Enclosure considerations",
    ],
    testing: [
      "Compared temperature readings against a room thermometer.",
      "Ran 48-hour continuous logging to observe day/night cycles.",
      "Measured average current draw awake vs sleep to estimate battery life.",
    ],
    results: [
      "Node logged stable multi-day environmental data with visible daily cycles.",
      "Sleep between readings cut average current draw dramatically versus always-on operation.",
    ],
    metrics: [
      { label: "Sample interval", value: "60 s", verified: false },
      { label: "Uptime on test battery", value: "72 h", verified: false },
      { label: "Sleep current (measured)", value: "~10 mA", verified: false },
    ],
    challenges: [
      "Light readings depended on sensor placement — LDR response is directional and not calibrated in lux.",
      "Early firmware lost readings when the broker restarted; buffering added before publish.",
    ],
    lessons: [
      "Power budgeting drives sampling design on battery-powered nodes.",
      "Cheap sensors are fine for trends and uncomfortable for absolute accuracy — state which you are delivering.",
    ],
    futureImprovements: [
      "Proper lux-calibrated light sensing",
      "Air-quality sensing (CO₂ / PM)",
      "Deep-sleep optimization",
      "LoRa for multi-building deployment",
    ],
    verified: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  previous: Project | undefined;
  next: Project | undefined;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    previous: index > 0 ? projects[index - 1] : undefined,
    next: index >= 0 && index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}
