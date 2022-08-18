import { Techniques } from "constants/Constants";
import { projectLabels } from "constants/Constants";

export const getTechniquesLabel = (projectName: Techniques) => {
  return projectLabels[projectName];
};
