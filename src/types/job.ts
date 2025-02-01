// Notice the title case
export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
};

// Notice the singular word, without "s"
export const exampleJob: Job = {
  id: 1,
  title: "Frontend Developer",
  company: "Bearmentor",
  location: "Remote",
};

// Notice the plural word, with "s" at the end
export const exampleJobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Bearmentor",
    location: "Remote",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Bearmentor",
    location: "Remote",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Bearmentor",
    location: "Remote",
  },
];
