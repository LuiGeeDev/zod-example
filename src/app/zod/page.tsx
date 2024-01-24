import { z } from "zod";

export const dynamic = "force-dynamic";

const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  job: z.string(),
});

type User = z.infer<typeof UserSchema>;

export default async function Zod() {
  const { data }: { data: User } = await fetch("http://localhost:3003/api", {
    cache: "no-store",
  }).then((res) => res.json());
  const result = UserSchema.safeParse(data);
  console.log(result);
  let id = data.id;
  let job = data.job;

  // 시연용 코드, 무시
  if (typeof data.job === "object") {
    id = data.job.id;
    job = data.job.name;
  }

  return (
    <main className="px-4">
      <h1 className="text-2xl">Hello Zod</h1>
      <div className="py-2 px-4 border rounded w-[300px] mt-4">
        <h2>{data.name}</h2>
        <p>UserId: {id}</p>
        <p>Job: {job}</p>
      </div>
    </main>
  );
}
