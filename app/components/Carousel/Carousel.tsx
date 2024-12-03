"use client";

import { getRecipes } from "@/app/actions/getRecipes";
import { Card } from "@/app/components/Card";
import { CardFlipStateProvider } from "@/app/contexts/CardFlipState";
import { FILTERS } from "@/app/shared";
import type { RecipeType } from "@/types/recipes";

import { styled } from "@pigment-css/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useMeasure } from "@uidotdev/usehooks";
import { motion, useInView } from "motion/react";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";

interface CarouselProps {
  initialData: RecipeType[];
}

const PAGE_SIZE = 10;

export const Carousel = ({ initialData }: CarouselProps) => {
  const containerRef = useRef(null);
  const inViewRef = useRef(null);
  const [trackRef, { width }] = useMeasure();

  const isInView = useInView(inViewRef, { root: containerRef });

  const [isDragging, setIsDragging] = useState(false);

  const { data, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["recipes"],
    queryFn: ({ pageParam = 0 }) =>
      getRecipes(pageParam * PAGE_SIZE, PAGE_SIZE, FILTERS),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.page + 1,
    initialData: {
      pageParams: [0],
      pages: [{ page: 0, data: initialData }],
    },
  });

  useEffect(() => {
    if (isInView) {
      fetchNextPage();
    }
  }, [isInView, fetchNextPage]);

  const pages = data.pages.flatMap((item) => item.data);

  return (
    <CardFlipStateProvider isDragging={isDragging}>
      <Container ref={containerRef}>
        <Track
          ref={trackRef}
          drag="x"
          dragConstraints={{ right: 0, left: (width ?? 0) * -1 }}
          onDrag={() => {
            setIsDragging(true);
          }}
          onDragEnd={() => {
            setIsDragging(false);
          }}
        >
          {pages.map((recipe) => (
            <Card recipe={recipe} key={recipe.id} />
          ))}
          <div ref={inViewRef} />
          {isFetchingNextPage && (
            <Loading>
              <Image
                alt=""
                src="/bouncing-circles.svg"
                width={80}
                height={80}
              />
            </Loading>
          )}
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

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;

  img {
    display: block;
  }
`;
