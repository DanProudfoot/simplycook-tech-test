"use client";

import { Card } from "@/app/components/Card";
import { CardFlipStateProvider } from "@/app/contexts/CardFlipState";
import type { RecipeType } from "@/types/recipes";

import { styled } from "@pigment-css/react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface CarouselProps {
  initialData: RecipeType[];
}

export const Carousel = ({ initialData }: CarouselProps) => {
  const containerRef = useRef(null);
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { root: containerRef });

  return (
    <CardFlipStateProvider>
      <Container ref={containerRef}>
        <Track
          drag="x"
          dragConstraints={{ right: 0 }}
          onDrag={(e) => e.stopPropagation()}
        >
          {initialData.map((recipe) => (
            <Card recipe={recipe} key={recipe.id} />
          ))}
          <div ref={inViewRef} />
        </Track>
      </Container>
    </CardFlipStateProvider>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 64px 32px;
  overflow-x: clip;
`;

const Track = styled(motion.div)`
  display: flex;
  gap: 6px;
  width: max-content;

  > * {
    max-width: 272px;
  }
`;
