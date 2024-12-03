import { styled } from "@pigment-css/react";
import "@/app/styles/reset";
import "@/app/styles/global";

import Providers from "@/app/contexts/QueryProvider";
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
  return (
    <Providers>
      <CenteredLayout>{children}</CenteredLayout>
    </Providers>
  );
}

const CenteredLayout = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
`;
