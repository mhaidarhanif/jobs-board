// Notice the title case
export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;

  level?: string;
  salaryMin?: number;
  salaryMax?: number;
  experienceMin?: number;
  experienceMax?: number;
  jobType?: string;
  workplaceType?: string;
  description?: string;
  benefits?: string[];
};

export type PartialJob = Partial<Job>;

export type OmittedJob = Omit<Job, "id">;

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
    company: "🐾Allnimal",
    location: "🇮🇩Indonesia",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "🐻Bearmentor",
    location: "🇲🇾Malaysia",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "🐱Catamyst",
    location: "🇸🇬Singapore",
  },
];
