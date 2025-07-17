import "./globals.css"
import { Outfit, Playfair_Display, Poppins } from "next/font/google"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata = {
  title: "Brand Appeal - Aesthetic Marketing Agency",
  description: "Elevated marketing solutions for aesthetic professionals. Strategic expertise with relational warmth.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable} ${poppins.variable}`}>
      <body className="font-poppins">{children}</body>
    </html>
  )
}
