import type { Certification, Achievement } from "./types";

/**
 * Content integrity policy (spec section 25): no fake certifications are
 * displayed. The array stays empty until real credentials are verified,
 * at which point cards render automatically from this data.
 */
export const certifications: Certification[] = [];

export const potentialCertificationCategories = [
  "Occupational safety",
  "Solar PV",
  "MATLAB",
  "PLC programming",
  "AutoCAD Electrical",
  "Python",
  "Embedded systems",
  "IoT",
  "Engineering ethics",
  "First aid",
];

export const achievements: Achievement[] = [];
