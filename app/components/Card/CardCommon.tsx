import { styled } from "@pigment-css/react";

export const CardBase = styled.div`
  cursor: pointer;

  border-radius: 10px;

  backface-visibility: hidden;
  transform-style: preserve-3d;

  grid-area: 1 / 1;

  user-select: none;
`;
