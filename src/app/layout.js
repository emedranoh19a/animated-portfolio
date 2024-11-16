import { Outfit } from 'next/font/google'
import "./globals.css"
const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: "Nick Brown",
  description: "Portfolio website",
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
