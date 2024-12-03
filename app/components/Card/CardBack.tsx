import { CardBase } from "@/app/components/Card/CardCommon";
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
    <CardBase className={cardBackStyles}>
      <BackGridItem className={backItemFullWidth}>
        <BodySBold className={cardBackTextStyles}>
          Takes only {formatDuration({ minutes: Number(cookingTime) })}!
        </BodySBold>
      </BackGridItem>
      <BackGridItem>
        <DetailText className={cardBackTextStyles}>Average rating</DetailText>
        <BodySBold className={`${cardBackTextStyles} ${backTextLarge}`}>
          {averageRating} ⭐️
        </BodySBold>
      </BackGridItem>
      <BackGridItem>
        <DetailText className={cardBackTextStyles}>Spiciness</DetailText>

        <BodySBold className={`${cardBackTextStyles} ${backTextLarge}`}>
          {Array(chilli).fill("🌶️")}
        </BodySBold>
      </BackGridItem>
      <BackGridItem className={backItemFullWidth}>
        <DetailText className={cardBackTextStyles}>Top user review</DetailText>
        <BodySBold className={cardBackTextStyles}>"{topReview}"</BodySBold>
      </BackGridItem>
    </CardBase>
  );
};

const cardBackStyles = css`
  background-color: var(--colour-brand-green);

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);

  transform: rotateY(180deg);
`;

const BackGridItem = styled.div`
  padding: 16px 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 4px;
`;

const cardBackTextStyles = css`
  color: var(--colour-base-subtle);
  text-align: center;
`;

const backItemFullWidth = css`
  grid-column: span 2;
`;

const backTextLarge = css`
  font-size: 1.5rem;
`;
