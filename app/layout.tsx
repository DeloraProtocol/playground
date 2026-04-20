import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import "@deloraprotocol/widget/styles.css";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Delora Widget Demo",
  description: "Simple Next.js page with the Delora widget and a light/dark theme switcher.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <title>Delora Playground</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
        />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
      </head>
      <body className={spaceGrotesk.variable}>{children}</body>
    </html>
  );
}
