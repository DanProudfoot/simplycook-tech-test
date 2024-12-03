"use client";

import { CardFlipStateProvider } from "@/app/contexts/CardFlipState";

import { styled } from "@pigment-css/react";

interface CarouselProps {
  children: React.ReactNode;
}

export const Carousel = ({ children }: CarouselProps) => {
  return (
    <CardFlipStateProvider>
      <Container>
        <Track>{children}</Track>
      </Container>
    </CardFlipStateProvider>
  );
};

const Container = styled.div`
  max-width: 1280px;
`;

const Track = styled.div`
  display: flex;
  gap: 22px;
  width: max-content;

  > * {
    max-width: 272px;
  }
`;
