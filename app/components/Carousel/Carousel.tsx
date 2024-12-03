"use client";

import { CardFlipStateProvider } from "@/app/contexts/CardFlipState";

import { styled } from "@pigment-css/react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface CarouselProps {
  children: React.ReactNode;
}

export const Carousel = ({ children }: CarouselProps) => {
  const containerRef = useRef(null);
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { root: containerRef });

  console.log(isInView);

  return (
    <CardFlipStateProvider>
      <Container ref={containerRef}>
        <Track
          drag="x"
          dragConstraints={{ right: 0 }}
          onDrag={(e) => e.stopPropagation()}
        >
          {children}
          <div ref={inViewRef} />
        </Track>
      </Container>
    </CardFlipStateProvider>
  );
};

const Container = styled.div`
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
