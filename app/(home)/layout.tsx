import { styled } from "@pigment-css/react";
import "@/app/styles/reset";
import "@/app/styles/global";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simplycook Test",
  description: "A nice little carousel",
};

export default function CarouselLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CenteredLayout>{children}</CenteredLayout>;
}

const CenteredLayout = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
`;
