import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
// import { cn } from "../@/lib/utils"
import { cn } from "../lib/utils";

// const inter = Inter({ subsets: ["latin"] });

// export const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "MaskGPT",
  description: "Disguise AI-generated text from AI content checkers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
