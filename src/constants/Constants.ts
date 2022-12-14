import { ITechniquesLabelProps } from "components/techniquesLabel/TechniquesLabel";
import { IProjectProps } from "components/project/Project";
import THEME from "theme";

export enum Techniques {
  JAVASCRIPT = "JavaScript",
  TYPESCRIPT = "TypeScript",
  REACT = "React",
  REACT_NATIVE = "React Native",
}

export const projectLabels: { [key in Techniques]: ITechniquesLabelProps } = {
  [Techniques.JAVASCRIPT]: {
    label: Techniques.JAVASCRIPT,
    value: "1",
    themeColor: THEME.colors.red,
  },
  [Techniques.TYPESCRIPT]: {
    label: Techniques.TYPESCRIPT,
    value: "2",
    themeColor: THEME.colors.blue,
  },
  [Techniques.REACT]: {
    label: Techniques.REACT,
    value: "3",
    themeColor: THEME.colors.yellow,
  },
  [Techniques.REACT_NATIVE]: {
    label: Techniques.REACT_NATIVE,
    value: "4",
    themeColor: THEME.colors.green,
  },
};

export const HERO_IMG_URL =
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

export const PROJECT_IMG_URL_1 =
  "https://cdn5.vectorstock.com/i/1000x1000/73/49/404-error-page-not-found-miss-paper-with-white-vector-20577349.jpg";

export const projectKeys = Object.keys(projectLabels) as Techniques[];

export const projects: IProjectProps[] = [
  {
    imgUrl: PROJECT_IMG_URL_1,
    title: "Project 1",
    description:
      "Project 1 Desc: lfnesnjs enesk njfkesjnkj nfkjesnkjns ekj nfnsejk fnskjn nesjkn eskjn jknesjk",
    labelKeys: projectKeys,
  },
  {
    imgUrl: PROJECT_IMG_URL_1,
    title: "Project 2",
    description:
      "Project 2 Desc: lfnesnjs enesk njfkesjnkj nfkjesnkjns ekj nfnsejk fnskjn nesjkn eskjn jknesjk",
    labelKeys: projectKeys,
  },
  {
    imgUrl: PROJECT_IMG_URL_1,
    title: "Project 3",
    description:
      "Project 3 Desc: lfnesnjs enesk njfkesjnkj nfkjesnkjns ekj nfnsejk fnskjn nesjkn eskjn jknesjk",
    labelKeys: projectKeys,
  },
  {
    imgUrl: PROJECT_IMG_URL_1,
    title: "Project 4",
    description:
      "Project 4 Desc: lfnesnjs enesk njfkesjnkj nfkjesnkjns ekj nfnsejk fnskjn nesjkn eskjn jknesjk",
    labelKeys: projectKeys,
  },
  {
    imgUrl: PROJECT_IMG_URL_1,
    title: "Project 5",
    description:
      "Project 5 Desc: lfnesnjs enesk njfkesjnkj nfkjesnkjns ekj nfnsejk fnskjn nesjkn eskjn jknesjk",
    labelKeys: projectKeys,
  },
  {
    imgUrl: PROJECT_IMG_URL_1,
    title: "Project 6",
    description:
      "Project 6 Desc: lfnesnjs enesk njfkesjnkj nfkjesnkjns ekj nfnsejk fnskjn nesjkn eskjn jknesjk",
    labelKeys: projectKeys,
  },
  {
    imgUrl: PROJECT_IMG_URL_1,
    title: "Project 7",
    description:
      "Project 7 Desc: lfnesnjs enesk njfkesjnkj nfkjesnkjns ekj nfnsejk fnskjn nesjkn eskjn jknesjk",
    labelKeys: projectKeys,
  },
  {
    imgUrl: PROJECT_IMG_URL_1,
    title: "Project 8",
    description:
      "Project 8 Desc: lfnesnjs enesk njfkesjnkj nfkjesnkjns ekj nfnsejk fnskjn nesjkn eskjn jknesjk",
    labelKeys: projectKeys,
  },
  {
    imgUrl: PROJECT_IMG_URL_1,
    title: "Project 9",
    description:
      "Project 9 Desc: lfnesnjs enesk njfkesjnkj nfkjesnkjns ekj nfnsejk fnskjn nesjkn eskjn jknesjk",
    labelKeys: projectKeys,
  },
];
