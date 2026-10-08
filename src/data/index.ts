import { profile, focusAreas, philosophy, philosophyExpanded, leadership, references, interests, currentlyLearning, timeline, labs } from "./profile";
import { skillGroups, opportunityTypes, proficiencyLabels } from "./skills";
import { education } from "./education";
import { experience } from "./experience";
import { projects, getProjectBySlug, getAdjacentProjects } from "./projects";
import { certifications, achievements } from "./certifications";
import type { PortfolioData } from "./types";

export const portfolio: PortfolioData = {
  profile,
  education,
  focusAreas,
  skills: skillGroups,
  experience,
  projects,
  certifications,
  achievements,
  interests,
  currentlyLearning,
  philosophy,
  philosophyExpanded,
  leadership,
  references,
  timeline,
  labs,
  seo: {
    title: "Ian Kamau | Electrical & Electronics Engineer",
    description:
      "Moi University Electrical & Electronics Engineering graduate focused on embedded systems, power systems and industrial automation.",
    keywords: [
      "Electrical Engineer Kenya",
      "Moi University Engineer",
      "Graduate Electrical Engineer",
      "Embedded Systems Kenya",
    ],
  },
};

export { profile, focusAreas, philosophy, philosophyExpanded, leadership, references, interests, currentlyLearning, timeline, labs, skillGroups, opportunityTypes, proficiencyLabels, education, experience, projects, getProjectBySlug, getAdjacentProjects, certifications, achievements };
