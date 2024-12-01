export default async function Home() {
  const response = await fetch(`${process.env.API_BASE}/recipes`);
  const data = await response.json();

  console.log(data);
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
