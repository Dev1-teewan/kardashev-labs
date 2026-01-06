import type React from "react"
import type { Metadata } from "next"
import { Inter_Tight, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  title: "Kardashev Labs | Building Tier-1 Intelligence for On-Chain Systems",
  description:
    "Autonomous agents, capital-efficient strategies, and coordination infrastructure for the Web3 frontier.",
  generator: "Kardashev Labs",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${interTight.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
