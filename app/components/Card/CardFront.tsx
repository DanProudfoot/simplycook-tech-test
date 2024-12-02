import { CardBase, CardImage } from "@/app/components/Card/CardCommon";
import { BodySBold, DetailText } from "@/app/components/Text/Text";
import type { RecipeType } from "@/types/recipes";
import { css } from "@pigment-css/react";
import Image from "next/image";

type CardFrontProps = Pick<RecipeType, "name" | "shortDescription" | "image">;

export const CardFront = ({
  image,
  name,
  shortDescription,
}: CardFrontProps) => {
  return (
    <CardBase className={cardFrontStyles}>
      <CardImage>
        <Image src={image} alt="" width={390} height={262} />
      </CardImage>
      <div>
        <BodySBold>{name}</BodySBold>
        <DetailText>{shortDescription}</DetailText>
      </div>
    </CardBase>
  );
};

const cardFrontStyles = css`
  background-color: var(--colour-base-subtle);
  padding: 8px;
  padding-bottom: 12px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;
