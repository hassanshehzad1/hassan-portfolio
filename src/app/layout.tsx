import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutContent from "@/components/layout/LayoutContent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hassan Shehzad | Full Stack Software Engineer | Backend & AI/ML",
  description: "Professional portfolio of Hassan Shehzad, a Full Stack Software Engineer focused on backend development, scalable applications, SaaS, APIs, and emerging AI/ML technologies.",
  keywords: ["Full Stack Developer", "Backend Engineer", "Software Engineer", "MERN Stack", "Node.js", "Django", "Next.js", "React", "REST APIs", "SaaS", "PostgreSQL", "MongoDB", "AI/ML", "Machine Learning"],
  authors: [{ name: "Hassan Shehzad" }],
  openGraph: {
    title: "Hassan Shehzad | Full Stack Software Engineer | Backend & AI/ML",
    description: "Professional portfolio of Hassan Shehzad, a Full Stack Software Engineer focused on backend development, scalable applications, SaaS, APIs, and emerging AI/ML technologies.",
    url: "https://hassanshehzad.com",
    siteName: "Hassan Shehzad Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hassan Shehzad | Full Stack Software Engineer | Backend & AI/ML",
    description: "Professional portfolio of Hassan Shehzad, a Full Stack Software Engineer focused on backend development, scalable applications, SaaS, APIs, and emerging AI/ML technologies.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="min-h-screen bg-black text-white antialiased">
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
