import { Card } from "@/app/components/Card";
import { Carousel } from "@/app/components/Carousel";
import type { RecipeType } from "@/types/recipes";

const FILTERS = ["Crustaceans", "Fish", "Eggs"];

export default async function Home() {
  const response = await fetch(`${process.env.API_BASE}/recipes`);
  const data: RecipeType[] = await response.json();

  // Filter out items where the allergen array contains at least one item in the FILTERS array
  const filteredByAllergen = data.filter(
    (item) => !item.allergens.some((allergen) => FILTERS.includes(allergen))
  );

  return (
    <Carousel>
      {filteredByAllergen.slice(0, 10).map((item) => (
        <Card recipe={item} key={item.id} />
      ))}
    </Carousel>
  );
}
