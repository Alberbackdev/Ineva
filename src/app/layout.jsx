import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Ineva",
  description: "OpenAI Indicator Evaluation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
