import { type Job } from "@/types/job";

export default async function HomePage() {
  const response = await fetch(`${process.env.API_URL}/jobs`);
  const jobs: Job[] = await response.json();

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
