import { Footer } from "@/components/Footer";
import Header from "./_components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
      >
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}