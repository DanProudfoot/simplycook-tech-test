"use client";

import { CardFlipStateContext } from "@/app/contexts/CardFlipState";
import { styled } from "@pigment-css/react";
import { type Variants, motion } from "motion/react";
import { use } from "react";

interface CardFlipProps {
  children: React.ReactNode;
  id: number;
}

const variants: Variants = {
  initial: {
    scale: 1,
    boxShadow: "0px 0px 0px rgb(81 91 104 / 0.4)",
    rotateY: 0,
    zIndex: 1,
    transition: {
      type: "spring",
      duration: 0.6,
      filter: {
        type: "tween",
      },
    },
  },
  hover: {
    scale: 1.1,
    boxShadow: "1px 1px 10px rgb(81 91 104 / 0.4)",
    zIndex: 2,
    transition: {
      type: "spring",
      duration: 0.3,
      filter: {
        type: "tween",
      },
    },
  },
  flipped: {
    scale: 1.6,
    boxShadow: "2px 2px 20px rgb(81 91 104 / 0.4)",
    rotateY: 180,
    zIndex: 100,
    transition: {
      type: "spring",
      duration: 1,
      filter: {
        type: "tween",
      },
    },
  },
};

export const CardFlip = ({ children, id }: CardFlipProps) => {
  const { cardFlippedId, setCardFlippedId, isDragging } =
    use(CardFlipStateContext);

  const isSelected = cardFlippedId === id;

  return (
    <CardContainer
      variants={variants}
      initial="initial"
      whileHover={isSelected ? "flipped" : "hover"}
      animate={isSelected ? "flipped" : "initial"}
      onClick={() => {
        if (!isDragging) {
          setCardFlippedId((value) => {
            if (value === id) return null;
            return id;
          });
        }
      }}
    >
      {children}
    </CardContainer>
  );
};

const CardContainer = styled(motion.article)`
  display: grid;
  height: 100%;

  border-radius: 10px;

  transform-style: preserve-3d;
`;
