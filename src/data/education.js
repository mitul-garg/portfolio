import { v4 as uuidv4 } from "uuid";

// keep the education you want as default to show up at the zeroth index
export const education = [
  {
    id: uuidv4(),
    title: "Computer Science and Engineering",
    degree: "BTech",
    institute: "SGSITS Indore",
    grades: "8.27 CGPA",
    dates: "2023",
  },
  {
    id: uuidv4(),
    title: "CBSE",
    degree: "Higher Secondary",
    institute: "The New Green Field Public School",
    grades: "86.6%",
    dates: "2019",
  },
  {
    id: uuidv4(),
    title: "ICSE",
    degree: "Senior Secondary",
    institute: "Little Wonders Convent School",
    grades: "93.3%",
    dates: "2017",
  },
];
