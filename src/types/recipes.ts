export interface RecipeQueryType {
	id: number;
	name: string;
	averageRating: string;
	cookingTime: string;
	image: string;
	admin: null;
	isShoppable: boolean;
	slug: Slug;
	description: string;
	isOrderable: number;
	shortDescription: string;
	numberOfRatings: number | string;
	numberOfRatingsRaw: number;
	chilli: number;
	preferences: Preference[];
	topRated: null;
	cheapEats: null;
	new: boolean;
	improved: boolean;
	imageTall: string;
	inStock: boolean;
	servings: number;
	cuisineType: string;
	vegan: boolean;
	vegetarian: boolean;
	lowCal: boolean;
	topReview: null | string;
	calories: number;
	fourPersonCalories: number | null;
	justAdd: JustAdd;
	mainIngredients: string[];
	allergens: Allergen[];
	childAllergens: unknown[];
	imageFormatGroup: ImageFormatGroup | null;
	imageTallFormatGroup: ImageFormatGroup | null;
	favouritedByCurrentCustomer: null;
	orderedByCurrentCustomer: null;
	customerReviewForRecipe: null;
	tag: Tag | null;
	numberOfTimesCookedByCustomer: number;
	lastCooked: null;
	boxRecipeId: null;
	toggleServings: null;
	toggleVegRegular: null;
	recipeId: null;
	enabled: number;
}

export enum Allergen {
	Celery = "Celery",
	CerealsContainingGluten = "Cereals containing gluten",
	Crustaceans = "Crustaceans",
	Eggs = "Eggs",
	Fish = "Fish",
	Milk = "Milk",
	Mustard = "Mustard",
	Soybeans = "Soybeans",
	Sulphites = "Sulphites",
}

export interface ImageFormatGroup {
	webp: string;
	jpg: string;
	png: string;
}

export interface JustAdd {
	twoPerson: TwoPerson;
	fourPerson?: FourPerson;
}

export interface FourPerson {
	regular: unknown[] | RegularClass;
	veg?: Veg;
}

export interface RegularClass {
	main: string[];
	suffix: Array<null | string>;
	optional?: string[];
	suffixOptional?: Array<null | string>;
	cupboard?: string[];
	suffixCupboard?: Array<null | string>;
}

export interface Veg {
	main: string[];
	suffix: Array<null | string>;
	optional: string[];
	suffixOptional: null[];
}

export interface TwoPerson {
	regular: RegularClass;
	veg?: RegularClass;
}

export enum Preference {
	FishFree = "FishFree",
	FishSeafood = "Fish & seafood",
	Healthy = "Healthy",
	MeatChicken = "Meat & Chicken",
	PorkFree = "PorkFree",
	Spicy = "Spicy",
	Vegan = "Vegan",
	Vegetarian = "Vegetarian",
}

export interface Slug {
	twoPerson: Person;
	fourPerson?: Person;
}

export interface Person {
	regular: string;
	veg?: string;
}

export interface Tag {
	name: string;
	slug: string;
	hexClr: string;
	iconUrl: string;
}
