import { getJob } from "@/modules/job";

interface JobIdPageProps {
  params: Promise<{ id: string }>;
}

export default async function JobIdPage({ params }: JobIdPageProps) {
  const id = Number((await params).id);
  const job = await getJob(id);

  return (
    <div>
      <h1>Job ID: {id}</h1>

      <p>{job.title}</p>
      <p>{job.company}</p>
    </div>
  );
}
