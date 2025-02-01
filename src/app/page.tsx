import { JobCards } from "@/components/job/job-cards";
import { getJobs } from "@/modules/job";

export const revalidate = 5;

export default async function HomePage() {
  const jobs = await getJobs();

  return <JobCards jobs={jobs} />;
}
