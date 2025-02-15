import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "mitti | IT Курсы",
  description: "Изучайте программирование с нами",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`font-normal antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
