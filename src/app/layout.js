import Link from "next/link";
import { Balsamiq_Sans } from 'next/font/google'

import "./globals.css";
import { Button } from "@/_components/Button";


const font = Balsamiq_Sans({
  weight: ['400', '700'],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`my-10 mx-4 sm:mx-24 ${font.className}`}>
        <header className="flex justify-between mb-20" >
          <div className="flex gap-10">
            <Link className="font-bold text-2xl" href={"/"}>
              Mohamed
            </Link>
            <nav className="flex gap-12">
              <Link href={"/"}>
                Services
              </Link>
              <Link href={"/"}>
                Case studies
              </Link>
              <Link href={"/"}>
                About me
              </Link>
              <Link href={"/"}>
                Contact me
              </Link>
            </nav>

          </div>

          <Button variant={"secondary"} />
        </header>
        {children}
      </body>
    </html>
  );
}
