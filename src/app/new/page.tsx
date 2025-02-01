import { redirect } from "next/navigation";

import { createJob } from "@/modules/job";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function NewJobPage() {
  return (
    <div className="max-w-xs space-y-8">
      <h2 className="text-2xl">Create New Job Post</h2>

      <form action={addNewJob} className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="title">Job Title</Label>
          <Input id="title" name="title" placeholder="Software Engineer" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="company">Company Name</Label>
          <Input id="company" name="company" placeholder="Bearmentor" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="location">Location</Label>
          <Input id="location" name="location" placeholder="Remote" />
        </div>
        <div>
          <Button type="submit">Submit Job Post</Button>
        </div>
      </form>
    </div>
  );
}

async function addNewJob(formData: FormData) {
  "use server";

  const jobData = {
    title: String(formData.get("title")) || "",
    company: String(formData.get("company")) || "",
    location: String(formData.get("location")) || "",
  };

  const newJob = await createJob(jobData);

  console.info({ newJob });

  redirect(`/`);
  // Ideally redirect to /jobs/:id but if using a mock REST API,
  // there will be no new data
}
