export async function GET() {
  const data = {
    id: 1,
    name: "John Doe",
    // job: "Software Engineer",
    job: {
      id: 3,
      name: "Software Engineer",
    },
  };

  return Response.json({ data });
}
