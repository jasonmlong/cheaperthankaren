import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CheaperThanKaren - AI Email Automation for Executive Assistants",
  description:
    "AI-powered email automation that frees assistants from repetitive tasks so they can focus on strategic work that actually moves your business forward.",
  icons: {
    icon: "/favicon.ico", // Add this line
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}