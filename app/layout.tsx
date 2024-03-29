import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import { cn } from "@/utils/cn";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Solana FE Intro",
  description: "Introduction to Solana frontend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          montserrat.className,
          process.env.NEXT_PUBLIC_DEBUG_SCREENS === "true"
            ? "debug-screens"
            : ""
        )}
      >
        <Suspense fallback={<p>nav loading...</p>}>
          <Navbar>{children}</Navbar>
        </Suspense>
      </body>
    </html>
  );
}
