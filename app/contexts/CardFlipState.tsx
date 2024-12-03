"use client";

import {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

export const CardFlipStateContext = createContext<{
  cardFlippedId: number | null;
  setCardFlippedId: Dispatch<SetStateAction<number | null>>;
  isDragging: boolean;
}>({ cardFlippedId: null, setCardFlippedId: () => {}, isDragging: false });

interface CardFlipStateProviderProps {
  children: ReactNode;
  isDragging: boolean;
}

export const CardFlipStateProvider = ({
  children,
  isDragging,
}: CardFlipStateProviderProps) => {
  const [cardFlippedId, setCardFlippedId] = useState<number | null>(null);

  useEffect(() => {
    if (isDragging) setCardFlippedId(null);
  }, [isDragging]);

  return (
    <CardFlipStateContext.Provider
      value={{ cardFlippedId, setCardFlippedId, isDragging }}
    >
      {children}
    </CardFlipStateContext.Provider>
  );
};
