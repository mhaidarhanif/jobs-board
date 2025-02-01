import { Job } from "@/types/job";

// Read all
export async function getJobs() {
  const response = await fetch(`${process.env.API_URL}/jobs`);
  return (await response.json()) as Job[];
}

// Read one
export async function getJob(id: number) {
  const response = await fetch(`${process.env.API_URL}/jobs/${id}`);
  return (await response.json()) as Job;
}

// Create
export async function createJob(jobData: Omit<Job, "id">) {
  const response = await fetch(`${process.env.API_URL}/jobs`, {
    method: "POST",
    body: JSON.stringify(jobData),
  });
  return (await response.json()) as { id: number };
}

// Update
export async function updateJob(id: number, jobData: Partial<Job>) {
  const response = await fetch(`${process.env.API_URL}/jobs/${id}`, {
    method: "PUT",
    body: JSON.stringify(jobData),
  });
  return (await response.json()) as { id: number };
}

// Delete
export async function deleteJob(id: number) {
  await fetch(`${process.env.API_URL}/jobs/${id}`, {
    method: "DELETE",
  });
}

// Search
export async function searchJobs(keyword: string) {
  const response = await fetch(
    `${process.env.API_URL}/jobs?title_like=${keyword}`
  );
  return (await response.json()) as Job[];
}
