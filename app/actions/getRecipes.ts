"use server";

import type { RecipeType } from "@/types/recipes";

export const getRecipes = async (
	offset: number,
	limit: number,
	filters: string[],
) => {
	const response = await fetch(`${process.env.API_BASE}/recipes`);
	const data: RecipeType[] = await response.json();

	// Preferably the API end point would allow for filtering and cursor position,
	// but without API docs I don't know how to do that, so for now we'll emulate the
	// API response with code.
	const emulatedFiltering = data.filter(
		(item) => !item.allergens.some((allergen) => filters?.includes(allergen)),
	);
	const emulatedCursor = emulatedFiltering.slice(offset, offset + limit);

	return { data: emulatedCursor, page: offset / limit };
};
