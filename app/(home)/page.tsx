import { getRecipes } from "@/app/actions/getRecipes";
import { Carousel } from "@/app/components/Carousel";
import { FILTERS } from "@/app/shared";

export default async function Home() {
  const initialData = await getRecipes(0, 10, FILTERS);

  return <Carousel initialData={initialData.data} />;
}
