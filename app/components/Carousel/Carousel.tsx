"use client";

import { getRecipes } from "@/app/actions/getRecipes";
import { Card } from "@/app/components/Card";
import { CardFlipStateProvider } from "@/app/contexts/CardFlipState";
import { FILTERS } from "@/app/shared";
import type { RecipeType } from "@/types/recipes";

import { styled } from "@pigment-css/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { motion, useInView } from "motion/react";
import Image from "next/image";

import { useEffect, useRef } from "react";

interface CarouselProps {
  initialData: RecipeType[];
}

const PAGE_SIZE = 10;

export const Carousel = ({ initialData }: CarouselProps) => {
  const containerRef = useRef(null);
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { root: containerRef });

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
    <CardFlipStateProvider>
      <Container ref={containerRef}>
        <Track
          drag="x"
          dragConstraints={{ right: 0 }}
          onDrag={(e) => e.stopPropagation()}
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
  place-content: center;

  width: 200px;

  img {
    display: block;
  }
`;
