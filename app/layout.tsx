import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "psfx",
  description: "pasifixc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-times">
        {children}
      </body>
    </html>
  );
}
