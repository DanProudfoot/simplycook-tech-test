"use client";

import { BodySBold, DetailText } from "@/app/components/Text/Text";
import type { RecipeType } from "@/types/recipes";
import { css, styled } from "@pigment-css/react";
import Image from "next/image";

type CardFrontProps = Pick<RecipeType, "name" | "shortDescription" | "image">;

export const CardFront = ({
  image,
  name,
  shortDescription,
}: CardFrontProps) => {
  return (
    <CardBase>
      <CardImage draggable={false}>
        <Image src={image} alt="" width={390} height={262} />
      </CardImage>
      <div>
        <BodySBold>{name}</BodySBold>
        <DetailText>{shortDescription}</DetailText>
      </div>
    </CardBase>
  );
};

const CardBase = styled.div`
  background-color: var(--colour-base-subtle);
  padding: 8px;
  padding-bottom: 12px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  cursor: pointer;

  border-radius: 10px;

  backface-visibility: hidden;
  transform-style: preserve-3d;

  grid-area: 1 / 1;

  user-select: none;
`;

const CardImage = styled.div`
  img {
    border-radius: 5px;
    height: auto;
    object-fit: cover;

    user-select: none;
    pointer-events: none;
  }
`;
