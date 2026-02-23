import { Space_Grotesk, Archivo } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-space" });
const archivo = Archivo({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-archivo" });

export const metadata = {
  title: "Gagan Baghel",
  description: "Freelance web developer and designer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${archivo.variable}`} suppressHydrationWarning>
      <body className="font-space bg-[#030303] text-zinc-100 antialiased selection:bg-zinc-800 selection:text-white">
        {children}
      </body>
    </html>
  );
}
