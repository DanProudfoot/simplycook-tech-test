import type { RecipeQueryType } from "@/types/recipes";
import { useQuery } from "@tanstack/react-query";

export const useRecipes = () =>
	useQuery<RecipeQueryType>({
		queryKey: ["recipes"],
		queryFn: async () => {
			const response = await fetch(`${import.meta.env.VITE_API_BASE}/recipes`, {
				mode: "cors",
			});
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		},
	});
