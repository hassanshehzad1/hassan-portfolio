'use client';

import { ThemeProvider } from "./ThemeProvider";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
