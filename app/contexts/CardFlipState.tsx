"use client";

import {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  createContext,
  useState,
} from "react";

export const CardFlipStateContext = createContext<{
  cardFlippedId: number | null;
  setCardFlippedId: Dispatch<SetStateAction<number | null>>;
}>({ cardFlippedId: null, setCardFlippedId: () => {} });

export const CardFlipStateProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [cardFlippedId, setCardFlippedId] = useState<number | null>(null);

  return (
    <CardFlipStateContext.Provider value={{ cardFlippedId, setCardFlippedId }}>
      {children}
    </CardFlipStateContext.Provider>
  );
};
