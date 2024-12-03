"use client";

import { BodySBold, DetailText } from "@/app/components/Text/Text";
import type { RecipeType } from "@/types/recipes";
import { css, styled } from "@pigment-css/react";
import { formatDuration } from "date-fns";

type CardBackProps = Pick<
  RecipeType,
  "cookingTime" | "averageRating" | "topReview" | "chilli"
>;

export const CardBack = ({
  cookingTime,
  averageRating,
  chilli,
  topReview,
}: CardBackProps) => {
  return (
    <CardWrapper>
      <BackGridItem sx={{ gridColumn: "1 / span 2" }}>
        <BodySBold
          sx={{ color: "var(--colour-base-subtle)", textAlign: "center" }}
        >
          Takes only {formatDuration({ minutes: Number(cookingTime) })}!
        </BodySBold>
      </BackGridItem>
      <BackGridItem>
        <DetailText
          sx={{ color: "var(--colour-base-subtle)", textAlign: "center" }}
        >
          Average rating
        </DetailText>
        <BodySBold
          sx={{
            color: "var(--colour-base-subtle)",
            textAlign: "center",
            fontSize: "1.3rem",
          }}
        >
          {averageRating} ⭐️
        </BodySBold>
      </BackGridItem>
      <BackGridItem>
        <DetailText
          sx={{ color: "var(--colour-base-subtle)", textAlign: "center" }}
        >
          Spiciness
        </DetailText>

        <BodySBold
          sx={{
            color: "var(--colour-base-subtle)",
            textAlign: "center",
            fontSize: "1.3rem",
          }}
        >
          {chilli > 0 ? Array(chilli).fill("🌶️") : "❄️"}
        </BodySBold>
      </BackGridItem>
      <BackGridItem sx={{ gridColumn: "1 / span 2" }}>
        <DetailText
          sx={{ color: "var(--colour-base-subtle)", textAlign: "center" }}
        >
          Top user review
        </DetailText>
        <BodySBold
          sx={{ color: "var(--colour-base-subtle)", textAlign: "center" }}
        >
          "{topReview}"
        </BodySBold>
      </BackGridItem>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  background-color: var(--colour-brand-green);

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);

  transform: rotateY(180deg);

  cursor: pointer;

  border-radius: 10px;

  backface-visibility: hidden;
  transform-style: preserve-3d;

  grid-area: 1 / 1;

  user-select: none;
`;

const BackGridItem = styled.div`
  padding: 16px 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 4px;
`;
