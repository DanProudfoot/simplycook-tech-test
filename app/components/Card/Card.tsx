"use client";

import { CardBack } from "@/app/components/Card/CardBack";
import { CardFlip } from "@/app/components/Card/CardFlip";
import { CardFront } from "@/app/components/Card/CardFront";

import type { RecipeType } from "@/types/recipes";

interface CardProps {
  recipe: RecipeType;
}

export const Card = ({ recipe }: CardProps) => {
  return (
    <CardFlip id={recipe.id}>
      <CardFront
        image={recipe.image}
        name={recipe.name}
        shortDescription={recipe.shortDescription}
      />
      <CardBack
        averageRating={recipe.averageRating}
        chilli={recipe.chilli}
        cookingTime={recipe.cookingTime}
        topReview={recipe.topReview}
      />
    </CardFlip>
  );
};
