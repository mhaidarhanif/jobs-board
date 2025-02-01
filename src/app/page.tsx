import { getJobs } from "@/modules/job";

export const dynamicParams = true;

export default async function HomePage() {
  const jobs = await getJobs();

  return (
    <div>
      <h1>Jobs Board</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h2>{job.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
