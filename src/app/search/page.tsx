import { JobCards } from "@/components/job/job-cards";
import { searchJobs } from "@/modules/job";

interface SearchPageProps {
  searchParams: Promise<{ [key: string]: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const keyword = (await searchParams).keyword;
  const jobs = await searchJobs(keyword);

  return (
    <div>
      <h1>Search Result</h1>
      <JobCards jobs={jobs} />
    </div>
  );
}
