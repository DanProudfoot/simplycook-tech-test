import { getRecipes } from "@/app/actions/getRecipes";
import { Carousel } from "@/app/components/Carousel";

const FILTERS = ["Crustaceans", "Fish", "Eggs"];

export default async function Home() {
  const initialData = await getRecipes(0, 10, FILTERS);

  return <Carousel initialData={initialData} />;
}
